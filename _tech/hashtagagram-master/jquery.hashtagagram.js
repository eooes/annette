


(function($){
$.fn.hashtagagram = function(options){
	var defaults = {
		client_id:'f95511249c334347bb0d4f233676c036',
		thumb_dimension:150,
		success:ProcessData,
		load_cookie_result:LoadResultsFromCookie,
		tag_name: 'annetteitimtuktuk',
		count: 30,
		enable_cache: false,
		cache_duration: 1,
		cookie_name: 'CachedInstagramPhotos'
	};
	
	var access_token = "32001032.5b9e1e6.619a2bd583d44c49a4188244af0cf8af";
	var self = $(this);
	var options = $.extend(defaults,options);
	defaults.cookie_name = defaults.cookie_name+'_'+defaults.tag_name;

	var url = 'https://api.instagram.com/v1/tags/'+defaults.tag_name+'/media/recent?access_token='+access_token+'&count=35';
	
	var init = function(){
		LoadResults();
	};
	
	var LoadResults = function(){
		$.ajax({
			dataType:'jsonp',
			url:url,
			success:function(response){
				defaults.success(response);
			}
		});
	
	};
	function LoadResultsFromCookie(savedResponse){
		self.append(savedResponse);
	};
	function ProcessData(response){
		if(response != null){
			var ul = $('<ul/>');
			$(response.data).each(function(index,obj){
				if(index == defaults.count)
					return false;
				var link = $('<a/>'), image = $('<img/>'), li = $('<li/>');
				image.attr({'src': obj.images.thumbnail.url,'width':defaults.thumb_dimension,'height': defaults.thumb_dimension});
				link.attr('href',obj.link);
				image.appendTo(link);
				link.appendTo(li);
				ul.append(li);
			});
			
			self.append(ul);
			
			if(defaults.enable_cache){
				createCookie(defaults.cookie_name,self.html(),defaults.cache_duration);
			}
		}
	};

	init();
	
}})(jQuery);