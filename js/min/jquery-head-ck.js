!function(){"use strict";var n=[],e={},i,t,u,o;window.jQuery||(i=function(e){n.push(e)},e.ready=function(n){i(n)},t=window.jQuery=window.$=function(n){return"function"==typeof n&&i(n),e},window.checkJQ=function(){u()||(o=setTimeout(checkJQ,100))},o=setTimeout(checkJQ,100),u=function(){if(window.jQuery!==t){clearTimeout(o);for(var c=n.shift();c;)jQuery(c),c=n.shift();return o=e=i=t=u=window.checkJQ=null,!0}return!1})}();