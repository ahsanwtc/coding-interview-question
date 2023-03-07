function printList(lst) {
  let output = ""

  if(lst.length){
  output = "["
  var i = 0
  for (i = 0; i < lst.length - 1; i++){
    output += lst[i] + ", "
  }
  output += lst[i] + "]"
  }

  else{
    output = "[]"
  }
  
  return output;
};

module.exports = printList;