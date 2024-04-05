const fs = require('fs');

// Function to read input data from a JSON file
function readInputData(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Function to calculate Euclidean distance between attributes of two objects
function calculateDistance(applicant, teamMember) {
    const attributes = ["intelligence", "strength", "endurance", "spicyFoodTolerance"];
    let totalDistance = 0;
    for (let attribute of attributes) {
        totalDistance += Math.pow(applicant.attributes[attribute] - teamMember.attributes[attribute], 2);
    }
    return Math.sqrt(totalDistance);
}

// Function to calculate compatibility score for an applicant
function calculateScore(applicant, team) {
    let minDistance = Infinity;
    for (let teamMember of team) {
        let distance = calculateDistance(applicant, teamMember);
        minDistance = Math.min(minDistance, distance);
    }
    const maxDistance = Math.sqrt(Object.keys(applicant.attributes).length * 100);
    return 1 - (minDistance / maxDistance);
}

// Function to score all applicants against the team
function scoreApplicants(team, applicants) {
    const scoredApplicants = [];
    for (let applicant of applicants) {
        const score = calculateScore(applicant, team);
        scoredApplicants.push({ name: applicant.name, score: score });
    }
    return scoredApplicants;
}

// Main function
function main() {
    const inputData = readInputData('inputdata.json');
    const scoredApplicants = scoreApplicants(inputData.team, inputData.applicants);
    const output = { scoredApplicants: scoredApplicants };
    console.log(JSON.stringify(output, null, 2));
}

// Execute main function
main();