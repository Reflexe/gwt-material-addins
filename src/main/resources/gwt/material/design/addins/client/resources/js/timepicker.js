/*!
 * Lolliclock v0.1.0
 * Matthew Krick 2015
 * Inspired by Google's material design & ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
 */
!function(){function a(a){return document.createElementNS(l,a)}function b(a){return(10>a?"0":"")+a}function c(a){var b=++m+"";return a?a+b:b}function d(d,g){function k(a){var b=t.offset(),c=/^touch/.test(a.type),d=b.left+n,e=b.top+n,h=(c?a.originalEvent.touches[0]:a).pageX-d,k=(c?a.originalEvent.touches[0]:a).pageY-e,l=Math.sqrt(h*h+k*k),m=!1;o-p>l||l>o+p||(a.preventDefault(),f(document.body).addClass("lolliclock-moving"),t.append(y.canvas),y.setHand(h,k),f(document).off(i).on(i,function(a){a.preventDefault();var b=/^touch/.test(a.type),c=(b?a.originalEvent.touches[0]:a).pageX-d,f=(b?a.originalEvent.touches[0]:a).pageY-e;(m||c!==h||f!==k)&&(m=!0,y.setHand(c,f))}),f(document).off(j).on(j,function(a){a.preventDefault();var b=/^touch/.test(a.type),c=(b?a.originalEvent.changedTouches[0]:a).pageX-d,l=(b?a.originalEvent.changedTouches[0]:a).pageY-e;c===h&&l===k&&y.setHand(c,l),"hours"===y.currentView?y.toggleView("minutes",r/2):g.autoclose&&y.done(),t.prepend(E),f(document.body).removeClass("lolliclock-moving"),f(document).off(i),f(document).off(j)}))}var l=f(s),m=l.find(".lolliclock-popover"),t=l.find(".lolliclock-plate"),u=l.find(".lolliclock-dial-hours"),v=l.find(".lolliclock-dial-minutes"),w="INPUT"===d.prop("tagName"),x=w?d:d.find("input"),y=this;if(this.id=c("lolli"),this.element=d,this.options=g,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=w,this.input=x,this.popover=l,this.plate=t,this.hoursView=u,this.minutesView=v,this.header=l.find(".lolliclock-header"),this.spanHours=l.find(".lolliclock-hours"),this.spanMinutes=l.find(".lolliclock-minutes"),this.spanNewTime=l.find(".lolliclock-time-new"),this.spanOldTime=l.find(".lolliclock-time-old"),this.spanAmPm=l.find(".lolliclock-am-pm"),this.amOrPm="PM",this.AmPmButtons=l.find(".lolliclock-ampm-btn"),this.amButton=l.find("#lolliclock-btn-am"),this.pmButton=l.find("#lolliclock-btn-pm"),!g.autoclose){this.popover.css("height","380px");var z=f('<div class="lolliclock-buttons"></div>').appendTo(m);f('<div class="lolliclock-button">Cancel</div>').click(f.proxy(this.hide,this)).appendTo(z),f('<div class="lolliclock-button">OK</div>').click(f.proxy(this.done,this)).appendTo(z),this.closeButtons=l.find(".lolliclock-button")}l.addClass(g.orientation),x.on("focus.lolliclock click.lolliclock",f.proxy(this.show,this));var A,B,C,D=f('<div class="lolliclock-tick"></div>');for(A=1;13>A;A++)B=D.clone(),C=A/6*Math.PI,B.css({left:n+Math.sin(C)*o-p,top:n-Math.cos(C)*o-p}),B.html(A),u.append(B);for(A=0;60>A;A+=5)B=D.clone(),C=A/30*Math.PI,B.css({left:n+Math.sin(C)*o-p,top:n-Math.cos(C)*o-p}),B.html(b(A)),v.append(B);t.on(h,k);var E=l.find(".lolliclock-canvas"),F=a("svg");F.setAttribute("class","lolliclock-svg"),F.setAttribute("width",q),F.setAttribute("height",q);var G=a("g");G.setAttribute("transform","translate("+n+","+n+")");var H=a("circle");H.setAttribute("class","lolliclock-bearing"),H.setAttribute("cx",0),H.setAttribute("cy",0),H.setAttribute("r",1.25);var I=a("line");I.setAttribute("x1",0),I.setAttribute("y1",0);var J=a("circle");J.setAttribute("class","lolliclock-canvas-bg"),J.setAttribute("r",p);var K=a("circle");K.setAttribute("class","lolliclock-canvas-fg"),K.setAttribute("r",3.5),G.appendChild(I),G.appendChild(J),G.appendChild(K),G.appendChild(H),F.appendChild(G),E.append(F),this.hand=I,this.bg=J,this.fg=K,this.bearing=H,this.g=G,this.canvas=E,e(this.options.init)}function e(a){a&&"function"==typeof a&&a()}var f=window.jQuery;d.DEFAULTS={startTime:"",autoclose:!1,vibrate:!0,orientation:"portrait"};var g="ontouchstart"in window,h="mousedown"+(g?" touchstart":""),i="mousemove.lolliclock"+(g?" touchmove.lolliclock":""),j="mouseup.lolliclock"+(g?" touchend.lolliclock":""),k=navigator.vibravarte?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,l="http://www.w3.org/2000/svg",m=0,n=84,o=70,p=12,q=2*n,r=350,s='<div id="time-picker" class="clock-overlay"><div  class="lolliclock-popover"><div class="lolliclock-header"><div class="lolliclock-time"><div class="lolliclock-hours lolliclock-primary-text"><div class="lolliclock-time-old"></div><div class="lolliclock-time-new"></div></div><span class="lolliclock-colon">:</span><div class="lolliclock-minutes"><div class="lolliclock-time-old"></div><div class="lolliclock-time-new"></div></div></div><span class="lolliclock-am-pm"></span></div><div class="popover-content"><div class="lolliclock-plate"><div class="lolliclock-canvas"></div><div class="lolliclock-dial lolliclock-dial-hours"></div><div class="lolliclock-dial lolliclock-dial-minutes lolliclock-dial-out"></div></div><div class="lolliclock-ampm-block"><div id="lolliclock-btn-am" class="lolliclock-ampm-btn"><div class="lolliclock-btn-background"></div><div class="lolliclock-btn-text">AM</div></div><div style="flex: 1;"></div><div id="lolliclock-btn-pm" class="lolliclock-ampm-btn"><div class="lolliclock-btn-background"></div><div class="lolliclock-btn-text">PM</div></div></div></div></div></div>';d.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},d.prototype.changeAmPm=function(a){a&&a===this.amOrPm||(this.amOrPm="AM"===this.amOrPm?"PM":"AM",this.spanAmPm.html(this.amOrPm),f(this.amButton[0].childNodes[0]).toggleClass("lolliclock-active-button-background","AM"===this.amOrPm),f(this.pmButton[0].childNodes[0]).toggleClass("lolliclock-active-button-background","PM"===this.amOrPm),f(this.amButton[0].childNodes[1]).toggleClass("lolliclock-active-button-text","AM"===this.amOrPm),f(this.pmButton[0].childNodes[1]).toggleClass("lolliclock-active-button-text","PM"===this.amOrPm))},d.prototype.locate=function(){var a=this.element,b=this.popover,c=8,d=a.offset().left+(a.outerWidth()-b.width())/2,e=f(window).width()-b.width()-c,g=c,h=f(window).height()+f(window).scrollTop()-c-b.height(),i=c+f(window).scrollTop(),j=a.offset().top,k={};k.top=i>j?i:j>h?h:j,k.left=g>d?g:d>e?e:d,b.css(k),b.show()},d.prototype.show=function(){function a(a){var b=a.split(":");if(2===b.length){var c=+b[0],d=b[1].split(" ");if(2===d.length){var e=d[0];return"PM"===d[1]&&(c+=12),new Date(1970,1,1,c,e)}}return new Date("x")}function b(b){return!isNaN(a(b).getTime())}if(!this.isShown){e(this.options.beforeShow);var c=this;this.isAppended||(f(document.body).append(this.popover),this.isAppended=!0,f(window).on("resize.lolliclock"+this.id,function(){c.isShown&&c.locate()}),f(window).on("scroll.lolliclock",function(){c.isShown&&c.locate()}),this.AmPmButtons.on("click",function(a){c.changeAmPm(a.currentTarget.children[1].innerHTML)}),this.spanMinutes.on("click",function(){c.toggleView("minutes")}),this.spanHours.on("click",function(){c.toggleView("hours")}),this.spanAmPm.on("click",function(){c.changeAmPm()})),c.locate(),this.plate.addClass("animate"),this.popover.addClass("animate"),this.AmPmButtons.addClass("animate"),this.spanNewTime.addClass("animate"),this.spanOldTime.addClass("animate"),!this.options.autoclose&&this.closeButtons.addClass("animate"),this.plate.on("webkitAnimationEnd animationend MSAnimationEnd oanimationend",function(){c.plate.removeClass("animate"),c.popover.removeClass("animate"),c.AmPmButtons.removeClass("animate"),c.spanNewTime.removeClass("animate"),c.spanOldTime.removeClass("animate"),!c.options.autoclose&&c.closeButtons.removeClass("animate"),c.plate.off("webkitAnimationEnd animationend MSAnimationEnd oanimationend")});var d,g=this.input.prop("value"),h=this.options.startTime,i=this.input.prop("placeholder");d=g&&b(g)?a(g):"now"===h?new Date:h&&b(h)?a(h):i&&b(i)?a(i):new Date,this.hours=d.getHours()%12,this.minutes=d.getMinutes(),this.amOrPm=d.getHours()>11?"AM":"PM",this.changeAmPm(),c.toggleView("minutes"),c.toggleView("hours"),c.isShown=!0,f(document).on("click.lolliclock."+this.id+" focusin.lolliclock."+this.id,function(a){var b=f(a.target);0===b.closest(c.popover).length&&0===b.closest(c.input).length&&c.done()}),f(document).on("keyup.lolliclock."+this.id,function(a){27===a.keyCode&&c.hide()}),e(this.options.afterShow)}},d.prototype.hide=function(){e(this.options.beforeHide);var a=this;a.popover.addClass("animate-out"),a.plate.addClass("animate-out"),a.AmPmButtons.addClass("animate-out"),!a.options.autoclose&&a.closeButtons.addClass("animate-out"),this.popover.on("webkitAnimationEnd animationend MSAnimationEnd oanimationend",function(){f(a.spanHours[0].childNodes[0]).html(""),f(a.spanMinutes[0].childNodes[0]).html(""),a.popover.removeClass("animate-out"),a.plate.removeClass("animate-out"),a.AmPmButtons.removeClass("animate-out"),!a.options.autoclose&&a.closeButtons.removeClass("animate-out"),a.popover.off("webkitAnimationEnd animationend MSAnimationEnd oanimationend"),f(document).off("click.lolliclock."+a.id+" focusin.lolliclock."+a.id),f(document).off("keyup.lolliclock."+a.id),a.popover.hide(),e(a.options.afterHide)}),a.isShown=!1},d.prototype.toggleView=function(a,b){var c="hours"===a,d=c?this.hoursView:this.minutesView,e=c?this.minutesView:this.hoursView;if(this.currentView=a,this.spanHours.toggleClass("lolliclock-primary-text",c),this.spanMinutes.toggleClass("lolliclock-primary-text",!c),e.addClass("lolliclock-dial-out"),d.css("visibility","visible").removeClass("lolliclock-dial-out"),this.resetClock(b),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){e.css("visibility","hidden")},r),c)this.plate.off(i);else{var g=this;this.plate.on(i,function(a){var b=g.plate.offset(),c=b.left+n,d=b.top+n,e=a.pageX-c,h=a.pageY-d,i=Math.sqrt(e*e+h*h);i>o-p&&o+p>i?f(document.body).addClass("lolliclock-clickable"):f(document.body).removeClass("lolliclock-clickable")})}},d.prototype.resetClock=function(a){var b=this.currentView,c=this[b],d="hours"===b,e=Math.PI/(d?6:30),f=c*e,g=Math.sin(f)*o,h=-Math.cos(f)*o,i=this;a?(i.canvas.addClass("lolliclock-canvas-out"),setTimeout(function(){i.canvas.removeClass("lolliclock-canvas-out"),i.setHand(g,h)},a)):this.setHand(g,h)},d.prototype.setHand=function(a,c){function d(a){a.on("webkitAnimationEnd animationend MSAnimationEnd oanimationend",function(){l.html(e),l.removeClass("old-down old-up"),m.removeClass("new-down new-up"),l.off("webkitAnimationEnd animationend MSAnimationEnd oanimationend")})}var e,g=Math.atan2(-a,c)+Math.PI,h="hours"===this.currentView,i=Math.PI/(h?6:30);if(e=Math.round(g/i),g=e*i,h)0===e&&(e=12),this.fg.style.visibility="hidden";else{var j=e%5===0;j?this.fg.style.visibility="hidden":this.fg.style.visibility="visible",60===e&&(e=0)}this[this.currentView]!==e&&k&&this.options.vibrate&&(this.vibrateTimer||(navigator[k](10),this.vibrateTimer=setTimeout(f.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=e;var l,m;h?(l=f(this.spanHours[0].childNodes[0]),m=f(this.spanHours[0].childNodes[1])):(l=f(this.spanMinutes[0].childNodes[0]),m=f(this.spanMinutes[0].childNodes[1]),e=b(e)),d(l),e<+l.html()?(m.html(l.html()),l.html(e),m.addClass("new-down"),l.addClass("old-down")):(e>+l.html()||!l.html())&&(m.html(e),l.addClass("old-up"),m.addClass("new-up")),this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","lolliclock-canvas-bg");var n=Math.sin(g)*o,q=-Math.cos(g)*o;this.hand.setAttribute("x2",Math.sin(g)*(o-p)),this.hand.setAttribute("y2",-Math.cos(g)*(o-p)),this.bg.setAttribute("cx",n),this.bg.setAttribute("cy",q),this.fg.setAttribute("cx",n),this.fg.setAttribute("cy",q)},d.prototype.done=function(){e(this.options.beforeDone);var a=this.input.prop("value"),c=this.hours+":"+b(this.minutes)+" "+this.amOrPm;c!==a&&(this.input.prop("value",c),this.input.trigger("input"),this.input.trigger("change")),this.hide()},d.prototype.remove=function(){this.element.removeData("lolliclock"),this.input.off("focus.lolliclock click.lolliclock"),this.isShown&&this.hide(),this.isAppended&&(f(window).off("resize.lolliclock"+this.id),f(window).off("scroll.lolliclock"+this.id),this.popover.remove())},f.fn.lolliclock=function(a){var b=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=f(this),e=c.data("lolliclock");if(e)"function"==typeof e[a]&&e[a].apply(e,b);else{var g=f.extend({},d.DEFAULTS,c.data(),"object"==typeof a&&a);c.data("lolliclock",new d(c,g))}})}}();