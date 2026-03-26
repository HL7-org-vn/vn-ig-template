doRedirect();

function doRedirect() {
  var userLang = navigator.language || navigator.userLanguage;
  var path = window.location.pathname;
  var pageName = path.substring(path.lastIndexOf('/') + 1);
  var target = "";
  for (var i = 0; i < langs.length; i++) {
    if ((userLang == langs[i]) || userLang.startsWith(langs[i]+"-")) {
      target = "/" + langs[i] + (pageName ? "/" + pageName : "/");
      window.location.replace(target);
      return;
    }
  }
  target = "/" + langs[0] + (pageName ? "/" + pageName : "/");
  window.location.replace(target);
}
