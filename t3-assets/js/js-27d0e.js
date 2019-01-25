

/*===============================
/media/system/js/punycode.js
================================================================================*/;
/*! http://mths.be/punycode v1.2.4 (C) by @mathias | MIT License*/
!function(a){function b(a){throw RangeError(E[a])}function c(a,b){for(var c=a.length;c--;)a[c]=b(a[c]);return a}function d(a,b){return c(a.split(D),b).join(".")}function e(a){for(var b,c,d=[],e=0,f=a.length;f>e;)b=a.charCodeAt(e++),b>=55296&&56319>=b&&f>e?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function f(a){return c(a,function(a){var b="";return a>65535&&(a-=65536,b+=H(a>>>10&1023|55296),a=56320|1023&a),b+=H(a)}).join("")}function g(a){return 10>a-48?a-22:26>a-65?a-65:26>a-97?a-97:t}function h(a,b){return a+22+75*(26>a)-((0!=b)<<5)}function i(a,b,c){var d=0;for(a=c?G(a/x):a>>1,a+=G(a/b);a>F*v>>1;d+=t)a=G(a/F);return G(d+(F+1)*a/(a+w))}function j(a){var c,d,e,h,j,k,l,m,n,o,p=[],q=a.length,r=0,w=z,x=y;for(d=a.lastIndexOf(A),0>d&&(d=0),e=0;d>e;++e)a.charCodeAt(e)>=128&&b("not-basic"),p.push(a.charCodeAt(e));for(h=d>0?d+1:0;q>h;){for(j=r,k=1,l=t;h>=q&&b("invalid-input"),m=g(a.charCodeAt(h++)),(m>=t||m>G((s-r)/k))&&b("overflow"),r+=m*k,n=x>=l?u:l>=x+v?v:l-x,!(n>m);l+=t)o=t-n,k>G(s/o)&&b("overflow"),k*=o;c=p.length+1,x=i(r-j,c,0==j),G(r/c)>s-w&&b("overflow"),w+=G(r/c),r%=c,p.splice(r++,0,w)}return f(p)}function k(a){var c,d,f,g,j,k,l,m,n,o,p,q,r,w,x,B=[];for(a=e(a),q=a.length,c=z,d=0,j=y,k=0;q>k;++k)p=a[k],128>p&&B.push(H(p));for(f=g=B.length,g&&B.push(A);q>f;){for(l=s,k=0;q>k;++k)p=a[k],p>=c&&l>p&&(l=p);for(r=f+1,l-c>G((s-d)/r)&&b("overflow"),d+=(l-c)*r,c=l,k=0;q>k;++k)if(p=a[k],c>p&&++d>s&&b("overflow"),p==c){for(m=d,n=t;o=j>=n?u:n>=j+v?v:n-j,!(o>m);n+=t)x=m-o,w=t-o,B.push(H(h(o+x%w,0))),m=G(x/w);B.push(H(h(m,0))),j=i(d,r,f==g),d=0,++f}++d,++c}return B.join("")}function l(a){return d(a,function(a){return B.test(a)?j(a.slice(4).toLowerCase()):a})}function m(a){return d(a,function(a){return C.test(a)?"xn--"+k(a):a})}var n="object"==typeof exports&&exports,o="object"==typeof module&&module&&module.exports==n&&module,p="object"==typeof global&&global;(p.global===p||p.window===p)&&(a=p);var q,r,s=2147483647,t=36,u=1,v=26,w=38,x=700,y=72,z=128,A="-",B=/^xn--/,C=/[^ -~]/,D=/\x2E|\u3002|\uFF0E|\uFF61/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},F=t-u,G=Math.floor,H=String.fromCharCode;if(q={version:"1.2.4",ucs2:{decode:e,encode:f},decode:j,encode:k,toASCII:m,toUnicode:l},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return q});else if(n&&!n.nodeType)if(o)o.exports=q;else for(r in q)q.hasOwnProperty(r)&&(n[r]=q[r]);else a.punycode=q}(this);


/*===============================
/media/system/js/validate.js
================================================================================*/;
var JFormValidator=function(){"use strict";var t,e,a,r=function(e,a,r){r=""===r?!0:r,t[e]={enabled:r,exec:a}},n=function(t,e){var a,r=jQuery(e);return t?(a=r.find("#"+t+"-lbl"),a.length?a:(a=r.find('label[for="'+t+'"]'),a.length?a:!1)):!1},i=function(t,e){var a=e.data("label");void 0===a&&(a=n(e.attr("id"),e.get(0).form),e.data("label",a)),t===!1?(e.addClass("invalid").attr("aria-invalid","true"),a&&a.addClass("invalid").attr("aria-invalid","true")):(e.removeClass("invalid").attr("aria-invalid","false"),a&&a.removeClass("invalid").attr("aria-invalid","false"))},l=function(e){var a,r,n=jQuery(e);if(n.attr("disabled"))return i(!0,n),!0;if(n.attr("required")||n.hasClass("required"))if(a=n.prop("tagName").toLowerCase(),"fieldset"===a&&(n.hasClass("radio")||n.hasClass("checkboxes"))){if(!n.find("input:checked").length)return i(!1,n),!1}else if(!n.val()||n.hasClass("placeholder")||"checkbox"===n.attr("type")&&!n.is(":checked"))return i(!1,n),!1;return r=n.attr("class")&&n.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)?n.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)[1]:"",""===r?(i(!0,n),!0):r&&"none"!==r&&t[r]&&n.val()&&t[r].exec(n.val(),n)!==!0?(i(!1,n),!1):(i(!0,n),!0)},u=function(t){var e,r,n,i,u,s,o=!0,d=[];for(e=jQuery(t).find("input, textarea, select, fieldset"),u=0,s=e.length;s>u;u++)l(e[u])===!1&&(o=!1,d.push(e[u]));if(jQuery.each(a,function(t,e){e.exec()!==!0&&(o=!1)}),!o&&d.length>0){for(r=Joomla.JText._("JLIB_FORM_FIELD_INVALID"),n={error:[]},u=d.length-1;u>=0;u--)i=jQuery(d[u]).data("label"),i&&n.error.push(r+i.text().replace("*",""));Joomla.renderMessages(n)}return o},s=function(t){var a,r=[],n=jQuery(t);a=n.find("input, textarea, select, fieldset, button");for(var i=0,s=a.length;s>i;i++){var o=jQuery(a[i]),d=o.prop("tagName").toLowerCase();"input"!==d&&"button"!==d||"submit"!==o.attr("type")&&"image"!==o.attr("type")?"button"===d||"input"===d&&"button"===o.attr("type")||(o.hasClass("required")&&o.attr("aria-required","true").attr("required","required"),"fieldset"!==d&&(o.on("blur",function(){return l(this)}),o.hasClass("validate-email")&&e&&(o.get(0).type="email")),r.push(o)):o.hasClass("validate")&&o.on("click",function(){return u(t)})}n.data("inputfields",r)},o=function(){t={},a=a||{},e=function(){var t=document.createElement("input");return t.setAttribute("type","email"),"text"!==t.type}(),r("username",function(t){var e=new RegExp("[<|>|\"|'|%|;|(|)|&]","i");return!e.test(t)}),r("password",function(t){var e=/^\S[\S ]{2,98}\S$/;return e.test(t)}),r("numeric",function(t){var e=/^(\d|-)?(\d|,)*\.?\d*$/;return e.test(t)}),r("email",function(t){t=punycode.toASCII(t);var e=/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return e.test(t)});for(var n=jQuery("form.form-validate"),i=0,l=n.length;l>i;i++)s(n[i])};return o(),{isValid:u,validate:l,setHandler:r,attachToForm:s,custom:a}};document.formvalidator=null,jQuery(function(){document.formvalidator=new JFormValidator});


/*===============================
/media/system/js/combobox.js
================================================================================*/;
(function(e,t,n){var i=function(n,i){var s={},o=function(t,n){s.$elem=e(n);s.options=e.extend({},e.fn.ComboTransform.options,t);s.$input=e(n).find('input[type="text"]');s.$dropBtnDiv=e(n).find("div.btn-group");s.$dropBtn=s.$dropBtnDiv.find('[type="button"]');s.$dropDown=e(n).find("ul.dropdown-menu"),s.$dropDownOptions=s.$dropDown.find("li a");s.$dropDown.isEmpty=false;s.$dropBtn.isClicked=false;u();a()},u=function(){var e=s.$elem.width(),t=s.$dropBtnDiv.width(),n=e-3,r=-e+t,i=s.$dropDown.width();i<n?s.$dropDown.width(n+"px"):null;s.$dropDown.css("left",r+"px");s.$dropDown.css("max-height","150px");s.$dropDown.css("overflow-y","scroll");s.$dropDown.css("left",r+"px")},a=function(){s.$input.bind("focus",f);s.$input.bind("blur",l);if(s.options.updateList){s.$input.bind("keyup",p)}s.$dropDown.on("mouseenter",function(){d("clear");s.$input.unbind("blur",l)});s.$dropDown.on("mouseleave",function(e){s.$input.bind("blur",l)});s.$dropBtn.on("click",c);s.$dropDown.find("li").on("click",h);s.$dropDown.find("li a").on("mouseenter",function(){e(this).addClass("hover");s.$currHovered=e(this)});s.$dropDown.find("li a").on("mouseleave",function(){e(this).removeClass("hover")})},f=function(){if(!s.$dropDown.isEmpty){var e=s.$dropDown.height(),t=s.$input[0].clientHeight,n=s.$input.height(),r=-(n+e);s.$dropDown.css("top","100%");s.$elem.addClass("nav-hover");s.$dropBtnDiv.addClass("open");if(!v(s.$dropDown)){s.$dropDown.css("top",r+"px")}s.$input.bind("keypress keydown keyup",g)}},l=function(){s.$elem.removeClass("nav-hover");s.$dropBtnDiv.removeClass("open");if(s.$dropBtn.isClicked){s.$dropBtn.isClicked=false;s.$dropDown.isEmpty=true}d("clear");s.$input.unbind("keypress keydown keyup",g)},c=function(){var e=s.$dropDownOptions;e.show();s.$dropBtn.isClicked=s.$dropDown.isEmpty;s.$dropDown.isEmpty=false;s.$input.focus()},h=function(t){var n=e(t.target).text();s.$input.val(n);l();return false},p=function(t){var n=t&&(t.keycode||t.which);n=t.ctrlKey||t.altKey?-1:n;if(n>47&&n<59||n>62&&n<127||n==32||n==8){var r=s.$input.val().toLowerCase(),i=s.$dropDownOptions,o=0,u=false;i.each(function(){if(this.innerHTML.toLowerCase().indexOf(r)==0){e(this).show()}else{e(this).hide();if(e(this).hasClass("hover")){u=true}o++}});if(o==i.length){s.$dropDown.isEmpty=true;l()}else{s.$dropDown.isEmpty=false;if(u){d("clear")}f()}}else if(!s.$dropDown.isEmpty){if(n==38){d("prev")}else if(n==40){d("next")}else if(n==13&&s.$currHovered!=null){s.$input.val(s.$currHovered.html());l()}}},d=function(e){if(e=="next"||e=="prev"){var t=s.$dropDownOptions.filter(":visible"),n=t.filter(".hover"),r=t.index(n),i;if(e=="prev"){r=r==-1?t.length-1:r-1}else{r=r==t.length-1?0:r+1}if(n.length!=0){n.removeClass("hover")}i=t.eq(r);s.$currHovered=i;s.$currHovered.addClass("hover");m(s.$dropDown,s.$currHovered)}else if(e=="clear"){s.$currHovered!=null?s.$currHovered.removeClass("hover"):null;s.$currHovered=null}},v=function(e){var n=e[0].getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||t.documentElement.clientHeight)&&n.right<=(window.innerWidth||t.documentElement.clientWidth)},m=function(e,t){z=e[0].getBoundingClientRect();r=t[0].getBoundingClientRect();if(!(r.top>=z.top&&r.left>=z.left&&r.top+r.height<=z.top+z.height)){var n=r.top-z.top+e.scrollTop();e.scrollTop(n)}},g=function(e){if(e.keyCode==13){e.preventDefault()}};o(n,i)};e.fn.ComboTransform=function(e){return this.each(function(){i(e,this)})};e.fn.ComboTransform.options={updateList:true};e(function(){e("div.combobox").ComboTransform({updateList:true})})})(jQuery,document)


