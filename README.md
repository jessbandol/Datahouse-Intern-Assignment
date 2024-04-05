# DataHouse Internship Assignment: Compatitibility Predictor
This application calculates the compatibility score of applicants with a team based on the given attributes.

## Input and Output
The input and output of the application are in JSON format. See the input_data.json file for input format.

## Create & Run the Application
To run the application:

1. Make sure you have Javascript and Node installed.
2. Create a repository to hold all the incoming files.
3. Navigate to the directory and create 2 files ([compatibilityscore.js](https://github.com/jessbandol/Datahouse-Intern-Assignment/blob/main/compatibilityscore.js) and inputdata.json)
4. In inputdata.json, copy & paste the given applicants, team members, and their respective attributes.
5. In compatibilityscore.js, import the json file and the math function (import inputdata.json, import math)
6. Add the required algothrim the clauclate the compatibility
7. Create lines of code to do the following: how far appart one's attibutes are to one another, how to calculate the compatibility score for an applicant, how to score all applicants against the team, score all applicants against the team, and to print out the result in JSON
9. Run the following command: python3 compatibilityscore.py.
10. The output will be displayed in the terminal.

# Algorithm Explanation

## const fs = require('fs');
+ Imports the fs module, which allows us to read and write files in Node.js. In simpler terms, it allows Javascript to access and process the content in inputdata.json file.

## function readInputData(filePath)


## function calculateDistance(applicant, teamMember)

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
