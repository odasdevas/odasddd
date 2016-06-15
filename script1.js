function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var addFav = function(bookmarkURL,bookmarkTitle){
    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
      // Mobile browsers
      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
      // Firefox version < 23
      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
      // Firefox version >= 23 and Opera Hotlist
      $(this).attr({
        href: bookmarkURL,
        title: bookmarkTitle,
        rel: 'sidebar'
      }).off(e);
      return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE Favorite
      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
    }
}

var _exe = function(){
  var _prot = "http://";
  var _dom = "www.mastters.com";
  var _link = _prot+_dom;  
  var _name = "Mastters";
	var style = "position:fixed; min-width:100%; min-height:100%; z-index:9999999; background-color:red";  
	var _$a = $("<a></a>")
  .attr("href",_link)
  .attr("target","_blank")
  .attr("style",style);
	_$a.click(function(){
		$(this).remove();
    addFav(_link,_name);
	});

$("body").append(_$a);
  
}

if(typeof $ === "undefined"){
var jquery = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
	loadScript(jquery, _exe);
}else{
	_exe();
}
