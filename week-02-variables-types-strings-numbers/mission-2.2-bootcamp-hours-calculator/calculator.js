// Bootcamp Hours Calculator
const dailyStudyHours = 3.5;
const weeklyStudyDays = 6;
const bootcampDurationWeeks = 24;

const totalWeeklyHours = dailyStudyHours * weeklyStudyDays;
const totalBootcampHours = totalWeeklyHours * bootcampDurationWeeks;

console.log("=========================================");
console.log(`⏱️ DAILY PACING: ${dailyStudyHours} Hours/Day`);
console.log(`📅 WEEKLY RUN: ${weeklyStudyDays} Days/Week`);
console.log(`📐 WEEKLY COMMITMENT: ${totalWeeklyHours} Hours/Week`);
console.log(`🏆 TOTAL PACED TARGET: ${totalBootcampHours} Hours`);
console.log("=========================================");
