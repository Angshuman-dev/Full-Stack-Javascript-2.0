let weight=prompt("Enter weight in kgs")
let height = prompt("Enter height in m")

BMI=weight/(height*height)

switch (true) {
    case (0<BMI<=18.5):
        console.log('Underweight')
        break;
    case (18.5<BMI<=24.9):
        console.log('Normal weight')
        break;
    case (25<BMI<=29.9):
        console.log('Overweight')
        break;
    case (BMI>=30):
        console.log('Obese')
        break;
    default:
        break;
}