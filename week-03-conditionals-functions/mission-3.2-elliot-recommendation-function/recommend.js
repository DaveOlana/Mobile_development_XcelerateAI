// Elliot Recommendation Function
function getActionRecommendation(topicScore, hoursCommitted) {
    if (topicScore >= 80 && hoursCommitted >= 15) {
        return "🔥 Advanced: Proceed to implement custom side quests and optimization routines.";
    } else if (topicScore >= 50 || hoursCommitted >= 10) {
        return "⚡ Standard: Focus on core assignments and complete the weekly reflections.";
    } else {
        return "⚠️ Alert: Schedule mentor reviews and increase study allocation time.";
    }
}

const score = 85;
const hours = 18;
const recommendation = getActionRecommendation(score, hours);

console.log("=========================================");
console.log("🦾 ELLIOT SYSTEM ENGINE - RECOMMENDATION");
console.log("=========================================");
console.log(`Input Profile - Score: ${score}%, Hours: ${hours}h`);
console.log(`Action Advice: ${recommendation}`);
console.log("=========================================");
