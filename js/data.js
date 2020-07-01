var templateLayout = {
    "col": [{
            "style": {
                "width": 20 //in Percentage
            },
            "name": "Col icons",
            "row": [{
                name: "icon",
                code: "appicon",
                style: {
                    width: 20
                }
            }]
        },
        {
            "style": {
                "width": 80 //in Percentage
            },
            "name": "Second col",
            "col": [{
                    "style": {
                        "width": 50 //in Percentage
                    },
                    "name": "Section-2.1",
                    "col": [{
                            name: "Title",
                            code: "name",
                            style: {
                                width: 30
                            }
                        },
                        {
                            name: "Description",
                            code: "description",
                            style: {
                                width: 100
                            }
                        },
                        {
                            name: "Sub",
                            code: "subject",
                            style: {
                                width: 30
                            }
                        }
                    ]
                },
                {
                    "style": {
                        "width": 50 //in Percentage
                    },
                    "name": "Section-2.2",
                    "col": [{
                        name: "Board",
                        code: "board",
                        style: {
                            width: 50
                        }
                    }]
                },
                {
                    "style": {
                        "width": 50 //in Percentage
                    },
                    "name": "",
                    "col": [{
                        name: "License",
                        code: "license",
                        style: {
                            width: 50
                        }
                    }]
                }
            ]
        }
    ]
  }

var dynamicFields = [
    {
      "code": "appicon",
      "dataType": "url",
      "description": "App Icon",
      "editable": true,
      "index": 1,
      "inputType": "file",
      "label": "App Icon",
      "name": "App Icon",
      "placeholder": "App Icon",
      "renderingHints": {},
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:254"
    },
    {
      "code": "name",
      "dataType": "text",
      "description": "Title of the content",
      "editable": true,
      "index": 2,
      "inputType": "text",
      "label": "Title",
      "name": "Title",
      "placeholder": "Enter Title For Book",
      "renderingHints": {},
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:255"
    },
    {
      "code": "description",
      "dataType": "text",
      "description": "Brief description",
      "editable": true,
      "index": 3,
      "inputType": "textarea",
      "label": "Description",
      "name": "Description",
      "placeholder": "Brief description about the Book",
      "renderingHints": {},
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:256"
    },
    {
      "code": "keywords",
      "dataType": "list",
      "description": "Keywords for the content",
      "editable": true,
      "index": 4,
      "inputType": "keywordsuggestion",
      "label": "keywords",
      "name": "Keywords",
      "placeholder": "Enter Keywords",
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:257"
    },
    {
      "code": "board",
      "dataType": "text",
      "description": "Curriculum",
      "editable": true,
      "index": 5,
      "inputType": "select",
      "label": "Curriculum",
      "name": "Curriculum",
      "placeholder": "Select Curriculum",
      "renderingHints": {},
      "depends":[],
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:263"
    },
    {
      "code": "gradeLevel",
      "dataType": "list",
      "description": "Class",
      "editable": true,
      "index": 6,
      "inputType": "multiselect",
      "label": "Class",
      "name": "Class",
      "placeholder": "Select Class",
      "renderingHints": {},
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:264"
    },
    {
      "code": "subject",
      "dataType": "list",
      "description": "",
      "editable": true,
      "index": 7,
      "inputType": "select",
      "label": "Subject",
      "name": "Subject",
      "placeholder": "Select Subject",
      "renderingHints": {},
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:265"
    },
    {
      "code": "medium",
      "dataType": "list",
      "description": "",
      "editable": true,
      "index": 8,
      "inputType": "select",
      "label": "Medium",
      "name": "medium",
      "placeholder": "Select Medium",
      "renderingHints": {},
      "required": true,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:266"
    },
    {
      "code": "attributions",
      "dataType": "list",
      "description": "Attributions",
      "editable": true,
      "index": 11,
      "inputType": "text",
      "label": "Attributions",
      "name": "attribution",
      "placeholder": "",
      "renderingHints": {},
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:268"
    },
    {
      "code": "Audience",
      "dataType": "list",
      "description": "",
      "editable": true,
      "index": 12,
      "inputType": "select",
      "label": "Audience",
      "name": "Audience",
      "placeholder": "Select Audience",
      "renderingHints": {},
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:269"
    },
    {
      "code": "license",
      "dataType": "text",
      "description": "License of the content",
      "editable": true,
      "index": 16,
      "inputType": "licenses",
      "label": "license",
      "name": "license",
      "placeholder": "license",
      "renderingHints": {},
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:270"
    },
    {
      "code": "licenseterms",
      "dataType": "text",
      "description": "licenseterms",
      "editable": true,
      "index": 17,
      "inputType": "label",
      "label": "License Terms",
      "name": "licenseterms",
      "placeholder": "licenseterms",
      "defaultValue": "By creating and uploading content on DIKSHA, you consent to publishing this content under the Creative Commons Framework, specifically under the CC-BY-SA 4.0 license.",
      "renderingHints": {
        "value": {
          "video/x-youtube": "By linking or uploading YouTube videos on DIKSHA, you consent to publishing it as per the terms of the YouTube video license. DIKSHA accepts only videos with YouTube Standard License or Creative Commons License."
        },
        "class": "twelve wide field"
      },
      "required": false,
      "visible": true,
      "parent": [],
      "$$hashKey": "object:271"
    }
  ]