/*===============================
/media/jui/js/chosen.jquery.min.js
================================================================================*/;
(function(){var e,t,n,r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=function(){function e(){this.options_index=0,this.parsed=[]}return e.prototype.add_node=function(e){return e.nodeName.toUpperCase()==="OPTGROUP"?this.add_group(e):this.add_option(e)},e.prototype.add_group=function(e){var t,n,r,i,s,o;t=this.parsed.length,this.parsed.push({array_index:t,group:!0,label:this.escapeExpression(e.label),children:0,disabled:e.disabled}),s=e.childNodes,o=[];for(r=0,i=s.length;r<i;r++)n=s[r],o.push(this.add_option(n,t,e.disabled));return o},e.prototype.add_option=function(e,t,n){if(e.nodeName.toUpperCase()==="OPTION")return e.text!==""?(t!=null&&(this.parsed[t].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,html:e.innerHTML,selected:e.selected,disabled:n===!0?n:e.disabled,group_array_index:t,classes:e.className,style:e.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},e.prototype.escapeExpression=function(e){var t,n;return e==null||e===!1?"":/[\&\<\>\"\'\`]/.test(e)?(t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},n=/&(?!\w+;)|[\<\>\"\'\`]/g,e.replace(n,function(e){return t[e]||"&amp;"})):e},e}(),r.select_to_array=function(e){var t,n,i,s,o;n=new r,o=e.childNodes;for(i=0,s=o.length;i<s;i++)t=o[i],n.add_node(t);return n.parsed},t=function(){function e(t,n){this.form_field=t,this.options=n!=null?n:{};if(!e.browser_is_supported())return;this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return e.prototype.set_default_values=function(){var e=this;return this.click_test_action=function(t){return e.test_active_click(t)},this.activate_action=function(t){return e.activate_field(t)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_custom_value=!1,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:!0,this.group_search=this.options.group_search!=null?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=this.options.single_backstroke_delete!=null?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=this.options.display_selected_options!=null?this.options.display_selected_options:!0,this.display_disabled_options=this.options.display_disabled_options!=null?this.options.display_disabled_options:!0},e.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||e.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||e.default_single_text,this.custom_group_text=this.form_field.getAttribute("data-custom_group_text")||this.options.custom_group_text||"Custom Value",this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||e.default_no_result_text},e.prototype.mouse_enter=function(){return this.mouse_on_container=!0},e.prototype.mouse_leave=function(){return this.mouse_on_container=!1},e.prototype.input_focus=function(e){var t=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return t.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},e.prototype.input_blur=function(e){var t=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return t.blur_test()},100)},e.prototype.results_option_build=function(e){var t,n,r,i,s;t="",s=this.results_data;for(r=0,i=s.length;r<i;r++){n=s[r],n.group?t+=this.result_add_group(n):t+=this.result_add_option(n);if(e!=null?e.first:void 0)n.selected&&this.is_multiple?this.choice_build(n):n.selected&&!this.is_multiple&&this.single_set_selected_text(n.text)}return t},e.prototype.result_add_option=function(e){var t,n;return e.search_match?this.include_option_in_results(e)?(t=[],!e.disabled&&(!e.selected||!this.is_multiple)&&t.push("active-result"),e.disabled&&(!e.selected||!this.is_multiple)&&t.push("disabled-result"),e.selected&&t.push("result-selected"),e.group_array_index!=null&&t.push("group-option"),e.classes!==""&&t.push(e.classes),n=e.style.cssText!==""?' style="'+e.style+'"':"",'<li class="'+t.join(" ")+'"'+n+' data-option-array-index="'+e.array_index+'">'+e.search_text+"</li>"):"":""},e.prototype.result_add_group=function(e){return!e.search_match&&!e.group_match?"":e.active_options>0?'<li class="group-result">'+e.search_text+"</li>":""},e.prototype.results_update_field=function(){this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build();if(this.results_showing)return this.winnow_results()},e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},e.prototype.results_search=function(e){return this.results_showing?this.winnow_results():this.results_show()},e.prototype.winnow_results=function(){var e,t,n,r,i,s,o,u,a,f,l,c,h;this.no_results_clear(),i=0,o=this.get_search_text(),e=o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),r=this.search_contains?"":"^",n=new RegExp(r+e,"i"),f=new RegExp(e,"i"),h=this.results_data;for(l=0,c=h.length;l<c;l++){t=h[l],t.search_match=!1,s=null;if(this.include_option_in_results(t)){t.group&&(t.group_match=!1,t.active_options=0),t.group_array_index!=null&&this.results_data[t.group_array_index]&&(s=this.results_data[t.group_array_index],s.active_options===0&&s.search_match&&(i+=1),s.active_options+=1);if(!t.group||!!this.group_search)t.search_text=t.group?t.label:t.html,t.search_match=this.search_string_match(t.search_text,n),t.search_match&&!t.group&&(i+=1),t.search_match?(o.length&&(u=t.search_text.search(f),a=t.search_text.substr(0,u+o.length)+"</em>"+t.search_text.substr(u+o.length),t.search_text=a.substr(0,u)+"<em>"+a.substr(u)),s!=null&&(s.group_match=!0)):t.group_array_index!=null&&this.results_data[t.group_array_index].search_match&&(t.search_match=!0)}}return this.result_clear_highlight(),i<1&&o.length?(this.update_results_content(""),this.no_results(o)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},e.prototype.search_string_match=function(e,t){var n,r,i,s;if(t.test(e))return!0;if(this.enable_split_word_search&&(e.indexOf(" ")>=0||e.indexOf("[")===0)){r=e.replace(/\[|\]/g,"").split(" ");if(r.length)for(i=0,s=r.length;i<s;i++){n=r[i];if(t.test(n))return!0}}},e.prototype.choices_count=function(){var e,t,n,r;if(this.selected_option_count!=null)return this.selected_option_count;this.selected_option_count=0,r=this.form_field.options;for(t=0,n=r.length;t<n;t++)e=r[t],e.selected&&(this.selected_option_count+=1);return this.selected_option_count},e.prototype.choices_click=function(e){e.preventDefault();if(!this.results_showing&&!this.is_disabled)return this.results_show()},e.prototype.keyup_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale();switch(t){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:e.preventDefault();if(this.results_showing)return this.result_select(e);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},e.prototype.container_width=function(){return this.options.width!=null?this.options.width:this.form_field_jq.css("width")||""+this.form_field.offsetWidth+"px"},e.prototype.include_option_in_results=function(e){return this.is_multiple&&!this.display_selected_options&&e.selected?!1:!this.display_disabled_options&&e.disabled?!1:e.empty?!1:!0},e.browser_is_supported=function(){return window.navigator.appName==="Microsoft Internet Explorer"?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},e.default_multiple_text="Select Some Options",e.default_single_text="Select an Option",e.default_no_result_text="No results match",e}(),e=jQuery,e.fn.extend({chosen:function(r){return t.browser_is_supported()?this.each(function(t){var i,s;i=e(this),s=i.data("chosen"),r==="destroy"&&s?s.destroy():s||i.data("chosen",new n(this,r))}):this}}),n=function(t){function n(){return i=n.__super__.constructor.apply(this,arguments),i}return o(n,t),n.prototype.setup=function(){return this.form_field_jq=e(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.allow_custom_value=this.form_field_jq.hasClass("chzn-custom-value")||this.options.allow_custom_value,this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},n.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},n.prototype.set_up_html=function(){var t,n;return t=["chzn-container"],t.push("chzn-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chzn-rtl"),n={"class":t.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(n.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chzn"),this.container=e("<div />",n),this.is_multiple?this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>'):this.container.html('<a class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chzn-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},n.prototype.register_observers=function(){var e=this;return this.container.bind("mousedown.chosen",function(t){e.container_mousedown(t)}),this.container.bind("mouseup.chosen",function(t){e.container_mouseup(t)}),this.container.bind("mouseenter.chosen",function(t){e.mouse_enter(t)}),this.container.bind("mouseleave.chosen",function(t){e.mouse_leave(t)}),this.search_results.bind("mouseup.chosen",function(t){e.search_results_mouseup(t)}),this.search_results.bind("mouseover.chosen",function(t){e.search_results_mouseover(t)}),this.search_results.bind("mouseout.chosen",function(t){e.search_results_mouseout(t)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(t){e.search_results_mousewheel(t)}),this.form_field_jq.bind("liszt:updated.chosen",function(t){e.results_update_field(t)}),this.form_field_jq.bind("liszt:activate.chosen",function(t){e.activate_field(t)}),this.form_field_jq.bind("liszt:open.chosen",function(t){e.container_mousedown(t)}),this.search_field.bind("blur.chosen",function(t){e.input_blur(t)}),this.search_field.bind("keyup.chosen",function(t){e.keyup_checker(t)}),this.search_field.bind("keydown.chosen",function(t){e.keydown_checker(t)}),this.search_field.bind("focus.chosen",function(t){e.input_focus(t)}),this.is_multiple?this.search_choices.bind("click.chosen",function(t){e.choices_click(t)}):this.container.bind("click.chosen",function(e){e.preventDefault()})},n.prototype.destroy=function(){return e(document).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus.chosen",this.activate_action)},n.prototype.container_mousedown=function(t){if(!this.is_disabled){t&&t.type==="mousedown"&&!this.results_showing&&t.preventDefault();if(t==null||!e(t.target).hasClass("search-choice-close"))return this.active_field?!this.is_multiple&&t&&(e(t.target)[0]===this.selected_item[0]||e(t.target).parents("a.chzn-single").length)&&(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),e(document).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field()}},n.prototype.container_mouseup=function(e){if(e.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(e)},n.prototype.search_results_mousewheel=function(e){var t,n,r;t=-((n=e.originalEvent)!=null?n.wheelDelta:void 0)||((r=e.originialEvent)!=null?r.detail:void 0);if(t!=null)return e.preventDefault(),e.type==="DOMMouseScroll"&&(t*=40),this.search_results.scrollTop(t+this.search_results.scrollTop())},n.prototype.blur_test=function(e){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},n.prototype.close_field=function(){return e(document).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},n.prototype.activate_field=function(){return this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(t){return this.container.is(e(t.target).closest(".chzn-container"))?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=r.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chzn-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chzn-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(e){var t,n,r,i,s;if(e.length){this.result_clear_highlight(),this.result_highlight=e,this.result_highlight.addClass("highlighted"),r=parseInt(this.search_results.css("maxHeight"),10),s=this.search_results.scrollTop(),i=r+s,n=this.result_highlight.position().top+this.search_results.scrollTop(),t=n+this.result_highlight.outerHeight();if(t>=i)return this.search_results.scrollTop(t-r>0?t-r:0);if(n<s)return this.search_results.scrollTop(n)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.container.addClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},n.prototype.update_results_content=function(e){return this.search_results.html(e)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(e){var t;if(this.form_field.tabIndex)return t=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=t},n.prototype.set_label_behavior=function(){var t=this;this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=e("label[for='"+this.form_field.id+"']"));if(this.form_field_label.length>0)return this.form_field_label.bind("click.chosen",function(e){return t.is_multiple?t.container_mousedown(e):t.activate_field()})},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},n.prototype.search_results_mouseup=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n.length)return this.result_highlight=n,this.result_select(t),this.search_field.focus()},n.prototype.search_results_mouseover=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n)return this.result_do_highlight(n)},n.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result"))return this.result_clear_highlight()},n.prototype.choice_build=function(t){var n,r,i=this;return n=e("<li />",{"class":"search-choice"}).html("<span>"+t.html+"</span>"),t.disabled?n.addClass("search-choice-disabled"):(r=e("<a />",{"class":"search-choice-close","data-option-array-index":t.array_index}),r.bind("click.chosen",function(e){return i.choice_destroy_link_click(e)}),n.append(r)),this.search_container.before(n)},n.prototype.choice_destroy_link_click=function(t){t.preventDefault(),t.stopPropagation();if(!this.is_disabled)return this.choice_destroy(e(t.target))},n.prototype.choice_destroy=function(e){if(this.result_deselect(e[0].getAttribute("data-option-array-index")))return this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),e.parents("li").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){this.form_field.options[0].selected=!0,this.selected_option_count=null,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},n.prototype.result_select=function(t){var n,r,i,s,o,u,a;if(this.result_highlight)return r=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.is_multiple?r.removeClass("active-result"):(this.result_single_selected&&(this.result_single_selected.removeClass("result-selected"),selected_index=this.result_single_selected[0].getAttribute("data-option-array-index"),this.results_data[selected_index].selected=!1),this.result_single_selected=r),r.addClass("result-selected"),s=this.results_data[r[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(s.text),(!t.metaKey&&!t.ctrlKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale());if(!this.is_multiple&&this.allow_custom_value)return a=this.search_field.val(),n=this.add_unique_custom_group(),o=e('<option value="'+a+'">'+a+"</option>"),n.append(o),this.form_field_jq.append(n),this.form_field.options[this.form_field.options.length-1].selected=!0,t.metaKey||this.results_hide(),this.results_build()},n.prototype.find_custom_group=function(){var t,n,r,i,s;s=e("optgroup",this.form_field);for(r=0,i=s.length;r<i;r++)n=s[r],n.getAttribute("label")===this.custom_group_text&&(t=n);return t},n.prototype.add_unique_custom_group=function(){var t;return t=this.find_custom_group(),t||(t=e('<optgroup label="'+this.custom_group_text+'"></optgroup>')),e(t)},n.prototype.single_set_selected_text=function(e){return e==null&&(e=this.default_text),e===this.default_text?this.selected_item.addClass("chzn-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chzn-default")),this.selected_item.find("span").text(e)},n.prototype.result_deselect=function(e){var t;return t=this.results_data[e],this.form_field.options[t.options_index].disabled?!1:(t.selected=!1,this.form_field.options[t.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[t.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect)return;return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chzn-single-with-deselect")},n.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":e("<div/>").text(e.trim(this.search_field.val())).html()},n.prototype.winnow_results_set_highlight=function(){var e,t;t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),e=t.length?t.first():this.search_results.find(".active-result").first();if(e!=null)return this.result_do_highlight(e)},n.prototype.no_results=function(t){var n;return n=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),n.find("span").first().html(t),this.search_results.append(n)},n.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},n.prototype.keydown_arrow=function(){var e;if(!this.results_showing||!this.result_highlight)return this.results_show();e=this.result_highlight.nextAll("li.active-result").first();if(e)return this.result_do_highlight(e)},n.prototype.keyup_arrow=function(){var e;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return e=this.result_highlight.prevAll("li.active-result"),e.length?this.result_do_highlight(e.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())},n.prototype.keydown_backstroke=function(){var e;if(this.pending_backstroke)return this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke();e=this.search_container.siblings("li.search-choice").last();if(e.length&&!e.hasClass("search-choice-disabled"))return this.pending_backstroke=e,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},n.prototype.keydown_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale(),t!==8&&this.pending_backstroke&&this.clear_backstroke();switch(t){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(e),this.mouse_on_container=!1;break;case 13:e.preventDefault();break;case 38:e.preventDefault(),this.keyup_arrow();break;case 40:e.preventDefault(),this.keydown_arrow()}},n.prototype.search_field_scale=function(){var t,n,r,i,s,o,u,a,f;if(this.is_multiple){r=0,u=0,s="position:absolute; left: -1000px; top: -1000px; display:none;",o=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(a=0,f=o.length;a<f;a++)i=o[a],s+=i+":"+this.search_field.css(i)+";";return t=e("<div />",{style:s}),t.text(this.search_field.val()),e("body").append(t),u=t.width()+25,t.remove(),n=this.container.outerWidth(),u>n-10&&(u=n-10),this.search_field.css({width:u+"px"})}},n}(t)}).call(this);


