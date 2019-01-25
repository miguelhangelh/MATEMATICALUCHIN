

/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/off-canvas.js
================================================================================*/;
jQuery(document).ready(function($){function getAndroidVersion(ua){var ua=ua||navigator.userAgent;var match=ua.match(/Android\s([0-9\.]*)/);return match?match[1]:false;};if(parseInt(getAndroidVersion())==4){$('#t3-mainnav').addClass('t3-mainnav-android');}
var JA_isLoading=false;if(/MSIE\s([\d.]+)/.test(navigator.userAgent)?new Number(RegExp.$1)<10:false){$('html').addClass('old-ie');}else if(/constructor/i.test(window.HTMLElement)){$('html').addClass('safari');}
var $wrapper=$('body'),$inner=$('.t3-wrapper'),$toggles=$('.off-canvas-toggle'),$offcanvas=$('.t3-off-canvas'),$close=$('.t3-off-canvas .close'),$btn=null,$nav=null,direction='left',$fixed=null;if(!$wrapper.length)return;$toggles.each(function(){var $this=$(this),$nav=$($this.data('nav')),effect=$this.data('effect'),direction=($('html').attr('dir')=='rtl'&&$this.data('pos')!='right')||($('html').attr('dir')!='rtl'&&$this.data('pos')=='right')?'right':'left';$nav.addClass(effect).addClass('off-canvas-'+direction);var inside_effect=['off-canvas-effect-3','off-canvas-effect-16','off-canvas-effect-7','off-canvas-effect-8','off-canvas-effect-14'];if($.inArray(effect,inside_effect)==-1){$inner.before($nav);}else{$inner.prepend($nav);}});$toggles.on('tap',function(e){stopBubble(e);if($wrapper.hasClass('off-canvas-open')){oc_hide(e);return false;}
$btn=$(this);$nav=$($btn.data('nav'));if(!$fixed)$fixed=$inner.find('*').filter(function(){return $(this).css("position")==='fixed';});else $fixed=$fixed.filter(function(){return $(this).css("position")==='fixed';}).add($inner.find('.affix'));$nav.addClass('off-canvas-current');direction=($('html').attr('dir')=='rtl'&&$btn.data('pos')!='right')||($('html').attr('dir')!='rtl'&&$btn.data('pos')=='right')?'right':'left';$offcanvas.height($(window).height());var events=$(window).data('events');if(events&&events.scroll&&events.scroll.length){var handlers=[];for(var i=0;i<events.scroll.length;i++){handlers[i]=events.scroll[i].handler;}
$(window).data('scroll-events',handlers);$(window).off('scroll');}
var scrollTop=($('html').scrollTop())?$('html').scrollTop():$('body').scrollTop();$('html').addClass('noscroll').css('top',-scrollTop).data('top',scrollTop);$('.t3-off-canvas').css('top',scrollTop);$fixed.each(function(){var $this=$(this),$parent=$this.parent(),mtop=0;while(!$parent.is($inner)&&$parent.css("position")==='static')$parent=$parent.parent();mtop=-$parent.offset().top;$this.css({'position':'absolute','margin-top':mtop});});$wrapper.scrollTop(scrollTop);$wrapper[0].className=$wrapper[0].className.replace(/\s*off\-canvas\-effect\-\d+\s*/g,' ').trim()+' '+$btn.data('effect')+' '+'off-canvas-'+direction;setTimeout(oc_show,50);return false;});var oc_show=function(){if(JA_isLoading==true){return;}
JA_isLoading=true;$wrapper.addClass('off-canvas-open');$inner.on('click',oc_hide);$close.on('click',oc_hide);$offcanvas.on('click',stopBubble);if($.browser.msie&&$.browser.version<10){var p1={},p2={};p1['padding-'+direction]=$('.t3-off-canvas').width();p2[direction]=0;$inner.animate(p1);$nav.animate(p2);}
setTimeout(function(){JA_isLoading=false;},200);};var oc_hide=function(){if(JA_isLoading==true){return;}
JA_isLoading=true;$inner.off('click',oc_hide);$close.off('click',oc_hide);$offcanvas.off('click',stopBubble);setTimeout(function(){$wrapper.removeClass('off-canvas-open');},100);setTimeout(function(){$wrapper.removeClass($btn.data('effect')).removeClass('off-canvas-'+direction);$wrapper.scrollTop(0);$('html').removeClass('noscroll').css('top','');$('html,body').scrollTop($('html').data('top'));$nav.removeClass('off-canvas-current');$fixed.css({'position':'','margin-top':''});if($(window).data('scroll-events')){var handlers=$(window).data('scroll-events');for(var i=0;i<handlers.length;i++){$(window).on('scroll',handlers[i]);}
$(window).data('scroll-events',null);}
JA_isLoading=false;},700);if($('html').hasClass('old-ie')){var p1={},p2={};p1['padding-'+direction]=0;p2[direction]=-$('.t3-off-canvas').width();$inner.animate(p1);$nav.animate(p2);}};var stopBubble=function(e){e.stopPropagation();return true;}
$(window).load(function(){setTimeout(function(){$fixed=$inner.find('*').filter(function(){return $(this).css("position")==='fixed';});},100);});})


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/script.js
================================================================================*/;
!function($){if($.browser==undefined||$.browser.msie==undefined){$.browser={msie:false,version:0};if(match=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)||navigator.userAgent.match(/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)){$.browser.msie=true;$.browser.version=match[1];}}
if($.browser.msie){$('html').addClass('ie'+Math.floor($.browser.version));}
$(document).ready(function(){if(!window.getComputedStyle){window.getComputedStyle=function(el,pseudo){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;if(prop=='float')prop='styleFloat';if(re.test(prop)){prop=prop.replace(re,function(){return arguments[2].toUpperCase();});}
return el.currentStyle[prop]?el.currentStyle[prop]:null;}
return this;}}
var fromClass='body-data-holder',prop='content',$inspector=$('<div>').css('display','none').addClass(fromClass).appendTo($('body'));try{var computedStyle=window.getComputedStyle($inspector[0],':before');if(computedStyle){var attrs=computedStyle.getPropertyValue(prop);if(attrs){var matches=attrs.match(/([\da-z\-]+)/gi),data={};if(matches&&matches.length){for(var i=0;i<matches.length;i++){data[matches[i++]]=i<matches.length?matches[i]:null;}}
$('body').data(data);}}}finally{$inspector.remove();}});(function(){$.support.t3transform=(function(){var style=document.createElement('div').style,vendors=['t','webkitT','MozT','msT','OT'],transform,i=0,l=vendors.length;for(;i<l;i++){transform=vendors[i]+'ransform';if(transform in style){return transform;}}
return false;})();})();(function(){$('html').addClass('ontouchstart'in window?'touch':'no-touch');})();$(document).ready(function(){(function(){if(window.MooTools&&window.MooTools.More&&Element&&Element.implement){var mthide=Element.prototype.hide,mtshow=Element.prototype.show,mtslide=Element.prototype.slide;Element.implement({show:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtshow)&&mtshow.apply(this,args);},hide:function(){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mthide)&&mthide.apply(this,arguments);},slide:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtslide)&&mtslide.apply(this,args);}})}})();$.fn.tooltip.Constructor&&$.fn.tooltip.Constructor.DEFAULTS&&($.fn.tooltip.Constructor.DEFAULTS.html=true);$.fn.popover.Constructor&&$.fn.popover.Constructor.DEFAULTS&&($.fn.popover.Constructor.DEFAULTS.html=true);$.fn.tooltip.defaults&&($.fn.tooltip.defaults.html=true);$.fn.popover.defaults&&($.fn.popover.defaults.html=true);(function(){if(window.jomsQuery&&jomsQuery.fn.collapse){$('[data-toggle="collapse"]').on('click',function(e){$($(this).attr('data-target')).eq(0).collapse('toggle');e.stopPropagation();return false;});jomsQuery('html, body').off('touchstart.dropdown.data-api');}})();(function(){if($.fn.chosen&&$(document.documentElement).attr('dir')=='rtl'){$('select').addClass('chzn-rtl');}})();});$(window).load(function(){if(!$(document.documentElement).hasClass('off-canvas-ready')&&($('.navbar-collapse-fixed-top').length||$('.navbar-collapse-fixed-bottom').length)){var btn=$('.btn-navbar[data-toggle="collapse"]');if(!btn.length){return;}
if(btn.data('target')){var nav=$(btn.data('target'));if(!nav.length){return;}
var fixedtop=nav.closest('.navbar-collapse-fixed-top').length;btn.on('click',function(){var wheight=(window.innerHeight||$(window).height());if(!$.support.transition){nav.parent().css('height',!btn.hasClass('collapsed')&&btn.data('t3-clicked')?'':wheight);btn.data('t3-clicked',1);}
nav.addClass('animate').css('max-height',wheight-
(fixedtop?(parseFloat(nav.css('top'))||0):(parseFloat(nav.css('bottom'))||0)));});nav.on('shown hidden',function(){nav.removeClass('animate');});}}});}(jQuery);


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/menu.js
================================================================================*/;
;(function($){var T3Menu=function(elm,options){this.$menu=$(elm);if(!this.$menu.length){return;}
this.options=$.extend({},$.fn.t3menu.defaults,options);this.child_open=[];this.loaded=false;this.start();};T3Menu.prototype={constructor:T3Menu,start:function(){if(this.loaded){return;}
this.loaded=true;var self=this,options=this.options,$menu=this.$menu;this.$items=$menu.find('li');this.$items.each(function(idx,li){var $item=$(this),$child=$item.children('.dropdown-menu'),$link=$item.children('a'),item={$item:$item,child:$child.length,link:$link.length,clickable:!($link.length&&$child.length),mega:$item.hasClass('mega'),status:'close',timer:null,atimer:null};$item.data('t3menu.item',item);if($child.length&&!options.hover){$item.on('click',function(e){e.stopPropagation();if($item.hasClass('group')){return;}
if(item.status=='close'){e.preventDefault();self.show(item);}});}else{$item.on('click',function(e){e.stopPropagation()});}
$item.find('a > .caret').on('click tap',function(e){item.clickable=false;});if(options.hover){$item.on('mouseover',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('show-processed'))
return;$target.data('show-processed',true);setTimeout(function(){$target.data('show-processed',false);},10);self.show(item);}).on('mouseleave',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('hide-processed'))
return;$target.data('hide-processed',true);setTimeout(function(){$target.data('hide-processed',false);},10);self.hide(item,$target);});if($link.length&&$child.length){$link.on('click',function(e){return item.clickable;});}}});$(document.body).on('tap hideall.t3menu',function(e){clearTimeout(self.timer);self.timer=setTimeout($.proxy(self.hide_alls,self),e.type=='tap'?500:self.options.hidedelay);});$menu.find('.mega-dropdown-menu').on('hideall.t3menu',function(e){e.stopPropagation();e.preventDefault();return false;});$menu.find('input, select, textarea, label').on('click tap',function(e){e.stopPropagation();});var $megatab=$menu.find('.mega-tab');if($megatab.length){$megatab.each(function(){var $tabul=$(this).find('>div>ul'),$tabs=$tabul.find('>li>.dropdown-menu'),tabheight=0;$tabul.data('mega-tab',0);var $p=$tabul.parents('.dropdown-menu');$p.each(function(){var $this=$(this);$this.data('prev-style',$this.attr('style')).css({visibility:"visible",display:"block"});})
$tabs.each(function(){var $this=$(this),thisstyle=$this.attr('style');$this.css({visibility:"hidden",display:"block"});tabheight=Math.max(tabheight,$this.children().innerHeight());if(thisstyle){$this.attr('style',thisstyle);}else{$this.removeAttr('style');}});$tabul.css('min-height',tabheight);$p.each(function(){var $this=$(this);if($this.data('prev-style'))
$this.attr('style',$this.data('prev-style'));else
$this.removeAttr('style');$this.removeData('prev-style');})})}},show:function(item){if($.inArray(item,this.child_open)<this.child_open.length-1){this.hide_others(item);}
$(document.body).trigger('hideall.t3menu',[this]);clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.ftimer);clearTimeout(item.ctimer);if(item.status!='open'||!item.$item.hasClass('open')||!this.child_open.length){if(item.mega){clearTimeout(item.astimer);clearTimeout(item.atimer);this.position(item.$item);item.astimer=setTimeout(function(){item.$item.addClass('animating')},10);item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration+50);item.timer=setTimeout(function(){item.$item.addClass('open');},100);}else{item.$item.addClass('open');}
item.status='open';if(item.child&&$.inArray(item,this.child_open)==-1){this.child_open.push(item);}}
item.ctimer=setTimeout($.proxy(this.clickable,this,item),300);var $megatab=item.$item.find('.mega-tab');if($megatab.length){var $tabul=$megatab.find('>div>ul');$tabul.children().eq($tabul.data('mega-tab')).addClass('open');}
if(item.$item.parent().data('mega-tab')!==null){item.$item.parent().data('mega-tab',item.$item.index());}},hide:function(item,$target){clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.astimer);clearTimeout(item.atimer);clearTimeout(item.ftimer);if($target&&$target.is('input',item.$item)){return;}
if(item.mega){item.$item.addClass('animating');item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration);item.timer=setTimeout(function(){item.$item.removeClass('open')},100);}else{item.timer=setTimeout(function(){item.$item.removeClass('open');},100);}
item.status='close';for(var i=this.child_open.length;i--;){if(this.child_open[i]===item){this.child_open.splice(i,1);}}
item.ftimer=setTimeout($.proxy(this.hidden,this,item),this.options.duration);this.timer=setTimeout($.proxy(this.hide_alls,this),this.options.hidedelay);},hidden:function(item){if(item.status=='close'){item.clickable=false;}},hide_others:function(item){var self=this;$.each(this.child_open.slice(),function(idx,open){if(!item||(open!=item&&!open.$item.has(item.$item).length)){self.hide(open);}});},hide_alls:function(e,inst){if(!e||e.type=='tap'||(e.type=='hideall'&&this!=inst)){var self=this;$.each(this.child_open.slice(),function(idx,item){item&&self.hide(item);});}},clickable:function(item){item.clickable=true;},position:function($item){var sub=$item.children('.mega-dropdown-menu'),is_show=sub.is(':visible');if(!is_show){sub.show();}
var offset=$item.offset(),width=$item.outerWidth(),screen_width=$(window).width()
-this.options.sb_width,sub_width=sub.outerWidth(),level=$item.data('level');if(!is_show){sub.css('display','');}
sub.css({left:'',right:''});if(level==1){var align=$item.data('alignsub'),align_offset=0,align_delta=0,align_trans=0;if(align=='justify'){return;}
if(!align){align='left';}
if(align=='center'){align_offset=offset.left+(width/2);if(!$.support.t3transform){align_trans=-sub_width/2;sub.css(this.options.rtl?'right':'left',align_trans+width/2);}}else{align_offset=offset.left
+((align=='left'&&this.options.rtl||align=='right'&&!this.options.rtl)?width:0);}
if(this.options.rtl){if(align=='right'){if(align_offset+sub_width>screen_width){align_delta=screen_width-align_offset
-sub_width;sub.css('left',align_delta);if(screen_width<sub_width){sub.css('left',align_delta+sub_width
-screen_width);}}}else{if(align_offset<(align=='center'?sub_width/2:sub_width)){align_delta=align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('right',align_delta+align_trans);}
if(align_offset
+(align=='center'?sub_width/2:0)
-align_delta>screen_width){sub.css('right',align_offset
+(align=='center'?(sub_width+width)/2:0)+align_trans
-screen_width);}}}else{if(align=='right'){if(align_offset<sub_width){align_delta=align_offset-sub_width;sub.css('right',align_delta);if(sub_width>screen_width){sub.css('right',sub_width-screen_width
+align_delta);}}}else{if(align_offset
+(align=='center'?sub_width/2:sub_width)>screen_width){align_delta=screen_width
-align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('left',align_delta+align_trans);}
if(align_offset
-(align=='center'?sub_width/2:0)
+align_delta<0){sub.css('left',(align=='center'?(sub_width+width)/2:0)
+align_trans
-align_offset);}}}}else{if(this.options.rtl){if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}else{if(offset.left-sub_width<0){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}}else{if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left-sub_width<0){$item.removeClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}else{if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}}}}};$.fn.t3menu=function(option){return this.each(function(){var $this=$(this),data=$this.data('megamenu'),options=typeof option=='object'&&option;if($this.parents('#off-canvas-nav').length)
return;if($this.parents('#t3-off-canvas').length)
return;if(!data){$this.data('megamenu',(data=new T3Menu(this,options)));}else{if(typeof option=='string'&&data[option]){data[option]()}}})};$.fn.t3menu.defaults={duration:400,timeout:100,hidedelay:200,hover:true,sb_width:20};$(document).ready(function(){var mm_duration=$('.t3-megamenu').data('duration')||0;if(mm_duration){$('<style type="text/css">'
+'.t3-megamenu.animate .animating > .mega-dropdown-menu,'
+'.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
+'transition-duration: '
+mm_duration+'ms !important;'
+'-webkit-transition-duration: '
+mm_duration+'ms !important;'
+'}'+'</style>').appendTo('head');}
var mm_timeout=mm_duration?100+mm_duration:500,mm_rtl=$(document.documentElement).attr('dir')=='rtl',mm_trigger=$(document.documentElement).hasClass('mm-hover'),sb_width=(function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=parent.children(),width=child.innerWidth()
-child.height(100).innerWidth();parent.remove();return width;})();if(!$.support.transition){$('.t3-megamenu').removeClass('animate');mm_timeout=100;}
$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});$(window).load(function(){$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});});});})(jQuery);


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/frontend-edit.js
================================================================================*/;
!function($){$(document).ready(function(){$('fieldset.radio').filter(function(){return $(this).find('input').length==2&&$(this).find('input').filter(function(){return $.inArray(this.value+'',['0','1'])!==-1;}).length==2;}).addClass('t3onoff').removeClass('btn-group');$('fieldset.t3onoff').find('label').addClass(function(){var $this=$(this),$input=$this.prev('input'),cls=$this.hasClass('off')||$input.val()=='0'?'off':'on';cls+=$input.prop('checked')?' active':'';return cls;});$('fieldset.radio').find('label').unbind('click').click(function(){var label=$(this),input=$('#'+label.attr('for'));if(!input.prop('checked')){label.addClass('active').siblings().removeClass('active');input.prop('checked',true).trigger('change');}});});}(jQuery);


