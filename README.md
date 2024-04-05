# DataHouse Internship Assignment: Compatitibility Predictor
This application calculates the compatibility score of applicants with a team based on the given attributes.

## Input and Output
The input and output of the application are in JSON format. See the input_data.json file for input format.

## Create & Run the Application
To run the application:

1. Make sure you have Javascript and Node installed.
2. Create a repository to hold all the incoming files.
3. Navigate to the directory and create 2 files ([compatibilityscore.js](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/compatibilityscore.js) and [inputdata.json](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/inputdata.json))
4. In inputdata.json, copy & paste the given applicants, team members, and their respective attributes.
5. In compatibilityscore.js, import the json file and fs module (const fs = require('fs'); & const inputData = readInputData('inputdata.json');)
6. Add the required algothrim the clauclate the compatibility
7. Create lines of code to do the following: how far appart one's attibutes are to one another, how to calculate the compatibility score for an applicant, how to score all applicants against the team, score all applicants against the team, and to print out the result in JSON
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
    + Euclidean measure is used because there are multiple attributes to consider rather than 2——x & y varibles. Due to this, we need to approach the situation in a 3D or multidimensional manner.
+  We first need to address our parameters: applicant and teamMember
+  Then, we create an array that contains the names of the attributes to consider when calculating the distance: "intelligence", "strength", "endurance", "spicyFoodTolerance"
+  We calculate the distance between the attributes of the applicant and teamMember by looping through each attribute (like intelligence, strength, etc.) they have in common.
+  For each attribute, we find the difference between the attribute values of the applicant and teamMember.
+ 

## function calculateScore(applicant, team)

## function scoreApplicants(team, applicants)

## function main()
+ Setting Up Data: It defines the attributes and characteristics of both the team members and the applicants
+ Scoring Applicants: It calculates how well each applicant matches the attributes of the team members. This involves comparing the attributes of each applicant with those of the team members to determine compatibility.
+ Formatting Output: It organizes the compatibility scores for each applicant into a structured format, making it easy to read and understand.
+ Printing Results: It displays the compatibility scores for each applicant, along with their names, in a clear and readable format.

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
