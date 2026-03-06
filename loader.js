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

/* sem budeš přidávat další kód */

console.log("Shoptet loader running");

})();