/*===============================
/Luismoreno3/templates/ja_university_t3/js/script.js
================================================================================*/;
(function($){$(document).ready(function(){if($('.nav.nav-tabs').length>0){$('.nav.nav-tabs a').click(function(e){e.preventDefault();$(this).tab('show');})}
(function(){if($("#system-message").children().length){$("#system-message-container").show();$("#system-message a.close").click(function(){setTimeout(function(){if(!$("#system-message").children().length)$("#system-message-container").hide();if($('#t3-content').length>0&&$('#t3-content').html().trim().length==0){$('#t3-content').hide();}else if($('#t3-content').find('.blog-featured').length>0&&$('#t3-content').find('.blog-featured').html().trim().length==0&&$("#system-message").children().length==0){$('#t3-content').hide();}},100);});}else{$("#system-message-container").hide();}})();(function(){if($('.nav.navbar-nav').find('.nav-child').length){$('.nav.navbar-nav').find('.nav-child').each(function(){if($(this).width()>$(window).width())$(this).css('width',$(window).width());});}})();});})(jQuery);


/*===============================
/Luismoreno3/templates/ja_university_t3/js/holder.js
================================================================================*/;
/*!

 Holder - 2.3.2 - client side image placeholders
 (c) 2012-2014 Ivan Malopinsky / http://imsky.co

 Provided under the MIT License.
 Commercial use requires attribution.

 */
