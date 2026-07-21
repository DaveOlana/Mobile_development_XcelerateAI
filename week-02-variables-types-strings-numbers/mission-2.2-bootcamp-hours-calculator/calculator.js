let weeks = 12;
let minHoursPerWeek = 25;
let maxHoursPerWeek = 30;
let totalHoursSpent = 50;
let completedWeeks = 2;

let averageHoursPerWeek = totalHoursSpent/completedWeeks; //250
let remainingWeeks = weeks - completedWeeks; //10 weeks
let maxTotalHours = weeks * maxHoursPerWeek; // 360 hours

let minTotal = minHoursPerWeek * weeks; //complete
let maxTotal = maxHoursPerWeek * weeks;  //complete

//completed hours larger than total
let currentCompletedHours = completedWeeks * averageHoursPerWeek; //500
let remainingHours = remainingWeeks * minHoursPerWeek; //issue was average hours variable

console.log(`min hours per week is: ${minTotal}, and maximum hours per week is: ${maxTotal}`);

console.log(maxTotalHours)
console.log(currentCompletedHours)

if (currentCompletedHours > maxTotalHours){
    console.log("Error!! Completed hours must be less than Maximum hours");
}else{
    console.log(`Current completed hours is: ${currentCompletedHours}, and hours left is: ${remainingHours}`);
}