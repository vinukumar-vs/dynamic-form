global.window = window
global.$ = require('./../libs/jquery.min.js');
const data = require('./../js/data.js');
const element = require('./../js/elements.js');
const dependancy = require('./../js/dependancy.js');
const main = require('./../js/main.js');

test('adds 1 + 2 to equal 3', () => {
  var colId = "col7nzk1ifkszt";
  main.createDiv("dynamicFormDiv", colId, {
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
    ],
    "class": "col-container"
  })
  
  expect($("#" + colId)).toBeDefined();
});