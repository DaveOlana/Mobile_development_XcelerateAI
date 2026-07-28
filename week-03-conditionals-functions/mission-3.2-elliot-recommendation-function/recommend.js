/* The first function takes in a PERCENTAGE VALUE
returned by a PERCENTAGE FUNCTION and allow the user
to get the percentage in a PROGRESS STATUS*/
let currentWeek = 3;
let tasksThisWeek = 9;
let tasksCompleted = 9;
let blockerCount = 0;

function percent() {
    return ((tasksCompleted / tasksThisWeek) * 100);
}

function getProgressStatus(percent){
    console.log(`you have completed ${percent} percent of your tasks for week ${currentWeek}` );
}

function getBlockerAdvice(){
    if (blockerCount > 0){
        console.log("Ensure that you fix the pending issues before proceeding");
    } else if (blockerCount <= 0) {
        console.log("Congratulations! You can proceed to the next task");
    }
}


function getNextAction(){
    if (tasksThisWeek === tasksCompleted && blockerCount === 0) {
        console.log("Amazing!!! You competed this week. Proceed to the next week.")
    } else if (tasksCompleted < tasksThisWeek && blockerCount > 0){
        console.log("Kindly complete your outstanding tasks before proceeding");
    } else (console.log("Welldone!! Ensure you fix your blockers before proceeding!"))
        
    }


getNextAction();
getBlockerAdvice();
getProgressStatus(percent());