/*===============================
/plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
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
/media/system/js/html5fallback.js
================================================================================*/;
!function(a,b,c){"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b});var d={init:function(c,d){var e=this;e.elem=d,e.$elem=a(d),d.H5Form=e,e.options=a.extend({},a.fn.h5f.options,c),e.field=b.createElement("input"),e.checkSupport(e),"form"===d.nodeName.toLowerCase()&&e.bindWithForm(e.elem,e.$elem)},bindWithForm:function(a,b){var d=this,e=!!b.attr("novalidate"),f=a.elements,g=f.length;for("onSubmit"===d.options.formValidationEvent&&b.on("submit",function(a){var f=this.H5Form.donotValidate!=c?this.H5Form.donotValidate:!1;f||e||d.validateForm(d)?b.find(":input").each(function(){d.placeholder(d,this,"submit")}):(a.preventDefault(),this.donotValidate=!1)}),b.on("focusout focusin",function(a){d.placeholder(d,a.target,a.type)}),b.on("focusout change",d.validateField),b.find("fieldset").on("change",function(){d.validateField(this)}),d.browser.isFormnovalidateNative||b.find(":submit[formnovalidate]").on("click",function(){d.donotValidate=!0});g--;){var h=f[g];d.polyfill(h),d.autofocus(d,h)}},polyfill:function(a){if("form"===a.nodeName.toLowerCase())return!0;var b=a.form.H5Form;b.placeholder(b,a),b.numberType(b,a)},checkSupport:function(a){a.browser={},a.browser.isRequiredNative=!!("required"in a.field),a.browser.isPatternNative=!!("pattern"in a.field),a.browser.isPlaceholderNative=!!("placeholder"in a.field),a.browser.isAutofocusNative=!!("autofocus"in a.field),a.browser.isFormnovalidateNative=!!("formnovalidate"in a.field),a.field.setAttribute("type","email"),a.browser.isEmailNative="email"==a.field.type,a.field.setAttribute("type","url"),a.browser.isUrlNative="url"==a.field.type,a.field.setAttribute("type","number"),a.browser.isNumberNative="number"==a.field.type,a.field.setAttribute("type","range"),a.browser.isRangeNative="range"==a.field.type},validateForm:function(){var a=this,b=a.elem,c=b.elements,d=c.length,e=!0;b.isValid=!0;for(var f=0;d>f;f++){var g=c[f];g.isRequired=!!g.required,g.isDisabled=!!g.disabled,g.isDisabled||(e=a.validateField(g),b.isValid&&!e&&a.setFocusOn(g),b.isValid=e&&b.isValid)}return a.options.doRenderMessage&&a.renderErrorMessages(a,b),b.isValid},validateField:function(b){var d=b.target||b;if(d.form===c)return null;{var e=d.form.H5Form,f=a(d),g=!1,h=!!a(d).attr("required");!!f.attr("disabled")}if(d.isDisabled||(g=!e.browser.isRequiredNative&&h&&e.isValueMissing(e,d),isPatternMismatched=!e.browser.isPatternNative&&e.matchPattern(e,d)),d.validityState={valueMissing:g,patterMismatch:isPatternMismatched,valid:d.isDisabled||!(g||isPatternMismatched)},e.browser.isRequiredNative||(d.validityState.valueMissing?f.addClass(e.options.requiredClass):f.removeClass(e.options.requiredClass)),e.browser.isPatternNative||(d.validityState.patterMismatch?f.addClass(e.options.patternClass):f.removeClass(e.options.patternClass)),d.validityState.valid){f.removeClass(e.options.invalidClass);var i=e.findLabel(f);i.removeClass(e.options.invalidClass)}else{f.addClass(e.options.invalidClass);var i=e.findLabel(f);i.addClass(e.options.invalidClass)}return d.validityState.valid},isValueMissing:function(d,e){var f=a(e),g=/^submit$/i,h=f.val(),i=e.type!==c?e.type:e.tagName.toLowerCase(),j=/^(checkbox|radio|fieldset)$/i;if(j.test(i)||g.test(i)){if(j.test(i)){if("checkbox"===i)return!f.is(":checked");var k;k="fieldset"===i?f.find("input"):b.getElementsByName(e.name);for(var l=0;l<k.length;l++)if(a(k[l]).is(":checked"))return!1;return!0}}else{if(""===h)return!0;if(!d.browser.isPlaceholderNative&&f.hasClass(d.options.placeholderClass))return!0}return!1},matchPattern:function(b,d){var e=a(d),f=!b.browser.isPlaceholderNative&&e.attr("placeholder")&&e.hasClass(b.options.placeholderClass)?"":e.attr("value"),g=e.attr("pattern"),h=e.attr("type");if(""!==f)if("email"===h){var i=!0;if(e.attr("multiple")===c)return!b.options.emailPatt.test(f);f=f.split(b.options.mutipleDelimiter);for(var j=0;j<f.length;j++)if(i=b.options.emailPatt.test(f[j].replace(/[ ]*/g,"")),!i)return!0}else{if("url"===h)return!b.options.urlPatt.test(f);if("text"===h&&g!==c)return usrPatt=new RegExp("^(?:"+g+")$"),!usrPatt.test(f)}return!1},placeholder:function(b,d,e){var f=a(d),g={placeholder:f.attr("placeholder")},h=/^(focusin|submit)$/i,i=/^(input|textarea)$/i,j=/^password$/i,k=b.browser.isPlaceholderNative;k||!i.test(d.nodeName)||j.test(d.type)||g.placeholder===c||(""!==d.value||h.test(e)?d.value===g.placeholder&&h.test(e)&&(d.value="",f.removeClass(b.options.placeholderClass)):(d.value=g.placeholder,f.addClass(b.options.placeholderClass)))},numberType:function(b,c){var d=a(c);if(node=/^input$/i,type=d.attr("type"),node.test(c.nodeName)&&("number"==type&&!b.browser.isNumberNative||"range"==type&&!b.browser.isRangeNative)){var e,f=parseInt(d.attr("min")),g=parseInt(d.attr("max")),h=parseInt(d.attr("step")),i=parseInt(d.attr("value")),j=d.prop("attributes"),k=a("<select>");f=isNaN(f)?-100:f;for(var l=f;g>=l;l+=h)e=a("<option>").attr("value",l).text(l),(i==l||i>l&&l+h>i)&&e.attr("selected",""),k.append(e);a.each(j,function(){k.attr(this.name,this.value)}),d.replaceWith(k)}},autofocus:function(c,d){var e=a(d),f=!!e.attr("autofocus"),g=/^(input|textarea|select|fieldset)$/i,h=/^submit$/i,i=c.browser.isAutofocusNative;!i&&g.test(d.nodeName)&&!h.test(d.type)&&f&&a(b).ready(function(){c.setFocusOn(d)})},findLabel:function(b){var c=a('label[for="'+b.attr("id")+'"]');if(c.length<=0){var d=b.parent(),e=d.get(0).tagName.toLowerCase();"label"==e&&(c=d)}return c},setFocusOn:function(b){"fieldset"===b.tagName.toLowerCase()?a(b).find(":first").focus():a(b).focus()},renderErrorMessages:function(b,c){var d=c.elements,e=d.length,f={};for(f.errors=new Array;e--;){var g=a(d[e]),h=b.findLabel(g);g.hasClass(b.options.requiredClass)&&(f.errors[e]=h.text().replace("*","")+b.options.requiredMessage),g.hasClass(b.options.patternClass)&&(f.errors[e]=h.text().replace("*","")+b.options.patternMessage)}f.errors.length>0&&Joomla.renderMessages(f)}};a.fn.h5f=function(a){return this.each(function(){var b=Object.create(d);b.init(a,this)})},a.fn.h5f.options={invalidClass:"invalid",requiredClass:"required",requiredMessage:" is required.",placeholderClass:"placeholder",patternClass:"pattern",patternMessage:" doesn't match pattern.",doRenderMessage:!1,formValidationEvent:"onSubmit",emailPatt:/^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,urlPatt:/[a-z][\-\.+a-z]*:\/\//i},a(function(){a("form").h5f({doRenderMessage:!0,requiredClass:"musthavevalue"})})}(jQuery,document);


/*===============================
/media/system/js/calendar.js
================================================================================*/;
Calendar=function(d,c,f,a){this.activeDiv=null;this.currentDateEl=null;this.getDateStatus=null;this.getDateToolTip=null;this.getDateText=null;this.timeout=null;this.onSelected=f||null;this.onClose=a||null;this.dragging=false;this.hidden=false;this.minYear=1970;this.maxYear=2050;this.dateFormat=Calendar._TT.DEF_DATE_FORMAT;this.ttDateFormat=Calendar._TT.TT_DATE_FORMAT;this.isPopup=true;this.weekNumbers=true;this.firstDayOfWeek=typeof d=="number"?d:Calendar._FD;this.showsOtherMonths=false;this.dateStr=c;this.ar_days=null;this.showsTime=false;this.time24=true;this.yearStep=2;this.hiliteToday=true;this.multiple=null;this.table=null;this.element=null;this.tbody=null;this.firstdayname=null;this.monthsCombo=null;this.yearsCombo=null;this.hilitedMonth=null;this.activeMonth=null;this.hilitedYear=null;this.activeYear=null;this.dateClicked=false;if(typeof Calendar._SDN=="undefined"){if(typeof Calendar._SDN_len=="undefined"){Calendar._SDN_len=3}var b=new Array();for(var e=8;e>0;){b[--e]=Calendar._DN[e].substr(0,Calendar._SDN_len)}Calendar._SDN=b;if(typeof Calendar._SMN_len=="undefined"){Calendar._SMN_len=3}b=new Array();for(var e=12;e>0;){b[--e]=Calendar._MN[e].substr(0,Calendar._SMN_len)}Calendar._SMN=b}};Calendar._C=null;Calendar.is_ie=(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent));Calendar.is_ie5=(Calendar.is_ie&&/msie 5\.0/i.test(navigator.userAgent));Calendar.is_opera=/opera/i.test(navigator.userAgent);Calendar.is_khtml=/Konqueror|Safari|KHTML/i.test(navigator.userAgent);Calendar.getAbsolutePos=function(e){var a=0,d=0;var c=/^div$/i.test(e.tagName);if(c&&e.scrollLeft){a=e.scrollLeft}if(c&&e.scrollTop){d=e.scrollTop}var f={x:e.offsetLeft-a,y:e.offsetTop-d};if(e.offsetParent){var b=this.getAbsolutePos(e.offsetParent);f.x+=b.x;f.y+=b.y}return f};Calendar.isRelated=function(c,a){var d=a.relatedTarget;if(!d){var b=a.type;if(b=="mouseover"){d=a.fromElement}else{if(b=="mouseout"){d=a.toElement}}}while(d){if(d==c){return true}d=d.parentNode}return false};Calendar.removeClass=function(e,d){if(!(e&&e.className)){return}var a=e.className.split(" ");var b=new Array();for(var c=a.length;c>0;){if(a[--c]!=d){b[b.length]=a[c]}}e.className=b.join(" ")};Calendar.addClass=function(b,a){Calendar.removeClass(b,a);b.className+=" "+a};Calendar.getElement=function(a){var b=Calendar.is_ie?window.event.srcElement:a.currentTarget;while(b.nodeType!=1||/^div$/i.test(b.tagName)){b=b.parentNode}return b};Calendar.getTargetElement=function(a){var b=Calendar.is_ie?window.event.srcElement:a.target;while(b.nodeType!=1){b=b.parentNode}return b};Calendar.stopEvent=function(a){a||(a=window.event);if(Calendar.is_ie){a.cancelBubble=true;a.returnValue=false}else{a.preventDefault();a.stopPropagation()}return false};Calendar.addEvent=function(a,c,b){if(a.attachEvent){a.attachEvent("on"+c,b)}else{if(a.addEventListener){a.addEventListener(c,b,true)}else{a["on"+c]=b}}};Calendar.removeEvent=function(a,c,b){if(a.detachEvent){a.detachEvent("on"+c,b)}else{if(a.removeEventListener){a.removeEventListener(c,b,true)}else{a["on"+c]=null}}};Calendar.createElement=function(c,b){var a=null;if(document.createElementNS){a=document.createElementNS("http://www.w3.org/1999/xhtml",c)}else{a=document.createElement(c)}if(typeof b!="undefined"){b.appendChild(a)}return a};Calendar._add_evs=function(el){with(Calendar){addEvent(el,"mouseover",dayMouseOver);addEvent(el,"mousedown",dayMouseDown);addEvent(el,"mouseout",dayMouseOut);if(is_ie){addEvent(el,"dblclick",dayMouseDblClick);el.setAttribute("unselectable",true)}}};Calendar.findMonth=function(a){if(typeof a.month!="undefined"){return a}else{if(typeof a.parentNode.month!="undefined"){return a.parentNode}}return null};Calendar.findYear=function(a){if(typeof a.year!="undefined"){return a}else{if(typeof a.parentNode.year!="undefined"){return a.parentNode}}return null};Calendar.showMonthsCombo=function(){var e=Calendar._C;if(!e){return false}var e=e;var f=e.activeDiv;var d=e.monthsCombo;if(e.hilitedMonth){Calendar.removeClass(e.hilitedMonth,"hilite")}if(e.activeMonth){Calendar.removeClass(e.activeMonth,"active")}var c=e.monthsCombo.getElementsByTagName("div")[e.date.getMonth()];Calendar.addClass(c,"active");e.activeMonth=c;var b=d.style;b.display="block";if(f.navtype<0){b.left=f.offsetLeft+"px"}else{var a=d.offsetWidth;if(typeof a=="undefined"){a=50}b.left=(f.offsetLeft+f.offsetWidth-a)+"px"}b.top=(f.offsetTop+f.offsetHeight)+"px"};Calendar.showYearsCombo=function(d){var a=Calendar._C;if(!a){return false}var a=a;var c=a.activeDiv;var f=a.yearsCombo;if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}if(a.activeYear){Calendar.removeClass(a.activeYear,"active")}a.activeYear=null;var b=a.date.getFullYear()+(d?1:-1);var j=f.firstChild;var h=false;for(var e=12;e>0;--e){if(b>=a.minYear&&b<=a.maxYear){j.innerHTML=b;j.year=b;j.style.display="block";h=true}else{j.style.display="none"}j=j.nextSibling;b+=d?a.yearStep:-a.yearStep}if(h){var k=f.style;k.display="block";if(c.navtype<0){k.left=c.offsetLeft+"px"}else{var g=f.offsetWidth;if(typeof g=="undefined"){g=50}k.left=(c.offsetLeft+c.offsetWidth-g)+"px"}k.top=(c.offsetTop+c.offsetHeight)+"px"}};Calendar.tableMouseUp=function(ev){var cal=Calendar._C;if(!cal){return false}if(cal.timeout){clearTimeout(cal.timeout)}var el=cal.activeDiv;if(!el){return false}var target=Calendar.getTargetElement(ev);ev||(ev=window.event);Calendar.removeClass(el,"active");if(target==el||target.parentNode==el){Calendar.cellClick(el,ev)}var mon=Calendar.findMonth(target);var date=null;if(mon){date=new Date(cal.date);if(mon.month!=date.getMonth()){date.setMonth(mon.month);cal.setDate(date);cal.dateClicked=false;cal.callHandler()}}else{var year=Calendar.findYear(target);if(year){date=new Date(cal.date);if(year.year!=date.getFullYear()){date.setFullYear(year.year);cal.setDate(date);cal.dateClicked=false;cal.callHandler()}}}with(Calendar){removeEvent(document,"mouseup",tableMouseUp);removeEvent(document,"mouseover",tableMouseOver);removeEvent(document,"mousemove",tableMouseOver);cal._hideCombos();_C=null;return stopEvent(ev)}};Calendar.tableMouseOver=function(n){var a=Calendar._C;if(!a){return}var c=a.activeDiv;var j=Calendar.getTargetElement(n);if(j==c||j.parentNode==c){Calendar.addClass(c,"hilite active");Calendar.addClass(c.parentNode,"rowhilite")}else{if(typeof c.navtype=="undefined"||(c.navtype!=50&&(c.navtype==0||Math.abs(c.navtype)>2))){Calendar.removeClass(c,"active")}Calendar.removeClass(c,"hilite");Calendar.removeClass(c.parentNode,"rowhilite")}n||(n=window.event);if(c.navtype==50&&j!=c){var m=Calendar.getAbsolutePos(c);var p=c.offsetWidth;var o=n.clientX;var q;var l=true;if(o>m.x+p){q=o-m.x-p;l=false}else{q=m.x-o}if(q<0){q=0}var f=c._range;var h=c._current;var g=Math.floor(q/10)%f.length;for(var e=f.length;--e>=0;){if(f[e]==h){break}}while(g-->0){if(l){if(--e<0){e=f.length-1}}else{if(++e>=f.length){e=0}}}var b=f[e];c.innerHTML=b;a.onUpdateTime()}var d=Calendar.findMonth(j);if(d){if(d.month!=a.date.getMonth()){if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}Calendar.addClass(d,"hilite");a.hilitedMonth=d}else{if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}}}else{if(a.hilitedMonth){Calendar.removeClass(a.hilitedMonth,"hilite")}var k=Calendar.findYear(j);if(k){if(k.year!=a.date.getFullYear()){if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}Calendar.addClass(k,"hilite");a.hilitedYear=k}else{if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}}}else{if(a.hilitedYear){Calendar.removeClass(a.hilitedYear,"hilite")}}}return Calendar.stopEvent(n)};Calendar.tableMouseDown=function(a){if(Calendar.getTargetElement(a)==Calendar.getElement(a)){return Calendar.stopEvent(a)}};Calendar.calDragIt=function(b){var c=Calendar._C;if(!(c&&c.dragging)){return false}var e;var d;if(Calendar.is_ie){d=window.event.clientY+document.body.scrollTop;e=window.event.clientX+document.body.scrollLeft}else{e=b.pageX;d=b.pageY}c.hideShowCovered();var a=c.element.style;a.left=(e-c.xOffs)+"px";a.top=(d-c.yOffs)+"px";return Calendar.stopEvent(b)};Calendar.calDragEnd=function(ev){var cal=Calendar._C;if(!cal){return false}cal.dragging=false;with(Calendar){removeEvent(document,"mousemove",calDragIt);removeEvent(document,"mouseup",calDragEnd);tableMouseUp(ev)}cal.hideShowCovered()};Calendar.dayMouseDown=function(ev){var el=Calendar.getElement(ev);if(el.disabled){return false}var cal=el.calendar;cal.activeDiv=el;Calendar._C=cal;if(el.navtype!=300){with(Calendar){if(el.navtype==50){el._current=el.innerHTML;addEvent(document,"mousemove",tableMouseOver)}else{addEvent(document,Calendar.is_ie5?"mousemove":"mouseover",tableMouseOver)}addClass(el,"hilite active");addEvent(document,"mouseup",tableMouseUp)}}else{if(cal.isPopup){cal._dragStart(ev)}}if(el.navtype==-1||el.navtype==1){if(cal.timeout){clearTimeout(cal.timeout)}cal.timeout=setTimeout("Calendar.showMonthsCombo()",250)}else{if(el.navtype==-2||el.navtype==2){if(cal.timeout){clearTimeout(cal.timeout)}cal.timeout=setTimeout((el.navtype>0)?"Calendar.showYearsCombo(true)":"Calendar.showYearsCombo(false)",250)}else{cal.timeout=null}}return Calendar.stopEvent(ev)};Calendar.dayMouseDblClick=function(a){Calendar.cellClick(Calendar.getElement(a),a||window.event);if(Calendar.is_ie){document.selection.empty()}};Calendar.dayMouseOver=function(b){var a=Calendar.getElement(b);if(Calendar.isRelated(a,b)||Calendar._C||a.disabled){return false}if(a.ttip){if(a.ttip.substr(0,1)=="_"){a.ttip=a.caldate.print(a.calendar.ttDateFormat)+a.ttip.substr(1)}a.calendar.tooltips.innerHTML=a.ttip}if(a.navtype!=300){Calendar.addClass(a,"hilite");if(a.caldate){Calendar.addClass(a.parentNode,"rowhilite");var c=a.calendar;if(c&&c.getDateToolTip){var e=a.caldate;window.status=e;a.title=c.getDateToolTip(e,e.getFullYear(),e.getMonth(),e.getDate())}}}return Calendar.stopEvent(b)};Calendar.dayMouseOut=function(ev){with(Calendar){var el=getElement(ev);if(isRelated(el,ev)||_C||el.disabled){return false}removeClass(el,"hilite");if(el.caldate){removeClass(el.parentNode,"rowhilite")}if(el.calendar){el.calendar.tooltips.innerHTML=_TT.SEL_DATE}}};Calendar.cellClick=function(e,o){var c=e.calendar;var h=false;var l=false;var f=null;if(typeof e.navtype=="undefined"){if(c.currentDateEl){Calendar.removeClass(c.currentDateEl,"selected");Calendar.addClass(e,"selected");h=(c.currentDateEl==e);if(!h){c.currentDateEl=e}}c.date.setDateOnly(e.caldate);f=c.date;var b=!(c.dateClicked=!e.otherMonth);if(!b&&!c.currentDateEl&&c.multiple){c._toggleMultipleDate(new Date(f))}else{l=!e.disabled}if(b){c._init(c.firstDayOfWeek,f)}}else{if(e.navtype==200){Calendar.removeClass(e,"hilite");c.callCloseHandler();return}f=new Date(c.date);if(e.navtype==0){f.setDateOnly(new Date())}c.dateClicked=false;var n=f.getFullYear();var g=f.getMonth();function a(q){var r=f.getDate();var i=f.getMonthDays(q);if(r>i){f.setDate(i)}f.setMonth(q)}switch(e.navtype){case 400:Calendar.removeClass(e,"hilite");var p=Calendar._TT.ABOUT;if(typeof p!="undefined"){p+=c.showsTime?Calendar._TT.ABOUT_TIME:""}else{p='Help and about box text is not translated into this language.\nIf you know this language and you feel generous please update\nthe corresponding file in "lang" subdir to match calendar-en.js\nand send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\nThank you!\nhttp://dynarch.com/mishoo/calendar.epl\n'}alert(p);return;case-2:if(n>c.minYear){f.setFullYear(n-1)}break;case-1:if(g>0){a(g-1)}else{if(n-->c.minYear){f.setFullYear(n);a(11)}}break;case 1:if(g<11){a(g+1)}else{if(n<c.maxYear){f.setFullYear(n+1);a(0)}}break;case 2:if(n<c.maxYear){f.setFullYear(n+1)}break;case 100:c.setFirstDayOfWeek(e.fdow);return;case 50:var k=e._range;var m=e.innerHTML;for(var j=k.length;--j>=0;){if(k[j]==m){break}}if(o&&o.shiftKey){if(--j<0){j=k.length-1}}else{if(++j>=k.length){j=0}}var d=k[j];e.innerHTML=d;c.onUpdateTime();return;case 0:if((typeof c.getDateStatus=="function")&&c.getDateStatus(f,f.getFullYear(),f.getMonth(),f.getDate())){return false}break}if(!f.equalsTo(c.date)){c.setDate(f);l=true}else{if(e.navtype==0){l=h=true}}}if(l){o&&c.callHandler()}if(h){Calendar.removeClass(e,"hilite");o&&c.callCloseHandler()}};Calendar.prototype.create=function(n){var m=null;if(!n){m=document.getElementsByTagName("body")[0];this.isPopup=true}else{m=n;this.isPopup=false}this.date=this.dateStr?new Date(this.dateStr):new Date();var q=Calendar.createElement("table");this.table=q;q.cellSpacing=0;q.cellPadding=0;q.calendar=this;Calendar.addEvent(q,"mousedown",Calendar.tableMouseDown);var a=Calendar.createElement("div");this.element=a;a.className="calendar";if(this.isPopup){a.style.position="absolute";a.style.display="none"}a.appendChild(q);var k=Calendar.createElement("thead",q);var o=null;var r=null;var b=this;var e=function(s,j,i){o=Calendar.createElement("td",r);o.colSpan=j;o.className="button";if(i!=0&&Math.abs(i)<=2){o.className+=" nav"}Calendar._add_evs(o);o.calendar=b;o.navtype=i;o.innerHTML="<div unselectable='on'>"+s+"</div>";return o};r=Calendar.createElement("tr",k);var c=6;(this.isPopup)&&--c;(this.weekNumbers)&&++c;e("?",1,400).ttip=Calendar._TT.INFO;this.title=e("",c,300);this.title.className="title";if(this.isPopup){this.title.ttip=Calendar._TT.DRAG_TO_MOVE;this.title.style.cursor="move";e("&#x00d7;",1,200).ttip=Calendar._TT.CLOSE}r=Calendar.createElement("tr",k);r.className="headrow";this._nav_py=e("&#x00ab;",1,-2);this._nav_py.ttip=Calendar._TT.PREV_YEAR;this._nav_pm=e("&#x2039;",1,-1);this._nav_pm.ttip=Calendar._TT.PREV_MONTH;this._nav_now=e(Calendar._TT.TODAY,this.weekNumbers?4:3,0);this._nav_now.ttip=Calendar._TT.GO_TODAY;this._nav_nm=e("&#x203a;",1,1);this._nav_nm.ttip=Calendar._TT.NEXT_MONTH;this._nav_ny=e("&#x00bb;",1,2);this._nav_ny.ttip=Calendar._TT.NEXT_YEAR;r=Calendar.createElement("tr",k);r.className="daynames";if(this.weekNumbers){o=Calendar.createElement("td",r);o.className="name wn";o.innerHTML=Calendar._TT.WK}for(var h=7;h>0;--h){o=Calendar.createElement("td",r);if(!h){o.navtype=100;o.calendar=this;Calendar._add_evs(o)}}this.firstdayname=(this.weekNumbers)?r.firstChild.nextSibling:r.firstChild;this._displayWeekdays();var g=Calendar.createElement("tbody",q);this.tbody=g;for(h=6;h>0;--h){r=Calendar.createElement("tr",g);if(this.weekNumbers){o=Calendar.createElement("td",r)}for(var f=7;f>0;--f){o=Calendar.createElement("td",r);o.calendar=this;Calendar._add_evs(o)}}if(this.showsTime){r=Calendar.createElement("tr",g);r.className="time";o=Calendar.createElement("td",r);o.className="time";o.colSpan=2;o.innerHTML=Calendar._TT.TIME||"&#160;";o=Calendar.createElement("td",r);o.className="time";o.colSpan=this.weekNumbers?4:3;(function(){function t(C,E,D,F){var A=Calendar.createElement("span",o);A.className=C;A.innerHTML=E;A.calendar=b;A.ttip=Calendar._TT.TIME_PART;A.navtype=50;A._range=[];if(typeof D!="number"){A._range=D}else{for(var B=D;B<=F;++B){var z;if(B<10&&F>=10){z="0"+B}else{z=""+B}A._range[A._range.length]=z}}Calendar._add_evs(A);return A}var x=b.date.getHours();var i=b.date.getMinutes();var y=!b.time24;var j=(x>12);if(y&&j){x-=12}var v=t("hour",x,y?1:0,y?12:23);var u=Calendar.createElement("span",o);u.innerHTML=":";u.className="colon";var s=t("minute",i,0,59);var w=null;o=Calendar.createElement("td",r);o.className="time";o.colSpan=2;if(y){w=t("ampm",j?"pm":"am",["am","pm"])}else{o.innerHTML="&#160;"}b.onSetTime=function(){var A,z=this.date.getHours(),B=this.date.getMinutes();if(y){A=(z>=12);if(A){z-=12}if(z==0){z=12}w.innerHTML=A?"pm":"am"}v.innerHTML=(z<10)?("0"+z):z;s.innerHTML=(B<10)?("0"+B):B};b.onUpdateTime=function(){var A=this.date;var B=parseInt(v.innerHTML,10);if(y){if(/pm/i.test(w.innerHTML)&&B<12){B+=12}else{if(/am/i.test(w.innerHTML)&&B==12){B=0}}}var C=A.getDate();var z=A.getMonth();var D=A.getFullYear();A.setHours(B);A.setMinutes(parseInt(s.innerHTML,10));A.setFullYear(D);A.setMonth(z);A.setDate(C);this.dateClicked=false;this.callHandler()}})()}else{this.onSetTime=this.onUpdateTime=function(){}}var l=Calendar.createElement("tfoot",q);r=Calendar.createElement("tr",l);r.className="footrow";o=e(Calendar._TT.SEL_DATE,this.weekNumbers?8:7,300);o.className="ttip";if(this.isPopup){o.ttip=Calendar._TT.DRAG_TO_MOVE;o.style.cursor="move"}this.tooltips=o;a=Calendar.createElement("div",this.element);this.monthsCombo=a;a.className="combo";for(h=0;h<Calendar._MN.length;++h){var d=Calendar.createElement("div");d.className=Calendar.is_ie?"label-IEfix":"label";d.month=h;d.innerHTML=Calendar._SMN[h];a.appendChild(d)}a=Calendar.createElement("div",this.element);this.yearsCombo=a;a.className="combo";for(h=12;h>0;--h){var p=Calendar.createElement("div");p.className=Calendar.is_ie?"label-IEfix":"label";a.appendChild(p)}this._init(this.firstDayOfWeek,this.date);m.appendChild(this.element)};Calendar._keyEvent=function(k){var a=window._dynarch_popupCalendar;if(!a||a.multiple){return false}(Calendar.is_ie)&&(k=window.event);var i=(Calendar.is_ie||k.type=="keypress"),l=k.keyCode;if(k.ctrlKey){switch(l){case 37:i&&Calendar.cellClick(a._nav_pm);break;case 38:i&&Calendar.cellClick(a._nav_py);break;case 39:i&&Calendar.cellClick(a._nav_nm);break;case 40:i&&Calendar.cellClick(a._nav_ny);break;default:return false}}else{switch(l){case 32:Calendar.cellClick(a._nav_now);break;case 27:i&&a.callCloseHandler();break;case 37:case 38:case 39:case 40:if(i){var e,m,j,g,c,d;e=l==37||l==38;d=(l==37||l==39)?1:7;function b(){c=a.currentDateEl;var n=c.pos;m=n&15;j=n>>4;g=a.ar_days[j][m]}b();function f(){var n=new Date(a.date);n.setDate(n.getDate()-d);a.setDate(n)}function h(){var n=new Date(a.date);n.setDate(n.getDate()+d);a.setDate(n)}while(1){switch(l){case 37:if(--m>=0){g=a.ar_days[j][m]}else{m=6;l=38;continue}break;case 38:if(--j>=0){g=a.ar_days[j][m]}else{f();b()}break;case 39:if(++m<7){g=a.ar_days[j][m]}else{m=0;l=40;continue}break;case 40:if(++j<a.ar_days.length){g=a.ar_days[j][m]}else{h();b()}break}break}if(g){if(!g.disabled){Calendar.cellClick(g)}else{if(e){f()}else{h()}}}}break;case 13:if(i){Calendar.cellClick(a.currentDateEl,k)}break;default:return false}}return Calendar.stopEvent(k)};Calendar.prototype._init=function(m,w){var v=new Date(),q=v.getFullYear(),y=v.getMonth(),b=v.getDate();this.table.style.visibility="hidden";var h=w.getFullYear();if(h<this.minYear){h=this.minYear;w.setFullYear(h)}else{if(h>this.maxYear){h=this.maxYear;w.setFullYear(h)}}this.firstDayOfWeek=m;this.date=new Date(w);var x=w.getMonth();var A=w.getDate();var z=w.getMonthDays();w.setDate(1);var r=(w.getDay()-this.firstDayOfWeek)%7;if(r<0){r+=7}w.setDate(-r);w.setDate(w.getDate()+1);var e=this.tbody.firstChild;var k=Calendar._SMN[x];var o=this.ar_days=new Array();var n=Calendar._TT.WEEKEND;var d=this.multiple?(this.datesCells={}):null;for(var t=0;t<6;++t,e=e.nextSibling){var a=e.firstChild;if(this.weekNumbers){a.className="day wn";a.innerHTML=w.getWeekNumber();a=a.nextSibling}e.className="daysrow";var u=false,f,c=o[t]=[];for(var s=0;s<7;++s,a=a.nextSibling,w.setDate(f+1)){f=w.getDate();var g=w.getDay();a.className="day";a.pos=t<<4|s;c[s]=a;var l=(w.getMonth()==x);if(!l){if(this.showsOtherMonths){a.className+=" othermonth";a.otherMonth=true}else{a.className="emptycell";a.innerHTML="&#160;";a.disabled=true;continue}}else{a.otherMonth=false;u=true}a.disabled=false;a.innerHTML=this.getDateText?this.getDateText(w,f):f;if(d){d[w.print("%Y%m%d")]=a}if(this.getDateStatus){var p=this.getDateStatus(w,h,x,f);if(p===true){a.className+=" disabled";a.disabled=true}else{if(/disabled/i.test(p)){a.disabled=true}a.className+=" "+p}}if(!a.disabled){a.caldate=new Date(w);a.ttip="_";if(!this.multiple&&l&&f==A&&this.hiliteToday){a.className+=" selected";this.currentDateEl=a}if(w.getFullYear()==q&&w.getMonth()==y&&f==b){a.className+=" today";a.ttip+=Calendar._TT.PART_TODAY}if(n.indexOf(g.toString())!=-1){a.className+=a.otherMonth?" oweekend":" weekend"}}}if(!(u||this.showsOtherMonths)){e.className="emptyrow"}}this.title.innerHTML=Calendar._MN[x]+", "+h;this.onSetTime();this.table.style.visibility="visible";this._initMultipleDates()};Calendar.prototype._initMultipleDates=function(){if(this.multiple){for(var b in this.multiple){var a=this.datesCells[b];var c=this.multiple[b];if(!c){continue}if(a){a.className+=" selected"}}}};Calendar.prototype._toggleMultipleDate=function(b){if(this.multiple){var c=b.print("%Y%m%d");var a=this.datesCells[c];if(a){var e=this.multiple[c];if(!e){Calendar.addClass(a,"selected");this.multiple[c]=b}else{Calendar.removeClass(a,"selected");delete this.multiple[c]}}}};Calendar.prototype.setDateToolTipHandler=function(a){this.getDateToolTip=a};Calendar.prototype.setDate=function(a){if(!a.equalsTo(this.date)){this._init(this.firstDayOfWeek,a)}};Calendar.prototype.refresh=function(){this._init(this.firstDayOfWeek,this.date)};Calendar.prototype.setFirstDayOfWeek=function(a){this._init(a,this.date);this._displayWeekdays()};Calendar.prototype.setDateStatusHandler=Calendar.prototype.setDisabledHandler=function(a){this.getDateStatus=a};Calendar.prototype.setRange=function(b,c){this.minYear=b;this.maxYear=c};Calendar.prototype.callHandler=function(){if(this.onSelected){this.onSelected(this,this.date.print(this.dateFormat))}};Calendar.prototype.callCloseHandler=function(){if(this.onClose){this.onClose(this)}this.hideShowCovered()};Calendar.prototype.destroy=function(){var a=this.element.parentNode;a.removeChild(this.element);Calendar._C=null;window._dynarch_popupCalendar=null};Calendar.prototype.reparent=function(b){var a=this.element;a.parentNode.removeChild(a);b.appendChild(a)};Calendar._checkCalendar=function(b){var c=window._dynarch_popupCalendar;if(!c){return false}var a=Calendar.is_ie?Calendar.getElement(b):Calendar.getTargetElement(b);for(;a!=null&&a!=c.element;a=a.parentNode){}if(a==null){window._dynarch_popupCalendar.callCloseHandler();return Calendar.stopEvent(b)}};Calendar.prototype.show=function(){var e=this.table.getElementsByTagName("tr");for(var d=e.length;d>0;){var f=e[--d];Calendar.removeClass(f,"rowhilite");var c=f.getElementsByTagName("td");for(var b=c.length;b>0;){var a=c[--b];Calendar.removeClass(a,"hilite");Calendar.removeClass(a,"active")}}this.element.style.display="block";this.hidden=false;if(this.isPopup){window._dynarch_popupCalendar=this;Calendar.addEvent(document,"keydown",Calendar._keyEvent);Calendar.addEvent(document,"keypress",Calendar._keyEvent);Calendar.addEvent(document,"mousedown",Calendar._checkCalendar)}this.hideShowCovered()};Calendar.prototype.hide=function(){if(this.isPopup){Calendar.removeEvent(document,"keydown",Calendar._keyEvent);Calendar.removeEvent(document,"keypress",Calendar._keyEvent);Calendar.removeEvent(document,"mousedown",Calendar._checkCalendar)}this.element.style.display="none";this.hidden=true;this.hideShowCovered()};Calendar.prototype.showAt=function(a,c){var b=this.element.style;b.left=a+"px";b.top=c+"px";this.show()};Calendar.prototype.showAtElement=function(c,d){var a=this;var e=Calendar.getAbsolutePos(c);if(!d||typeof d!="string"){this.showAt(e.x,e.y+c.offsetHeight);return true}function b(i){if(i.x<0){i.x=0}if(i.y<0){i.y=0}var j=document.createElement("div");var h=j.style;h.position="absolute";h.right=h.bottom=h.width=h.height="0px";document.body.appendChild(j);var g=Calendar.getAbsolutePos(j);document.body.removeChild(j);if(Calendar.is_ie){g.y+=document.body.scrollTop;g.x+=document.body.scrollLeft}else{g.y+=window.scrollY;g.x+=window.scrollX}var f=i.x+i.width-g.x;if(f>0){i.x-=f}f=i.y+i.height-g.y;if(f>0){i.y-=f}}this.element.style.display="block";Calendar.continuation_for_the_khtml_browser=function(){var f=a.element.offsetWidth;var i=a.element.offsetHeight;a.element.style.display="none";var g=d.substr(0,1);var j="l";if(d.length>1){j=d.substr(1,1)}switch(g){case"T":e.y-=i;break;case"B":e.y+=c.offsetHeight;break;case"C":e.y+=(c.offsetHeight-i)/2;break;case"t":e.y+=c.offsetHeight-i;break;case"b":break}switch(j){case"L":e.x-=f;break;case"R":e.x+=c.offsetWidth;break;case"C":e.x+=(c.offsetWidth-f)/2;break;case"l":e.x+=c.offsetWidth-f;break;case"r":break}e.width=f;e.height=i+40;a.monthsCombo.style.display="none";b(e);a.showAt(e.x,e.y)};if(Calendar.is_khtml){setTimeout("Calendar.continuation_for_the_khtml_browser()",10)}else{Calendar.continuation_for_the_khtml_browser()}};Calendar.prototype.setDateFormat=function(a){this.dateFormat=a};Calendar.prototype.setTtDateFormat=function(a){this.ttDateFormat=a};Calendar.prototype.parseDate=function(b,a){if(!a){a=this.dateFormat}this.setDate(Date.parseDate(b,a))};Calendar.prototype.hideShowCovered=function(){if(!Calendar.is_ie&&!Calendar.is_opera){return}function b(k){var i=k.style.visibility;if(!i){if(document.defaultView&&typeof(document.defaultView.getComputedStyle)=="function"){if(!Calendar.is_khtml){i=document.defaultView.getComputedStyle(k,"").getPropertyValue("visibility")}else{i=""}}else{if(k.currentStyle){i=k.currentStyle.visibility}else{i=""}}}return i}var s=new Array("applet","iframe","select");var c=this.element;var a=Calendar.getAbsolutePos(c);var f=a.x;var d=c.offsetWidth+f;var r=a.y;var q=c.offsetHeight+r;for(var h=s.length;h>0;){var g=document.getElementsByTagName(s[--h]);var e=null;for(var l=g.length;l>0;){e=g[--l];a=Calendar.getAbsolutePos(e);var o=a.x;var n=e.offsetWidth+o;var m=a.y;var j=e.offsetHeight+m;if(this.hidden||(o>d)||(n<f)||(m>q)||(j<r)){if(!e.__msh_save_visibility){e.__msh_save_visibility=b(e)}e.style.visibility=e.__msh_save_visibility}else{if(!e.__msh_save_visibility){e.__msh_save_visibility=b(e)}e.style.visibility="hidden"}}}};Calendar.prototype._displayWeekdays=function(){var b=this.firstDayOfWeek;var a=this.firstdayname;var d=Calendar._TT.WEEKEND;for(var c=0;c<7;++c){a.className="day name";var e=(c+b)%7;if(c){a.ttip=Calendar._TT.DAY_FIRST.replace("%s",Calendar._DN[e]);a.navtype=100;a.calendar=this;a.fdow=e;Calendar._add_evs(a)}if(d.indexOf(e.toString())!=-1){Calendar.addClass(a,"weekend")}a.innerHTML=Calendar._SDN[(c+b)%7];a=a.nextSibling}};Calendar.prototype._hideCombos=function(){this.monthsCombo.style.display="none";this.yearsCombo.style.display="none"};Calendar.prototype._dragStart=function(ev){if(this.dragging){return}this.dragging=true;var posX;var posY;if(Calendar.is_ie){posY=window.event.clientY+document.body.scrollTop;posX=window.event.clientX+document.body.scrollLeft}else{posY=ev.clientY+window.scrollY;posX=ev.clientX+window.scrollX}var st=this.element.style;this.xOffs=posX-parseInt(st.left);this.yOffs=posY-parseInt(st.top);with(Calendar){addEvent(document,"mousemove",calDragIt);addEvent(document,"mouseup",calDragEnd)}};Date._MD=new Array(31,28,31,30,31,30,31,31,30,31,30,31);Date.SECOND=1000;Date.MINUTE=60*Date.SECOND;Date.HOUR=60*Date.MINUTE;Date.DAY=24*Date.HOUR;Date.WEEK=7*Date.DAY;Date.parseDate=function(l,c){var n=new Date();var o=0;var e=-1;var k=0;var q=l.split(/\W+/);var p=c.match(/%./g);var h=0,g=0;var r=0;var f=0;for(h=0;h<q.length;++h){if(!q[h]){continue}switch(p[h]){case"%d":case"%e":k=parseInt(q[h],10);break;case"%m":e=parseInt(q[h],10)-1;break;case"%Y":case"%y":o=parseInt(q[h],10);(o<100)&&(o+=(o>29)?1900:2000);break;case"%b":case"%B":for(g=0;g<12;++g){if(Calendar._MN[g].substr(0,q[h].length).toLowerCase()==q[h].toLowerCase()){e=g;break}}break;case"%H":case"%I":case"%k":case"%l":r=parseInt(q[h],10);break;case"%P":case"%p":if(/pm/i.test(q[h])&&r<12){r+=12}else{if(/am/i.test(q[h])&&r>=12){r-=12}}break;case"%M":f=parseInt(q[h],10);break}}if(isNaN(o)){o=n.getFullYear()}if(isNaN(e)){e=n.getMonth()}if(isNaN(k)){k=n.getDate()}if(isNaN(r)){r=n.getHours()}if(isNaN(f)){f=n.getMinutes()}if(o!=0&&e!=-1&&k!=0){return new Date(o,e,k,r,f,0)}o=0;e=-1;k=0;for(h=0;h<q.length;++h){if(q[h].search(/[a-zA-Z]+/)!=-1){var s=-1;for(g=0;g<12;++g){if(Calendar._MN[g].substr(0,q[h].length).toLowerCase()==q[h].toLowerCase()){s=g;break}}if(s!=-1){if(e!=-1){k=e+1}e=s}}else{if(parseInt(q[h],10)<=12&&e==-1){e=q[h]-1}else{if(parseInt(q[h],10)>31&&o==0){o=parseInt(q[h],10);(o<100)&&(o+=(o>29)?1900:2000)}else{if(k==0){k=q[h]}}}}}if(o==0){o=n.getFullYear()}if(e!=-1&&k!=0){return new Date(o,e,k,r,f,0)}return n};Date.prototype.getMonthDays=function(b){var a=this.getFullYear();if(typeof b=="undefined"){b=this.getMonth()}if(((0==(a%4))&&((0!=(a%100))||(0==(a%400))))&&b==1){return 29}else{return Date._MD[b]}};Date.prototype.getDayOfYear=function(){var a=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var c=new Date(this.getFullYear(),0,0,0,0,0);var b=a-c;return Math.floor(b/Date.DAY)};Date.prototype.getWeekNumber=function(){var c=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var b=c.getDay();c.setDate(c.getDate()-(b+6)%7+3);var a=c.valueOf();c.setMonth(0);c.setDate(4);return Math.round((a-c.valueOf())/(7*86400000))+1};Date.prototype.equalsTo=function(a){return((this.getFullYear()==a.getFullYear())&&(this.getMonth()==a.getMonth())&&(this.getDate()==a.getDate())&&(this.getHours()==a.getHours())&&(this.getMinutes()==a.getMinutes()))};Date.prototype.setDateOnly=function(a){var b=new Date(a);this.setDate(1);this.setFullYear(b.getFullYear());this.setMonth(b.getMonth());this.setDate(b.getDate())};Date.prototype.print=function(l){var b=this.getMonth();var k=this.getDate();var n=this.getFullYear();var p=this.getWeekNumber();var q=this.getDay();var v={};var r=this.getHours();var c=(r>=12);var h=(c)?(r-12):r;var u=this.getDayOfYear();if(h==0){h=12}var e=this.getMinutes();var j=this.getSeconds();v["%a"]=Calendar._SDN[q];v["%A"]=Calendar._DN[q];v["%b"]=Calendar._SMN[b];v["%B"]=Calendar._MN[b];v["%C"]=1+Math.floor(n/100);v["%d"]=(k<10)?("0"+k):k;v["%e"]=k;v["%H"]=(r<10)?("0"+r):r;v["%I"]=(h<10)?("0"+h):h;v["%j"]=(u<100)?((u<10)?("00"+u):("0"+u)):u;v["%k"]=r;v["%l"]=h;v["%m"]=(b<9)?("0"+(1+b)):(1+b);v["%M"]=(e<10)?("0"+e):e;v["%n"]="\n";v["%p"]=c?"PM":"AM";v["%P"]=c?"pm":"am";v["%s"]=Math.floor(this.getTime()/1000);v["%S"]=(j<10)?("0"+j):j;v["%t"]="\t";v["%U"]=v["%W"]=v["%V"]=(p<10)?("0"+p):p;v["%u"]=q+1;v["%w"]=q;v["%y"]=(""+n).substr(2,2);v["%Y"]=n;v["%%"]="%";var t=/%./g;if(!Calendar.is_ie5&&!Calendar.is_khtml){return l.replace(t,function(a){return v[a]||a})}var o=l.match(t);for(var g=0;g<o.length;g++){var f=v[o[g]];if(f){t=new RegExp(o[g],"g");l=l.replace(t,f)}}return l};window._dynarch_popupCalendar=null;


