(function(){var $;$=window.jQuery||window.Zepto||window.$,$.fn.fancySelect=function(e){var n,s;return null==e&&(e={}),s=$.extend({forceiOS:!1,includeBlank:!1,optionTemplate:function(e){return e.text()},triggerTemplate:function(e){return e.text()}},e),n=!!navigator.userAgent.match(/iP(hone|od|ad)/i),this.each(function(){var e,t,a,o,r,i,l;return o=$(this),o.hasClass("fancified")||"SELECT"!==o[0].tagName?void 0:(o.addClass("fancified"),o.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0}),o.wrap('<div class="fancy-select">'),l=o.parent(),o.data("class")&&l.addClass(o.data("class")),l.append('<div class="trigger">'),(!n||s.forceiOS)&&l.append('<ul class="options">'),r=l.find(".trigger"),a=l.find(".options"),t=o.prop("disabled"),t&&l.addClass("disabled"),i=function(){var e;return e=s.triggerTemplate(o.find(":selected")),r.html(e)},o.on("blur.fs",function(){return r.hasClass("open")?setTimeout(function(){return r.trigger("close.fs")},120):void 0}),r.on("close.fs",function(){return r.removeClass("open"),a.removeClass("open")}),r.on("click.fs",function(){var e,i;if(!t)if(r.toggleClass("open"),n&&!s.forceiOS){if(r.hasClass("open"))return o.focus()}else if(r.hasClass("open")&&(i=r.parent(),e=i.offsetParent(),i.offset().top+i.outerHeight()+a.outerHeight()+20>$(window).height()+$(window).scrollTop()?a.addClass("overflowing"):a.removeClass("overflowing")),a.toggleClass("open"),!n)return o.focus()}),o.on("enable",function(){return o.prop("disabled",!1),l.removeClass("disabled"),t=!1,e()}),o.on("disable",function(){return o.prop("disabled",!0),l.addClass("disabled"),t=!0}),o.on("change.fs",function(e){return e.originalEvent&&e.originalEvent.isTrusted?e.stopPropagation():i()}),o.on("keydown",function(e){var n,s,t;if(t=e.which,n=a.find(".hover"),n.removeClass("hover"),a.hasClass("open")){if(38===t?(e.preventDefault(),n.length&&n.index()>0?n.prev().addClass("hover"):a.find("li:last-child").addClass("hover")):40===t?(e.preventDefault(),n.length&&n.index()<a.find("li").length-1?n.next().addClass("hover"):a.find("li:first-child").addClass("hover")):27===t?(e.preventDefault(),r.trigger("click.fs")):13===t||32===t?(e.preventDefault(),n.trigger("mousedown.fs")):9===t&&r.hasClass("open")&&r.trigger("close.fs"),s=a.find(".hover"),s.length)return a.scrollTop(0),a.scrollTop(s.position().top-12)}else if(13===t||32===t||38===t||40===t)return e.preventDefault(),r.trigger("click.fs")}),a.on("mousedown.fs","li",function(e){var s;return s=$(this),o.val(s.data("raw-value")),n||o.trigger("blur.fs").trigger("focus.fs"),a.find(".selected").removeClass("selected"),s.addClass("selected"),r.addClass("selected"),o.val(s.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")}),a.on("mouseenter.fs","li",function(){var e,n;return n=$(this),e=a.find(".hover"),e.removeClass("hover"),n.addClass("hover")}),a.on("mouseleave.fs","li",function(){return a.find(".hover").removeClass("hover")}),e=function(){var e;return i(),!n||s.forceiOS?(e=o.find("option"),o.find("option").each(function(e,n){var t;return n=$(n),n.prop("disabled")||!n.val()&&!s.includeBlank?void 0:(t=s.optionTemplate(n),n.prop("selected")?a.append('<li value="'+n.val()+'" data-raw-value="'+n.val()+'" class="selected">'+t+"</li>"):a.append('<li value="'+n.val()+'" data-raw-value="'+n.val()+'">'+t+"</li>"))})):void 0},o.on("update.fs",function(){return l.find(".options").empty(),e()}),e())})}}).call(this);