function bmiCalculator(weight, height) {
  let result = weight / (height * 2);
  return result.toFixed(2);
}
$("#checkBtn").on("click", function (e) {
    e.preventDefault();
  let weight = $("#weightInput").val();
  let height = $("#heightInput").val();
  if (weight === "" || height === "") {
    alert("Fill all fields please!");
  } else {
    let description = "";
    let color = "";
    let resultBMI = bmiCalculator(weight, height);
    $("#resultBMI").text(resultBMI);
    if (resultBMI < 16){
        description = "Severe Thinness!";
        color = "#BAE0ED";
    } else if (resultBMI >= 16 && resultBMI <= 17){
        description = "Moderate Thinness";
        color = "#21EAED";
    } else if (resultBMI >= 17 && resultBMI <= 18.4){
        description = "Mild Thinness";
        color = "#18AAAC";
    } else if (resultBMI >= 18.5 && resultBMI <= 24.9){
       description = "Normal";
       color = "#56FF19";
    } else if (resultBMI >= 25 && resultBMI <= 30){
        description = "Overweight";
        color = "yellow";
    } else if (resultBMI >= 30.01 && resultBMI <= 35){
        description = "Obese Class I";
        color = "red";
    } else if (resultBMI >= 35.01 && resultBMI <= 40){
        description = "Obese Class II";
        color = "#A90000";
    } else if (resultBMI > 40.01){
        description = "Obese Class III";
        color = "#590000";
    }
    $("#resultDescription").text(description);
    $("#resultDescription").css("color", color);
  }
});
// Severe Thinness	< 16
// Moderate Thinness	16 - 17
// Mild Thinness	17 - 18.5
// Normal	18.5 - 25
// Overweight	25 - 30
// Obese Class I	30 - 35
// Obese Class II	35 - 40
// Obese Class III	> 40