var Holder=Holder||{};(function(app,win){var system_config={use_svg:false,use_canvas:false,use_fallback:false};var instance_config={};var preempted=false;canvas=document.createElement('canvas');var dpr=1,bsr=1;var resizable_images=[];if(!canvas.getContext){system_config.use_fallback=true;}else{if(canvas.toDataURL("image/png").indexOf("data:image/png")<0){system_config.use_fallback=true;}else{var ctx=canvas.getContext("2d");}}
if(!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect){system_config.use_svg=true;system_config.use_canvas=false;}
if(!system_config.use_fallback){dpr=window.devicePixelRatio||1,bsr=ctx.webkitBackingStorePixelRatio||ctx.mozBackingStorePixelRatio||ctx.msBackingStorePixelRatio||ctx.oBackingStorePixelRatio||ctx.backingStorePixelRatio||1;}
var ratio=dpr/bsr;var settings={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{"gray":{background:"#eee",foreground:"#aaa",size:12},"social":{background:"#3a5a97",foreground:"#fff",size:12},"industrial":{background:"#434A52",foreground:"#C2F200",size:12},"sky":{background:"#0D8FDB",foreground:"#fff",size:12},"vine":{background:"#39DBAC",foreground:"#1E292C",size:12},"lava":{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};app.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(val){var exec=this.regex.exec(val);return{width:+exec[1],height:+exec[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(val){var exec=this.regex.exec(val);return{width:exec[1],height:exec[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(val){var exec=this.regex.exec(val);return{size:settings.themes.gray.size,foreground:"#"+exec[2],background:"#"+exec[1]}}},text:{regex:/text\:(.*)/,output:function(val){return this.regex.exec(val)[1];}},font:{regex:/font\:(.*)/,output:function(val){return this.regex.exec(val)[1];}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(val){return this.regex.exec(val)[1];}}}
function text_size(width,height,template){height=parseInt(height,10);width=parseInt(width,10);var bigSide=Math.max(height,width)
var smallSide=Math.min(height,width)
var scale=1/12;var newHeight=Math.min(smallSide*0.75,0.75*bigSide*scale);return{height:Math.round(Math.max(template.size,newHeight))}}
var svg_el=(function(){if(!window.XMLSerializer)return;var serializer=new XMLSerializer();var svg_ns="http://www.w3.org/2000/svg"
var svg=document.createElementNS(svg_ns,"svg");if(svg.webkitMatchesSelector){svg.setAttribute("xmlns","http://www.w3.org/2000/svg")}
var bg_el=document.createElementNS(svg_ns,"rect")
var text_el=document.createElementNS(svg_ns,"text")
var textnode_el=document.createTextNode(null)
text_el.setAttribute("text-anchor","middle")
text_el.appendChild(textnode_el)
svg.appendChild(bg_el)
svg.appendChild(text_el)
return function(props){svg.setAttribute("width",props.width);svg.setAttribute("height",props.height);bg_el.setAttribute("width",props.width);bg_el.setAttribute("height",props.height);bg_el.setAttribute("fill",props.template.background);text_el.setAttribute("x",props.width/2)
text_el.setAttribute("y",props.height/2)
textnode_el.nodeValue=props.text
text_el.setAttribute("style",css_properties({"fill":props.template.foreground,"font-weight":"bold","font-size":props.text_height+"px","font-family":props.font,"dominant-baseline":"central"}))
return serializer.serializeToString(svg)}})()
function css_properties(props){var ret=[];for(p in props){if(props.hasOwnProperty(p)){ret.push(p+":"+props[p])}}
return ret.join(";")}
function draw_canvas(args){var ctx=args.ctx,dimensions=args.dimensions,template=args.template,ratio=args.ratio,holder=args.holder,literal=holder.textmode=="literal",exact=holder.textmode=="exact";var ts=text_size(dimensions.width,dimensions.height,template);var text_height=ts.height;var width=dimensions.width*ratio,height=dimensions.height*ratio;var font=template.font?template.font:"Arial,Helvetica,sans-serif";canvas.width=width;canvas.height=height;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle=template.background;ctx.fillRect(0,0,width,height);ctx.fillStyle=template.foreground;ctx.font="bold "+text_height+"px "+font;var text=template.text?template.text:(Math.floor(dimensions.width)+"x"+Math.floor(dimensions.height));if(literal){var dimensions=holder.dimensions;text=dimensions.width+"x"+dimensions.height;}
else if(exact&&holder.exact_dimensions){var dimensions=holder.exact_dimensions;text=(Math.floor(dimensions.width)+"x"+Math.floor(dimensions.height));}
var text_width=ctx.measureText(text).width;if(text_width/width>=0.75){text_height=Math.floor(text_height*0.75*(width/text_width));}
ctx.font="bold "+(text_height*ratio)+"px "+font;ctx.fillText(text,(width/2),(height/2),width);return canvas.toDataURL("image/png");}
function draw_svg(args){var dimensions=args.dimensions,template=args.template,holder=args.holder,literal=holder.textmode=="literal",exact=holder.textmode=="exact";var ts=text_size(dimensions.width,dimensions.height,template);var text_height=ts.height;var width=dimensions.width,height=dimensions.height;var font=template.font?template.font:"Arial,Helvetica,sans-serif";var text=template.text?template.text:(Math.floor(dimensions.width)+"x"+Math.floor(dimensions.height));if(literal){var dimensions=holder.dimensions;text=dimensions.width+"x"+dimensions.height;}
else if(exact&&holder.exact_dimensions){var dimensions=holder.exact_dimensions;text=(Math.floor(dimensions.width)+"x"+Math.floor(dimensions.height));}
var string=svg_el({text:text,width:width,height:height,text_height:text_height,font:font,template:template})
return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(string)));}
function draw(args){if(instance_config.use_canvas&&!instance_config.use_svg){return draw_canvas(args);}
else{return draw_svg(args);}}
function render(mode,el,holder,src){var dimensions=holder.dimensions,theme=holder.theme,text=holder.text?decodeURIComponent(holder.text):holder.text;var dimensions_caption=dimensions.width+"x"+dimensions.height;theme=(text?extend(theme,{text:text}):theme);theme=(holder.font?extend(theme,{font:holder.font}):theme);el.setAttribute("data-src",src);holder.theme=theme;el.holder_data=holder;if(mode=="image"){el.setAttribute("alt",text?text:theme.text?theme.text+" ["+dimensions_caption+"]":dimensions_caption);if(instance_config.use_fallback||!holder.auto){el.style.width=dimensions.width+"px";el.style.height=dimensions.height+"px";}
if(instance_config.use_fallback){el.style.backgroundColor=theme.background;}else{el.setAttribute("src",draw({ctx:ctx,dimensions:dimensions,template:theme,ratio:ratio,holder:holder}));if(holder.textmode&&holder.textmode=="exact"){resizable_images.push(el);resizable_update(el);}}}else if(mode=="background"){if(!instance_config.use_fallback){el.style.backgroundImage="url("+draw({ctx:ctx,dimensions:dimensions,template:theme,ratio:ratio,holder:holder})+")";el.style.backgroundSize=dimensions.width+"px "+dimensions.height+"px";}}else if(mode=="fluid"){el.setAttribute("alt",text?text:theme.text?theme.text+" ["+dimensions_caption+"]":dimensions_caption);if(dimensions.height.slice(-1)=="%"){el.style.height=dimensions.height}else if(holder.auto==null||!holder.auto){el.style.height=dimensions.height+"px"}
if(dimensions.width.slice(-1)=="%"){el.style.width=dimensions.width}else if(holder.auto==null||!holder.auto){el.style.width=dimensions.width+"px"}
if(el.style.display=="inline"||el.style.display===""||el.style.display=="none"){el.style.display="block";}
set_initial_dimensions(el)
if(instance_config.use_fallback){el.style.backgroundColor=theme.background;}else{resizable_images.push(el);resizable_update(el);}}}
function dimension_check(el,callback){var dimensions={height:el.clientHeight,width:el.clientWidth};if(!dimensions.height&&!dimensions.width){el.setAttribute("data-holder-invisible",true)
callback.call(this,el)}
else{el.removeAttribute("data-holder-invisible")
return dimensions;}}
function set_initial_dimensions(el){if(el.holder_data){var dimensions=dimension_check(el,app.invisible_error_fn(set_initial_dimensions))
if(dimensions){var holder=el.holder_data;holder.initial_dimensions=dimensions;holder.fluid_data={fluid_height:holder.dimensions.height.slice(-1)=="%",fluid_width:holder.dimensions.width.slice(-1)=="%",mode:null}
if(holder.fluid_data.fluid_width&&!holder.fluid_data.fluid_height){holder.fluid_data.mode="width"
holder.fluid_data.ratio=holder.initial_dimensions.width/parseFloat(holder.dimensions.height)}
else if(!holder.fluid_data.fluid_width&&holder.fluid_data.fluid_height){holder.fluid_data.mode="height";holder.fluid_data.ratio=parseFloat(holder.dimensions.width)/holder.initial_dimensions.height}}}}
function resizable_update(element){var images;if(element.nodeType==null){images=resizable_images;}else{images=[element]}
for(var i in images){if(!images.hasOwnProperty(i)){continue;}
var el=images[i]
if(el.holder_data){var holder=el.holder_data;var dimensions=dimension_check(el,app.invisible_error_fn(resizable_update))
if(dimensions){if(holder.fluid){if(holder.auto){switch(holder.fluid_data.mode){case"width":dimensions.height=dimensions.width/holder.fluid_data.ratio;break;case"height":dimensions.width=dimensions.height*holder.fluid_data.ratio;break;}}
el.setAttribute("src",draw({ctx:ctx,dimensions:dimensions,template:holder.theme,ratio:ratio,holder:holder}))}
if(holder.textmode&&holder.textmode=="exact"){holder.exact_dimensions=dimensions;el.setAttribute("src",draw({ctx:ctx,dimensions:holder.dimensions,template:holder.theme,ratio:ratio,holder:holder}))}}}}}
function parse_flags(flags,options){var ret={theme:extend(settings.themes.gray,{})};var render=false;for(var fl=flags.length,j=0;j<fl;j++){var flag=flags[j];if(app.flags.dimensions.match(flag)){render=true;ret.dimensions=app.flags.dimensions.output(flag);}else if(app.flags.fluid.match(flag)){render=true;ret.dimensions=app.flags.fluid.output(flag);ret.fluid=true;}else if(app.flags.textmode.match(flag)){ret.textmode=app.flags.textmode.output(flag)}else if(app.flags.colors.match(flag)){ret.theme=app.flags.colors.output(flag);}else if(options.themes[flag]){if(options.themes.hasOwnProperty(flag)){ret.theme=extend(options.themes[flag],{});}}else if(app.flags.font.match(flag)){ret.font=app.flags.font.output(flag);}else if(app.flags.auto.match(flag)){ret.auto=true;}else if(app.flags.text.match(flag)){ret.text=app.flags.text.output(flag);}}
return render?ret:false;}
for(var flag in app.flags){if(!app.flags.hasOwnProperty(flag))continue;app.flags[flag].match=function(val){return val.match(this.regex)}}
app.invisible_error_fn=function(fn){return function(el){if(el.hasAttribute("data-holder-invisible")){throw new Error("Holder: invisible placeholder")}}}
app.add_theme=function(name,theme){name!=null&&theme!=null&&(settings.themes[name]=theme);return app;};app.add_image=function(src,el){var node=selector(el);if(node.length){for(var i=0,l=node.length;i<l;i++){var img=document.createElement("img")
img.setAttribute("data-src",src);node[i].appendChild(img);}}
return app;};app.run=function(o){instance_config=extend({},system_config)
preempted=true;var options=extend(settings,o),images=[],imageNodes=[],bgnodes=[];if(options.use_canvas!=null&&options.use_canvas){instance_config.use_canvas=true;instance_config.use_svg=false;}
if(typeof(options.images)=="string"){imageNodes=selector(options.images);}else if(window.NodeList&&options.images instanceof window.NodeList){imageNodes=options.images;}else if(window.Node&&options.images instanceof window.Node){imageNodes=[options.images];}else if(window.HTMLCollection&&options.images instanceof window.HTMLCollection){imageNodes=options.images}
if(typeof(options.bgnodes)=="string"){bgnodes=selector(options.bgnodes);}else if(window.NodeList&&options.elements instanceof window.NodeList){bgnodes=options.bgnodes;}else if(window.Node&&options.bgnodes instanceof window.Node){bgnodes=[options.bgnodes];}
for(i=0,l=imageNodes.length;i<l;i++)images.push(imageNodes[i]);var holdercss=document.getElementById("holderjs-style");if(!holdercss){holdercss=document.createElement("style");holdercss.setAttribute("id","holderjs-style");holdercss.type="text/css";document.getElementsByTagName("head")[0].appendChild(holdercss);}
if(!options.nocss){if(holdercss.styleSheet){holdercss.styleSheet.cssText+=options.stylesheet;}else{if(options.stylesheet.length){holdercss.appendChild(document.createTextNode(options.stylesheet));}}}
var cssregex=new RegExp(options.domain+"\/(.*?)\"?\\)");for(var l=bgnodes.length,i=0;i<l;i++){var src=window.getComputedStyle(bgnodes[i],null).getPropertyValue("background-image");var flags=src.match(cssregex);var bgsrc=bgnodes[i].getAttribute("data-background-src");if(flags){var holder=parse_flags(flags[1].split("/"),options);if(holder){render("background",bgnodes[i],holder,src);}}else if(bgsrc!=null){var holder=parse_flags(bgsrc.substr(bgsrc.lastIndexOf(options.domain)+options.domain.length+1).split("/"),options);if(holder){render("background",bgnodes[i],holder,src);}}}
for(l=images.length,i=0;i<l;i++){var attr_data_src,attr_src;attr_src=attr_data_src=src=null;try{attr_src=images[i].getAttribute("src");attr_datasrc=images[i].getAttribute("data-src");}catch(e){}
if(attr_datasrc==null&&!!attr_src&&attr_src.indexOf(options.domain)>=0){src=attr_src;}else if(!!attr_datasrc&&attr_datasrc.indexOf(options.domain)>=0){src=attr_datasrc;}
if(src){var holder=parse_flags(src.substr(src.lastIndexOf(options.domain)+options.domain.length+1).split("/"),options);if(holder){if(holder.fluid){render("fluid",images[i],holder,src)}else{render("image",images[i],holder,src);}}}}
return app;};contentLoaded(win,function(){if(window.addEventListener){window.addEventListener("resize",resizable_update,false);window.addEventListener("orientationchange",resizable_update,false);}else{window.attachEvent("onresize",resizable_update)}
preempted||app.run({});if(typeof window.Turbolinks==="object"){document.addEventListener("page:change",function(){app.run({})})}});if(typeof define==="function"&&define.amd){define([],function(){return app;});}
(function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,n,a=0,i=r,c="";e.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-8*(a%1))){if(n=e.charCodeAt(a+=.75),n>255)throw new t("'btoa' failed");o=o<<8|n}return c}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var o,n,a=0,i=0,c="";n=e.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(6&-2*a)):0)n=r.indexOf(n);return c})})();document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})
window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}}
function selector(a,b){var a=a.match(/^(\W)?(.*)/),b=b||document,c=b["getElement"+(a[1]?"#"==a[1]?"ById":"sByClassName":"sByTagName")],d=c.call(b,a[2]),e=[];return null!==d&&(e=d.length||0===d.length?d:[d]),e}
function extend(a,b){var c={};for(var i in a){if(a.hasOwnProperty(i)){c[i]=a[i];}}
for(var i in b){if(b.hasOwnProperty(i)){c[i]=b[i];}}
return c}
if(!Object.prototype.hasOwnProperty)
Object.prototype.hasOwnProperty=function(prop){var proto=this.__proto__||this.constructor.prototype;return(prop in this)&&(!(prop in proto)||proto[prop]!==this[prop]);}})(Holder,window);


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/js/nav-collapse.js
================================================================================*/;
jQuery(document).ready(function($){$('.t3-navbar').each(function(){var $navwrapper=$(this),$menu=null,$placeholder=null;if($navwrapper.find('.t3-megamenu').length){$menu=$navwrapper.find('ul.level0').clone(),$placeholder=$navwrapper.prev('.navbar-collapse');if(!$placeholder.length){$placeholder=$navwrapper.closest('.container, .t3-mainnav').find('.navbar-collapse:empty');}
var lis=$menu.find('li[data-id]'),liactive=lis.filter('.current');lis.removeClass('mega dropdown mega-align-left mega-align-right mega-align-center mega-align-adjust');lis.each(function(){var $li=$(this),$child=$li.find('>:first-child');if($child[0].nodeName=='DIV'){$child.find('>:first-child').prependTo($li);$child.remove();}
if($li.data('hidewcol')){$child.find('.caret').remove();$child.nextAll().remove();return;}
var subul=$li.find('ul.level'+$li.data('level'));if(subul.length){$ul=$('<ul class="level'+$li.data('level')+' dropdown-menu">');subul.each(function(){if($(this).parents('.mega-col-nav').data('hidewcol'))return;$(this).find('>li').appendTo($ul);});if($ul.children().length){$ul.appendTo($li);}}
$li.find('>div').remove();if(!$li.children('ul').length){$child.find('.caret').remove();}
var divider=$li.hasClass('divider');for(var x in $li.data()){$li.removeAttr('data-'+x)}
$child.removeAttr('class');for(var x in $child.data()){$child.removeAttr('data-'+x)}
if(divider){$li.addClass('divider');}});liactive.addClass('current active');}else{$menu=$navwrapper.find('ul.nav').clone();$placeholder=$('.t3-navbar-collapse:empty, .navbar-collapse:empty').eq(0);}
$menu.find('a[data-toggle="dropdown"]').removeAttr('data-toggle').removeAttr('data-target');$menu.find('> li > ul.dropdown-menu').prev('a').attr('data-toggle','dropdown').attr('data-target','#').parent('li').addClass(function(){return'dropdown'+($(this).data('level')>1?' dropdown-submenu':'');});$menu.appendTo($placeholder);});});


