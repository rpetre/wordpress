var switchEditors={go:function(j){var k=this,d=j.id,e=d.length,b=d.substr(0,e-5),g=d.substr(e-4),h=tinyMCE.get(b),i="wp-"+b+"-wrap",f=tinymce.DOM,c=f.get(b);if("tmce"==g){if(h&&!h.isHidden()){return false}if(tinyMCEPreInit.mceInit[b]&&tinyMCEPreInit.mceInit[b].wpautop){c.value=k.wpautop(c.value)}if(h){h.show()}else{h=new tinymce.Editor(b,tinyMCEPreInit.mceInit[b]);h.render()}f.removeClass(i,"html-active");f.addClass(i,"tmce-active");setUserSetting("editor","tinymce")}else{if("html"==g){if(h&&h.isHidden()){return false}if(h){c.style.height=h.getContentAreaContainer().offsetHeight+20+"px";h.hide()}f.removeClass(i,"tmce-active");f.addClass(i,"html-active");setUserSetting("editor","html")}}return false},_wp_Nop:function(b){var c,a;if(b.indexOf("<pre")!=-1||b.indexOf("<script")!=-1){b=b.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(d){d=d.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp_temp>");return d.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp_temp>")})}c="blockquote|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|div|h[1-6]|p|fieldset";b=b.replace(new RegExp("\\s*</("+c+")>\\s*","g"),"</$1>\n");b=b.replace(new RegExp("\\s*<((?:"+c+")(?: [^>]*)?)>","g"),"\n<$1>");b=b.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>");b=b.replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n");b=b.replace(/\s*<p>/gi,"");b=b.replace(/\s*<\/p>\s*/gi,"\n\n");b=b.replace(/\n[\s\u00a0]+\n/g,"\n\n");b=b.replace(/\s*<br ?\/?>\s*/gi,"\n");b=b.replace(/\s*<div/g,"\n<div");b=b.replace(/<\/div>\s*/g,"</div>\n");b=b.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n");b=b.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption");a="blockquote|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|h[1-6]|pre|fieldset";b=b.replace(new RegExp("\\s*<((?:"+a+")(?: [^>]*)?)\\s*>","g"),"\n<$1>");b=b.replace(new RegExp("\\s*</("+a+")>\\s*","g"),"</$1>\n");b=b.replace(/<li([^>]*)>/g,"\t<li$1>");if(b.indexOf("<hr")!=-1){b=b.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")}if(b.indexOf("<object")!=-1){b=b.replace(/<object[\s\S]+?<\/object>/g,function(d){return d.replace(/[\r\n]+/g,"")})}b=b.replace(/<\/p#>/g,"</p>\n");b=b.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1");b=b.replace(/^\s+/,"");b=b.replace(/[\s\u00a0]+$/,"");b=b.replace(/<wp_temp>/g,"\n");return b},_wp_Autop:function(a){var b="table|thead|tfoot|tbody|tr|td|th|caption|col|colgroup|div|dl|dd|dt|ul|ol|li|pre|select|form|blockquote|address|math|p|h[1-6]|fieldset|legend|hr|noscript|menu|samp|header|footer|article|section|hgroup|nav|aside|details|summary";if(a.indexOf("<object")!=-1){a=a.replace(/<object[\s\S]+?<\/object>/g,function(c){return c.replace(/[\r\n]+/g,"")})}a=a.replace(/<[^<>]+>/g,function(c){return c.replace(/[\r\n]+/g," ")});if(a.indexOf("<pre")!=-1||a.indexOf("<script")!=-1){a=a.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(c){return c.replace(/(\r\n|\n)/g,"<wp_temp_br>")})}a=a+"\n\n";a=a.replace(/<br \/>\s*<br \/>/gi,"\n\n");a=a.replace(new RegExp("(<(?:"+b+")(?: [^>]*)?>)","gi"),"\n$1");a=a.replace(new RegExp("(</(?:"+b+")>)","gi"),"$1\n\n");a=a.replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n");a=a.replace(/\r\n|\r/g,"\n");a=a.replace(/\n\s*\n+/g,"\n\n");a=a.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n");a=a.replace(/<p>\s*?<\/p>/gi,"");a=a.replace(new RegExp("<p>\\s*(</?(?:"+b+")(?: [^>]*)?>)\\s*</p>","gi"),"$1");a=a.replace(/<p>(<li.+?)<\/p>/gi,"$1");a=a.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>");a=a.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>");a=a.replace(new RegExp("<p>\\s*(</?(?:"+b+")(?: [^>]*)?>)","gi"),"$1");a=a.replace(new RegExp("(</?(?:"+b+")(?: [^>]*)?>)\\s*</p>","gi"),"$1");a=a.replace(/\s*\n/gi,"<br />\n");a=a.replace(new RegExp("(</?(?:"+b+")[^>]*>)\\s*<br />","gi"),"$1");a=a.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1");a=a.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]");a=a.replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(e,d,f){if(f.match(/<p( [^>]*)?>/)){return e}return d+"<p>"+f+"</p>"});a=a.replace(/<wp_temp_br>/g,"\n");return a},pre_wpautop:function(b){var a=this,d={o:a,data:b,unfiltered:b},c=typeof(jQuery)!="undefined";if(c){jQuery("body").trigger("beforePreWpautop",[d])}d.data=a._wp_Nop(d.data);if(c){jQuery("body").trigger("afterPreWpautop",[d])}return d.data},wpautop:function(b){var a=this,d={o:a,data:b,unfiltered:b},c=typeof(jQuery)!="undefined";if(c){jQuery("body").trigger("beforeWpautop",[d])}d.data=a._wp_Autop(d.data);if(c){jQuery("body").trigger("afterWpautop",[d])}return d.data}};