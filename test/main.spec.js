global.window = window
global.$ = require('./../libs/jquery.min.js');
const data = require('./../js/data.js');
const element = require('./../js/elements.js');
const dependency = require('./../js/dependency.js');
const main = require('./../js/main.js');

describe("Dynamic form init layout creation", () => {
  var templateLayout =  {
    "col": [
          {
            "style": {
                "width": 20
            },
            "name": "first col",
            "col": [
                {
                  "style": {
                      "width": 20
                  },
                  "name": "Section-1.1",
                  "col": [{
                          name: "App Icon",
                          code: "appIcon",
                          style: {
                              width: 30
                          }
                      }
                  ]
              }
            ]
        }
    ]
  }
  test('given column should be created inside dynamicFormDiv', () => {
    main.init(templateLayout)
    expect($("#dynamicFormDiv")).toBeDefined();
  });
});

describe("Div creation", () => {
  var parentDivId = "dynamicFormDiv";
  var colId = "col7nzk1ifkszt";
  var config = {"style":{"width":20},"name":"first col","col":[{"style":{"width":20},"name":"Section-1.1","col":[{"name":"App Icon","code":"appIcon","style":{"width":30}}]}],"class":"col-container"};
  test('should start interval time', () => {
    main.createDiv(parentDivId, colId, config)
    expect(main.startInterval).toBeDefined();
  });
  test('By passing the column id, parent div id and layout configuration -> given column id div should be created under the parent div', () => {
    colId = "testcolumnid";
    main.createDiv(parentDivId, colId, config)
    expect($("#" + colId)).toBeDefined();
  });
  config = {"style":{"width":20},"name":"first col","row":[{"style":{"width":20},"name":"Section-1.1","col":[{"name":"App Icon","code":"appIcon","style":{"width":30}}]}],"class":"col-container"};
  test('By passing the row id, parent div id and layout configuration -> given column id div should be created under the parent div', () => {
    colId = "testrowid";
    main.createDiv(parentDivId, colId, config)
    expect($("#" + colId)).toBeDefined();
  });

  test('By passing the width -> column width should be set', () => {
    config.style.width = 10;
    colId = "testwidth";
    main.createDiv(parentDivId, colId, config)
    expect($("#" + colId).css( "flex-grow")).toEqual("10");
  });
});

describe("Div creation", () => {
  test('By passing the column id, parent div id and layout configuration -> given column id div should be created under the parent div', () => {
    var parentDivId = "dynamicFormDiv";
    var colId = "col7nzk1ifkszt";
    var config = {"style":{"width":20},"name":"first col","col":[{"style":{"width":20},"name":"Section-1.1","col":[{"name":"App Icon","code":"appIcon","style":{"width":30}}]}],"class":"col-container"};
    main.createDiv(parentDivId, colId, config)
    expect($("#" + colId)).toBeDefined();
  });
});

test('should be able create a col layout', () => {
  var colId = "col7nzk1ifkszt";
  var arr = [
    {
      "style": {
        "width": 20
      },
      "name": "first col",
      "col": [
        {
          "style": {
            "width": 20
          },
          "name": "Section-1.1",
          "col": [
            {
              "name": "App Icon",
              "code": "appIcon",
              "style": {
                "width": 30
              }
            }
          ]
        }
      ]
    },
    {
      "style": {
        "width": 80
      },
      "name": "second col",
      "col": [
        {
          "style": {
            "width": 50
          },
          "name": "Section-2.1",
          "col": [
            {
              "name": "Title",
              "code": "name",
              "style": {
                "width": 30
              }
            },
            {
              "name": "Description",
              "code": "description",
              "style": {
                "width": 100
              }
            }
          ]
        },
        {
          "style": {
            "width": 50
          },
          "name": "Section-2.2",
          "col": [
            {
              "name": "Board",
              "code": "board",
              "style": {
                "width": 30
              }
            },
            {
              "name": "Medium",
              "code": "medium",
              "style": {
                "width": 50
              }
            },
            {
              "name": "Class",
              "code": "gradeLevel",
              "style": {
                "width": 50
              }
            },
            {
              "name": "Subject",
              "code": "subject",
              "style": {
                "width": 50
              }
            }
          ]
        },
        {
          "style": {
            "width": 50
          },
          "name": "Section 2.3",
          "col": [
            {
              "name": "License",
              "code": "license",
              "style": {
                "width": 50
              }
            }
          ]
        }
      ]
    }
  ]
  main.createLayout(arr, "dynamicFormDiv", "col")
  
  expect($("#" + colId)).toBeDefined();
});

test('should be able create form fields', () => {
  main.createFormField()
  window.dynamicFields = [
    {
      "code": "board",
      "dataType": "text",
      "description": "Board",
      "editable": true,
      "index": 5,
      "inputType": "select",
      "label": "Board",
      "name": "Board",
      "placeholder": "Select Curriculum",
      "renderingHints": {},
      "depends": [
        "medium",
        "gradeLevel",
        "subject"
      ],
      "required": true,
      "visible": true,
      "$$hashKey": "object:263"
    }
  ]
  expect($("#df_board")).toBeDefined();
});

