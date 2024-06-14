document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    let weight = parseFloat(document.getElementById('weight').value);
    let bmi = weight / (height * height);
    document.getElementById('result').innerHTML = `<h3>Your BMI: ${bmi.toFixed(1)}</h3>`;
    document.getElementById('result').innerHTML += `<p>${interpretBMI(bmi)}</p>`;
});

function interpretBMI(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Normal weight";
    else if (bmi < 30) return "Overweight";
    else return "Obese";
}
