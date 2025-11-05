function calculateBMI(weight, height)  {
    const bmi = weight / (height * height);

    let classification;
    if(bmi < 18.5)  {
        classification = "thieu can";
    } else if (bmi < 25) {
        classification = "binh thuong";
    } else if (bmi < 30) {
        classification = "thua can";
    } else {
        classification = "beo phi";
    }

    return `BMI : ${bmi.toFixed(2)} -phan loai: ${classification}`;

}
console.log(calculateBMI(70, 1.75));