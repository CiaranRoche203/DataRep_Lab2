class BMI {
    //bmi class
    //takes in 2 arguments weight and height
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    //calculating the bmi of user method
    calculateBMI() {
        //calculation
        let bmi = this.weight / (this.height ** 2);
        return bmi;
        //returns bmi as output
    }
}
//parameters used to calculate this users bmi
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();
//displaying output
console.log(calculatedBMI);