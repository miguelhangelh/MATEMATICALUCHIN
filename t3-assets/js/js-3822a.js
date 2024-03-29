

/*===============================
/Luismoreno3/media/kunena/js/mediaboxAdv.js
================================================================================*/;
var Mediabox;(function(){var options,mediaArray,activeMedia,prevMedia,nextMedia,top,mTop,left,mLeft,winWidth,winHeight,fx,preload,preloadPrev=new Image(),preloadNext=new Image(),overlay,center,media,bottom,captionSplit,title,caption,number,prevLink,nextLink,container,closeLink,URL,WH,WHL,elrel,mediaWidth,mediaHeight,mediaType="none",mediaSplit,mediaId="mediaBox",margin,marginBottom;window.addEvent("domready",function(){document.id(document.body).adopt($$([overlay=new Element("div",{id:"mbOverlay"}).addEvent("click",close),center=new Element("div",{id:"mbCenter"})]).setStyle("display","none"));container=new Element("div",{id:"mbContainer"}).inject(center,"inside");media=new Element("div",{id:"mbMedia"}).inject(container,"inside");bottom=new Element("div",{id:"mbBottom"}).inject(center,"inside").adopt(closeLink=new Element("a",{id:"mbCloseLink",href:"#"}).addEvent("click",close),nextLink=new Element("a",{id:"mbNextLink",href:"#"}).addEvent("click",next),prevLink=new Element("a",{id:"mbPrevLink",href:"#"}).addEvent("click",previous),title=new Element("div",{id:"mbTitle"}),number=new Element("div",{id:"mbNumber"}),caption=new Element("div",{id:"mbCaption"}));fx={overlay:new Fx.Tween(overlay,{property:"opacity",duration:360}).set(0),media:new Fx.Tween(media,{property:"opacity",duration:360,onComplete:captionAnimate}),bottom:new Fx.Tween(bottom,{property:"opacity",duration:240}).set(0)};});Mediabox={close:function(){close();},recenter:function(){if(center&&!Browser.Platform.ios){left=window.getScrollLeft()+(window.getWidth()/2);center.setStyles({left:left,marginLeft:-(mediaWidth/2)-margin});}},open:function(_mediaArray,startMedia,_options){options={buttonText:['<big>&laquo;</big>','<big>&raquo;</big>','<big>&times;</big>'],counterText:'({x} of {y})',linkText:'<a href="{x}" target="_new">{x}</a><br/>open in a new tab</div>',flashText:'<b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.',center:true,loop:false,keyboard:true,keyboardAlpha:false,keyboardStop:false,overlayOpacity:0.8,resizeOpening:true,resizeDuration:240,initialWidth:320,initialHeight:180,defaultWidth:640,defaultHeight:360,showCaption:true,showCounter:true,countBack:false,clickBlock:true,iOShtml:true,imgBackground:false,imgPadding:100,overflow:'auto',inlineClone:false,html5:'true',scriptaccess:'true',fullscreen:'true',fullscreenNum:'1',autoplay:'true',autoplayNum:'1',autoplayYes:'yes',volume:'100',medialoop:'true',bgcolor:'#000000',wmode:'transparent',playerpath:'files/NonverBlaster.swf',showTimecode:'false',controlColor:'0xFFFFFF',controlBackColor:'0x0000000',playerBackColor:'',wmodeNB:'transparent',controller:'true',flInfo:'true',revverID:'187866',revverFullscreen:'true',revverBack:'000000',revverFront:'ffffff',revverGrad:'000000',usViewers:'true',ytBorder:'0',ytColor1:'000000',ytColor2:'333333',ytRel:'0',ytInfo:'1',ytSearch:'0',vuPlayer:'basic',vmTitle:'1',vmByline:'1',vmPortrait:'1',vmColor:'ffffff'};prevLink.set('html',options.buttonText[0]);nextLink.set('html',options.buttonText[1]);closeLink.set('html',options.buttonText[2]);if(Browser.firefox2){options.overlayOpacity=1;overlay.className='mbOverlayOpaque';}
if(Browser.Platform.ios){options.keyboard=false;options.resizeOpening=false;overlay.className='mbMobile';bottom.className='mbMobile';position();}
if(Browser.ie6){options.resizeOpening=false;overlay.className='mbOverlayAbsolute';position();}
if(typeof _mediaArray=="string"){_mediaArray=[[_mediaArray,startMedia,_options]];startMedia=0;}
mediaArray=_mediaArray;options.loop=options.loop&&(mediaArray.length>1);size();setup(true);top=window.getScrollTop()+(window.getHeight()/2);left=window.getScrollLeft()+(window.getWidth()/2);var cp=center.getStyle('padding-left').toInt();if(isNaN(cp))cp=0;var mm=media.getStyle('margin-left').toInt();if(isNaN(mm))mm=0;var mp=media.getStyle('padding-left').toInt();if(isNaN(mp))mp=0;margin=cp+mm+mp;marginBottom=bottom.getStyle('margin-left').toInt()+bottom.getStyle('padding-left').toInt()+bottom.getStyle('margin-right').toInt()+bottom.getStyle('padding-right').toInt();center.setStyles({top:top,left:left,width:options.initialWidth,height:options.initialHeight,marginTop:-(options.initialHeight/2)-margin,marginLeft:-(options.initialWidth/2)-margin,display:""});fx.resize=new Fx.Morph(center,{duration:options.resizeDuration,onComplete:mediaAnimate});fx.overlay.start(options.overlayOpacity);return changeMedia(startMedia);}};Element.implement({mediabox:function(_options,linkMapper){$$(this).mediabox(_options,linkMapper);return this;}});Elements.implement({mediabox:function(_options,linkMapper,linksFilter){linkMapper=linkMapper||function(el){elrel=el.rel.split(/[\[\]]/);elrel=elrel[1];return[el.get('href'),el.title,elrel];};linksFilter=linksFilter||function(){return true;};var links=this;links.removeEvents("click").addEvent("click",function(){var filteredArray=links.filter(linksFilter,this);var filteredLinks=[];var filteredHrefs=[];filteredArray.each(function(item,index){if(filteredHrefs.indexOf(item.toString())<0){filteredLinks.include(filteredArray[index]);filteredHrefs.include(filteredArray[index].toString());};});return Mediabox.open(filteredLinks.map(linkMapper),filteredHrefs.indexOf(this.toString()),_options);});return links;}});function position(){overlay.setStyles({top:window.getScrollTop(),left:window.getScrollLeft()});}
function size(){winWidth=window.getWidth();winHeight=window.getHeight();overlay.setStyles({width:winWidth,height:winHeight});}
function setup(open){if(Browser.firefox){["object",window.ie?"select":"embed"].forEach(function(tag){Array.forEach($$(tag),function(el){if(open)el._mediabox=el.style.visibility;el.style.visibility=open?"hidden":el._mediabox;});});}
overlay.style.display=open?"":"none";var fn=open?"addEvent":"removeEvent";if(Browser.Platform.ios||Browser.ie6)window[fn]("scroll",position);window[fn]("resize",size);if(options.keyboard)document[fn]("keydown",keyDown);}
function keyDown(event){if(options.keyboardAlpha){switch(event.code){case 27:case 88:case 67:close();break;case 37:case 80:previous();break;case 39:case 78:next();}}else{switch(event.code){case 27:close();break;case 37:previous();break;case 39:next();}}
if(options.keyboardStop){return false;};}
function previous(){return changeMedia(prevMedia);}
function next(){return changeMedia(nextMedia);}
function changeMedia(mediaIndex){if(mediaIndex>=0){media.set('html','');activeMedia=mediaIndex;prevMedia=((activeMedia||!options.loop)?activeMedia:mediaArray.length)-1;nextMedia=activeMedia+1;if(nextMedia==mediaArray.length)nextMedia=options.loop?0:-1;stop();center.className="mbLoading";if(preload&&mediaType=="inline"&&!options.inlineClone)preload.adopt(media.getChildren());if(!mediaArray[mediaIndex][2])mediaArray[mediaIndex][2]='';WH=mediaArray[mediaIndex][2].split(' ');WHL=WH.length;if(WHL>1){mediaWidth=(WH[WHL-2].match("%"))?(window.getWidth()*((WH[WHL-2].replace("%",""))*0.01)):WH[WHL-2];mediaHeight=(WH[WHL-1].match("%"))?(window.getHeight()*((WH[WHL-1].replace("%",""))*0.01)):WH[WHL-1];}else{mediaWidth="";mediaHeight="";}
URL=mediaArray[mediaIndex][0];captionSplit=mediaArray[activeMedia][1].split('::');if(URL.match(/quietube\.com/i)){mediaSplit=URL.split('v.php/');URL=mediaSplit[1];}else if(URL.match(/\/\/yfrog/i)){mediaType=(URL.substring(URL.length-1));if(mediaType.match(/b|g|j|p|t/i))mediaType='image';if(mediaType=='s')mediaType='flash';if(mediaType.match(/f|z/i))mediaType='video';URL=URL+":iphone";}
if(URL.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)||mediaType=='image'){mediaType='img';URL=URL.replace(/twitpic\.com/i,"twitpic.com/show/full");preload=new Image();preload.onload=startEffect;preload.src=URL;}else if(URL.match(/\.flv|\.mp4/i)||mediaType=='video'){mediaType='obj';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=mediaHeight||options.defaultHeight;preload=new Swiff(''+options.playerpath+'?mediaURL='+URL+'&allowSmoothing=true&autoPlay='+options.autoplay+'&buffer=6&showTimecode='+options.showTimecode+'&loop='+options.medialoop+'&controlColor='+options.controlColor+'&controlBackColor='+options.controlBackColor+'&playerBackColor='+options.playerBackColor+'&defaultVolume='+options.volume+'&scaleIfFullScreen=true&showScalingButton=true&crop=false',{id:'mbVideo',width:mediaWidth,height:mediaHeight,params:{wmode:options.wmodeNB,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i)||mediaType=='audio'){mediaType='obj';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=mediaHeight||"17";if(URL.match(/tweetmic\.com|tmic\.fm/i)){URL=URL.split('/');URL[4]=URL[4]||URL[3];URL="http://media4.fjarnet.net/tweet/tweetmicapp-"+URL[4]+'.mp3';}
preload=new Swiff(''+options.playerpath+'?mediaURL='+URL+'&allowSmoothing=true&autoPlay='+options.autoplay+'&buffer=6&showTimecode='+options.showTimecode+'&loop='+options.medialoop+'&controlColor='+options.controlColor+'&controlBackColor='+options.controlBackColor+'&defaultVolume='+options.volume+'&scaleIfFullScreen=true&showScalingButton=true&crop=false',{id:'mbAudio',width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/\.swf/i)||mediaType=='flash'){mediaType='obj';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=mediaHeight||options.defaultHeight;preload=new Swiff(URL,{id:'mbFlash',width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i)||mediaType=='qt'){mediaType='qt';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=(parseInt(mediaHeight)+16)||options.defaultHeight;preload=new Quickie(URL,{id:'MediaboxQT',width:mediaWidth,height:mediaHeight,attributes:{controller:options.controller,autoplay:options.autoplay,volume:options.volume,loop:options.medialoop,bgcolor:options.bgcolor}});startEffect();}else if(URL.match(/blip\.tv/i)){mediaType='obj';mediaWidth=mediaWidth||"640";mediaHeight=mediaHeight||"390";preload=new Swiff(URL,{src:URL,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/break\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"464";mediaHeight=mediaHeight||"376";mediaId=URL.match(/\d{6}/g);preload=new Swiff('http://embed.break.com/'+mediaId,{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/dailymotion\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"381";preload=new Swiff(URL,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/facebook\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"320";mediaHeight=mediaHeight||"240";mediaSplit=URL.split('v=');mediaSplit=mediaSplit[1].split('&');mediaId=mediaSplit[0];preload=new Swiff('http://www.facebook.com/v/'+mediaId,{movie:'http://www.facebook.com/v/'+mediaId,classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/flickr\.com(?!.+\/show\/)/i)){mediaType='obj';mediaWidth=mediaWidth||"500";mediaHeight=mediaHeight||"375";mediaSplit=URL.split('/');mediaId=mediaSplit[5];preload=new Swiff('http://www.flickr.com/apps/video/stewart.swf',{id:mediaId,classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:mediaWidth,height:mediaHeight,params:{flashvars:'photo_id='+mediaId+'&amp;show_info_box='+options.flInfo,wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/gametrailers\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"392";mediaId=URL.match(/\d{5}/g);preload=new Swiff('http://www.gametrailers.com/remote_wrap.php?mid='+mediaId,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/google\.com\/videoplay/i)){mediaType='obj';mediaWidth=mediaWidth||"400";mediaHeight=mediaHeight||"326";mediaSplit=URL.split('=');mediaId=mediaSplit[1];preload=new Swiff('http://video.google.com/googleplayer.swf?docId='+mediaId+'&autoplay='+options.autoplayNum,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/megavideo\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"640";mediaHeight=mediaHeight||"360";mediaSplit=URL.split('=');mediaId=mediaSplit[1];preload=new Swiff('http://wwwstatic.megavideo.com/mv_player.swf?v='+mediaId,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/metacafe\.com\/watch/i)){mediaType='obj';mediaWidth=mediaWidth||"400";mediaHeight=mediaHeight||"345";mediaSplit=URL.split('/');mediaId=mediaSplit[4];preload=new Swiff('http://www.metacafe.com/fplayer/'+mediaId+'/.swf?playerVars=autoPlay='+options.autoplayYes,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/vids\.myspace\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"425";mediaHeight=mediaHeight||"360";preload=new Swiff(URL,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/revver\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"392";mediaSplit=URL.split('/');mediaId=mediaSplit[4];preload=new Swiff('http://flash.revver.com/player/1.0/player.swf?mediaId='+mediaId+'&affiliateId='+options.revverID+'&allowFullScreen='+options.revverFullscreen+'&autoStart='+options.autoplay+'&backColor=#'+options.revverBack+'&frontColor=#'+options.revverFront+'&gradColor=#'+options.revverGrad+'&shareUrl=revver',{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/rutube\.ru/i)){mediaType='obj';mediaWidth=mediaWidth||"470";mediaHeight=mediaHeight||"353";mediaSplit=URL.split('=');mediaId=mediaSplit[1];preload=new Swiff('http://video.rutube.ru/'+mediaId,{movie:'http://video.rutube.ru/'+mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/tudou\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"400";mediaHeight=mediaHeight||"340";mediaSplit=URL.split('/');mediaId=mediaSplit[5];preload=new Swiff('http://www.tudou.com/v/'+mediaId,{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/twitcam\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"320";mediaHeight=mediaHeight||"265";mediaSplit=URL.split('/');mediaId=mediaSplit[3];preload=new Swiff('http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash='+mediaId,{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/twitvid\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"600";mediaHeight=mediaHeight||"338";mediaSplit=URL.split('/');mediaId=mediaSplit[3];preload=new Swiff('http://www.twitvid.com/player/'+mediaId,{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/ustream\.tv/i)){mediaType='obj';mediaWidth=mediaWidth||"400";mediaHeight=mediaHeight||"326";preload=new Swiff(URL+'&amp;viewcount='+options.usViewers+'&amp;autoplay='+options.autoplay,{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/youku\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"400";mediaSplit=URL.split('id_');mediaId=mediaSplit[1];preload=new Swiff('http://player.youku.com/player.php/sid/'+mediaId+'=/v.swf',{width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/youtube\.com\/watch/i)){mediaSplit=URL.split('v=');if(options.html5){mediaType='url';mediaWidth=mediaWidth||"640";mediaHeight=mediaHeight||"385";mediaId="mediaId_"+new Date().getTime();preload=new Element('iframe',{'src':'http://www.youtube.com/embed/'+mediaSplit[1],'id':mediaId,'width':mediaWidth,'height':mediaHeight,'frameborder':0});startEffect();}else{mediaType='obj';mediaId=mediaSplit[1];mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"385";preload=new Swiff('http://www.youtube.com/v/'+mediaId+'&autoplay='+options.autoplayNum+'&fs='+options.fullscreenNum+'&border='+options.ytBorder+'&color1=0x'+options.ytColor1+'&color2=0x'+options.ytColor2+'&rel='+options.ytRel+'&showinfo='+options.ytInfo+'&showsearch='+options.ytSearch,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}}else if(URL.match(/youtube\.com\/view/i)){mediaType='obj';mediaSplit=URL.split('p=');mediaId=mediaSplit[1];mediaWidth=mediaWidth||"480";mediaHeight=mediaHeight||"385";preload=new Swiff('http://www.youtube.com/p/'+mediaId+'&autoplay='+options.autoplayNum+'&fs='+options.fullscreenNum+'&border='+options.ytBorder+'&color1=0x'+options.ytColor1+'&color2=0x'+options.ytColor2+'&rel='+options.ytRel+'&showinfo='+options.ytInfo+'&showsearch='+options.ytSearch,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/veoh\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"410";mediaHeight=mediaHeight||"341";URL=URL.replace('%3D','/');mediaSplit=URL.split('watch/');mediaId=mediaSplit[1];preload=new Swiff('http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId='+mediaId+'&player=videodetailsembedded&videoAutoPlay='+options.AutoplayNum+'&id=anonymous',{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}else if(URL.match(/viddler\.com/i)){mediaType='obj';mediaWidth=mediaWidth||"437";mediaHeight=mediaHeight||"370";mediaSplit=URL.split('/');mediaId=mediaSplit[4];preload=new Swiff(URL,{id:'viddler_'+mediaId,movie:URL,classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen,id:'viddler_'+mediaId,movie:URL}});startEffect();}else if(URL.match(/vimeo\.com/i)){mediaWidth=mediaWidth||"640";mediaHeight=mediaHeight||"360";mediaSplit=URL.split('/');mediaId=mediaSplit[3];if(options.html5){mediaType='url';mediaId="mediaId_"+new Date().getTime();preload=new Element('iframe',{'src':'http://player.vimeo.com/video/'+mediaSplit[3]+'?portrait='+options.vmPortrait,'id':mediaId,'width':mediaWidth,'height':mediaHeight,'frameborder':0});startEffect();}else{mediaType='obj';preload=new Swiff('http://www.vimeo.com/moogaloop.swf?clip_id='+mediaId+'&amp;server=www.vimeo.com&amp;fullscreen='+options.fullscreenNum+'&amp;autoplay='+options.autoplayNum+'&amp;show_title='+options.vmTitle+'&amp;show_byline='+options.vmByline+'&amp;show_portrait='+options.vmPortrait+'&amp;color='+options.vmColor,{id:mediaId,width:mediaWidth,height:mediaHeight,params:{wmode:options.wmode,bgcolor:options.bgcolor,allowscriptaccess:options.scriptaccess,allowfullscreen:options.fullscreen}});startEffect();}}else if(URL.match(/\#mb_/i)){mediaType='inline';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=mediaHeight||options.defaultHeight;URLsplit=URL.split('#');preload=document.id(URLsplit[1]);startEffect();}else{mediaType='url';mediaWidth=mediaWidth||options.defaultWidth;mediaHeight=mediaHeight||options.defaultHeight;mediaId="mediaId_"+new Date().getTime();preload=new Element('iframe',{'src':URL,'id':mediaId,'width':mediaWidth,'height':mediaHeight,'frameborder':0});startEffect();}}
return false;}
function startEffect(){(mediaType=="img")?media.addEvent("click",next):media.removeEvent("click",next);if(mediaType=="img"){mediaWidth=preload.width;mediaHeight=preload.height;if(options.imgBackground){media.setStyles({backgroundImage:"url("+URL+")",display:""});}else{if(mediaHeight>=winHeight-options.imgPadding&&(mediaHeight/winHeight)>=(mediaWidth/winWidth)){mediaHeight=winHeight-options.imgPadding;mediaWidth=preload.width=parseInt((mediaHeight/preload.height)*mediaWidth);preload.height=mediaHeight;}else if(mediaWidth>=winWidth-options.imgPadding&&(mediaHeight/winHeight)<(mediaWidth/winWidth)){mediaWidth=winWidth-options.imgPadding;mediaHeight=preload.height=parseInt((mediaWidth/preload.width)*mediaHeight);preload.width=mediaWidth;}
if(Browser.ie)preload=document.id(preload);media.setStyles({backgroundImage:"none",display:""});preload.inject(media);}}else if(mediaType=="inline"){media.setStyles({backgroundImage:"none",display:""});(options.inlineClone)?media.grab(preload.get('html')):media.adopt(preload.getChildren());}else if(mediaType=="qt"){media.setStyles({backgroundImage:"none",display:""});preload.inject(media);}else if(mediaType=="ios"||Browser.Platform.ios){media.setStyles({backgroundImage:"none",display:""});media.set('html',options.linkText.replace(/{x}/gi,URL));mediaWidth=options.DefaultWidth;mediaHeight=options.DefaultHeight;}else if(mediaType=="url"){media.setStyles({backgroundImage:"none",display:""});preload.inject(media);}else if(mediaType=="obj"){if(Browser.Plugins.Flash.version<"8"){media.setStyles({backgroundImage:"none",display:""});media.set('html','<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');mediaWidth=options.DefaultWidth;mediaHeight=options.DefaultHeight;}else{media.setStyles({backgroundImage:"none",display:""});preload.inject(media);}}else{media.setStyles({backgroundImage:"none",display:""});media.set('html',options.flashText);mediaWidth=options.defaultWidth;mediaHeight=options.defaultHeight;}
title.set('html',(options.showCaption)?captionSplit[0]:"");caption.set('html',(options.showCaption&&(captionSplit.length>1))?captionSplit[1]:"");number.set('html',(options.showCounter&&(mediaArray.length>1))?options.counterText.replace(/{x}/,(options.countBack)?mediaArray.length-activeMedia:activeMedia+1).replace(/{y}/,mediaArray.length):"");if((prevMedia>=0)&&(mediaArray[prevMedia][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)))preloadPrev.src=mediaArray[prevMedia][0].replace(/twitpic\.com/i,"twitpic.com/show/full");if((nextMedia>=0)&&(mediaArray[nextMedia][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)))preloadNext.src=mediaArray[nextMedia][0].replace(/twitpic\.com/i,"twitpic.com/show/full");if(prevMedia>=0)prevLink.style.display="";if(nextMedia>=0)nextLink.style.display="";media.setStyles({width:mediaWidth+"px",height:mediaHeight+"px"});bottom.setStyles({width:mediaWidth-marginBottom+"px"});caption.setStyles({width:mediaWidth-marginBottom+"px"});mediaWidth=media.offsetWidth;mediaHeight=media.offsetHeight+bottom.offsetHeight;if(mediaHeight>=top+top){mTop=-top}else{mTop=-(mediaHeight/2)};if(mediaWidth>=left+left){mLeft=-left}else{mLeft=-(mediaWidth/2)};if(options.resizeOpening){fx.resize.start({width:mediaWidth,height:mediaHeight,marginTop:mTop-margin,marginLeft:mLeft-margin});}else{center.setStyles({width:mediaWidth,height:mediaHeight,marginTop:mTop-margin,marginLeft:mLeft-margin});mediaAnimate();}}
function mediaAnimate(){fx.media.start(1);}
function captionAnimate(){center.className="";fx.bottom.start(1);}
function stop(){if(preload){if(mediaType=="inline"&&!options.inlineClone)preload.adopt(media.getChildren());preload.onload=function(){};}
fx.resize.cancel();fx.media.cancel().set(0);fx.bottom.cancel().set(0);$$(prevLink,nextLink).setStyle("display","none");}
function close(){if(activeMedia>=0){if(mediaType=="inline"&&!options.inlineClone)preload.adopt(media.getChildren());preload.onload=function(){};media.empty();for(var f in fx)fx[f].cancel();center.setStyle("display","none");fx.overlay.chain(setup).start(0);}
return false;}})();Browser.Plugins.QuickTime=(function(){if(navigator.plugins){for(var i=0,l=navigator.plugins.length;i<l;i++){if(navigator.plugins[i].name.indexOf('QuickTime')>=0){return true;}}}else{try{var test=new ActiveXObject('QuickTime.QuickTime');}
catch(e){}
if(test){return true;}}
return false;})();Mediabox.scanPage=function(){var links=$$("a").filter(function(el){return el.rel&&el.rel.test(/^lightbox/i);});links.mediabox({},null,function(el){var rel0=this.rel.replace(/[[]|]/gi," ");var relsize=rel0.split(" ");return(this==el)||((this.rel.length>8)&&el.rel.match(relsize[1]));});};window.addEvents({domready:Mediabox.scanPage,resize:Mediabox.recenter});


/*===============================
/Luismoreno3/media/kunena/js/default.js
================================================================================*/;
var KunenaTabs=new Class({Implements:[Options,Events],options:{display:0,onActive:function(title,description){description.setStyle('display','block');title.addClass('open').removeClass('closed');},onBackground:function(title,description){description.setStyle('display','none');title.addClass('closed').removeClass('open');},titleSelector:'dt',descriptionSelector:'dd'},initialize:function(dlist,options){this.setOptions(options);this.dlist=document.id(dlist);this.titles=this.dlist.getChildren(this.options.titleSelector);this.descriptions=this.dlist.getChildren(this.options.descriptionSelector);this.content=new Element('div').inject(this.dlist,'after').addClass('current');for(var i=0,l=this.titles.length;i<l;i++){var title=this.titles[i];var description=this.descriptions[i];title.setStyle('cursor','pointer');title.addEvent('click',this.display.bind(this,i));description.inject(this.content);}
if(this.options.display!=null)this.display(this.options.display);if(this.options.initialize)this.options.initialize.call(this);},hideAllBut:function(but){for(var i=0,l=this.titles.length;i<l;i++){if(i!=but)this.fireEvent('onBackground',[this.titles[i],this.descriptions[i]]);}},display:function(i){this.hideAllBut(i);this.fireEvent('onActive',[this.titles[i],this.descriptions[i]]);}});var Autocompleter=new Class({Implements:[Options,Events],options:{minLength:1,markQuery:true,width:'inherit',maxChoices:10,injectChoice:null,customChoices:null,emptyChoices:null,visibleChoices:true,className:'autocompleter-choices',zIndex:42,delay:400,observerOptions:{},fxOptions:{},autoSubmit:false,overflow:false,overflowMargin:25,selectFirst:false,filter:null,filterCase:false,filterSubset:false,forceSelect:false,selectMode:true,choicesMatch:null,multiple:false,separator:', ',separatorSplit:/\s*[,;]\s*/,autoTrim:false,allowDupes:false,cache:true,relative:false},initialize:function(element,options){this.element=document.id(element);this.setOptions(options);this.build();this.observer=new Observer(this.element,this.prefetch.bind(this),Object.merge({'delay':this.options.delay},this.options.observerOptions));this.queryValue=null;if(this.options.filter)this.filter=this.options.filter.bind(this);var mode=this.options.selectMode;this.typeAhead=(mode=='type-ahead');this.selectMode=(mode===true)?'selection':mode;this.cached=[];},build:function(){if(document.id(this.options.customChoices)){this.choices=this.options.customChoices;}else{this.choices=new Element('ul',{'class':this.options.className,'styles':{'zIndex':this.options.zIndex}}).inject(document.body);this.relative=false;if(this.options.relative){this.choices.inject(this.element,'after');this.relative=this.element.getOffsetParent();}
this.fix=new OverlayFix(this.choices);}
if(!this.options.separator.test(this.options.separatorSplit)){this.options.separatorSplit=this.options.separator;}
this.fx=(!this.options.fxOptions)?null:new Fx.Tween(this.choices,Object.merge({'property':'opacity','link':'cancel','duration':200},this.options.fxOptions)).addEvent('onStart',Chain.prototype.clearChain).set(0);this.element.setProperty('autocomplete','off').addEvent((Browser.ie||Browser.safari||Browser.chrome)?'keydown':'keypress',this.onCommand.bind(this)).addEvent('click',this.onCommand.bind(this,[false])).addEvent('focus',this.toggleFocus.pass({bind:this,arguments:true,delay:100})).addEvent('blur',this.toggleFocus.pass({bind:this,arguments:false,delay:100}));},destroy:function(){if(this.fix)this.fix.destroy();this.choices=this.selected=this.choices.destroy();},toggleFocus:function(state){this.focussed=state;if(!state)this.hideChoices(true);this.fireEvent((state)?'onFocus':'onBlur',[this.element]);},onCommand:function(e){if(!e&&this.focussed)return this.prefetch();if(e&&e.key&&!e.shift){switch(e.key){case'enter':if(this.element.value!=this.opted)return true;if(this.selected&&this.visible){this.choiceSelect(this.selected);return!!(this.options.autoSubmit);}
break;case'up':case'down':if(!this.prefetch()&&this.queryValue!==null){var up=(e.key=='up');this.choiceOver((this.selected||this.choices)[(this.selected)?((up)?'getPrevious':'getNext'):((up)?'getLast':'getFirst')](this.options.choicesMatch),true);}
return false;case'esc':case'tab':this.hideChoices(true);break;}}
return true;},setSelection:function(finish){var input=this.selected.inputValue,value=input;var start=this.queryValue.length,end=input.length;if(input.substr(0,start).toLowerCase()!=this.queryValue.toLowerCase())start=0;if(this.options.multiple){var split=this.options.separatorSplit;value=this.element.value;start+=this.queryIndex;end+=this.queryIndex;var old=value.substr(this.queryIndex).split(split,1)[0];value=value.substr(0,this.queryIndex)+input+value.substr(this.queryIndex+old.length);if(finish){var tokens=value.split(this.options.separatorSplit).filter(function(entry){return this.test(entry);},/[^\s,]+/);if(!this.options.allowDupes)tokens=[].combine(tokens);var sep=this.options.separator;value=tokens.join(sep)+sep;end=value.length;}}
this.observer.setValue(value);this.opted=value;if(finish||this.selectMode=='pick')start=end;this.element.selectRange(start,end);this.fireEvent('onSelection',[this.element,this.selected,value,input]);},showChoices:function(){var match=this.options.choicesMatch,first=this.choices.getFirst(match);this.selected=this.selectedValue=null;if(this.fix){var pos=this.element.getCoordinates(this.relative),width=this.options.width||'auto';this.choices.setStyles({'left':pos.left,'top':pos.bottom,'width':(width===true||width=='inherit')?pos.width:width});}
if(!first)return;if(!this.visible){this.visible=true;this.choices.setStyle('display','');if(this.fx)this.fx.start(1);this.fireEvent('onShow',[this.element,this.choices]);}
if(this.options.selectFirst||this.typeAhead||first.inputValue==this.queryValue)this.choiceOver(first,this.typeAhead);var items=this.choices.getChildren(match),max=this.options.maxChoices;var styles={'overflowY':'hidden','height':''};this.overflown=false;if(items.length>max){var item=items[max-1];styles.overflowY='scroll';styles.height=item.getCoordinates(this.choices).bottom;this.overflown=true;};this.choices.setStyles(styles);this.fix.show();if(this.options.visibleChoices){var scroll=document.getScroll(),size=document.getSize(),coords=this.choices.getCoordinates();if(coords.right>scroll.x+size.x)scroll.x=coords.right-size.x;if(coords.bottom>scroll.y+size.y)scroll.y=coords.bottom-size.y;window.scrollTo(Math.min(scroll.x,coords.left),Math.min(scroll.y,coords.top));}},hideChoices:function(clear){if(clear){var value=this.element.value;if(this.options.forceSelect)value=this.opted;if(this.options.autoTrim){value=value.split(this.options.separatorSplit).filter($arguments(0)).join(this.options.separator);}
this.observer.setValue(value);}
if(!this.visible)return;this.visible=false;if(this.selected)this.selected.removeClass('autocompleter-selected');this.observer.clear();var hide=function(){this.choices.setStyle('display','none');this.fix.hide();}.bind(this);if(this.fx)this.fx.start(0).chain(hide);else hide();this.fireEvent('onHide',[this.element,this.choices]);},prefetch:function(){var value=this.element.value,query=value;if(this.options.multiple){var split=this.options.separatorSplit;var values=value.split(split);var index=this.element.getSelectedRange().start;var toIndex=value.substr(0,index).split(split);var last=toIndex.length-1;index-=toIndex[last].length;query=values[last];}
if(query.length<this.options.minLength){this.hideChoices();}else{if(query===this.queryValue||(this.visible&&query==this.selectedValue)){if(this.visible)return false;this.showChoices();}else{this.queryValue=query;this.queryIndex=index;if(!this.fetchCached())this.query();}}
return true;},fetchCached:function(){if(!this.options.cache||!this.cached||!this.cached.length||this.cached.length>=this.options.maxChoices||this.queryValue){return false;}
this.update(this.filter(this.cached));return true;},update:function(tokens){this.choices.empty();this.cached=tokens;var type=tokens&&typeOf(tokens);if(!type||(type=='array'&&!tokens.length)||(type=='hash'&&!tokens.getLength())){(this.options.emptyChoices||this.hideChoices).call(this);}else{if(this.options.maxChoices<tokens.length&&!this.options.overflow)tokens.length=this.options.maxChoices;tokens.each(this.options.injectChoice||function(token){var choice=new Element('li',{'html':this.markQueryValue(token)});choice.inputValue=token;this.addChoiceEvents(choice).inject(this.choices);},this);this.showChoices();}},choiceOver:function(choice,selection){if(!choice||choice==this.selected)return;if(this.selected)this.selected.removeClass('autocompleter-selected');this.selected=choice.addClass('autocompleter-selected');this.fireEvent('onSelect',[this.element,this.selected,selection]);if(!this.selectMode)this.opted=this.element.value;if(!selection)return;this.selectedValue=this.selected.inputValue;if(this.overflown){var coords=this.selected.getCoordinates(this.choices),margin=this.options.overflowMargin,top=this.choices.scrollTop,height=this.choices.offsetHeight,bottom=top+height;if(coords.top-margin<top&&top)this.choices.scrollTop=Math.max(coords.top-margin,0);else if(coords.bottom+margin>bottom)this.choices.scrollTop=Math.min(coords.bottom-height+margin,bottom);}
if(this.selectMode)this.setSelection();},choiceSelect:function(choice){if(choice)this.choiceOver(choice);this.setSelection(true);this.queryValue=false;this.hideChoices();},filter:function(tokens){return(tokens||this.tokens).filter(function(token){return this.test(token);},new RegExp(((this.options.filterSubset)?'':'^')+this.queryValue.escapeRegExp(),(this.options.filterCase)?'':'i'));},markQueryValue:function(str){return(!this.options.markQuery||!this.queryValue)?str:str.replace(new RegExp('('+((this.options.filterSubset)?'':'^')+this.queryValue.escapeRegExp()+')',(this.options.filterCase)?'':'i'),'<span class="autocompleter-queried">$1</span>');},addChoiceEvents:function(el){return el.addEvents({'mouseover':this.choiceOver.bind(this,el),'click':this.choiceSelect.bind(this,el)});}});var OverlayFix=new Class({initialize:function(el){if(Browser.ie){this.element=document.id(el);this.relative=this.element.getOffsetParent();this.fix=new Element('iframe',{'frameborder':'0','scrolling':'no','src':'javascript:false;','styles':{'position':'absolute','border':'none','display':'none','filter':'progid:DXImageTransform.Microsoft.Alpha(opacity=0)'}}).inject(this.element,'after');}},show:function(){if(this.fix){var coords=this.element.getCoordinates(this.relative);delete coords.right;delete coords.bottom;this.fix.setStyles(Object.append(coords,{'display':'','zIndex':(this.element.getStyle('zIndex')||1)-1}));}
return this;},hide:function(){if(this.fix)this.fix.setStyle('display','none');return this;},destroy:function(){if(this.fix)this.fix=this.fix.destroy();}});Element.implement({getSelectedRange:function(){if(!Browser.ie)return{start:this.selectionStart,end:this.selectionEnd};var pos={start:0,end:0};var range=this.getDocument().selection.createRange();if(!range||range.parentElement()!=this)return pos;var dup=range.duplicate();if(this.type=='text'){pos.start=0-dup.moveStart('character',-100000);pos.end=pos.start+range.text.length;}else{var value=this.value;var offset=value.length-value.match(/[\n\r]*$/)[0].length;dup.moveToElementText(this);dup.setEndPoint('StartToEnd',range);pos.end=offset-dup.text.length;dup.setEndPoint('StartToStart',range);pos.start=offset-dup.text.length;}
return pos;},selectRange:function(start,end){if(Browser.ie){var diff=this.value.substr(start,end-start).replace(/\r/g,'').length;start=this.value.substr(0,start).replace(/\r/g,'').length;var range=this.createTextRange();range.collapse(true);range.moveEnd('character',start+diff);range.moveStart('character',start);range.select();}else{this.focus();this.setSelectionRange(start,end);}
return this;}});Autocompleter.Base=Autocompleter;Autocompleter.Local=new Class({Extends:Autocompleter,options:{minLength:0,delay:200},initialize:function(element,tokens,options){this.parent(element,options);this.tokens=tokens;},query:function(){this.update(this.filter());}});Autocompleter.Request=new Class({Extends:Autocompleter,options:{postData:{},ajaxOptions:{},postVar:'value'},query:function(){var data=Object.clone(this.options.postData)||{};data[this.options.postVar]=this.queryValue;var indicator=document.id(this.options.indicator);if(indicator)indicator.setStyle('display','');var cls=this.options.indicatorClass;if(cls)this.element.addClass(cls);this.fireEvent('onRequest',[this.element,this.request,data,this.queryValue]);this.request.send({'data':data});},queryResponse:function(){var indicator=document.id(this.options.indicator);if(indicator)indicator.setStyle('display','none');var cls=this.options.indicatorClass;if(cls)this.element.removeClass(cls);return this.fireEvent('onComplete',[this.element,this.request]);}});Autocompleter.Request.JSON=new Class({Extends:Autocompleter.Request,secure:false,initialize:function(el,url,options){this.parent(el,options);this.request=new Request.JSON(Object.merge({'secure':false,'url':url,'link':'cancel'},this.options.ajaxOptions)).addEvent('onComplete',this.queryResponse.bind(this));},queryResponse:function(response){this.parent();this.update(response);}});Autocompleter.Ajax={Base:Autocompleter.Request,Json:Autocompleter.Request.JSON,Xhtml:Autocompleter.Request.HTML};var Observer=new Class({Implements:[Options,Events],options:{periodical:false,delay:1000},initialize:function(el,onFired,options){this.element=document.id(el)||$$(el);this.addEvent('onFired',onFired);this.setOptions(options);this.bound=this.changed.bind(this);this.resume();},changed:function(){var value=this.element.get('value');if($equals(this.value,value))return;this.clear();this.value=value;this.timeout=this.onFired.delay(this.options.delay,this);},setValue:function(value){this.value=value;this.element.set('value',value);return this.clear();},onFired:function(){this.fireEvent('onFired',[this.value,this.element]);},clear:function(){clearInterval(this.timeout||null);return this;},pause:function(){if(this.timer)clearInterval(this.timer);else this.element.removeEvent('keyup',this.bound);return this.clear();},resume:function(){this.value=this.element.get('value');if(this.options.periodical)this.timer=this.changed.periodical(this.options.periodical,this);else this.element.addEvent('keyup',this.bound);return this;}});var $equals=function(obj1,obj2){return(obj1==obj2||JSON.encode(obj1)==JSON.encode(obj2));};function kRequestShowTopics(catid,select,list){select.set('value',0).fireEvent('change',select);var first=select.getFirst().clone();select.empty().grab(first);list.each(function(item){var option=new Element('option',{'value':item.id,'html':item.subject});select.grab(option);});}
function kRequestGetTopics(el){var catid=el.get("value");var select=document.id('kmod_topics');request=new Request.JSON({secure:false,url:kunena_url_ajax,onSuccess:function(response){kRequestShowTopics(catid,select,response.topiclist);}}).post({'catid':catid});}
function kunenaSelectUsernameView(kobj,kuser){var kform=kobj.getParent('form');if(kobj.get('checked')){kform.getElement('input[name=authorname]').removeProperty('disabled').setStyle('display','inline').set('value',kunena_anonymous_name);}else{kform.getElement('input[name=authorname]').set('disabled','disabled').setStyle('display','none').set('value',kuser);}}
function kunenatableOrdering(order,dir,task,form){var form=document.getElementById(form);form.filter_order.value=order;form.filter_order_Dir.value=dir;form.submit(task);}
window.addEvent('domready',function(){$$('.kqreply').each(function(el){el.addEvent('click',function(e){e.stop();var kreply=this.get('id');var kstate=document.id(kreply+'_form').getStyle('display');$$('.kreply-form').setStyle('display','none');document.id(kreply+'_form').setStyle('display','block');if(document.id(kreply+'_form').getElement('input[name=anonymous]')){var kuser=document.id(kreply+'_form').getElement('input[name=authorname]').get('value');kunenaSelectUsernameView(document.id(kreply+'_form').getElement('input[name=anonymous]'),kuser);document.id(kreply+'_form').getElement('input[name=anonymous]').addEvent('click',function(e){kunenaSelectUsernameView(this,kuser);});}});});$$('.kreply-cancel').addEvent('click',function(e){$$('.kreply-form').setStyle('display','none');});$$('input.kcheckall').addEvent('click',function(e){this.getParent('form').getElements('input.kcheck').each(function(el){if(el.get('checked')==false){el.set('checked',true);el.set('value','1');}else{el.set('value','0');el.set('checked',false);}});});$$('select.kchecktask').addEvent('change',function(e){ktarget=this.getSiblings('select[name=target]');if(this.get('value')=='move'){ktarget.removeProperty('disabled');}else{ktarget.setProperty('disabled','disabled');}});if(document.id('kmod_categories')!=undefined){document.id('kmod_categories').addEvent('change',function(e){kRequestGetTopics(this);});}
if(document.id('kmod_topics')!=undefined){document.id('kmod_topics').addEvent('change',function(e){id=this.get('value');if(id!=0){targetid=this.get('value');document.id('kmod_subject').setStyle('display','none');}else{targetid='';document.id('kmod_subject').setStyle('display','block');}
if(id==-1){targetid='';document.id('kmod_targetid').setStyle('display','inline');}else{document.id('kmod_targetid').setStyle('display','none');}
document.id('kmod_targetid').set('value',targetid);});}
var KCookie=new Hash.Cookie('kunena_toggler',{path:'/',duration:0});$$('a.ktoggler').each(function(link){if(KCookie.get(link.getProperty('rel'))){link.removeClass('close').addClass('open');link.set('title',kunena_toggler_open);document.id(link.getProperty('rel')).setStyle('display','none');}
link.addEvent('click',function(){if(this.hasClass('close')){this.removeClass('close').addClass('open');link.set('title',kunena_toggler_open);document.id(this.getProperty('rel')).setStyle('display','none');KCookie.set(this.getProperty('rel'),1);}
else{this.removeClass('open').addClass('close');link.set('title',kunena_toggler_close);document.id(this.getProperty('rel')).setStyle('display','');KCookie.erase(this.getProperty('rel'));}});});$$('.kautocomplete-off').each(function(){this.setProperty('autocompleter','off');});if(document.id('kpassword')!=undefined&&document.id('kpassword2')!=undefined){document.id('kpassword').setProperty('autocompleter','off');document.id('kpassword2').setProperty('autocompleter','off');}
if(document.id('kpoll-moreusers')!=undefined){document.id('kpoll-moreusers').addEvent('click',function(){var displaytype=document.id('kpoll-moreusers-div').getStyle('display');if(displaytype=='none')document.id('kpoll-moreusers-div').setStyle('display');else document.id('kpoll-moreusers-div').setStyle('display','none');});}
if(document.id('kchecbox-all')!=undefined){document.id('kchecbox-all').addEvent('click',function(){if(document.id('kchecbox-all').getProperty('checked')==false){$$('.kmoderate-topic-checkbox').each(function(box){box.removeProperty('checked');});}else{$$('.kmoderate-topic-checkbox').each(function(box){box.setProperty('checked','checked');});}});}
if(document.id('kmoderate-select')!=undefined){document.id('kmoderate-select').addEvent('click',function(){if(document.id('kmoderate-select').getSelected().get('value')=='move'){document.id('kcategorytarget').setStyle('display');}});}
if(document.id('avatar_category_select')!=undefined){document.id('avatar_category_select').addEvent('change',function(e){var avatar_selected=document.id('avatar_category_select').getSelected();var td_avatar=document.id('kgallery_avatar_list');document.id('kgallery_avatar_list').empty();var url_gallery_main=document.id('Kunena_Image_Gallery_URL').get('value');var id_to_select=document.id('Kunena_'+avatar_selected.get('value'));var name_to_select=id_to_select.getProperty('name');var image_object=JSON.decode(id_to_select.get('value'));for(var i=0,len=image_object.length;i<len;++i){var SpanElement=new Element('span');var LabelElement=new Element('label');LabelElement.setProperty('for','kavatar'+i);if(name_to_select!='default'){var ImageElement=new Element('img',{src:url_gallery_main+'/'+name_to_select+'/'+image_object[i],alt:''});var InputElement=new Element('input',{id:'kavatar'+i,type:'radio',name:'avatar',value:'gallery/'+name_to_select+'/'+image_object[i]});}else{var ImageElement=new Element('img',{src:url_gallery_main+'/'+image_object[i],alt:''});var InputElement=new Element('input',{id:'kavatar'+i,type:'radio',name:'avatar',value:'gallery/'+image_object[i]});}
SpanElement.inject(td_avatar);LabelElement.inject(SpanElement);ImageElement.inject(LabelElement);InputElement.inject(SpanElement);}});}
$$('.kspoiler').each(function(el){var contentElement=el.getElement('.kspoiler-content');var expandElement=el.getElement('.kspoiler-expand');var hideElement=el.getElement('.kspoiler-hide');el.getElement('.kspoiler-header').addEvent('click',function(e){if(contentElement.style.display=="none"){contentElement.setStyle('display');expandElement.setStyle('display','none');hideElement.setStyle('display');}else{contentElement.setStyle('display','none');expandElement.setStyle('display');hideElement.setStyle('display','none');}});});$$('dl.tabs').each(function(tabs){new KunenaTabs(tabs);});});


/*===============================
/Luismoreno3/media/system/js/calendar.js
================================================================================*/;
Calendar=function(d,c,f,a){this.activeDiv=null;this.currentDateEl=null;this.getDateStatus=null;this.getDateToolTip=null;this.getDateText=null;this.timeout=null;this.onSelected=f||null;this.onClose=a||null;this.dragging=false;this.hidden=false;this.minYear=1970;this.maxYear=2050;this.dateFormat=Calendar._TT.DEF_DATE_FORMAT;this.ttDateFormat=Calendar._TT.TT_DATE_FORMAT;this.isPopup=true;this.weekNumbers=true;this.firstDayOfWeek=typeof d=="number"?d:Calendar._FD;this.showsOtherMonths=false;this.dateStr=c;this.ar_days=null;this.showsTime=false;this.time24=true;this.yearStep=2;this.hiliteToday=true;this.multiple=null;this.table=null;this.element=null;this.tbody=null;this.firstdayname=null;this.monthsCombo=null;this.yearsCombo=null;this.hilitedMonth=null;this.activeMonth=null;this.hilitedYear=null;this.activeYear=null;this.dateClicked=false;if(typeof Calendar._SDN=="undefined"){if(typeof Calendar._SDN_len=="undefined"){Calendar._SDN_len=3}var b=new Array();for(var e=8;e>0;){b[--e]=Calendar._DN[e].substr(0,Calendar._SDN_len)}Calendar._SDN=b;if(typeof Calendar._SMN_len=="undefined"){Calendar._SMN_len=3}b=new Array();for(var e=12;e>0;){b[--e]=Calendar._MN[e].substr(0,Calendar._SMN_len)}Calendar._SMN=b}};Calendar._C=null;Calendar.is_ie=(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent));Calendar.is_ie5=(Calendar.is_ie&&/msie 5\.0/i.test(navigator.userAgent));Calendar.is_opera=/opera/i.test(navigator.userAgent);Calendar.is_khtml=/Konqueror|Safari|KHTML/i.test(navigator.userAgent);Calendar.getAbsolutePos=function(e){var a=0,d=0;var c=/^div$/i.test(e.tagName);if(c&&e.scrollLeft){a=e.scrollLeft}if(c&&e.scrollTop){d=e.scrollTop}var f={x:e.offsetLeft-a,y:e.offsetTop-d};if(e.offsetParent){var b=this.getAbsolutePos(e.offsetParent);f.x+=b.x;f.y+=b.y}return f};Calendar.isRelated=function(c,a){var d=a.relatedTarget;if(!d){var b=a.type;if(b=="mouseover"){d=a.fromElement}else{if(b=="mouseout"){d=a.toElement}}}while(d){if(d==c){return true}d=d.parentNode}return false};Calendar.removeClass=function(e,d){if(!(e&&e.className)){return}var a=e.className.split(" ");var b=new Array();for(var c=a.length;c>0;){if(a[--c]!=d){b[b.length]=a[c]}}e.className=b.join(" ")};Calendar.addClass=function(b,a){Calendar.removeClass(b,a);b.className+=" "+a};Calendar.getElement=function(a){var b=Calendar.is_ie?window.event.srcElement:a.currentTarget;while(b.nodeType!=1||/^div$/i.test(b.tagName)){b=b.parentNode}return b};Calendar.getTargetElement=function(a){var b=Calendar.is_ie?window.event.srcElement:a.target;while(b.nodeType!=1){b=b.parentNode}return b};Calendar.stopEvent=function(a){a||(a=window.event);if(Calendar.is_ie){a.cancelBubble=true;a.returnValue=false}else{a.preventDefault();a.stopPropagation()}return false};Calendar.addEvent=function(a,c,b){if(a.attachEvent){a.attachEvent("on"+c,b)}else{if(a.addEventListener){a.addEventListener(c,b,true)}else{a["on"+c]=b}}};Calendar.removeEvent=function(a,c,b){if(a.detachEvent){a.detachEvent("on"+c,b)}else{if(a.removeEventListener){a.removeEventListener(c,b,true)}else{a["on"+c]=null}}};Calendar.createElement=function(c,b){var a=null;if(document.createElementNS){a=document.createElementNS("http://www.w3.org/1999/xhtml",c)}else{a=document.createElement(c)}if(typeof b!="undefined"){b.appendChild(a)}return a};Calendar._add_evs=function(el){with(Calendar){addEvent(el,"mouseover",dayMouseOver);addEvent(el,"mousedown",dayMouseDown);addEvent(el,"mouseout",dayMouseOut);if(is_ie){addEvent(el,"dblclick",dayMouseDblClick);el.setAttribute("unselectable",true)}}};Calendar.findMonth=function(a){if(typeof a.month!="undefined"){return a}else{if(typeof a.parentNode.month!="undefined"){return a.parentNode}}return null};Calendar.findYear=function(a){if(typeof a.year!="undefined"){return a}else{if(typeof a.parentNode.year!="undefined"){return a.parentNode}}return null};Calendar.showMonthsCombo=function(){var e=Calendar._C;if(!e){return false}var e=e;var f=e.activeDiv;var d=e.monthsCombo;if(e.hilitedMonth){Calendar.removeClass(e.hilitedMonth,"hilite")}if(e.activeMonth){Calendar.removeClass(e.activeMonth,"active")}var c=e.monthsCombo.getElementsByTagName("div")[e.date.getMonth()];Calendar.addClass(c,"active");e.activeMonth=c;var b=d.style;b.display="block";if(f.navtype<0){b.left=f.offsetLeft+"px"}else{var a=d.offsetWidth;if(typeof a=="undefined"){a=50}b.left=(f.offsetLeft+f.offsetWidth-a)+"px"}b.top=(f.offsetTop+f.offsetHeight)+"px"};Calendar.showYearsCombo=function(d){var a=Calendar._C;if(!a){return false}var a=a;var c=a.activeDiv;var f=a.yearsCombo;if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}if(a.activeYear){Calendar.removeClass(a.activeYear,"active")}a.activeYear=null;var b=a.date.getFullYear()+(d?1:-1);var j=f.firstChild;var h=false;for(var e=12;e>0;--e){if(b>=a.minYear&&b<=a.maxYear){j.innerHTML=b;j.year=b;j.style.display="block";h=true}else{j.style.display="none"}j=j.nextSibling;b+=d?a.yearStep:-a.yearStep}if(h){var k=f.style;k.display="block";if(c.navtype<0){k.left=c.offsetLeft+"px"}else{var g=f.offsetWidth;if(typeof g=="undefined"){g=50}k.left=(c.offsetLeft+c.offsetWidth-g)+"px"}k.top=(c.offsetTop+c.offsetHeight)+"px"}};Calendar.tableMouseUp=function(ev){var cal=Calendar._C;if(!cal){return false}if(cal.timeout){clearTimeout(cal.timeout)}var el=cal.activeDiv;if(!el){return false}var target=Calendar.getTargetElement(ev);ev||(ev=window.event);Calendar.removeClass(el,"active");if(target==el||target.parentNode==el){Calendar.cellClick(el,ev)}var mon=Calendar.findMonth(target);var date=null;if(mon){date=new Date(cal.date);if(mon.month!=date.getMonth()){date.setMonth(mon.month);cal.setDate(date);cal.dateClicked=false;cal.callHandler()}}else{var year=Calendar.findYear(target);if(year){date=new Date(cal.date);if(year.year!=date.getFullYear()){date.setFullYear(year.year);cal.setDate(date);cal.dateClicked=false;cal.callHandler()}}}with(Calendar){removeEvent(document,"mouseup",tableMouseUp);removeEvent(document,"mouseover",tableMouseOver);removeEvent(document,"mousemove",tableMouseOver);cal._hideCombos();_C=null;return stopEvent(ev)}};Calendar.tableMouseOver=function(n){var a=Calendar._C;if(!a){return}var c=a.activeDiv;var j=Calendar.getTargetElement(n);if(j==c||j.parentNode==c){Calendar.addClass(c,"hilite active");Calendar.addClass(c.parentNode,"rowhilite")}else{if(typeof c.navtype=="undefined"||(c.navtype!=50&&(c.navtype==0||Math.abs(c.navtype)>2))){Calendar.removeClass(c,"active")}Calendar.removeClass(c,"hilite");Calendar.removeClass(c.parentNode,"rowhilite")}n||(n=window.event);if(c.navtype==50&&j!=c){var m=Calendar.getAbsolutePos(c);var p=c.offsetWidth;var o=n.clientX;var q;var l=true;if(o>m.x+p){q=o-m.x-p;l=false}else{q=m.x-o}if(q<0){q=0}var f=c._range;var h=c._current;var g=Math.floor(q/10)%f.length;for(var e=f.length;--e>=0;){if(f[e]==h){break}}while(g-->0){if(l){if(--e<0){e=f.length-1}}else{if(++e>=f.length){e=0}}}var b=f[e];c.innerHTML=b;a.onUpdateTime()}var d=Calendar.findMonth(j);if(d){if(d.month!=a.date.getMonth()){if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}Calendar.addClass(d,"hilite");a.hilitedMonth=d}else{if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}}}else{if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}var k=Calendar.findYear(j);if(k){if(k.year!=a.date.getFullYear()){if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}Calendar.addClass(k,"hilite");a.hilitedYear=k}else{if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}}}else{if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}}}return Calendar.stopEvent(n)};Calendar.tableMouseDown=function(a){if(Calendar.getTargetElement(a)==Calendar.getElement(a)){return Calendar.stopEvent(a)}};Calendar.calDragIt=function(b){var c=Calendar._C;if(!(c&&c.dragging)){return false}var e;var d;if(Calendar.is_ie){d=window.event.clientY+document.body.scrollTop;e=window.event.clientX+document.body.scrollLeft}else{e=b.pageX;d=b.pageY}c.hideShowCovered();var a=c.element.style;a.left=(e-c.xOffs)+"px";a.top=(d-c.yOffs)+"px";return Calendar.stopEvent(b)};Calendar.calDragEnd=function(ev){var cal=Calendar._C;if(!cal){return false}cal.dragging=false;with(Calendar){removeEvent(document,"mousemove",calDragIt);removeEvent(document,"mouseup",calDragEnd);tableMouseUp(ev)}cal.hideShowCovered()};Calendar.dayMouseDown=function(ev){var el=Calendar.getElement(ev);if(el.disabled){return false}var cal=el.calendar;cal.activeDiv=el;Calendar._C=cal;if(el.navtype!=300){with(Calendar){if(el.navtype==50){el._current=el.innerHTML;addEvent(document,"mousemove",tableMouseOver)}else{addEvent(document,Calendar.is_ie5?"mousemove":"mouseover",tableMouseOver)}addClass(el,"hilite active");addEvent(document,"mouseup",tableMouseUp)}}else{if(cal.isPopup){cal._dragStart(ev)}}if(el.navtype==-1||el.navtype==1){if(cal.timeout){clearTimeout(cal.timeout)}cal.timeout=setTimeout("Calendar.showMonthsCombo()",250)}else{if(el.navtype==-2||el.navtype==2){if(cal.timeout){clearTimeout(cal.timeout)}cal.timeout=setTimeout((el.navtype>0)?"Calendar.showYearsCombo(true)":"Calendar.showYearsCombo(false)",250)}else{cal.timeout=null}}return Calendar.stopEvent(ev)};Calendar.dayMouseDblClick=function(a){Calendar.cellClick(Calendar.getElement(a),a||window.event);if(Calendar.is_ie){document.selection.empty()}};Calendar.dayMouseOver=function(b){var a=Calendar.getElement(b);if(Calendar.isRelated(a,b)||Calendar._C||a.disabled){return false}if(a.ttip){if(a.ttip.substr(0,1)=="_"){a.ttip=a.caldate.print(a.calendar.ttDateFormat)+a.ttip.substr(1)}a.calendar.tooltips.innerHTML=a.ttip}if(a.navtype!=300){Calendar.addClass(a,"hilite");if(a.caldate){Calendar.addClass(a.parentNode,"rowhilite");var c=a.calendar;if(c&&c.getDateToolTip){var e=a.caldate;window.status=e;a.title=c.getDateToolTip(e,e.getFullYear(),e.getMonth(),e.getDate())}}}return Calendar.stopEvent(b)};Calendar.dayMouseOut=function(ev){with(Calendar){var el=getElement(ev);if(isRelated(el,ev)||_C||el.disabled){return false}removeClass(el,"hilite");if(el.caldate){removeClass(el.parentNode,"rowhilite")}if(el.calendar){el.calendar.tooltips.innerHTML=_TT.SEL_DATE}}};Calendar.cellClick=function(e,o){var c=e.calendar;var h=false;var l=false;var f=null;if(typeof e.navtype=="undefined"){if(c.currentDateEl){Calendar.removeClass(c.currentDateEl,"selected");Calendar.addClass(e,"selected");h=(c.currentDateEl==e);if(!h){c.currentDateEl=e}}c.date.setDateOnly(e.caldate);f=c.date;var b=!(c.dateClicked=!e.otherMonth);if(!b&&!c.currentDateEl&&c.multiple){c._toggleMultipleDate(new Date(f))}else{l=!e.disabled}if(b){c._init(c.firstDayOfWeek,f)}}else{if(e.navtype==200){Calendar.removeClass(e,"hilite");c.callCloseHandler();return}f=new Date(c.date);if(e.navtype==0){f.setDateOnly(new Date())}c.dateClicked=false;var n=f.getFullYear();var g=f.getMonth();function a(q){var r=f.getDate();var i=f.getMonthDays(q);if(r>i){f.setDate(i)}f.setMonth(q)}switch(e.navtype){case 400:Calendar.removeClass(e,"hilite");var p=Calendar._TT.ABOUT;if(typeof p!="undefined"){p+=c.showsTime?Calendar._TT.ABOUT_TIME:""}else{p='Help and about box text is not translated into this language.\nIf you know this language and you feel generous please update\nthe corresponding file in "lang" subdir to match calendar-en.js\nand send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\nThank you!\nhttp://dynarch.com/mishoo/calendar.epl\n'}alert(p);return;case-2:if(n>c.minYear){f.setFullYear(n-1)}break;case-1:if(g>0){a(g-1)}else{if(n-->c.minYear){f.setFullYear(n);a(11)}}break;case 1:if(g<11){a(g+1)}else{if(n<c.maxYear){f.setFullYear(n+1);a(0)}}break;case 2:if(n<c.maxYear){f.setFullYear(n+1)}break;case 100:c.setFirstDayOfWeek(e.fdow);return;case 50:var k=e._range;var m=e.innerHTML;for(var j=k.length;--j>=0;){if(k[j]==m){break}}if(o&&o.shiftKey){if(--j<0){j=k.length-1}}else{if(++j>=k.length){j=0}}var d=k[j];e.innerHTML=d;c.onUpdateTime();return;case 0:if((typeof c.getDateStatus=="function")&&c.getDateStatus(f,f.getFullYear(),f.getMonth(),f.getDate())){return false}break}if(!f.equalsTo(c.date)){c.setDate(f);l=true}else{if(e.navtype==0){l=h=true}}}if(l){o&&c.callHandler()}if(h){Calendar.removeClass(e,"hilite");o&&c.callCloseHandler()}};Calendar.prototype.create=function(n){var m=null;if(!n){m=document.getElementsByTagName("body")[0];this.isPopup=true}else{m=n;this.isPopup=false}this.date=this.dateStr?new Date(this.dateStr):new Date();var q=Calendar.createElement("table");this.table=q;q.cellSpacing=0;q.cellPadding=0;q.calendar=this;Calendar.addEvent(q,"mousedown",Calendar.tableMouseDown);var a=Calendar.createElement("div");this.element=a;a.className="calendar";if(this.isPopup){a.style.position="absolute";a.style.display="none"}a.appendChild(q);var k=Calendar.createElement("thead",q);var o=null;var r=null;var b=this;var e=function(s,j,i){o=Calendar.createElement("td",r);o.colSpan=j;o.className="button";if(i!=0&&Math.abs(i)<=2){o.className+=" nav"}Calendar._add_evs(o);o.calendar=b;o.navtype=i;o.innerHTML="<div unselectable='on'>"+s+"</div>";return o};r=Calendar.createElement("tr",k);var c=6;(this.isPopup)&&--c;(this.weekNumbers)&&++c;e("?",1,400).ttip=Calendar._TT.INFO;this.title=e("",c,300);this.title.className="title";if(this.isPopup){this.title.ttip=Calendar._TT.DRAG_TO_MOVE;this.title.style.cursor="move";e("&#x00d7;",1,200).ttip=Calendar._TT.CLOSE}r=Calendar.createElement("tr",k);r.className="headrow";this._nav_py=e("&#x00ab;",1,-2);this._nav_py.ttip=Calendar._TT.PREV_YEAR;this._nav_pm=e("&#x2039;",1,-1);this._nav_pm.ttip=Calendar._TT.PREV_MONTH;this._nav_now=e(Calendar._TT.TODAY,this.weekNumbers?4:3,0);this._nav_now.ttip=Calendar._TT.GO_TODAY;this._nav_nm=e("&#x203a;",1,1);this._nav_nm.ttip=Calendar._TT.NEXT_MONTH;this._nav_ny=e("&#x00bb;",1,2);this._nav_ny.ttip=Calendar._TT.NEXT_YEAR;r=Calendar.createElement("tr",k);r.className="daynames";if(this.weekNumbers){o=Calendar.createElement("td",r);o.className="name wn";o.innerHTML=Calendar._TT.WK}for(var h=7;h>0;--h){o=Calendar.createElement("td",r);if(!h){o.navtype=100;o.calendar=this;Calendar._add_evs(o)}}this.firstdayname=(this.weekNumbers)?r.firstChild.nextSibling:r.firstChild;this._displayWeekdays();var g=Calendar.createElement("tbody",q);this.tbody=g;for(h=6;h>0;--h){r=Calendar.createElement("tr",g);if(this.weekNumbers){o=Calendar.createElement("td",r)}for(var f=7;f>0;--f){o=Calendar.createElement("td",r);o.calendar=this;Calendar._add_evs(o)}}if(this.showsTime){r=Calendar.createElement("tr",g);r.className="time";o=Calendar.createElement("td",r);o.className="time";o.colSpan=2;o.innerHTML=Calendar._TT.TIME||"&#160;";o=Calendar.createElement("td",r);o.className="time";o.colSpan=this.weekNumbers?4:3;(function(){function t(C,E,D,F){var A=Calendar.createElement("span",o);A.className=C;A.innerHTML=E;A.calendar=b;A.ttip=Calendar._TT.TIME_PART;A.navtype=50;A._range=[];if(typeof D!="number"){A._range=D}else{for(var B=D;B<=F;++B){var z;if(B<10&&F>=10){z="0"+B}else{z=""+B}A._range[A._range.length]=z}}Calendar._add_evs(A);return A}var x=b.date.getHours();var i=b.date.getMinutes();var y=!b.time24;var j=(x>12);if(y&&j){x-=12}var v=t("hour",x,y?1:0,y?12:23);var u=Calendar.createElement("span",o);u.innerHTML=":";u.className="colon";var s=t("minute",i,0,59);var w=null;o=Calendar.createElement("td",r);o.className="time";o.colSpan=2;if(y){w=t("ampm",j?"pm":"am",["am","pm"])}else{o.innerHTML="&#160;"}b.onSetTime=function(){var A,z=this.date.getHours(),B=this.date.getMinutes();if(y){A=(z>=12);if(A){z-=12}if(z==0){z=12}w.innerHTML=A?"pm":"am"}v.innerHTML=(z<10)?("0"+z):z;s.innerHTML=(B<10)?("0"+B):B};b.onUpdateTime=function(){var A=this.date;var B=parseInt(v.innerHTML,10);if(y){if(/pm/i.test(w.innerHTML)&&B<12){B+=12}else{if(/am/i.test(w.innerHTML)&&B==12){B=0}}}var C=A.getDate();var z=A.getMonth();var D=A.getFullYear();A.setHours(B);A.setMinutes(parseInt(s.innerHTML,10));A.setFullYear(D);A.setMonth(z);A.setDate(C);this.dateClicked=false;this.callHandler()}})()}else{this.onSetTime=this.onUpdateTime=function(){}}var l=Calendar.createElement("tfoot",q);r=Calendar.createElement("tr",l);r.className="footrow";o=e(Calendar._TT.SEL_DATE,this.weekNumbers?8:7,300);o.className="ttip";if(this.isPopup){o.ttip=Calendar._TT.DRAG_TO_MOVE;o.style.cursor="move"}this.tooltips=o;a=Calendar.createElement("div",this.element);this.monthsCombo=a;a.className="combo";for(h=0;h<Calendar._MN.length;++h){var d=Calendar.createElement("div");d.className=Calendar.is_ie?"label-IEfix":"label";d.month=h;d.innerHTML=Calendar._SMN[h];a.appendChild(d)}a=Calendar.createElement("div",this.element);this.yearsCombo=a;a.className="combo";for(h=12;h>0;--h){var p=Calendar.createElement("div");p.className=Calendar.is_ie?"label-IEfix":"label";a.appendChild(p)}this._init(this.firstDayOfWeek,this.date);m.appendChild(this.element)};Calendar._keyEvent=function(k){var a=window._dynarch_popupCalendar;if(!a||a.multiple){return false}(Calendar.is_ie)&&(k=window.event);var i=(Calendar.is_ie||k.type=="keypress"),l=k.keyCode;if(k.ctrlKey){switch(l){case 37:i&&Calendar.cellClick(a._nav_pm);break;case 38:i&&Calendar.cellClick(a._nav_py);break;case 39:i&&Calendar.cellClick(a._nav_nm);break;case 40:i&&Calendar.cellClick(a._nav_ny);break;default:return false}}else{switch(l){case 32:Calendar.cellClick(a._nav_now);break;case 27:i&&a.callCloseHandler();break;case 37:case 38:case 39:case 40:if(i){var e,m,j,g,c,d;e=l==37||l==38;d=(l==37||l==39)?1:7;function b(){c=a.currentDateEl;var n=c.pos;m=n&15;j=n>>4;g=a.ar_days[j][m]}b();function f(){var n=new Date(a.date);n.setDate(n.getDate()-d);a.setDate(n)}function h(){var n=new Date(a.date);n.setDate(n.getDate()+d);a.setDate(n)}while(1){switch(l){case 37:if(--m>=0){g=a.ar_days[j][m]}else{m=6;l=38;continue}break;case 38:if(--j>=0){g=a.ar_days[j][m]}else{f();b()}break;case 39:if(++m<7){g=a.ar_days[j][m]}else{m=0;l=40;continue}break;case 40:if(++j<a.ar_days.length){g=a.ar_days[j][m]}else{h();b()}break}break}if(g){if(!g.disabled){Calendar.cellClick(g)}else{if(e){f()}else{h()}}}}break;case 13:if(i){Calendar.cellClick(a.currentDateEl,k)}break;default:return false}}return Calendar.stopEvent(k)};Calendar.prototype._init=function(m,w){var v=new Date(),q=v.getFullYear(),y=v.getMonth(),b=v.getDate();this.table.style.visibility="hidden";var h=w.getFullYear();if(h<this.minYear){h=this.minYear;w.setFullYear(h)}else{if(h>this.maxYear){h=this.maxYear;w.setFullYear(h)}}this.firstDayOfWeek=m;this.date=new Date(w);var x=w.getMonth();var A=w.getDate();var z=w.getMonthDays();w.setDate(1);var r=(w.getDay()-this.firstDayOfWeek)%7;if(r<0){r+=7}w.setDate(-r);w.setDate(w.getDate()+1);var e=this.tbody.firstChild;var k=Calendar._SMN[x];var o=this.ar_days=new Array();var n=Calendar._TT.WEEKEND;var d=this.multiple?(this.datesCells={}):null;for(var t=0;t<6;++t,e=e.nextSibling){var a=e.firstChild;if(this.weekNumbers){a.className="day wn";a.innerHTML=w.getWeekNumber();a=a.nextSibling}e.className="daysrow";var u=false,f,c=o[t]=[];for(var s=0;s<7;++s,a=a.nextSibling,w.setDate(f+1)){f=w.getDate();var g=w.getDay();a.className="day";a.pos=t<<4|s;c[s]=a;var l=(w.getMonth()==x);if(!l){if(this.showsOtherMonths){a.className+=" othermonth";a.otherMonth=true}else{a.className="emptycell";a.innerHTML="&#160;";a.disabled=true;continue}}else{a.otherMonth=false;u=true}a.disabled=false;a.innerHTML=this.getDateText?this.getDateText(w,f):f;if(d){d[w.print("%Y%m%d")]=a}if(this.getDateStatus){var p=this.getDateStatus(w,h,x,f);if(p===true){a.className+=" disabled";a.disabled=true}else{if(/disabled/i.test(p)){a.disabled=true}a.className+=" "+p}}if(!a.disabled){a.caldate=new Date(w);a.ttip="_";if(!this.multiple&&l&&f==A&&this.hiliteToday){a.className+=" selected";this.currentDateEl=a}if(w.getFullYear()==q&&w.getMonth()==y&&f==b){a.className+=" today";a.ttip+=Calendar._TT.PART_TODAY}if(n.indexOf(g.toString())!=-1){a.className+=a.otherMonth?" oweekend":" weekend"}}}if(!(u||this.showsOtherMonths)){e.className="emptyrow"}}this.title.innerHTML=Calendar._MN[x]+", "+h;this.onSetTime();this.table.style.visibility="visible";this._initMultipleDates()};Calendar.prototype._initMultipleDates=function(){if(this.multiple){for(var b in this.multiple){var a=this.datesCells[b];var c=this.multiple[b];if(!c){continue}if(a){a.className+=" selected"}}}};Calendar.prototype._toggleMultipleDate=function(b){if(this.multiple){var c=b.print("%Y%m%d");var a=this.datesCells[c];if(a){var e=this.multiple[c];if(!e){Calendar.addClass(a,"selected");this.multiple[c]=b}else{Calendar.removeClass(a,"selected");delete this.multiple[c]}}}};Calendar.prototype.setDateToolTipHandler=function(a){this.getDateToolTip=a};Calendar.prototype.setDate=function(a){if(!a.equalsTo(this.date)){this._init(this.firstDayOfWeek,a)}};Calendar.prototype.refresh=function(){this._init(this.firstDayOfWeek,this.date)};Calendar.prototype.setFirstDayOfWeek=function(a){this._init(a,this.date);this._displayWeekdays()};Calendar.prototype.setDateStatusHandler=Calendar.prototype.setDisabledHandler=function(a){this.getDateStatus=a};Calendar.prototype.setRange=function(b,c){this.minYear=b;this.maxYear=c};Calendar.prototype.callHandler=function(){if(this.onSelected){this.onSelected(this,this.date.print(this.dateFormat))}};Calendar.prototype.callCloseHandler=function(){if(this.onClose){this.onClose(this)}this.hideShowCovered()};Calendar.prototype.destroy=function(){var a=this.element.parentNode;a.removeChild(this.element);Calendar._C=null;window._dynarch_popupCalendar=null};Calendar.prototype.reparent=function(b){var a=this.element;a.parentNode.removeChild(a);b.appendChild(a)};Calendar._checkCalendar=function(b){var c=window._dynarch_popupCalendar;if(!c){return false}var a=Calendar.is_ie?Calendar.getElement(b):Calendar.getTargetElement(b);for(;a!=null&&a!=c.element;a=a.parentNode){}if(a==null){window._dynarch_popupCalendar.callCloseHandler();return Calendar.stopEvent(b)}};Calendar.prototype.show=function(){var e=this.table.getElementsByTagName("tr");for(var d=e.length;d>0;){var f=e[--d];Calendar.removeClass(f,"rowhilite");var c=f.getElementsByTagName("td");for(var b=c.length;b>0;){var a=c[--b];Calendar.removeClass(a,"hilite");Calendar.removeClass(a,"active")}}this.element.style.display="block";this.hidden=false;if(this.isPopup){window._dynarch_popupCalendar=this;Calendar.addEvent(document,"keydown",Calendar._keyEvent);Calendar.addEvent(document,"keypress",Calendar._keyEvent);Calendar.addEvent(document,"mousedown",Calendar._checkCalendar)}this.hideShowCovered()};Calendar.prototype.hide=function(){if(this.isPopup){Calendar.removeEvent(document,"keydown",Calendar._keyEvent);Calendar.removeEvent(document,"keypress",Calendar._keyEvent);Calendar.removeEvent(document,"mousedown",Calendar._checkCalendar)}this.element.style.display="none";this.hidden=true;this.hideShowCovered()};Calendar.prototype.showAt=function(a,c){var b=this.element.style;b.left=a+"px";b.top=c+"px";this.show()};Calendar.prototype.showAtElement=function(c,d){var a=this;var e=Calendar.getAbsolutePos(c);if(!d||typeof d!="string"){this.showAt(e.x,e.y+c.offsetHeight);return true}function b(i){if(i.x<0){i.x=0}if(i.y<0){i.y=0}var j=document.createElement("div");var h=j.style;h.position="absolute";h.right=h.bottom=h.width=h.height="0px";document.body.appendChild(j);var g=Calendar.getAbsolutePos(j);document.body.removeChild(j);if(Calendar.is_ie){g.y+=document.body.scrollTop;g.x+=document.body.scrollLeft}else{g.y+=window.scrollY;g.x+=window.scrollX}var f=i.x+i.width-g.x;if(f>0){i.x-=f}f=i.y+i.height-g.y;if(f>0){i.y-=f}}this.element.style.display="block";Calendar.continuation_for_the_khtml_browser=function(){var f=a.element.offsetWidth;var i=a.element.offsetHeight;a.element.style.display="none";var g=d.substr(0,1);var j="l";if(d.length>1){j=d.substr(1,1)}switch(g){case"T":e.y-=i;break;case"B":e.y+=c.offsetHeight;break;case"C":e.y+=(c.offsetHeight-i)/2;break;case"t":e.y+=c.offsetHeight-i;break;case"b":break}switch(j){case"L":e.x-=f;break;case"R":e.x+=c.offsetWidth;break;case"C":e.x+=(c.offsetWidth-f)/2;break;case"l":e.x+=c.offsetWidth-f;break;case"r":break}e.width=f;e.height=i+40;a.monthsCombo.style.display="none";b(e);a.showAt(e.x,e.y)};if(Calendar.is_khtml){setTimeout("Calendar.continuation_for_the_khtml_browser()",10)}else{Calendar.continuation_for_the_khtml_browser()}};Calendar.prototype.setDateFormat=function(a){this.dateFormat=a};Calendar.prototype.setTtDateFormat=function(a){this.ttDateFormat=a};Calendar.prototype.parseDate=function(b,a){if(!a){a=this.dateFormat}this.setDate(Date.parseDate(b,a))};Calendar.prototype.hideShowCovered=function(){if(!Calendar.is_ie&&!Calendar.is_opera){return}function b(k){var i=k.style.visibility;if(!i){if(document.defaultView&&typeof(document.defaultView.getComputedStyle)=="function"){if(!Calendar.is_khtml){i=document.defaultView.getComputedStyle(k,"").getPropertyValue("visibility")}else{i=""}}else{if(k.currentStyle){i=k.currentStyle.visibility}else{i=""}}}return i}var s=new Array("applet","iframe","select");var c=this.element;var a=Calendar.getAbsolutePos(c);var f=a.x;var d=c.offsetWidth+f;var r=a.y;var q=c.offsetHeight+r;for(var h=s.length;h>0;){var g=document.getElementsByTagName(s[--h]);var e=null;for(var l=g.length;l>0;){e=g[--l];a=Calendar.getAbsolutePos(e);var o=a.x;var n=e.offsetWidth+o;var m=a.y;var j=e.offsetHeight+m;if(this.hidden||(o>d)||(n<f)||(m>q)||(j<r)){if(!e.__msh_save_visibility){e.__msh_save_visibility=b(e)}e.style.visibility=e.__msh_save_visibility}else{if(!e.__msh_save_visibility){e.__msh_save_visibility=b(e)}e.style.visibility="hidden"}}}};Calendar.prototype._displayWeekdays=function(){var b=this.firstDayOfWeek;var a=this.firstdayname;var d=Calendar._TT.WEEKEND;for(var c=0;c<7;++c){a.className="day name";var e=(c+b)%7;if(c){a.ttip=Calendar._TT.DAY_FIRST.replace("%s",Calendar._DN[e]);a.navtype=100;a.calendar=this;a.fdow=e;Calendar._add_evs(a)}if(d.indexOf(e.toString())!=-1){Calendar.addClass(a,"weekend")}a.innerHTML=Calendar._SDN[(c+b)%7];a=a.nextSibling}};Calendar.prototype._hideCombos=function(){this.monthsCombo.style.display="none";this.yearsCombo.style.display="none"};Calendar.prototype._dragStart=function(ev){if(this.dragging){return}this.dragging=true;var posX;var posY;if(Calendar.is_ie){posY=window.event.clientY+document.body.scrollTop;posX=window.event.clientX+document.body.scrollLeft}else{posY=ev.clientY+window.scrollY;posX=ev.clientX+window.scrollX}var st=this.element.style;this.xOffs=posX-parseInt(st.left);this.yOffs=posY-parseInt(st.top);with(Calendar){addEvent(document,"mousemove",calDragIt);addEvent(document,"mouseup",calDragEnd)}};Date._MD=new Array(31,28,31,30,31,30,31,31,30,31,30,31);Date.SECOND=1000;Date.MINUTE=60*Date.SECOND;Date.HOUR=60*Date.MINUTE;Date.DAY=24*Date.HOUR;Date.WEEK=7*Date.DAY;Date.parseDate=function(l,c){var n=new Date();var o=0;var e=-1;var k=0;var q=l.split(/\W+/);var p=c.match(/%./g);var h=0,g=0;var r=0;var f=0;for(h=0;h<q.length;++h){if(!q[h]){continue}switch(p[h]){case"%d":case"%e":k=parseInt(q[h],10);break;case"%m":e=parseInt(q[h],10)-1;break;case"%Y":case"%y":o=parseInt(q[h],10);(o<100)&&(o+=(o>29)?1900:2000);break;case"%b":case"%B":for(g=0;g<12;++g){if(Calendar._MN[g].substr(0,q[h].length).toLowerCase()==q[h].toLowerCase()){e=g;break}}break;case"%H":case"%I":case"%k":case"%l":r=parseInt(q[h],10);break;case"%P":case"%p":if(/pm/i.test(q[h])&&r<12){r+=12}else{if(/am/i.test(q[h])&&r>=12){r-=12}}break;case"%M":f=parseInt(q[h],10);break}}if(isNaN(o)){o=n.getFullYear()}if(isNaN(e)){e=n.getMonth()}if(isNaN(k)){k=n.getDate()}if(isNaN(r)){r=n.getHours()}if(isNaN(f)){f=n.getMinutes()}if(o!=0&&e!=-1&&k!=0){return new Date(o,e,k,r,f,0)}o=0;e=-1;k=0;for(h=0;h<q.length;++h){if(q[h].search(/[a-zA-Z]+/)!=-1){var s=-1;for(g=0;g<12;++g){if(Calendar._MN[g].substr(0,q[h].length).toLowerCase()==q[h].toLowerCase()){s=g;break}}if(s!=-1){if(e!=-1){k=e+1}e=s}}else{if(parseInt(q[h],10)<=12&&e==-1){e=q[h]-1}else{if(parseInt(q[h],10)>31&&o==0){o=parseInt(q[h],10);(o<100)&&(o+=(o>29)?1900:2000)}else{if(k==0){k=q[h]}}}}}if(o==0){o=n.getFullYear()}if(e!=-1&&k!=0){return new Date(o,e,k,r,f,0)}return n};Date.prototype.getMonthDays=function(b){var a=this.getFullYear();if(typeof b=="undefined"){b=this.getMonth()}if(((0==(a%4))&&((0!=(a%100))||(0==(a%400))))&&b==1){return 29}else{return Date._MD[b]}};Date.prototype.getDayOfYear=function(){var a=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var c=new Date(this.getFullYear(),0,0,0,0,0);var b=a-c;return Math.floor(b/Date.DAY)};Date.prototype.getWeekNumber=function(){var c=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var b=c.getDay();c.setDate(c.getDate()-(b+6)%7+3);var a=c.valueOf();c.setMonth(0);c.setDate(4);return Math.round((a-c.valueOf())/(7*86400000))+1};Date.prototype.equalsTo=function(a){return((this.getFullYear()==a.getFullYear())&&(this.getMonth()==a.getMonth())&&(this.getDate()==a.getDate())&&(this.getHours()==a.getHours())&&(this.getMinutes()==a.getMinutes()))};Date.prototype.setDateOnly=function(a){var b=new Date(a);this.setDate(1);this.setFullYear(b.getFullYear());this.setMonth(b.getMonth());this.setDate(b.getDate())};Date.prototype.print=function(l){var b=this.getMonth();var k=this.getDate();var n=this.getFullYear();var p=this.getWeekNumber();var q=this.getDay();var v={};var r=this.getHours();var c=(r>=12);var h=(c)?(r-12):r;var u=this.getDayOfYear();if(h==0){h=12}var e=this.getMinutes();var j=this.getSeconds();v["%a"]=Calendar._SDN[q];v["%A"]=Calendar._DN[q];v["%b"]=Calendar._SMN[b];v["%B"]=Calendar._MN[b];v["%C"]=1+Math.floor(n/100);v["%d"]=(k<10)?("0"+k):k;v["%e"]=k;v["%H"]=(r<10)?("0"+r):r;v["%I"]=(h<10)?("0"+h):h;v["%j"]=(u<100)?((u<10)?("00"+u):("0"+u)):u;v["%k"]=r;v["%l"]=h;v["%m"]=(b<9)?("0"+(1+b)):(1+b);v["%M"]=(e<10)?("0"+e):e;v["%n"]="\n";v["%p"]=c?"PM":"AM";v["%P"]=c?"pm":"am";v["%s"]=Math.floor(this.getTime()/1000);v["%S"]=(j<10)?("0"+j):j;v["%t"]="\t";v["%U"]=v["%W"]=v["%V"]=(p<10)?("0"+p):p;v["%u"]=q+1;v["%w"]=q;v["%y"]=(""+n).substr(2,2);v["%Y"]=n;v["%%"]="%";var t=/%./g;if(!Calendar.is_ie5&&!Calendar.is_khtml){return l.replace(t,function(a){return v[a]||a})}var o=l.match(t);for(var g=0;g<o.length;g++){var f=v[o[g]];if(f){t=new RegExp(o[g],"g");l=l.replace(t,f)}}return l};window._dynarch_popupCalendar=null;


/*===============================
/Luismoreno3/media/system/js/calendar-setup.js
================================================================================*/;
Calendar.setup=function(g){function f(h,i){if(typeof g[h]=="undefined"){g[h]=i}}f("inputField",null);f("displayArea",null);f("button",null);f("eventName","click");f("ifFormat","%Y/%m/%d");f("daFormat","%Y/%m/%d");f("singleClick",true);f("disableFunc",null);f("dateStatusFunc",g.disableFunc);f("dateTooltipFunc",null);f("dateText",null);f("firstDay",null);f("align","Br");f("range",[1900,2999]);f("weekNumbers",true);f("flat",null);f("flatCallback",null);f("onSelect",null);f("onClose",null);f("onUpdate",null);f("date",null);f("showsTime",false);f("timeFormat","24");f("electric",true);f("step",2);f("position",null);f("cache",false);f("showOthers",false);f("multiple",null);var c=["inputField","displayArea","button"];for(var b in c){if(typeof g[c[b]]=="string"){g[c[b]]=document.getElementById(g[c[b]])}}if(!(g.flat||g.multiple||g.inputField||g.displayArea||g.button)){alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");return false}function a(i){var h=i.params;var j=(i.dateClicked||h.electric);if(j&&h.inputField){h.inputField.value=i.date.print(h.ifFormat);if(typeof h.inputField.onchange=="function"){h.inputField.onchange()}}if(j&&h.displayArea){h.displayArea.innerHTML=i.date.print(h.daFormat)}if(j&&typeof h.onUpdate=="function"){h.onUpdate(i)}if(j&&h.flat){if(typeof h.flatCallback=="function"){h.flatCallback(i)}}if(j&&h.singleClick&&i.dateClicked){i.callCloseHandler()}}if(g.flat!=null){if(typeof g.flat=="string"){g.flat=document.getElementById(g.flat)}if(!g.flat){alert("Calendar.setup:\n  Flat specified but can't find parent.");return false}var e=new Calendar(g.firstDay,g.date,g.onSelect||a);e.setDateToolTipHandler(g.dateTooltipFunc);e.showsOtherMonths=g.showOthers;e.showsTime=g.showsTime;e.time24=(g.timeFormat=="24");e.params=g;e.weekNumbers=g.weekNumbers;e.setRange(g.range[0],g.range[1]);e.setDateStatusHandler(g.dateStatusFunc);e.getDateText=g.dateText;if(g.ifFormat){e.setDateFormat(g.ifFormat)}if(g.inputField&&typeof g.inputField.value=="string"){e.parseDate(g.inputField.value)}e.create(g.flat);e.show();return false}var d=g.button||g.displayArea||g.inputField;d["on"+g.eventName]=function(){var h=g.inputField||g.displayArea;var k=g.inputField?g.ifFormat:g.daFormat;var o=false;var m=window.calendar;if(h){g.date=Date.parseDate(h.value||h.innerHTML,k)}if(!(m&&g.cache)){window.calendar=m=new Calendar(g.firstDay,g.date,g.onSelect||a,g.onClose||function(i){i.hide()});m.setDateToolTipHandler(g.dateTooltipFunc);m.showsTime=g.showsTime;m.time24=(g.timeFormat=="24");m.weekNumbers=g.weekNumbers;o=true}else{if(g.date){m.setDate(g.date)}m.hide()}if(g.multiple){m.multiple={};for(var j=g.multiple.length;--j>=0;){var n=g.multiple[j];var l=n.print("%Y%m%d");m.multiple[l]=n}}m.showsOtherMonths=g.showOthers;m.yearStep=g.step;m.setRange(g.range[0],g.range[1]);m.params=g;m.setDateStatusHandler(g.dateStatusFunc);m.getDateText=g.dateText;m.setDateFormat(k);if(o){m.create()}m.refresh();if(!g.position){m.showAtElement(g.button||g.displayArea||g.inputField,g.align)}else{m.showAt(g.position[0],g.position[1])}return false};return e};


/*===============================
/Luismoreno3/plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
================================================================================*/;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.4'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.4'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))}
if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.4'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.4'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.4'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if((!isActive&&e.which!=27)||(isActive&&e.which==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="menu"]',Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.4'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.4'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(self&&self.$tip&&self.$tip.is(':visible')){self.hoverState='in'
return}
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $container=this.options.container?$(this.options.container):this.$element.parent()
var containerDim=this.getPosition($container)
placement=placement=='bottom'&&pos.bottom+actualHeight>containerDim.bottom?'top':placement=='top'&&pos.top-actualHeight<containerDim.top?'bottom':placement=='right'&&pos.right+actualWidth>containerDim.width?'left':placement=='left'&&pos.left-actualWidth<containerDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.4'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.4'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.4'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&(($active.length&&$active.hasClass('fade'))||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.4'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=$(document.body).height()
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);


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


/*===============================
/Luismoreno3/media/system/js/html5fallback.js
================================================================================*/;
!function(a,b,c){"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b});var d={init:function(c,d){var e=this;e.elem=d,e.$elem=a(d),d.H5Form=e,e.options=a.extend({},a.fn.h5f.options,c),e.field=b.createElement("input"),e.checkSupport(e),"form"===d.nodeName.toLowerCase()&&e.bindWithForm(e.elem,e.$elem)},bindWithForm:function(a,b){var d=this,e=!!b.attr("novalidate"),f=a.elements,g=f.length;for("onSubmit"===d.options.formValidationEvent&&b.on("submit",function(a){var f=this.H5Form.donotValidate!=c?this.H5Form.donotValidate:!1;f||e||d.validateForm(d)?b.find(":input").each(function(){d.placeholder(d,this,"submit")}):(a.preventDefault(),this.donotValidate=!1)}),b.on("focusout focusin",function(a){d.placeholder(d,a.target,a.type)}),b.on("focusout change",d.validateField),b.find("fieldset").on("change",function(){d.validateField(this)}),d.browser.isFormnovalidateNative||b.find(":submit[formnovalidate]").on("click",function(){d.donotValidate=!0});g--;){var h=f[g];d.polyfill(h),d.autofocus(d,h)}},polyfill:function(a){if("form"===a.nodeName.toLowerCase())return!0;var b=a.form.H5Form;b.placeholder(b,a),b.numberType(b,a)},checkSupport:function(a){a.browser={},a.browser.isRequiredNative=!!("required"in a.field),a.browser.isPatternNative=!!("pattern"in a.field),a.browser.isPlaceholderNative=!!("placeholder"in a.field),a.browser.isAutofocusNative=!!("autofocus"in a.field),a.browser.isFormnovalidateNative=!!("formnovalidate"in a.field),a.field.setAttribute("type","email"),a.browser.isEmailNative="email"==a.field.type,a.field.setAttribute("type","url"),a.browser.isUrlNative="url"==a.field.type,a.field.setAttribute("type","number"),a.browser.isNumberNative="number"==a.field.type,a.field.setAttribute("type","range"),a.browser.isRangeNative="range"==a.field.type},validateForm:function(){var a=this,b=a.elem,c=b.elements,d=c.length,e=!0;b.isValid=!0;for(var f=0;d>f;f++){var g=c[f];g.isRequired=!!g.required,g.isDisabled=!!g.disabled,g.isDisabled||(e=a.validateField(g),b.isValid&&!e&&a.setFocusOn(g),b.isValid=e&&b.isValid)}return a.options.doRenderMessage&&a.renderErrorMessages(a,b),b.isValid},validateField:function(b){var d=b.target||b;if(d.form===c)return null;{var e=d.form.H5Form,f=a(d),g=!1,h=!!a(d).attr("required");!!f.attr("disabled")}if(d.isDisabled||(g=!e.browser.isRequiredNative&&h&&e.isValueMissing(e,d),isPatternMismatched=!e.browser.isPatternNative&&e.matchPattern(e,d)),d.validityState={valueMissing:g,patterMismatch:isPatternMismatched,valid:d.isDisabled||!(g||isPatternMismatched)},e.browser.isRequiredNative||(d.validityState.valueMissing?f.addClass(e.options.requiredClass):f.removeClass(e.options.requiredClass)),e.browser.isPatternNative||(d.validityState.patterMismatch?f.addClass(e.options.patternClass):f.removeClass(e.options.patternClass)),d.validityState.valid){f.removeClass(e.options.invalidClass);var i=e.findLabel(f);i.removeClass(e.options.invalidClass)}else{f.addClass(e.options.invalidClass);var i=e.findLabel(f);i.addClass(e.options.invalidClass)}return d.validityState.valid},isValueMissing:function(d,e){var f=a(e),g=/^submit$/i,h=f.val(),i=e.type!==c?e.type:e.tagName.toLowerCase(),j=/^(checkbox|radio|fieldset)$/i;if(j.test(i)||g.test(i)){if(j.test(i)){if("checkbox"===i)return!f.is(":checked");var k;k="fieldset"===i?f.find("input"):b.getElementsByName(e.name);for(var l=0;l<k.length;l++)if(a(k[l]).is(":checked"))return!1;return!0}}else{if(""===h)return!0;if(!d.browser.isPlaceholderNative&&f.hasClass(d.options.placeholderClass))return!0}return!1},matchPattern:function(b,d){var e=a(d),f=!b.browser.isPlaceholderNative&&e.attr("placeholder")&&e.hasClass(b.options.placeholderClass)?"":e.attr("value"),g=e.attr("pattern"),h=e.attr("type");if(""!==f)if("email"===h){var i=!0;if(e.attr("multiple")===c)return!b.options.emailPatt.test(f);f=f.split(b.options.mutipleDelimiter);for(var j=0;j<f.length;j++)if(i=b.options.emailPatt.test(f[j].replace(/[ ]*/g,"")),!i)return!0}else{if("url"===h)return!b.options.urlPatt.test(f);if("text"===h&&g!==c)return usrPatt=new RegExp("^(?:"+g+")$"),!usrPatt.test(f)}return!1},placeholder:function(b,d,e){var f=a(d),g={placeholder:f.attr("placeholder")},h=/^(focusin|submit)$/i,i=/^(input|textarea)$/i,j=/^password$/i,k=b.browser.isPlaceholderNative;k||!i.test(d.nodeName)||j.test(d.type)||g.placeholder===c||(""!==d.value||h.test(e)?d.value===g.placeholder&&h.test(e)&&(d.value="",f.removeClass(b.options.placeholderClass)):(d.value=g.placeholder,f.addClass(b.options.placeholderClass)))},numberType:function(b,c){var d=a(c);if(node=/^input$/i,type=d.attr("type"),node.test(c.nodeName)&&("number"==type&&!b.browser.isNumberNative||"range"==type&&!b.browser.isRangeNative)){var e,f=parseInt(d.attr("min")),g=parseInt(d.attr("max")),h=parseInt(d.attr("step")),i=parseInt(d.attr("value")),j=d.prop("attributes"),k=a("<select>");f=isNaN(f)?-100:f;for(var l=f;g>=l;l+=h)e=a("<option>").attr("value",l).text(l),(i==l||i>l&&l+h>i)&&e.attr("selected",""),k.append(e);a.each(j,function(){k.attr(this.name,this.value)}),d.replaceWith(k)}},autofocus:function(c,d){var e=a(d),f=!!e.attr("autofocus"),g=/^(input|textarea|select|fieldset)$/i,h=/^submit$/i,i=c.browser.isAutofocusNative;!i&&g.test(d.nodeName)&&!h.test(d.type)&&f&&a(b).ready(function(){c.setFocusOn(d)})},findLabel:function(b){var c=a('label[for="'+b.attr("id")+'"]');if(c.length<=0){var d=b.parent(),e=d.get(0).tagName.toLowerCase();"label"==e&&(c=d)}return c},setFocusOn:function(b){"fieldset"===b.tagName.toLowerCase()?a(b).find(":first").focus():a(b).focus()},renderErrorMessages:function(b,c){var d=c.elements,e=d.length,f={};for(f.errors=new Array;e--;){var g=a(d[e]),h=b.findLabel(g);g.hasClass(b.options.requiredClass)&&(f.errors[e]=h.text().replace("*","")+b.options.requiredMessage),g.hasClass(b.options.patternClass)&&(f.errors[e]=h.text().replace("*","")+b.options.patternMessage)}f.errors.length>0&&Joomla.renderMessages(f)}};a.fn.h5f=function(a){return this.each(function(){var b=Object.create(d);b.init(a,this)})},a.fn.h5f.options={invalidClass:"invalid",requiredClass:"required",requiredMessage:" is required.",placeholderClass:"placeholder",patternClass:"pattern",patternMessage:" doesn't match pattern.",doRenderMessage:!1,formValidationEvent:"onSubmit",emailPatt:/^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,urlPatt:/[a-z][\-\.+a-z]*:\/\//i},a(function(){a("form").h5f({doRenderMessage:!0,requiredClass:"musthavevalue"})})}(jQuery,document);