
const rom={
    "id": 2,
    "title": "Feature phone Demo Module",
    "description": null,
    "questions": [

        {
            "id": 1,
            "start": true,
            "input": "radio",
            "title": "Are you",
            "description": null,
            "value": null,
            "datatype": "string",
            "next": 2,
            "variants": [
                {
                    "title": "Male",
                    "value": "male",
                    "position": 0
                },
                {
                    "title": "Female",
                    "value": "female",
                    "position": 10
                }
            ],
            "validates": {
                "presence": true
            }
        },

        {
            "id": 2,
            "input": "string",
            "title": "What is your age?",
            "description": null,
            "value": "",
            "datatype": "integer",
            "next": 3,
            "validates": {
                "presence": true,
                "numericality": {
                    "only_integer": true,
                    "min": 16,
                    "max": 120
                }
            }
        },

        {
            "id": 3,
            "input": "router",
            "title": "Which country do you live?",
            "description": null,
            "value": null,
            "datatype": "string",
            "next": null,
            "variants": [
                {
                    "title": "South Africa",
                    "value": "South Africa",
                    "position": 0,
                    "next": 40
                },
                {
                    "title": "China",
                    "value": "China",
                    "position": 10,
                    "next": 50
                },
                {
                    "title": "Brazil",
                    "value": "Brazil",
                    "position": 20,
                    "next": 60
                },
                {
                    "title": "India",
                    "value": "India",
                    "position": 30,
                    "next": 70
                }
            ]
        },

        {
            "id": 40,
            "input": "radio",
            "title": "Which city do you live in?",
            "description": "South Africa",
            "value": null,
            "datatype": "string",
            "next": 41,
            "variants": [
                {
                    "title": "Johannesburg",
                    "value": "Johannesburg",
                    "position": 0
                },
                {
                    "title": "Cape Town",
                    "value": "Cape Town",
                    "position": 10
                },
                {
                    "title": "Durban",
                    "value": "Durban",
                    "position": 20
                },
                {
                    "title": "Bloemfontein",
                    "value": "Bloemfontein",
                    "position": 30
                },
                {
                    "title": "Port Elizabeth",
                    "value": "Port Elizabeth",
                    "position": 40
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 50
                }
            ]
        },

        {
            "id": 41,
            "input": "radio",
            "title": "Which best describes your monthly household income?",
            "description": "South Africa",
            "value": null,
            "datatype": "string",
            "next": 42,
            "variants": [
                {
                    "title": "No income",
                    "value": "No income",
                    "position": 0
                },
                {
                    "title": "R1 – R400",
                    "value": "R1 – R400",
                    "position": 10
                },
                {
                    "title": "R401 – R800",
                    "value": "R401 – R800",
                    "position": 20
                },
                {
                    "title": "R801 – R1 600",
                    "value": "R801 – R1 600",
                    "position": 30
                },
                {
                    "title": "R1 601 – R3 200",
                    "value": "R1 601 – R3 200",
                    "position": 40
                },
                {
                    "title": "R3 201 – R6 400",
                    "value": "R3 201 – R6 400",
                    "position": 50
                },
                {
                    "title": "R6 401 – R12 800",
                    "value": "R6 401 – R12 800",
                    "position": 60
                },
                {
                    "title": "R12 801 – R25 600",
                    "value": "R12 801 – R25 600",
                    "position": 70
                },
                {
                    "title": "R25601 – R51,200",
                    "value": "R25601 – R51,200",
                    "position": 80
                },
                {
                    "title": "R51 201 – R102 400",
                    "value": "R51 201 – R102 400",
                    "position": 90
                },
                {
                    "title": "R102 401 – R204 800",
                    "value": "R102 401 – R204 800",
                    "position": 100
                },
                {
                    "title": "R204 801 or more",
                    "value": "R204 801 or more",
                    "position": 110
                },
                {
                    "title": "Prefer not to state",
                    "value": "Prefer not to state",
                    "position": 120
                },
                {
                    "title": "Don't know",
                    "value": "Don't know",
                    "position": 130
                }
            ]
        },

        {
            "id": 42,
            "input": "radio",
            "title": "What is your highest level of education completed?",
            "description": "South Africa",
            "value": null,
            "datatype": "string",
            "next": 100,
            "variants": [
                {
                    "title": "No formal schooling",
                    "value": "No formal schooling",
                    "position": 0
                },
                {
                    "title": "Some primary school",
                    "value": "Some primary school",
                    "position": 10
                },
                {
                    "title": "Completed primary school",
                    "value": "Completed primary school",
                    "position": 20
                },
                {
                    "title": "Some secondary school",
                    "value": "Some secondary school",
                    "position": 30
                },
                {
                    "title": "Completed Grade 12/ Std 10",
                    "value": "Completed Grade 12/ Std 10",
                    "position": 40
                },
                {
                    "title": "Higher Education",
                    "value": "Higher Education",
                    "position": 50
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 60
                }
            ]
        },

        {
            "id": 50,
            "input": "radio",
            "title": "Which city do you live in?",
            "description": "China",
            "value": null,
            "datatype": "string",
            "next": 51,
            "variants": [
                {
                    "title": "Shanghai",
                    "value": "Shanghai",
                    "position": 0
                },
                {
                    "title": "Beijing",
                    "value": "Beijing",
                    "position": 10
                },
                {
                    "title": "Guangzhou",
                    "value": "Guangzhou",
                    "position": 20
                },
                {
                    "title": "WUhan",
                    "value": "WUhan",
                    "position": 30
                },
                {
                    "title": "Chengdu",
                    "value": "Chengdu",
                    "position": 40
                },
                {
                    "title": "Shengyang",
                    "value": "Shengyang",
                    "position": 50
                },
                {
                    "title": "Xi'an",
                    "value": "Xi'an",
                    "position": 60
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 70
                }
            ]
        },

        {
            "id": 51,
            "input": "radio",
            "title": "Which best describes your monthly household income?",
            "description": "China",
            "value": null,
            "datatype": "string",
            "next": 52,
            "variants": [
                {
                    "title": "No income",
                    "value": "No income",
                    "position": 0
                },
                {
                    "title": "Below RMB 1,000",
                    "value": "Below RMB 1,000",
                    "position": 10
                },
                {
                    "title": "RMB 1,000 - 2,999",
                    "value": "RMB 1,000 - 2,999",
                    "position": 20
                },
                {
                    "title": "RMB 3,000 - 4,999",
                    "value": "RMB 3,000 - 4,999",
                    "position": 30
                },
                {
                    "title": "RMB 5,000 - 7,999",
                    "value": "RMB 5,000 - 7,999",
                    "position": 40
                },
                {
                    "title": "RMB 8,000 - 9,999",
                    "value": "RMB 8,000 - 9,999",
                    "position": 50
                },
                {
                    "title": "RMB 10,000 - 11,999",
                    "value": "RMB 10,000 - 11,999",
                    "position": 60
                },
                {
                    "title": "RMB 12,000 - 14,999",
                    "value": "RMB 12,000 - 14,999",
                    "position": 70
                },
                {
                    "title": "RMB 15,000 - 19,999",
                    "value": "RMB 15,000 - 19,999",
                    "position": 80
                },
                {
                    "title": "RMB 20,000 - 39,999",
                    "value": "RMB 20,000 - 39,999",
                    "position": 90
                },
                {
                    "title": "RMB 40,000 - 79,999",
                    "value": "RMB 40,000 - 79,999",
                    "position": 100
                },
                {
                    "title": "RMB 80,000 or more",
                    "value": "RMB 80,000 or more",
                    "position": 110
                },
                {
                    "title": "Prefer not to state",
                    "value": "Prefer not to state",
                    "position": 120
                },
                {
                    "title": "Don't know",
                    "value": "Don't know",
                    "position": 130
                }
            ]
        },


        {
            "id": 52,
            "input": "radio",
            "title": "What is your highest level of education completed?",
            "description": "China",
            "value": null,
            "datatype": "string",
            "next": 100,
            "variants": [
                {
                    "title": "Junior High School or below",
                    "value": "Junior High School or below",
                    "position": 0
                },
                {
                    "title": "Senior High School",
                    "value": "Senior High School",
                    "position": 10
                },
                {
                    "title": "Junior College Graduate",
                    "value": "Junior College Graduate",
                    "position": 20
                },
                {
                    "title": "University / Bachelor’s Degree",
                    "value": "University / Bachelor’s Degree",
                    "position": 30
                },
                {
                    "title": "Master’s Degree",
                    "value": "Master’s Degree",
                    "position": 40
                },
                {
                    "title": "Doctorate or above",
                    "value": "Doctorate or above",
                    "position": 50
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 60
                }
            ]
        },

        {
            "id": 60,
            "input": "radio",
            "title": "Which city do you live in?",
            "description": "Brazil",
            "value": null,
            "datatype": "string",
            "next": 61,
            "variants": [
                {
                    "title": "Sao Paulo",
                    "value": "Sao Paulo",
                    "position": 0
                },
                {
                    "title": "Rio",
                    "value": "Rio",
                    "position": 10
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 20
                }
            ]
        },

        {
            "id": 61,
            "input": "radio",
            "title": "Which best describes the monthly income of the primary wage earner in your household?",
            "description": "Brazil",
            "value": null,
            "datatype": "string",
            "next": 62,
            "variants": [
                {
                    "title": "No income",
                    "value": "No income",
                    "position": 0
                },
                {
                    "title": "Up to 510 Reales per month",
                    "value": "Up to 510 Reales per month",
                    "position": 10
                },
                {
                    "title": "Between 511 to 1,020 Reales per month",
                    "value": "Between 511 to 1,020 Reales per month",
                    "position": 20
                },
                {
                    "title": "Between 1,021 to 1,530 Reales per month",
                    "value": "Between 1,021 to 1,530 Reales per month",
                    "position": 30
                },
                {
                    "title": "Between 1,531 to 2,550 Reales per month",
                    "value": "Between 1,531 to 2,550 Reales per month",
                    "position": 40
                },
                {
                    "title": "Between 2,551 to 5,100 Reales per month",
                    "value": "Between 2,551 to 5,100 Reales per month",
                    "position": 50
                },
                {
                    "title": "Between 5,101 to 7,650 Reales per month",
                    "value": "Between 5,101 to 7,650 Reales per month",
                    "position": 60
                },
                {
                    "title": "Over 7,651 Reales per month",
                    "value": "Over 7,651 Reales per month",
                    "position": 70
                },
                {
                    "title": "Prefer not to state",
                    "value": "Prefer not to state",
                    "position": 80
                },
                {
                    "title": "Don't know",
                    "value": "Don't know",
                    "position": 90
                }
            ]
        },

        {
            "id": 62,
            "input": "radio",
            "title": "What is your highest level of education completed?",
            "description": "Brazil",
            "value": null,
            "datatype": "string",
            "next": 100,
            "variants": [
                {
                    "title": "No formal schooling",
                    "value": "No formal schooling",
                    "position": 0
                },
                {
                    "title": "Some Elementary School",
                    "value": "Some Elementary School",
                    "position": 10
                },
                {
                    "title": "Completed Elementary School",
                    "value": "Completed Elementary School",
                    "position": 20
                },
                {
                    "title": "Some Middle School",
                    "value": "Some Middle School",
                    "position": 30
                },
                {
                    "title": "Completed Middle School",
                    "value": "Completed Middle School",
                    "position": 40
                },
                {
                    "title": "Some High School",
                    "value": "Some High School",
                    "position": 50
                },
                {
                    "title": "Completed High School",
                    "value": "Completed High School",
                    "position": 60
                },
                {
                    "title": "Some College",
                    "value": "Some College",
                    "position": 70
                },
                {
                    "title": "Technical Career",
                    "value": "Technical Career",
                    "position": 80
                },
                {
                    "title": "Completed College/University",
                    "value": "Completed College/University",
                    "position": 90
                },
                {
                    "title": "Master's degree",
                    "value": "Master's degree",
                    "position": 100
                },
                {
                    "title": "Doctoral degree",
                    "value": "Doctoral degree",
                    "position": 110
                }
            ]
        },

        {
            "id": 70,
            "input": "radio",
            "title": "Which city do you live in?",
            "description": "India",
            "value": null,
            "datatype": "string",
            "next": 71,
            "variants": [
                {
                    "title": "Mumbai",
                    "value": "Mumbai",
                    "position": 0
                },
                {
                    "title": "Delhi",
                    "value": "Delhi",
                    "position": 10
                },
                {
                    "title": "Bangalore",
                    "value": "Bangalore",
                    "position": 20
                },
                {
                    "title": "Kolkata",
                    "value": "Kolkata",
                    "position": 30
                },
                {
                    "title": "Chennai",
                    "value": "Chennai",
                    "position": 40
                },
                {
                    "title": "Ahmedabad",
                    "value": "Ahmedabad",
                    "position": 50
                },
                {
                    "title": "Hyderabad",
                    "value": "Hyderabad",
                    "position": 60
                },
                {
                    "title": "Pune",
                    "value": "Pune",
                    "position": 70
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 80
                }
            ]
        },

        {
            "id": 71,
            "input": "radio",
            "title": "Which best describes your monthly household income?",
            "description": "India",
            "value": null,
            "datatype": "string",
            "next": 72,
            "variants": [
                {
                    "title": "No income",
                    "value": "No income",
                    "position": 0
                },
                {
                    "title": "Below Rs.2000 per month",
                    "value": "Below Rs.2000 per month",
                    "position": 10
                },
                {
                    "title": "Rs.2001-6000 per month",
                    "value": "Rs.2001-6000 per month",
                    "position": 20
                },
                {
                    "title": "Rs.6001-40000 per month",
                    "value": "Rs.6001-40000 per month",
                    "position": 30
                },
                {
                    "title": "Rs.400001 + per month",
                    "value": "Rs.400001 + per month",
                    "position": 40
                },
                {
                    "title": "Prefer not to state",
                    "value": "Prefer not to state",
                    "position": 50
                },
                {
                    "title": "Don't know",
                    "value": "Don't know",
                    "position": 60
                }
            ]
        },

        {
            "id": 72,
            "input": "radio",
            "title": "What is your highest level of education completed?",
            "description": "India",
            "value": null,
            "datatype": "string",
            "next": 100,
            "variants": [
                {
                    "title": "No formal schooling",
                    "value": "No formal schooling",
                    "position": 0
                },
                {
                    "title": "School: up to 4 years",
                    "value": "School: up to 4 years",
                    "position": 10
                },
                {
                    "title": "School: 5-9 years",
                    "value": "School: 5-9 years",
                    "position": 20
                },
                {
                    "title": "Completed SSC / HSC",
                    "value": "Completed SSC / HSC",
                    "position": 30
                },
                {
                    "title": "Some College",
                    "value": "Some College",
                    "position": 40
                },
                {
                    "title": "Graduate",
                    "value": "Graduate",
                    "position": 50
                },
                {
                    "title": "Post-Graduate",
                    "value": "Post-Graduate",
                    "position": 60
                },
                {
                    "title": "Other",
                    "value": "Other",
                    "position": 70
                }
            ]
        },


        {
            "id": 100,
            "input": "radio",
            "title": "Would you describe where you live as…?",
            "description": null,
            "value": null,
            "datatype": "string",
            "next": 101,
            "variants": [
                {
                    "title": "Rural",
                    "value": "Rural",
                    "position": 0
                },
                {
                    "title": "Urban",
                    "value": "Urban",
                    "position": 10
                }
            ]
        },

        {
            "id": 101,
            "input": "radio",
            "title": "What is your marital status?",
            "description": null,
            "value": null,
            "datatype": "string",
            "next": 102,
            "variants": [
                {
                    "title": "Single",
                    "value": "Single",
                    "position": 0
                },
                {
                    "title": "Married",
                    "value": "Married",
                    "position": 10
                },
                {
                    "title": "Separated",
                    "value": "Separated",
                    "position": 20
                },
                {
                    "title": "Divorced",
                    "value": "Divorced",
                    "position": 30
                },
                {
                    "title": "Widowed",
                    "value": "Widowed",
                    "position": 40
                }
            ]
        },

        {
            "id": 102,
            "input": "checkbox",
            "title": "Which of the following describes you?",
            "description": "Select all that apply",
            "value": null,
            "datatype": "string",
            "next": 103,
            "variants": [
                {
                    "title": "I have a subscription to the opera",
                    "value": "I have a subscription to the opera",
                    "position": 0
                },
                {
                    "title": "I have travelled to Australia in past 6 months",
                    "value": "I have travelled to Australia in past 6 months",
                    "position": 10
                },
                {
                    "title": "Our household has purchased a washing machine in past 3 months",
                    "value": "Our household has purchased a washing machine in past 3 months",
                    "position": 20
                },
                {
                    "title": "I have five or more dogs at home",
                    "value": "I have five or more dogs at home",
                    "position": 30
                },
                {
                    "title": "Our household owns at least 2 Blu-Ray players",
                    "value": "Our household owns at least 2 Blu-Ray players",
                    "position": 40
                }
            ]
        },

        {
            "id": 103,
            "input": "range",
            "title": "Including yourself, how many people live in your household?",
            "datatype": "integer",
            "description": null,
            "min": 0,
            "max": 30,
            "value": 2,
            "next": null,
            "finish": true
        }

    ]
    
}
  
  
 var result={
    "user": "8ya",
    "date": "2014-03-27 14:33",
    "answers": []
        
} 



