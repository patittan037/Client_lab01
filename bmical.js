var i=1
var body
var heigh, weight
var avgbmi 
var str

var bmitest = function() {

	console.log('BMI Calculator')
	console.log('Enter your weight (kg) :')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		if (i === 1){
			weight = value
			console.log('Enter your height (cm) :')}
		else {
			heigh = value/100
			stdin.destroy()
			avgbmi = ((weight / (heigh*heigh)))
			if (avgbmi < 18.5 ){
				str = 'Underweight'
			}
			else if (avgbmi >= 18.5 && avgbmi <= 24.9){
				str = 'Healthy'
			}
			else if (avgbmi >= 25.0 && avgbmi <= 29.9){
				str = 'Overweight'
			}
			else if (avgbmi >= 30.0 && avgbmi <= 34.9){
				str = 'Obese'
			}
			else if (avgbmi < 35){
				str = 'Extremly Obese'
			}

			console.log('YOUR BMI: ' + avgbmi + ' your ' + str  )

			}	
	i++	
	})
}

module.exports.bmitest= bmitest;