/*===============================
/media/system/js/calendar-setup.js
================================================================================*/;
Calendar.setup=function(g){function f(h,i){if(typeof g[h]=="undefined"){g[h]=i}}f("inputField",null);f("displayArea",null);f("button",null);f("eventName","click");f("ifFormat","%Y/%m/%d");f("daFormat","%Y/%m/%d");f("singleClick",true);f("disableFunc",null);f("dateStatusFunc",g.disableFunc);f("dateTooltipFunc",null);f("dateText",null);f("firstDay",null);f("align","Br");f("range",[1900,2999]);f("weekNumbers",true);f("flat",null);f("flatCallback",null);f("onSelect",null);f("onClose",null);f("onUpdate",null);f("date",null);f("showsTime",false);f("timeFormat","24");f("electric",true);f("step",2);f("position",null);f("cache",false);f("showOthers",false);f("multiple",null);var c=["inputField","displayArea","button"];for(var b in c){if(typeof g[c[b]]=="string"){g[c[b]]=document.getElementById(g[c[b]])}}if(!(g.flat||g.multiple||g.inputField||g.displayArea||g.button)){alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");return false}function a(i){var h=i.params;var j=(i.dateClicked||h.electric);if(j&&h.inputField){h.inputField.value=i.date.print(h.ifFormat);if(typeof h.inputField.onchange=="function"){h.inputField.onchange()}}if(j&&h.displayArea){h.displayArea.innerHTML=i.date.print(h.daFormat)}if(j&&typeof h.onUpdate=="function"){h.onUpdate(i)}if(j&&h.flat){if(typeof h.flatCallback=="function"){h.flatCallback(i)}}if(j&&h.singleClick&&i.dateClicked){i.callCloseHandler()}}if(g.flat!=null){if(typeof g.flat=="string"){g.flat=document.getElementById(g.flat)}if(!g.flat){alert("Calendar.setup:\n  Flat specified but can't find parent.");return false}var e=new Calendar(g.firstDay,g.date,g.onSelect||a);e.setDateToolTipHandler(g.dateTooltipFunc);e.showsOtherMonths=g.showOthers;e.showsTime=g.showsTime;e.time24=(g.timeFormat=="24");e.params=g;e.weekNumbers=g.weekNumbers;e.setRange(g.range[0],g.range[1]);e.setDateStatusHandler(g.dateStatusFunc);e.getDateText=g.dateText;if(g.ifFormat){e.setDateFormat(g.ifFormat)}if(g.inputField&&typeof g.inputField.value=="string"){e.parseDate(g.inputField.value)}e.create(g.flat);e.show();return false}var d=g.button||g.displayArea||g.inputField;d["on"+g.eventName]=function(){var h=g.inputField||g.displayArea;var k=g.inputField?g.ifFormat:g.daFormat;var o=false;var m=window.calendar;if(h){g.date=Date.parseDate(h.value||h.innerHTML,k)}if(!(m&&g.cache)){window.calendar=m=new Calendar(g.firstDay,g.date,g.onSelect||a,g.onClose||function(i){i.hide()});m.setDateToolTipHandler(g.dateTooltipFunc);m.showsTime=g.showsTime;m.time24=(g.timeFormat=="24");m.weekNumbers=g.weekNumbers;o=true}else{if(g.date){m.setDate(g.date)}m.hide()}if(g.multiple){m.multiple={};for(var j=g.multiple.length;--j>=0;){var n=g.multiple[j];var l=n.print("%Y%m%d");m.multiple[l]=n}}m.showsOtherMonths=g.showOthers;m.yearStep=g.step;m.setRange(g.range[0],g.range[1]);m.params=g;m.setDateStatusHandler(g.dateStatusFunc);m.getDateText=g.dateText;m.setDateFormat(k);if(o){m.create()}m.refresh();if(!g.position){m.showAtElement(g.button||g.displayArea||g.inputField,g.align)}else{m.showAt(g.position[0],g.position[1])}return false};return e};


/*===============================
/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/off-canvas.js
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
/plugins/system/t3/base-bs3/js/script.js
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
/plugins/system/t3/base-bs3/js/menu.js
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
/plugins/system/t3/base-bs3/js/frontend-edit.js
================================================================================*/;
!function($){$(document).ready(function(){$('fieldset.radio').filter(function(){return $(this).find('input').length==2&&$(this).find('input').filter(function(){return $.inArray(this.value+'',['0','1'])!==-1;}).length==2;}).addClass('t3onoff').removeClass('btn-group');$('fieldset.t3onoff').find('label').addClass(function(){var $this=$(this),$input=$this.prev('input'),cls=$this.hasClass('off')||$input.val()=='0'?'off':'on';cls+=$input.prop('checked')?' active':'';return cls;});$('fieldset.radio').find('label').unbind('click').click(function(){var label=$(this),input=$('#'+label.attr('for'));if(!input.prop('checked')){label.addClass('active').siblings().removeClass('active');input.prop('checked',true).trigger('change');}});});}(jQuery);


/*===============================
/templates/ja_university_t3/js/script.js
================================================================================*/;
(function($){$(document).ready(function(){if($('.nav.nav-tabs').length>0){$('.nav.nav-tabs a').click(function(e){e.preventDefault();$(this).tab('show');})}
(function(){if($("#system-message").children().length){$("#system-message-container").show();$("#system-message a.close").click(function(){setTimeout(function(){if(!$("#system-message").children().length)$("#system-message-container").hide();if($('#t3-content').length>0&&$('#t3-content').html().trim().length==0){$('#t3-content').hide();}else if($('#t3-content').find('.blog-featured').length>0&&$('#t3-content').find('.blog-featured').html().trim().length==0&&$("#system-message").children().length==0){$('#t3-content').hide();}},100);});}else{$("#system-message-container").hide();}})();(function(){if($('.nav.navbar-nav').find('.nav-child').length){$('.nav.navbar-nav').find('.nav-child').each(function(){if($(this).width()>$(window).width())$(this).css('width',$(window).width());});}})();});})(jQuery);


/*===============================
/templates/ja_university_t3/js/holder.js
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
/plugins/system/t3/base-bs3/js/nav-collapse.js
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
/media/system/js/frontediting.js
================================================================================*/;
!function(t){t.fn.extend({jEditMakeAbsolute:function(e){return this.each(function(){var o,i=t(this);o=e?i.offset():i.position(),i.css({position:"absolute",marginLeft:0,marginTop:0,top:o.top,left:o.left,width:i.width(),height:i.height()}),e&&i.detach().appendTo("body")})}}),t(document).ready(function(){var e=200,o=100,i=function(i,n){var d,a,l,r,s,p,u,h,m,c,f,v,j,b,g;return v=function(t){return u<t.top&&s<t.left&&p>t.left+e&&r>t.top+o},d=t(n),b=t.extend({},d.offset(),{width:n.offsetWidth,height:n.offsetHeight}),u=t(document).scrollTop(),s=t(document).scrollLeft(),p=s+t(window).width(),r=u+t(window).height(),h={top:b.top-o,left:b.left+b.width/2-e/2},m={top:b.top+b.height,left:b.left+b.width/2-e/2},c={top:b.top+b.height/2-o/2,left:b.left-e},f={top:b.top+b.height/2-o/2,left:b.left+b.width},a=v(h),l=v(m),j=v(c),g=v(f),a?"top":l?"bottom":j?"left":"right"};t(".jmoddiv").on({mouseenter:function(){var e=t(this).data("jmodediturl"),o=t(this).data("jmodtip"),n=t(this).data("target");t("body>.btn.jmodedit").clearQueue().tooltip("destroy").remove(),t(this).addClass("jmodinside").prepend('<a class="btn jmodedit" href="#" target="'+n+'"><span class="icon-edit"></span></a>').children(":first").attr("href",e).attr("title",o).tooltip({container:!1,html:!0,placement:i}).jEditMakeAbsolute(!0),t(".btn.jmodedit").on({mouseenter:function(){t(this).clearQueue()},mouseleave:function(){t(this).delay(500).queue(function(e){t(this).tooltip("destroy").remove(),e()})}})},mouseleave:function(){t("body>.btn.jmodedit").delay(500).queue(function(e){t(this).tooltip("destroy").remove(),e()})}});var n=null;t(".jmoddiv[data-jmenuedittip] .nav li,.jmoddiv[data-jmenuedittip].nav li,.jmoddiv[data-jmenuedittip] .nav .nav-child li,.jmoddiv[data-jmenuedittip].nav .nav-child li").on({mouseenter:function(){var e=/\bitem-(\d+)\b/.exec(t(this).attr("class"));if("string"==typeof e[1])var o=t(this).closest(".jmoddiv"),i=o.data("jmodediturl"),d=i.replace(/\/index.php\?option=com_config&controller=config.display.modules([^\d]+).+$/,"/administrator/index.php?option=com_menus&view=item&layout=edit$1"+e[1]);var a=o.data("jmenuedittip").replace("%s",e[1]),l=t('<div><a class="btn jfedit-menu" href="#" target="_blank"><span class="icon-edit"></span></a></div>');l.children("a.jfedit-menu").prop("href",d).prop("title",a),n&&t(n).popover("hide"),t(this).popover({html:!0,content:l.html(),container:"body",trigger:"manual",animation:!1,placement:"bottom"}).popover("show"),n=this,t("body>div.popover").on({mouseenter:function(){n&&t(n).clearQueue()},mouseleave:function(){n&&t(n).popover("hide")}}).find("a.jfedit-menu").tooltip({container:!1,html:!0,placement:"bottom"})},mouseleave:function(){t(this).delay(1500).queue(function(e){t(this).popover("hide"),e()})}})})}(jQuery);