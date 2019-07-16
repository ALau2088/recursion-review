// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  return json(obj);
};

var json = function(obj) {
  // Base cases-primitive types
  // number
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // null
  if (obj === null) {
    return 'null';
  }
    
  // true or false
  if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }
    
  // string
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  
  // Recursive cases
  // Arrays 
  if (Array.isArray(obj) === true) {
  // Empty Array
    if (obj.length === 0 ) {
      return '[]';
    } else {
      return '[' + stringifyArray(obj) + ']';
    }
  } 
  // Objects
  if (typeof obj === 'object') {
    if (Object.keys(obj).length > 0) {
      return stringifyObj(obj);
    } else {
      return '{}';
    }
  }
};

var stringifyArray = function(obj) {
  var newArray = [];
  /*var newArray = "";
  
  if (obj.length >1) {
    for (var i=0; i<obj.length -1; i++){
      newArray = newArray + json(obj[i]) + "," 
    }
  }
 return newArray + json(obj[obj.length-1])*/
 
  if (obj.length > 0) {
    for (var i = 0; i < obj.length; i++) {
      newArray.push(json(obj[i]));
    }
  }
  return newArray;
};

var stringifyObj = function(obj) {
  var newObj = '';
  for (var key in obj) {
    if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
      newObj = newObj + '"' + key + '":' + json(obj[key]) + ',';  
    }
  }
  newObj = newObj.substring(0, newObj.length - 1);
  return '{' + newObj + '}';
};


