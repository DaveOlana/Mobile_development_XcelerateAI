// Define simulated user data


let learnerName = "DaveOlana";
let learnerTrack = "XcelerateAI MobileDev"
let currentWeek = 3;
let weekTasks = 3;
let weekTasksCompleted = 3;
let weekBlockers = 2;
let proofPerTask = 4;

let totalProofsCompleted = proofPerTask * weekTasksCompleted;
let totalProofsPerWeek = proofPerTask * weekTasks;

function userData(){
    console.log (`Learner ${learnerName} is currently studying the ${learnerTrack} track and is on week ${currentWeek} which has a total of ${totalProofsPerWeek} proofs to be submitted.`)
}


//Test good week, bad week, blocked week, and proof-missing week
function weekCondition(){
        if (totalProofsPerWeek === totalProofsCompleted && weekBlockers <= 0){
            console.log("You've had a good week! Welldone! You can proceed to the next week now.")
        } else if (totalProofsPerWeek <= totalProofsCompleted && weekBlockers > 0){
            console.log("This is very bad. You have both blockers and uncompleted tasks. Kindly complete them before proceeding.")
        } else if (totalProofsPerWeek < totalProofsCompleted && weekBlockers <= 0){
            console.log("You have missing proofs required to be submitted. Kindly submit them before proceeding to the next week.")
        } else if (totalProofsPerWeek === totalProofsCompleted && weekBlockers > 0){
            console.log("You are done! But you still have blockers open. Kindly fix them before proceeding")
        } else {
            (console.log("You are doing well, but you're not done yet!"))
    }
} 
//Document the outputs
function outputDocumentation(){
    console.log(`The above is a written and logical documentation of ${learnerName}'s progress in the ${learnerTrack} course he is currently on.`)
}

//Build a final decision function

userData();
weekCondition();
outputDocumentation();