 // Function to calculate the BMI
 function calculateBMI() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="radio"]:checked').value;

    // Check if all fields have valid inputs
    if (isNaN(age) || isNaN(height) || isNaN(weight) || !gender) {
        alert('Please fill all the fields with valid input.');
        return;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);
    const roundedBMI = bmi.toFixed(2);

    // Display the BMI result
    const bmiResult = document.querySelector('.id');
    bmiResult.textContent = roundedBMI;

    // Provide a comment based on BMI category
    const comment = document.querySelector('.comment');
    if (bmi < 18.5) {
        comment.textContent = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment.textContent = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        comment.textContent = 'Overweight';
    } else {
        comment.textContent = 'Obese';
    }

    
    
}
function reset() {
document.getElementById('age').value = '';
document.getElementById('height').value = '';
document.getElementById('weight').value = '';
document.querySelector('input[name="radio"]:checked').checked = false;

const bmiResult = document.querySelector('.id');
bmiResult.textContent = '';

   
}


document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code, including the event listener setup, goes here
    const calculateButton = document.getElementById('submit');
    calculateButton.addEventListener('click', calculateBMI);
  });
  