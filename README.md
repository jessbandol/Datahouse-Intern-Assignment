# DataHouse Internship Assignment: Compatitibility Predictor
This application calculates the compatibility score of applicants with a team based on the given attributes.

## Input and Output
The input and output of the application are in JSON format. See the [inputdata.json](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/inputdata.json) file for input format.

## Create & Run the Application
1. Make sure you have Javascript and Node installed.
2. Create a repository to hold all the incoming files.
3. Navigate to the directory and create 2 files ([compatibilityscore.js](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/compatibilityscore.js) and [inputdata.json](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/inputdata.json))
4. In inputdata.json, copy & paste the given applicants, team members, and their respective attributes.
5. In compatibilityscore.js, import the json file and fs module (const fs = require('fs'); & const inputData = readInputData('inputdata.json');)
6. Add the required algothrim the clauclate the compatibility
7. Create lines of code to do the following: how far appart one's attibutes are to one another, how to calculate the compatibility score for an applicant, how to score all applicants against the team, execute all the functions, and to print out the result in JSON
9. Run the following command: node compatibilityscore.js
10. The output will be displayed in the terminal.

# Algorithm Explanation

## const fs = require('fs');
+ Imports the fs module and assigns it to the variable fs. This module allows Javascript to use its functions within the code (i.e. read and write files in Node.js)

## function readInputData(filePath)
+ This function serves as the algorithim used to read the inputdata.json file using the fs module.
+ Javascript now starts accessing and processing the content in inputdata.json file.

## function calculateDistance(applicant, teamMember)
+ This function computes the Euclidean distance between the attributes of an applicant and a team member.
    + Euclidean measure is used because there are multiple attributes to consider rather than 2——x & y varibles. Due to this, we need to approach the situation in a 4D or multidimensional manner.
+ We first need to address our parameters: applicant and teamMember
+ Then, we create an array that contains the names of the attributes to consider when calculating the distance: "intelligence", "strength", "endurance", "spicyFoodTolerance"
+ We calculate the distance between the attributes of the applicant and teamMember by looping through each attribute (like intelligence, strength, etc.) they have in common.
    +  Take note that we are looping in order to consider all relevant attributes when assessing their compatibility.
+ For each attribute, we find the difference between the attribute values of the applicant and teamMember.
+ Finally, we add up how much each attribute differs between the applicant and teamMember, then find the square root of that sum to get a single number that tells us how different they are overall.

## function calculateScore(applicant, team)
+ We start by setting the value of `minDistance` to Infinity.
    + This variable tracks the smallest distance found between the applicant and any team member.
+ Next, we loop through each `teamMember` in the `team` array.
    + For each `teamMember`, we calculate the distance between the applicant and the team member using the `calculateDistance` function.
+ To estimate the maximum possible distance between the applicant and any team member, we use a constant value (100) as a rough estimate.
    + This value helps represent the extent of each attribute, considering that attributes can have different scales and ranges.
+ Once we have both the minimum and maximum distances, we calculate how close the applicant is to the closest team member relative to the maximum possible distance.
    + We do this by subtracting the `minDistance` from the `maxDistance` and dividing the result by `maxDistance`.
+ Finally, we subtract this ratio from 1 to obtain a score.
    + The higher the score, the closer the applicant is to the closest team member, indicating a better match.

## function scoreApplicants(team, applicants)
+ This function helps us calculate compatibility scores for each applicant.
+ Create an empty array called scoredApplicants to store the calculated scores for each applicant.
+ Loop through each applicant in the applicants array.
    + For each applicant, we calculate their compatibility score with the provided team using the calculateScore function
+ The calculated score is pushed into the scoredApplicants array along with the applicant's name.
+ After looping through all applicants, we return the scoredApplicants array containing the compatibility scores for each applicant.

## function main()
+ "main" starts the process of reading input data, scoring applicants, and producing output.
+ readInputData function to read input data from the inputdata.json file.
+ Call the scoreApplicants function to calculate compatibility scores for each applicant based on the input data.
+ Create an output object containing the scoredApplicants array, which holds the compatibility scores for each applicant.
+ Use JSON.stringify() to convert the output object to a JSON string.
+ main(); triggers the entire "main" function.

# Results
{
  "scoredApplicants": [
    {
      "name": "John",
      "score": 0.841886116991581
    },
    {
      "name": "Jane",
      "score": 0.7550510257216823
    },
    {
      "name": "Joe",
      "score": 0.5283009433971698
    }
  ]
}

**John is the most compatible applicant!**
