const COLUMN = "col";
const ROW = "row";
const INPUTS = ["radio", "checkbox", "file", "text"]

var time;
var layoutArray = [];

function createDiv(parentId, id, data) {
    var parentEle = $('#' + parentId);
    if (data.code){
        var divStr = '<p id="' + id + '"></p>';
    }else{
        var divStr = '<div id="' + id + '">' + data.name + '</div>';
    }
    parentEle.append(divStr);
    var divEle = $('#' + id);
    var style = {
        width: data.style && data.style.width ? '"' + data.style.width + '%"' : "100%",
        "flex-grow": data.style && data.style.width ? data.style.width : "10"
    }
    divEle.css(style);
    if (data && data.class) divEle.addClass(data.class);
}

function createLayout(arr, parentId, type) {
    // createLayout timer should reset
    clearInterval(time);
     // var arr = obj[type];
    if (arr instanceof Array) {
        arr.forEach(function (obj) {
            createRowOrCol(obj, parentId, type);
        })
    } else {
        createRowOrCol(arr, parentId, type);
    }
}

function createRowOrCol(obj, parentId, type) {
    obj.class = type + "-container";
    var divId = type + Math.random().toString(36).substring(2, 15)
    createDiv(parentId, divId, obj);
    var nextObj;
    if (obj[ROW]) {
        nextObj = obj[ROW];
        createLayout(nextObj, divId, ROW);
    } else if (obj[COLUMN]) {
        nextObj = obj[COLUMN];
        createLayout(nextObj, divId, COLUMN);
    }else{
        var div = {};
        div.id = divId;
        div.code = obj.code;
        layoutArray.push(div)
    }
}

function createColumns(obj, parentId) {
    var columnsArr = obj[COLUMN];
    if (columnsArr instanceof Array) {
        columnsArr.forEach(function (col) {
            col.class = "col-container";
            var divId = "col" + Math.random().toString(36).substring(2, 15)
            createDiv(parentId, divId, col);

            if (col[ROW]) createRows(col, divId);
        })
    } else {
        var col = columnsArr
        col.class = "col-container";
        var divId = "col" + Math.random().toString(36).substring(2, 15)
        createDiv(parentId, divId, col);

        if (col[ROW]) createRows(col, divId);
    }
}

function createRows(obj, parentId) {
    var rowsArr = obj[ROW];
    if (rowsArr instanceof Array) {
        // Multiple rows present
        rowsArr.forEach(function (row) {
            row.class = "row-container";
            var divId = "row" + Math.random().toString(36).substring(2, 15)
            createDiv(parentId, divId, row);

            // If col is defined in the rows, then create columns
            if (row[COLUMN]) createColumns(row, divId);
        })
    } else {
        //only one row exist
        var row = obj;
        row.class = "row-container";
        var divId = "row" + Math.random().toString(36).substring(2, 15)
        createDiv(parentId, divId, row);

        // If col is defined in the rows, then create columns
        if (row[COLUMN]) createColumns(row, divId);
    }
}

function createFormField () {
    var tagInputType = "";
    clearInterval(time);
    layoutArray.forEach(function (div) {
        dynamicFields.forEach(function (obj) {
            if (obj.code === div.code){
                INPUTS.forEach(function (inputType){
                    if (obj.inputType == inputType){
                        tagInputType = obj.inputType;
                        obj.inputType  = "input";
                    }
                })
                addElement(div.id, obj, div.code, tagInputType);
            }
        })
    })
}
function addElement(parentId, obj, elementId, tagInputType, html) {
    // Adds an element to the document
    //var fieldDiv = document.createElement("p");
    var p = document.getElementById(parentId);
    //p.appendChild(fieldDiv);
    var newElement = document.createElement(obj.inputType);
    var newLabelElement = document.createElement("label");
    newLabelElement.innerHTML = obj.name;
    newElement.setAttribute('id', elementId);
    if (tagInputType) {
        newElement.setAttribute('type', tagInputType)
    }
    if (obj.inputType === 'select'){
        var defaultOption = document.createElement("option");
        defaultOption.text = "Select " + obj.name;
        newElement.add(defaultOption);
        if(obj.range)
        {
            obj.range.forEach(function(range){
                var option = document.createElement("option");
                option.text = range.name;
                option.value = range.code;
                newElement.add(option);
            })
        }        
    }
    if (html) newElement.innerHTML = html;

    p.appendChild(newLabelElement);
    p.appendChild(newElement);
}

setTimeout(function () {

    if (Object.keys(templateLayout)[0] == ROW) {
        // createColumns(templateLayout, 'dynamicFormDiv');
        createLayout(templateLayout[ROW], "dynamicFormDiv", ROW);
    } else {
        // createRows(templateLayout, 'dynamicFormDiv');
        createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
    }

    time = setInterval(function(){
        createFormField("appicon", "appicon")
    }, 200);    
}, 0)

