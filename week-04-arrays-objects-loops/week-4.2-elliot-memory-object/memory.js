let userMemory1 = {
    name: "daveOlana",
    goals: "Complete task 4.2",
    activeProject: "userMemory",
    weeklyHours: 20,
    blockers: 0,
}
const userDetails = [userMemory1.name, userMemory1.goals, userMemory1.activeProject, userMemory1.weeklyHours, userMemory1.blockers];

    console.log(`============================================================`)

for (let i = 0; i < userDetails.length; i++){
    if (i === 3){
        console.log(`Hours Spent this Week: ${userDetails[i]}`);
    } else if (i === 4){
        console.log(`Blockers encountered: ${userDetails[i]}`);
    } else {
        console.log(userDetails[i]);
    }
    
}
    console.log(`============================================================`)


let project1 = {
    name: "missionPrint",
    tasks: 3,
    blockers: 0,
    status: "Done"
}

let project2 = {
    name: "variable types",
    tasks: 4,
    blockers: 0,
    status: "Done"
}

let project3 = {
    name: "conditionals training",
    tasks: 4,
    blockers: 0,
    status: "Done"
}

let project4 = {
    name: "arrays and objects",
    tasks: 3,
    blockers: 0,
    status: "inProgress"
}

const projectObjects = [project1, project2, project3, project4];

for (let i = 0; i < projectObjects.length; i++){

        console.log(`============================================================`)
        console.log(`Below, are the constituents of ${projectObjects[i].name}`)

        console.log(`Tasks Present: ${projectObjects[i].tasks}`)
        console.log(`Blockers Active: ${projectObjects[i].blockers}`)
        console.log(`Project Status: ${projectObjects[i].status}`)
        console.log(`============================================================`)

    }





