/* The current task is to use the created variables to write a conditional statement.
   Using functions with if-else logic to check mission readiness per learner. */
//write if-else logic for ready, almost ready and blocked

function learnerDave() {
    let requiredTasks = 12; // estimated
    let completedTasks = 4; // estimated
    let blockersOpen = 0;   // no issues

    const proofSubmitted = () => completedTasks === requiredTasks;

    return {
        proofSubmitted: proofSubmitted(), 
        blockersOpen: blockersOpen,
    }
}

function learnerElliot() {
    let requiredTasks = 12; // estimated
    let completedTasks = 12; // estimated
    let blockersOpen = 0;   // no issues

    const proofSubmitted = () => completedTasks === requiredTasks;

    return {
        proofSubmitted: proofSubmitted(),
        blockersOpen: blockersOpen,
    }
}

function learnerSinach() {
    let requiredTasks = 12; // estimated
    let completedTasks = 9; // estimated
    let blockersOpen = 3;   // has blockers

    const proofSubmitted = () => completedTasks === requiredTasks;

    return {
        proofSubmitted: proofSubmitted(), 
        blockersOpen: blockersOpen,
    }
}


function studentReadiness() {
    let Sinach = learnerSinach();
    let Elliot = learnerElliot();
    let Dave = learnerDave();

    // Dave
    if (Dave.proofSubmitted === true) {
        console.log("Dave is ready!");
    } else if (Dave.blockersOpen > 0) {   
        console.log("Dave is almost ready");
    } else {
        console.log("Dave is not ready");
    }

    // Elliot
    if (Elliot.proofSubmitted === true) {
        console.log("Elliot is ready!");
    } else if (Elliot.blockersOpen > 0) {
        console.log("Elliot is almost ready");
    } else {
        console.log("Elliot is not ready");
    }

    // Sinach
    if (Sinach.proofSubmitted === true) {
        console.log("Sinach is ready!");
    } else if (Sinach.blockersOpen > 0) {
        console.log("Sinach is almost ready");
    } else {
        console.log("Sinach is not ready");
    }
}

studentReadiness();