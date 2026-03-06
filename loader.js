(function(){

  function addScript(url){
    var s = document.createElement("script");
    s.src = url;
    s.defer = true;
    document.head.appendChild(s);
  }

  function addCSS(url){
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = url;
    document.head.appendChild(l);
  }

  addCSS("https://cdn.jsdelivr.net/gh/martinhlawiczka1234-crypto/shoptet-assets@main/style.css");

  console.log("Shoptet loader running");

})();
