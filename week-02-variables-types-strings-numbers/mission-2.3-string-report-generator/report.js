// String Report Generator
const bootcampTitle = "XcelerateAI Javascript Mobile Ops";
const learner = "DaveOlana";
const currentWeek = 2;
const goal = "Build Elliot V1";

const weeklyReport = `
=========================================
          WEEKLY PROGRESS REPORT
=========================================
Learner Profile:   ${learner}
Bootcamp Path:     ${bootcampTitle}
Target Focus:      ${goal}
Active Milestone:  Week ${currentWeek} Completed
Status:            Ready for next phase!
=========================================
`;

console.log(weeklyReport.trim());
