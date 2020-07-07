const COLUMN = "col";
const ROW = "row";
const SELECT = "select";
const MULTISELECT = "multiselect";
var createEleInterval;

function createDiv(parentId, id, data) {
    startInterval();
    var parentEle = $('#' + parentId);
    var eleId = data.name ? 'cont_' + data.name : id;
    console.log( "eleId", eleId)
    if(data.code){
        var divStr = '<div id="' + id + '" name="' + data.code + '">' + data.name + '</div>';
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
   function startInterval () {
    if(createEleInterval)  clearTimeout(createEleInterval)
    createEleInterval = setTimeout(function() { 
        createFormField();
    }, 200);
}

setTimeout(function () {
    if (Object.keys(templateLayout)[0] == ROW) {
        createLayout(templateLayout[row], "dynamicFormDiv", ROW);
    } else {
        createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
    }
}, 0)

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
    clearInterval(createEleInterval);
    obj.class = type+ "-container";
    var divId = type + Math.random().toString(36).substring(2, 15)
    createDiv(parentId, divId, obj);
    var nextObj;
    if (obj[ROW]) { 
        nextObj = obj[ROW];
        createLayout(nextObj, divId, ROW);
    } else if(obj[COLUMN]) {
        nextObj = obj[COLUMN];
        createLayout(nextObj, divId, COLUMN);
    }
}

function createFormField () {
    dynamicFields.forEach(function (obj) {
        dfElements.createElement(obj);
        if (obj.inputType == SELECT || obj.inputType == MULTISELECT) {
            formData.forEach(function (field) {
                if (obj.code === field.code) dfElements.setOptions(obj, field.terms);
            });
        }
    });
    setMetadata(function(){
        dependancy.mapObject(dynamicFields, formData, function(fields){
            dependancy.init(fields)
        });
    });
}

function setMetadata (callback) {
    $.each(metadata, function( code, data ){
        dfElements.setMetadata(code, data)
    });
    callback();
}
