// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elements = [];

  var nodes = function(el){
    if (el.classList && el.classList.contains(className)){
      elements.push(el)
    }
    for (var i = 0; i < el.childNodes.length; i++){
      nodes(el.childNodes[i])
    }
  };
  nodes(document.body);
  return elements;
};
