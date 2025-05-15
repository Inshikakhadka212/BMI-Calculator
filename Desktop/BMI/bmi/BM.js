 document.getElementById("bmiForm").addEventListener("submit" ,
    function (e)
    {
        e.preventDefault();
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const result = document.getElementById("result");
        if(height || weight || height <=0 || weight <=0) {
            result.textContent = "Only enter valid height annd weight !!";
            return;
        }
        const heightInMeter = height / 100;
        const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
        let category = "";
        if (bmi < 18.5){
            category = " Underweight";
        }else if (bmi < 24.9) {
            category =" Normalweight";
        }else if (bmi < 29.9){
            category = " Overweight";
        }else{ 
            category =" Obesity";
        }
        result.textContent = `Your BMI is  ${bmi} ( ${category})`;
    });
   