function supportsSVG(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}if(window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"===e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),jQuery(document).ready(function(t){var e=function(){min_width("30.0625em"),min_width("48em")&&(t(".welcome div").equalise(),t(".comment img[data-gravatar]").each(function(){t(this).attr("src")||t(this).attr("src",t(this).attr("data-gravatar"))})),min_width("64em")};t(window).resize(e),e()}),!supportsSVG())for(var imgs=document.getElementsByTagName("img"),dotSVG=/.*\.svg$/,i=0;i!==imgs.length;++i)imgs[i].src.match(dotSVG)&&(imgs[i].src=imgs[i].src.slice(0,-3)+"png");!function(t){function e(){a.setAttribute("content",s),u=!0}function n(){a.setAttribute("content",c),u=!1}function i(i){l=i.accelerationIncludingGravity,m=Math.abs(l.x),d=Math.abs(l.y),g=Math.abs(l.z),!t.orientation&&(m>7||(g>6&&8>d||8>g&&d>6)&&m>5)?u&&n():u||e()}if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var r=t.document;if(r.querySelector){var a=r.querySelector("meta[name=viewport]"),o=a&&a.getAttribute("content"),c=o+",maximum-scale=1",s=o+",maximum-scale=10",u=!0,m,d,g,l;a&&(t.addEventListener("orientationchange",e,!1),t.addEventListener("devicemotion",i,!1))}}}(this);