
$(window).resize(function() {
  $('#Photos').width($(window).width()+150);
});

$(document).ready(function() {



    var config = {
            after: '0s',
            enter: 'bottom',
            move: '24px',
            over: '0.66s',
            easing: 'ease-in-out',
            viewportFactor: 0.33,
            reset: false,
            init: true
          };


        $('.fullscreen').height($(window).height());
        $('#Photos').width($(document).width()+150);

        // $('.slide').height($(window).height());
        // $('.slidex').height($(window).height()-58);
        //Get Sections top position
        function getTargetTop(elem){
            
            //gets the id of the section header
            //from the navigation's href e.g. ("#html")
            var id = elem.attr("href");

            //Height of the navigation
            var offset = 58;

            //Gets the distance from the top and 
            //subtracts the height of the nav.
            return $(id).offset().top - offset;
        }

        //Smooth scroll when user click link that starts with #
        $('a[href^="#"]').click(function(event) {
            
            //gets the distance from the top of the 
            //section refenced in the href.
            var target = getTargetTop($(this));


            //scrolls to that section.
            $('html, body').animate({scrollTop:target}, 500);

            //prevent the browser from jumping down to section.
            event.preventDefault();

        });

        //Pulling sections from main nav.
        var sections = $('a[href^="#"]');

        // Go through each section to see if it's at the top.
        // if it is add an active class
        function checkSectionSelected(scrolledTo){
            
            //How close the top has to be to the section.
            var threshold = 100;

            var i;

            for (i = 0; i < sections.length; i++) {
                
                //get next nav item
                var section = $(sections[i]);

                //get the distance from top
                var target = getTargetTop(section);
                
                //Check if section is at the top of the page.
                if (scrolledTo > target - threshold && scrolledTo < target + threshold) {

                    //remove all selected elements
                    sections.removeClass("active");

                    //add current selected element.
                    section.addClass("active");
                }

            };
        }


        //Check if page is already scrolled to a section.
        checkSectionSelected($(window).scrollTop());

        $(window).scroll(function(e){
            checkSectionSelected($(window).scrollTop())
        });



    });



$(function(){
    $('#Photos').hashtagagram();
});

