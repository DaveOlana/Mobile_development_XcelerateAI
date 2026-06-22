// Month Decision Boss Drill
function evaluateMonthStatus(monthNumber, completionRate) {
    let phase = "";
    
    // Phase categorization
    switch(monthNumber) {
        case 1:
            phase = "Launch Environment & Basic JS Operations";
            break;
        case 2:
            phase = "Logic Controls & Functions";
            break;
        case 3:
            phase = "Data Models & Storage Integration";
            break;
        default:
            phase = "Advanced Mobile Systems Architecting";
    }

    console.log(`Evaluating Month ${monthNumber}: ${phase}`);
    
    if (completionRate >= 90) {
        return "🟢 STATUS: EXCELLENT. Ready to unlock advanced modules.";
    } else if (completionRate >= 70) {
        return "🟡 STATUS: SATISFACTORY. Clear remaining side quests first.";
    } else {
        return "🔴 STATUS: CRITICAL. Complete outstanding deliverables before proceeding.";
    }
}

console.log("=========================================");
console.log("🎮 COCKPIT CONTROL PANEL - MONTH DECISIONS");
console.log("=========================================");
const evaluation = evaluateMonthStatus(1, 95);
console.log(evaluation);
console.log("=========================================");
