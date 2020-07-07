const COLUMN = "col";
const ROW = "row";
const SELECT = "select";
const MULTISELECT = "multiselect";
var createEleInterval;
var main = {
    init: function(){
        var instance = this;
        setTimeout(function () {
            if (Object.keys(templateLayout)[0] == ROW) {
                instance.createLayout(templateLayout[row], "dynamicFormDiv", ROW);
            } else {
                instance.createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
            }
        }, 0)
    },
    createDiv: function(parentId, id, data){
        this.startInterval();
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
    },
    startInterval: function(){
        var instance = this;
        if(createEleInterval)  clearTimeout(createEleInterval)
        createEleInterval = setTimeout(function() { 
            instance.createFormField();
        }, 200);
    },
    createLayout: function(arr, parentId, type){
        var instance = this;
        // var arr = obj[type];
        if (arr instanceof Array) {
            arr.forEach(function (obj) {
                instance.createRowOrCol(obj, parentId, type);
            })
        } else {
            instance.createRowOrCol(arr, parentId, type);
        }
    },
    createRowOrCol: function(obj, parentId, type){
        clearInterval(createEleInterval);
        obj.class = type+ "-container";
        var divId = type + Math.random().toString(36).substring(2, 15)
        this.createDiv(parentId, divId, obj);
        var nextObj;
        if (obj[ROW]) { 
            nextObj = obj[ROW];
            this.createLayout(nextObj, divId, ROW);
        } else if(obj[COLUMN]) {
            nextObj = obj[COLUMN];
            this.createLayout(nextObj, divId, COLUMN);
        }
    },
    createFormField: function(){
        dynamicFields.forEach(function (obj) {
            dfElements.createElement(obj);
            if (obj.inputType == SELECT || obj.inputType == MULTISELECT) {
                formData.forEach(function (field) {
                    if (obj.code === field.code) dfElements.setOptions(obj, field.terms);
                });
            }
        });
        this.setMetadata(function(){
            dependancy.mapObject(dynamicFields, formData, function(fields){
                dependancy.init(fields)
            });
        });
    },
    setMetadata: function(callback){
        $.each(metadata, function( code, data ){
            dfElements.setMetadata(code, data)
        });
        callback();
    }

}
main.init();
module.exports = main;