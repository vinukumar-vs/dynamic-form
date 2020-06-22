const COLUMN = "col";
const ROW = "row";

function createDiv(parentId, id, data) {
    var parentEle = $('#' + parentId);
    var divStr = '<div id="' + id + '">' + data.name + '</div>';
    parentEle.append(divStr);
    var divEle = $('#' + id);
    var style = {
        width: data.style && data.style.width ? '"' + data.style.width + '%"' : "100%"
    }
    divEle.css(style);
    if (data && data.class) divEle.addClass(data.class);
}

function createLayout(arr, parentId, type) {
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

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    if (html) newElement.innerHTML = html;
    p.appendChild(newElement);
}

setTimeout(function () {

    if (Object.keys(templateLayout)[0] == ROW) {
        // createColumns(templateLayout, 'dynamicFormDiv');
        createLayout(templateLayout[row], "dynamicFormDiv", ROW);
    } else {
        // createRows(templateLayout, 'dynamicFormDiv');
        createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
    }
}, 0)