/*===============================
/Luismoreno3/media/system/js/frontediting.js
================================================================================*/;
!function(t){t.fn.extend({jEditMakeAbsolute:function(e){return this.each(function(){var o,i=t(this);o=e?i.offset():i.position(),i.css({position:"absolute",marginLeft:0,marginTop:0,top:o.top,left:o.left,width:i.width(),height:i.height()}),e&&i.detach().appendTo("body")})}}),t(document).ready(function(){var e=200,o=100,i=function(i,n){var d,a,l,r,s,p,u,h,m,c,f,v,j,b,g;return v=function(t){return u<t.top&&s<t.left&&p>t.left+e&&r>t.top+o},d=t(n),b=t.extend({},d.offset(),{width:n.offsetWidth,height:n.offsetHeight}),u=t(document).scrollTop(),s=t(document).scrollLeft(),p=s+t(window).width(),r=u+t(window).height(),h={top:b.top-o,left:b.left+b.width/2-e/2},m={top:b.top+b.height,left:b.left+b.width/2-e/2},c={top:b.top+b.height/2-o/2,left:b.left-e},f={top:b.top+b.height/2-o/2,left:b.left+b.width},a=v(h),l=v(m),j=v(c),g=v(f),a?"top":l?"bottom":j?"left":"right"};t(".jmoddiv").on({mouseenter:function(){var e=t(this).data("jmodediturl"),o=t(this).data("jmodtip"),n=t(this).data("target");t("body>.btn.jmodedit").clearQueue().tooltip("destroy").remove(),t(this).addClass("jmodinside").prepend('<a class="btn jmodedit" href="#" target="'+n+'"><span class="icon-edit"></span></a>').children(":first").attr("href",e).attr("title",o).tooltip({container:!1,html:!0,placement:i}).jEditMakeAbsolute(!0),t(".btn.jmodedit").on({mouseenter:function(){t(this).clearQueue()},mouseleave:function(){t(this).delay(500).queue(function(e){t(this).tooltip("destroy").remove(),e()})}})},mouseleave:function(){t("body>.btn.jmodedit").delay(500).queue(function(e){t(this).tooltip("destroy").remove(),e()})}});var n=null;t(".jmoddiv[data-jmenuedittip] .nav li,.jmoddiv[data-jmenuedittip].nav li,.jmoddiv[data-jmenuedittip] .nav .nav-child li,.jmoddiv[data-jmenuedittip].nav .nav-child li").on({mouseenter:function(){var e=/\bitem-(\d+)\b/.exec(t(this).attr("class"));if("string"==typeof e[1])var o=t(this).closest(".jmoddiv"),i=o.data("jmodediturl"),d=i.replace(/\/index.php\?option=com_config&controller=config.display.modules([^\d]+).+$/,"/administrator/index.php?option=com_menus&view=item&layout=edit$1"+e[1]);var a=o.data("jmenuedittip").replace("%s",e[1]),l=t('<div><a class="btn jfedit-menu" href="#" target="_blank"><span class="icon-edit"></span></a></div>');l.children("a.jfedit-menu").prop("href",d).prop("title",a),n&&t(n).popover("hide"),t(this).popover({html:!0,content:l.html(),container:"body",trigger:"manual",animation:!1,placement:"bottom"}).popover("show"),n=this,t("body>div.popover").on({mouseenter:function(){n&&t(n).clearQueue()},mouseleave:function(){n&&t(n).popover("hide")}}).find("a.jfedit-menu").tooltip({container:!1,html:!0,placement:"bottom"})},mouseleave:function(){t(this).delay(1500).queue(function(e){t(this).popover("hide"),e()})}})})}(jQuery);