/*! jquery.mousewheel Copyright 3.1.11 (c) 2013 Brandon Aaron (http://brandon.aaron.sh) Licensed under the MIT License.*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

// Foggy, v1.1.1
(function(e){e.fn.foggy=function(t){var n={opacity:.8,blurRadius:2,quality:16,cssFilterSupport:true};var r={opacity:1,blurRadius:0};var i;if(t==false){i=e.extend(n,r)}else{i=e.extend(n,t)}var s=function(e,t,n,r){this.content=e;this.position=t;this.offset=n;this.opacity=r};s.prototype.render=function(t){e("<div/>",{html:this.content,"class":"foggy-pass-"+this.position}).css({position:this.position,opacity:this.opacity,top:this.offset[0],left:this.offset[1]}).appendTo(t)};var o=function(e){this.radius=e};o.prototype.includes=function(e,t){if(Math.pow(e,2)+Math.pow(t,2)<=Math.pow(this.radius,2)){return true}else{return false}};o.prototype.points=function(){var e=[];for(var t=-this.radius;t<=this.radius;t++){for(var n=-this.radius;n<=this.radius;n++){if(this.includes(t,n)){e.push([t,n])}}}return e};var u=function(e,t){this.element=e;this.settings=t};u.prototype.calculateOffsets=function(t,n){var r=e.grep((new o(t)).points(),function(e){return e[0]!=0||e[1]!=0});var i;if(r.length<=n){i=r}else{var s=r.length-n;var u=[];for(var a=0;a<s;a++){u.push(Math.round(a*(r.length/s)))}i=e.grep(r,function(t,n){if(e.inArray(n,u)>=0){return false}else{return true}})}return i};u.prototype.getContent=function(){var t=e(this.element).find(".foggy-pass-relative")[0];if(t){return e(t).html()}else{return e(this.element).html()}};u.prototype.render=function(){var t=this.getContent();e(this.element).empty();var n=e("<div/>").css({position:"relative"});var r=this.calculateOffsets(this.settings.blurRadius*2,this.settings.quality);var i=this.settings.opacity*1.2/(r.length+1);(new s(t,"relative",[0,0],i)).render(n);e(r).each(function(e,r){(new s(t,"absolute",r,i)).render(n)});n.appendTo(this.element)};var a=function(e,t){this.element=e;this.settings=t};a.prototype.render=function(){var t=(""+i.opacity).slice(2,4);var n=this.settings.blurRadius;e(this.element).css({"-webkit-filter":"blur("+n+"px)",opacity:i.opacity})};return this.each(function(e,t){if(i.cssFilterSupport&&"-webkit-filter"in document.body.style){(new a(t,i)).render()}else{(new u(t,i)).render()}})}})(jQuery)

/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

function responsiveMobileMenu() {   
        $('.rmm').each(function() {
            
            
            
            $(this).children('ul').addClass('rmm-main-list');   // mark main menu list
            
            
            var $style = $(this).attr('data-menu-style');   // get menu style
                if ( typeof $style == 'undefined' ||  $style == false )
                    {
                        $(this).addClass('graphite'); // set graphite style if style is not defined
                    }
                else {
                        $(this).addClass($style);
                    }
                    
                    
            /*  width of menu list (non-toggled) */
            
            var $width = 0;
                $(this).find('ul li').each(function() {
                    $width += $(this).outerWidth();
                });
                
            // if modern browser
            
            if ($.support.leadingWhitespace) {
                $(this).css('max-width' , $width*1.6+'px');
            }
            // 
            else {
                $(this).css('width' , $width*1.6+'px');
            }
        
        });
}
function getMobileMenu() {

    /*  build toggled dropdown menu list */
    
    $('.rmm').each(function() { 

                var $menulist = $(this).children('.rmm-main-list').html();
                var $menucontrols ="<div class='rmm-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div>";
                $(this).prepend("<div class='rmm-toggled rmm-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");

        });
}

function adaptMenu() {
    
    /*  toggle menu on resize */
    
    $('.rmm').each(function() {
            var $width = $(this).css('max-width');
            $width = $width.replace('px', ''); 
            if ( $(this).parent().width() < $width*1.05 ) {
                $(this).children('.rmm-main-list').hide(0);
                $(this).children('.rmm-toggled').show(0);
            }
            else {
                $(this).children('.rmm-main-list').show(0);
                $(this).children('.rmm-toggled').hide(0);
            }
        });
        
}

$(function() {

     responsiveMobileMenu();
     getMobileMenu();
     adaptMenu();
     
     /* slide down mobile menu on click */
     
     $('.rmm-toggled, .rmm-toggled .rmm-button').click(function(){
        if ( $(this).is(".rmm-closed")) {
             $(this).find('ul').stop().show(300);
             $(this).removeClass("rmm-closed");
        }
        else {
            $(this).find('ul').stop().hide(300);
             $(this).addClass("rmm-closed");
        }
        
    }); 

});
    /*  hide mobile menu on resize */
$(window).resize(function() {
    adaptMenu();
});




$(function(){
if(!Modernizr.touch){ 
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
}

});


$('.pixel').foggy();

 $('.pixel2, .pixel2x').foggy({
   blurRadius: 0,          
   opacity: 0.9,           
   cssFilterSupport: true
 }); 
















/*

Instragram API - hashtagagram

*/

(function($){
$.fn.hashtagagram = function(options){
    var defaults = {
        client_id:'f95511249c334347bb0d4f233676c036',
        thumb_dimension:150,
        success:ProcessData,
        load_cookie_result:LoadResultsFromCookie,
        tag_name: 'annetteitimtuktuk',
        count: 35,
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



/* Modernizr 2.8.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-geolocation-touch-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function v(a){i.cssText=a}function w(a,b){return v(l.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:s(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},m.geolocation=function(){return"geolocation"in navigator};for(var A in m)u(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),h=j=null,e._version=d,e._prefixes=l,e.testStyles=s,e}(this,this.document);