var formData = [
  {
    "identifier": "ncf_board",
    "code": "board",
    "terms": [
      {
        "identifier": "ncf_board_cbse",
        "code": "cbse",
        "translations": null,
        "name": "CBSE",
        "description": "",
        "index": 1,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_icse",
        "code": "icse",
        "translations": null,
        "name": "ICSE",
        "description": "",
        "index": 2,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_upboard",
        "code": "upboard",
        "translations": null,
        "name": "State (Uttar Pradesh)",
        "description": "State (Uttar Pradesh)",
        "index": 3,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_apboard",
        "code": "apboard",
        "translations": null,
        "name": "State (Andhra Pradesh)",
        "description": "State (Andhra Pradesh)",
        "index": 4,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_tnboard",
        "code": "tnboard",
        "translations": null,
        "name": "State (Tamil Nadu)",
        "description": "State (Tamil Nadu)",
        "index": 5,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_mscert",
        "code": "mscert",
        "translations": null,
        "name": "State (Maharashtra)",
        "description": "State (Maharashtra)",
        "index": 6,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_bser",
        "code": "bser",
        "translations": null,
        "name": "State (Rajasthan)",
        "description": "State (Rajasthan)",
        "index": 7,
        "category": "board",
        "status": "Live"
      },
      {
        "identifier": "ncf_board_others",
        "code": "others",
        "translations": null,
        "name": "Other",
        "description": "Other",
        "index": 8,
        "category": "board",
        "status": "Live"
      }
    ],
    "translations": null,
    "name": "Curriculum",
    "description": "",
    "index": 1,
    "status": "Live"
  },
  {
    "identifier": "ncf_gradelevel",
    "code": "gradeLevel",
    "terms": [
      {
        "identifier": "ncf_gradelevel_kindergarten",
        "code": "kindergarten",
        "translations": null,
        "name": "KG",
        "description": "KG",
        "index": 1,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade1",
        "code": "grade1",
        "translations": null,
        "name": "Class 1",
        "description": "Class 1",
        "index": 2,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade2",
        "code": "grade2",
        "translations": null,
        "name": "Class 2",
        "description": "Class 2",
        "index": 3,
        "category": "gradeLevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade3",
        "code": "grade3",
        "translations": null,
        "name": "Class 3",
        "description": "Class 3",
        "index": 4,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade4",
        "code": "grade4",
        "translations": null,
        "name": "Class 4",
        "description": "Class 4",
        "index": 5,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade5",
        "code": "grade5",
        "translations": null,
        "name": "Class 5",
        "description": "Class 5",
        "index": 6,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade6",
        "code": "grade6",
        "translations": null,
        "name": "Class 6",
        "description": "Class 6",
        "index": 7,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade7",
        "code": "grade7",
        "translations": null,
        "name": "Class 7",
        "description": "Class 7",
        "index": 8,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade8",
        "code": "grade8",
        "translations": null,
        "name": "Class 8",
        "description": "Class 8",
        "index": 9,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade9",
        "code": "grade9",
        "translations": null,
        "name": "Class 9",
        "description": "Class 9",
        "index": 10,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade10",
        "code": "grade10",
        "translations": null,
        "name": "Class 10",
        "description": "Class 10",
        "index": 11,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade11",
        "code": "grade11",
        "translations": null,
        "name": "Class 11",
        "description": "Class 11",
        "index": 12,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_grade12",
        "code": "grade12",
        "translations": null,
        "name": "Class 12",
        "description": "Class 12",
        "index": 13,
        "category": "gradelevel",
        "status": "Live"
      },
      {
        "identifier": "ncf_gradelevel_others",
        "code": "others",
        "translations": null,
        "name": "Other",
        "description": "",
        "index": 14,
        "category": "gradeLevel",
        "status": "Live"
      }
    ],
    "translations": null,
    "name": "Class",
    "description": "",
    "index": 2,
    "status": "Live"
  },
  {
    "identifier": "ncf_subject",
    "code": "subject",
    "terms": [
      {
        "identifier": "ncf_subject_mathematics",
        "code": "mathematics",
        "translations": null,
        "name": "Mathematics",
        "description": "",
        "index": 1,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_english",
        "code": "english",
        "translations": null,
        "name": "English",
        "description": "",
        "index": 2,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_tamil",
        "code": "tamil",
        "translations": null,
        "name": "Tamil",
        "description": "",
        "index": 3,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_telugu",
        "code": "telugu",
        "translations": null,
        "name": "Telugu",
        "description": "",
        "index": 4,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_geography",
        "code": "geography",
        "translations": null,
        "name": "Geography",
        "description": "",
        "index": 5,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_urdu",
        "code": "urdu",
        "translations": null,
        "name": "Urdu",
        "description": "",
        "index": 6,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_kannada",
        "code": "kannada",
        "translations": null,
        "name": "Kannada",
        "description": "",
        "index": 7,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_assamese",
        "code": "assamese",
        "translations": null,
        "name": "Assamese",
        "description": "",
        "index": 8,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_physics",
        "code": "physics",
        "translations": null,
        "name": "Physics",
        "description": "",
        "index": 9,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_chemistry",
        "code": "chemistry",
        "translations": null,
        "name": "Chemistry",
        "description": "",
        "index": 10,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_hindi",
        "code": "hindi",
        "translations": null,
        "name": "Hindi",
        "description": "",
        "index": 11,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_marathi",
        "code": "marathi",
        "translations": null,
        "name": "Marathi",
        "description": "",
        "index": 12,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_environmentalstudies",
        "code": "environmentalstudies",
        "translations": null,
        "name": "EvS",
        "description": "EvS",
        "index": 13,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_politicalscience",
        "code": "politicalscience",
        "translations": null,
        "name": "Political Science",
        "description": "",
        "index": 14,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_bengali",
        "code": "bengali",
        "translations": null,
        "name": "Bengali",
        "description": "",
        "index": 15,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_history",
        "code": "history",
        "translations": null,
        "name": "History",
        "description": "",
        "index": 16,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_gujarati",
        "code": "gujarati",
        "translations": null,
        "name": "Gujarati",
        "description": "",
        "index": 17,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_biology",
        "code": "biology",
        "translations": null,
        "name": "Biology",
        "description": "",
        "index": 18,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_oriya",
        "code": "oriya",
        "translations": null,
        "name": "Odia",
        "description": "Odia",
        "index": 19,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_punjabi",
        "code": "punjabi",
        "translations": null,
        "name": "Punjabi",
        "description": "",
        "index": 20,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_nepali",
        "code": "nepali",
        "translations": null,
        "name": "Nepali",
        "description": "",
        "index": 21,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_malayalam",
        "code": "malayalam",
        "translations": null,
        "name": "Malayalam",
        "description": "",
        "index": 22,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_socialstudies",
        "code": "socialstudies",
        "translations": null,
        "name": "Social Studies",
        "description": "Social Studies",
        "index": 23,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_science",
        "code": "science",
        "translations": null,
        "name": "Science",
        "description": "Science",
        "index": 24,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_sanskrit",
        "code": "sanskrit",
        "translations": null,
        "name": "Sanskrit",
        "description": "Sanskrit",
        "index": 25,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_healthandphysicaleducation",
        "code": "healthandphysicaleducation",
        "translations": null,
        "name": "Health and Physical Education",
        "description": "Health and Physical Education",
        "index": 26,
        "category": "subject",
        "status": "Live"
      },
      {
        "identifier": "ncf_subject_economics",
        "code": "economics",
        "translations": null,
        "name": "Economics",
        "description": "Economics",
        "index": 27,
        "category": "subject",
        "status": "Live"
      }
    ],
    "translations": null,
    "name": "Resource",
    "description": "Resource",
    "index": 3,
    "status": "Live"
  },
  {
    "identifier": "ncf_medium",
    "code": "medium",
    "terms": [
      {
        "identifier": "ncf_medium_english",
        "code": "english",
        "translations": null,
        "name": "English",
        "description": "",
        "index": 1,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_hindi",
        "code": "hindi",
        "translations": null,
        "name": "Hindi",
        "description": "",
        "index": 2,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_oriya",
        "code": "oriya",
        "translations": null,
        "name": "Odia",
        "description": "Odia",
        "index": 3,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_telugu",
        "code": "telugu",
        "translations": null,
        "name": "Telugu",
        "description": "",
        "index": 4,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_kannada",
        "code": "kannada",
        "translations": null,
        "name": "Kannada",
        "description": "",
        "index": 5,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_marathi",
        "code": "marathi",
        "translations": null,
        "name": "Marathi",
        "description": "",
        "index": 6,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_assamese",
        "code": "assamese",
        "translations": null,
        "name": "Assamese",
        "description": "",
        "index": 7,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_bengali",
        "code": "bengali",
        "translations": null,
        "name": "Bengali",
        "description": "",
        "index": 8,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_gujarati",
        "code": "gujarati",
        "translations": null,
        "name": "Gujarati",
        "description": "",
        "index": 9,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_urdu",
        "code": "urdu",
        "translations": null,
        "name": "Urdu",
        "description": "",
        "index": 10,
        "category": "medium",
        "status": "Live"
      },
      {
        "identifier": "ncf_medium_other",
        "code": "other",
        "translations": null,
        "name": "Other",
        "description": "",
        "index": 11,
        "category": "medium",
        "status": "Live"
      }
    ],
    "translations": null,
    "name": "Medium",
    "description": "",
    "index": 4,
    "status": "Live"
  },
  {
    "identifier": "ncf_topic",
    "code": "topic",
    "terms": [
      {
        "identifier": "ncf_topic_leadership_management",
        "code": "leadership_management",
        "translations": null,
        "name": "Leadership Management",
        "description": "Leadership Management",
        "index": 1,
        "category": "topic",
        "status": "Live"
      },
      {
        "identifier": "ncf_topic_health_education",
        "code": "health_education",
        "translations": null,
        "name": "Health Education",
        "description": "Health Education",
        "index": 2,
        "category": "topic",
        "status": "Live"
      },
      {
        "identifier": "ncf_topic_personal_development",
        "code": "personal_development",
        "translations": null,
        "name": "Personal Development",
        "description": "Personal Development",
        "index": 3,
        "category": "topic",
        "status": "Live"
      }
    ],
    "translations": null,
    "name": "Topic",
    "description": "Topic",
    "index": 5,
    "status": "Live"
  }
]

