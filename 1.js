function CalculateResult(){

    let n = document.getElementById("subject").value;
    let total = 0;

    for(let i=0;i<n;i++){
        let x = parseFloat(prompt("Enter marks of subject " + (i+1)));
        total += x;
    }

    let average = total/n;
    let grade;

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 75){
        grade = "B";
    }
    else if(average >= 50){
        grade = "C";
    }
    else{
        grade = "F";
    }

    let result = (average >= 40) ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}