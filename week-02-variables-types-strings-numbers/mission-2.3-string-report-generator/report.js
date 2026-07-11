let learnerName = "DaveOlana"
let courseName = "MobileDev";
let weeks = 16;
let weeksCompleted = 2;
let weeksLeft = weeks - weeksCompleted;
let introduction;
let body
let aspirations
let finalMission = "Elliot Mission v1"

aspirations = `
Firstly, I am working towards building skills that would establish my mobile development abilities while also providing proof of my capability by embarking on and completing projects.

I am also super excited to complete the final boss mission which will allow me to build my own personalised AI agentic bot, Elliot.`
introduction = `Hello there! I am: ${learnerName}, the first student of the student-focused Xcelerate bootcamp center and the first student of the ${courseName} track. `
body = `This task will be the last task required to complete week ${weeksCompleted}, after which I would have ${weeksLeft} left.
${aspirations}.`


console.log(introduction)
console.log(body)
console.log(`I cant wait to complete my final project: ${finalMission}!!!`)
