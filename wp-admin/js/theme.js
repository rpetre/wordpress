var ThemeViewer;(function(a){ThemeViewer=function(b){function d(){var f=a("#filter-box :checked").length;var g=a("#filter-click").text();if(g.indexOf("(")!=-1){g=g.substr(0,g.indexOf("("))}if(f==0){a("#filter-click").text(g)}else{a("#filter-click").text(g+" ("+f+")")}}function e(){a("#filter-click, #mini-filter-click").unbind("click").click(function(){a("#filter-click").toggleClass("current");a("#filter-box").slideToggle();a("#current-theme").slideToggle(300);return false});a("#filter-box :checkbox").unbind("click").click(function(){d()});a("#filter-box :submit").unbind("click").click(function(){var f=[];a("#filter-box :checked").each(function(){f.push(a(this).val())});listTable.update_rows({features:f},true,function(){a("#filter-click").toggleClass("current");a("#filter-box").slideToggle();a("#current-theme").slideToggle(300)});return false})}var c={init:e};return c}})(jQuery);jQuery(document).ready(function(a){theme_viewer=new ThemeViewer();theme_viewer.init()});