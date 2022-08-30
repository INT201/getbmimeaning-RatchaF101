const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  BMI = weight/Math.pow(height,2)
  console.log(BMI)
}

function getBMIMeaning(weight, height) {
  calculateBMI(weight,height)
  if(BMI < 18.5){
      return console.log("Underweight")
  }
  else if(18.5 < BMI && BMI < 24.9){
      return console.log("Normal weight")
  }
  else if(BMI > 25.0){
      return console.log("Overweight")
  }else{
      return false
  }
}
module.exports = getBMIMeaning
