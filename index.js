var inputResult = document.querySelector("input");
function calc_value(value){
  var calcValue =value; 
  inputResult.value+=calcValue;
  
};
function calc_result(){
  var Allvalue = inputResult.value;
  var result = eval(Allvalue);
  inputResult.value=result;

}
function calc_clr(){
  inputResult.value="";
  
}
function calc_del(){
  inputResult.value=inputResult.value.substr(0, inputResult.value.length - 1);
  
  
}
document.body.addEventListener("keypress",function(e){
  var pressedValue=(e.key);
if(pressedValue =="0" ||pressedValue=="1"|| pressedValue=="2" ||pressedValue=="3" ||pressedValue=="4" ||pressedValue=="5" ||pressedValue=="6" ||pressedValue=="7"  ||pressedValue=="8" ||pressedValue=="9")
    {
   inputResult.value+=pressedValue;


}else if(pressedValue == "+" || pressedValue == "-" || pressedValue == "*" || pressedValue == "/"){

   
inputResult.value+=pressedValue;
}else if(pressedValue == "Enter"){
  var Allvalue = inputResult.value;
  var result = eval(Allvalue);
  inputResult.value=result;

}//else if(pressedValue == "backspace"){
  //inputResult.value=inputResult.value.substr(0, inputResult.value.length - 1);

//}
});
