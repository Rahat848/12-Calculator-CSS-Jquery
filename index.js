
var resultField = $("#result");


function insertNumber(number){
  
    var existingNumbers = resultField.val();
   resultField.val(existingNumbers + number);

     
}


function clearResult(){
    resultField.val('');
}

//eval() eti easily ganitic hisab kora dai alada sum mul div use kora laga na;
function calculate(){
  var result = eval(resultField.val())
 resultField.val(result);
}


function deleteNumber(){
   var presentValue = resultField.val();
   if(presentValue!=''){
    resultField.val(presentValue.slice(0,-1))
   }
}