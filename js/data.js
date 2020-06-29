var templateLayout = {
    "col": [{
            "style": {
                "width": 50 //in Percentage
            },
            "name": "Col icons",
            "row": [{
                name: "icon",
                code: "appicon",
                style: {
                    width: 20
                }
            },{
                name: "icon2",
                code: "icon1",
                style: {
                    width: 100
                }
            }]
        },
        {
            "style": {
                "width": 50 //in Percentage
            },
            "name": "",
            "row": [{
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
};

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
        "visible": true
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
        "visible": true
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
        "visible": true
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
        "visible": true
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
        "required": true,
        "visible": true
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
        "visible": true
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
        "visible": true
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
        "visible": true
    },
    {
        "code": "topic",
        "dataType": "list",
        "description": "Choose a Topics",
        "editable": true,
        "index": 9,
        "inputType": "topicselector",
        "label": "Topics",
        "name": "Topic",
        "placeholder": "Choose Topics",
        "renderingHints": {},
        "required": false,
        "visible": true
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
        "visible": true
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
        "range": [
            "Learner",
            "Instructor"
        ],
        "required": false,
        "visible": true
    },
    {
        "code": "license",
        "dataType": "text",
        "description": "License of the content",
        "editable": true,
        "index": 16,
        "inputType": "checkbox",
        "label": "license",
        "name": "license",
        "placeholder": "license",
        "renderingHints": {},
        "required": false,
        "visible": true
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
        "visible": true
    }
]