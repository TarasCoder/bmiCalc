function bmiCalculator(weight, height){
  let result =  weight / (height*2);
  return result.toFixed(2);
}
$("#checkBtn").on("click",function(){
    
    $('#result').text(bmiCalculator());
})
