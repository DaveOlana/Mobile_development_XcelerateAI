const projects = ["Portfolio", "TheScoreBoard", "Bootcamp Command Center", "Elliot V1", "Growth OS"]


console.log(`Here is the inventory excluding the first item:`)
for (i = 0; i < projects.length; i++){
    console.log(`${i + 1}. ${projects[i]}`)
}


//Added a new value to the existing array
projects.push("Jigi Studios");
console.log (`${i + 1}. ${projects[projects.length - 1]}`);