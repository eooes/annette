
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

    window.scrollReveal = new scrollReveal( config );

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

$(function () {
    $.srSmoothscroll();
});


$(function(){
    $('#Photos').hashtagagram();
});

/*! jquery.mousewheel Copyright 3.1.11 (c) 2013 Brandon Aaron (http://brandon.aaron.sh) Licensed under the MIT License.*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/* jquery.simplr.smoothscroll version 1.0 copyright (c) 2012 https://github.com/simov/simplr-smoothscroll licensed under MIT */
;(function(e){"use strict";e.srSmoothscroll=function(t){var n=e.extend({step:85,speed:600,ease:"linear"},t||{});var r=e(window),i=e(document),s=0,o=n.step,u=n.speed,a=r.height(),f=navigator.userAgent.indexOf("AppleWebKit")!==-1?e("body"):e("html"),l=false;e("body").mousewheel(function(e,t){l=true;if(t<0)s=s+a>=i.height()?s:s+=o;else s=s<=0?0:s-=o;f.stop().animate({scrollTop:s},u,n.ease,function(){l=false});return false});r.on("resize",function(e){a=r.height()}).on("scroll",function(e){if(!l)s=r.scrollTop()})}})(jQuery);
/*

*/
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.scrollReveal=e()}(this,function(){return window.scrollReveal=function(t){"use strict";function e(e){this.docElem=t.document.documentElement,this.options=this.extend(this.defaults,e),this.styleBank=[],1==this.options.init&&this.init()}return e.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",viewportFactor:.33,reset:!1,init:!0},init:function(){this.scrolled=!1;var e=this;this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")),this.elems.forEach(function(t){e.styleBank[t]||(e.styleBank[t]=t.getAttribute("style")),e.update(t)});var i=function(){e.scrolled||(e.scrolled=!0,setTimeout(function(){e._scrollPage()},60))},o=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)};t.addEventListener("scroll",i,!1),t.addEventListener("resize",o,!1)},_scrollPage:function(){var t=this;this.elems.forEach(function(e){t.update(e)}),this.scrolled=!1},parseLanguage:function(t){function e(t){var e=[],i=["from","the","and","then","but","with"];return t.forEach(function(t){i.indexOf(t)>-1||e.push(t)}),e}var i=t.getAttribute("data-scroll-reveal").split(/[, ]+/),o={};return i=e(i),i.forEach(function(t,e){switch(t){case"enter":return void(o.enter=i[e+1]);case"after":return void(o.after=i[e+1]);case"wait":return void(o.after=i[e+1]);case"move":return void(o.move=i[e+1]);case"ease":return o.move=i[e+1],void(o.ease="ease");case"ease-in":return o.move=i[e+1],void(o.easing="ease-in");case"ease-in-out":return o.move=i[e+1],void(o.easing="ease-in-out");case"ease-out":return o.move=i[e+1],void(o.easing="ease-out");case"over":return void(o.over=i[e+1]);default:return}}),o},update:function(t){var e=this.genCSS(t),i=this.styleBank[t];return null!=i?i+=";":i="",t.getAttribute("data-scroll-reveal-initialized")||(t.setAttribute("style",i+e.initial),t.setAttribute("data-scroll-reveal-initialized",!0)),this.isElementInViewport(t,this.options.viewportFactor)?t.getAttribute("data-scroll-reveal-complete")?void 0:this.isElementInViewport(t,this.options.viewportFactor)?(t.setAttribute("style",i+e.target+e.transition),void(this.options.reset||setTimeout(function(){""!=i?t.setAttribute("style",i):t.removeAttribute("style"),t.setAttribute("data-scroll-reveal-complete",!0)},e.totalDuration))):void 0:void(this.options.reset&&t.setAttribute("style",i+e.initial+e.reset))},genCSS:function(t){var e,i,o=this.parseLanguage(t);o.enter?(("top"==o.enter||"bottom"==o.enter)&&(e=o.enter,i="y"),("left"==o.enter||"right"==o.enter)&&(e=o.enter,i="x")):(("top"==this.options.enter||"bottom"==this.options.enter)&&(e=this.options.enter,i="y"),("left"==this.options.enter||"right"==this.options.enter)&&(e=this.options.enter,i="x")),("top"==e||"left"==e)&&(o.move=o.move?"-"+o.move:"-"+this.options.move);var r=o.move||this.options.move,n=o.over||this.options.over,s=o.after||this.options.after,a=o.easing||this.options.easing,l="-webkit-transition: -webkit-transform "+n+" "+a+" "+s+",  opacity "+n+" "+a+" "+s+";transition: transform "+n+" "+a+" "+s+", opacity "+n+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",u="-webkit-transition: -webkit-transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+s+";transition: transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",c="-webkit-transform: translate"+i+"("+r+");transform: translate"+i+"("+r+");opacity: 0;",f="-webkit-transform: translate"+i+"(0);transform: translate"+i+"(0);opacity: 1;";return{transition:l,initial:c,target:f,reset:u,totalDuration:1e3*(parseFloat(n)+parseFloat(s))}},getViewportH:function(){var e=this.docElem.clientHeight,i=t.innerHeight;return i>e?i:e},getOffset:function(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var o=t.pageYOffset,r=o+this.getViewportH(),n=e.offsetHeight,s=this.getOffset(e).top,a=s+n,i=i||0;return r>=s+n*i&&a>=o||"fixed"==(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position},extend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},e}(window),scrollReveal});

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
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
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
        count: 33,
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