var metadata = {
  "ownershipType": [
    "createdBy"
  ],
  "code": "org.sunbird.txoCJd",
  "channel": "013016492159606784174",
  "description": "Enter description for Resource",
  "language": [
    "English"
  ],
  "mimeType": "application/vnd.ekstep.ecml-archive",
  "editorState": "{\"plugin\":{\"noOfExtPlugins\":12,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.reviewercomments\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.3\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.1\"}]},\"stage\":{\"noOfStages\":1,\"currentStage\":\"3ece253a-7eab-4cc8-bbb7-2813926d8798\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
  "createdOn": "2020-06-29T07:59:05.440+0000",
  "lastUpdatedOn": "2020-07-01T19:56:00.286+0000",
  "contentType": "Resource",
  "identifier": "do_1130532765322362881382",
  "audience": [
    "Learner"
  ],
  "visibility": "Default",
  "mediaType": "content",
  "osId": "org.ekstep.quiz.app",
  "languageCode": [
    "en"
  ],
  "versionKey": "1593633360286",
  "license": "CC BY 4.0",
  "framework": "NCF",
  "createdBy": "9ad90eb4-b8d2-4e99-805f-58cdd1c0163f",
  "name": "Untitled Resource",
  "stageIcons": "{\"3ece253a-7eab-4cc8-bbb7-2813926d8798\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAGVCAYAAADXKsbeAAAXZElEQVR4Xu3WoRHAQAwEMX8n6b+plOKw0J/lMjbSHNizu+/MPOMIECBAgAABAgQIELgKHAF9NfJAgAABAgQIECBA4BcQ0MZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkFAQAcsrwQIECBAgAABAgQEtA0QIECAAAECBAgQCAICOmB5JUCAAAECBAgQICCgbYAAAQIECBAgQIBAEBDQAcsrAQIECBAgQIAAAQFtAwQIECBAgAABAgSCgIAOWF4JECBAgAABAgQICGgbIECAAAECBAgQIBAEBHTA8kqAAAECBAgQIEBAQNsAAQIECBAgQIAAgSAgoAOWVwIECBAgQIAAAQIC2gYIECBAgAABAgQIBAEBHbC8EiBAgAABAgQIEBDQNkCAAAECBAgQIEAgCAjogOWVAAECBAgQIECAgIC2AQIECBAgQIAAAQJBQEAHLK8ECBAgQIAAAQIEBLQNECBAgAABAgQIEAgCAjpgeSVAgAABAgQIECAgoG2AAAECBAgQIECAQBAQ0AHLKwECBAgQIECAAAEBbQMECBAgQIAAAQIEgoCADlheCRAgQIAAAQIECAhoGyBAgAABAgQIECAQBAR0wPJKgAABAgQIECBAQEDbAAECBAgQIECAAIEgIKADllcCBAgQIECAAAECAtoGCBAgQIAAAQIECAQBAR2wvBIgQIAAAQIECBAQ0DZAgAABAgQIECBAIAgI6IDllQABAgQIECBAgICAtgECBAgQIECAAAECQUBAByyvBAgQIECAAAECBAS0DRAgQIAAAQIECBAIAgI6YHklQIAAAQIECBAgIKBtgAABAgQIECBAgEAQENAByysBAgQIECBAgAABAW0DBAgQIECAAAECBIKAgA5YXgkQIECAAAECBAgIaBsgQIAAAQIECBAgEAQEdMDySoAAAQIECBAgQEBA2wABAgQIECBAgACBICCgA5ZXAgQIECBAgAABAgLaBggQIECAAAECBAgEAQEdsLwSIECAAAECBAgQENA2QIAAAQIECBAgQCAICOiA5ZUAAQIECBAgQICAgLYBAgQIECBAgAABAkHgAwDPT5x48IAnAAAAAElFTkSuQmCC\"}",
  "resourceType": "Learn",
  "status": "Draft"
}