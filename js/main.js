(function(window){
    // You can enable the strict mode commenting the following line  
    'use strict';
  
    // This function will contain all our code
    function SBdynamicForm(){
        var _sbDynamicForm = {};

        // Constants
        const COLUMN = "col";
        const ROW = "row";
        const SELECT = "select";
        const MULTISELECT = "multiselect";

        var createEleInterval,
        init,
        config,
        createDiv,
        startInterval,
        createLayout,
        createRowOrCol,
        createFormField,
        setMetadata;

        // This variable will be inaccessible to the user, only can be visible in the scope of your library.
        var Defaults = {
            id: 'dynamicFormDiv',
            config: formConfig,
            data: metadata,
            showSelectedCount: false,
            addHtml: function(node) {
                return false;
            },
            submitId: "submit",
            getFormData: function(){
                return false;
            },
            error: function(cb){
                cb()
            }
        };
   
  
        // Change a private property
        _sbDynamicForm.init = function(config){
            Defaults = $.extend(Defaults, config);
            createTemplate(Defaults.config.templateLayout);
            return Defaults.config;
        };

        var createTemplate = function (templateLayout){
            if (Object.keys(templateLayout).length === 0) options.error(true);
            if (Object.keys(templateLayout)[0] == ROW) {
                createLayout(templateLayout[ROW], "dynamicFormDiv", ROW);
            } else {
                createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
            }
        };

        _sbDynamicForm.getSBFormData = function(){
            var data = dependency.getFormValues();
            return data;
        }

        _sbDynamicForm.validate = function(){
            return true;
        }

        /**
        * @description                  - When createDiv method is called
        *
        * @param {string} parentId      - Which contains a parent element id
        *
        * @param {string} id            - Which contains a element id
        *
        * @param {Object} data          - Which contains a callback method and other options
        */
        createDiv = function (parentId, id, data){
            startInterval();
            var parentEle = $('#' + parentId);
            var eleId = data.name ? 'cont_' + data.name : id;
            console.log( "eleId", eleId)
            if(data.code){
                var divStr = '<div id="' + id + '" name="' + data.code + '"><p>' + data.name + '</p></div>';
            }else{
                var divStr = '<div id="' + id + '"><p>' + data.name + '</p></div>';
            }
            parentEle.append(divStr);
            var divEle = $('#' + id);
            var style = {
                "flex-grow": data.style && data.style.width ? data.style.width/100 : "1"
            }
            divEle.css(style);
            if (data && data.class) divEle.addClass(data.class);
        };

        /**
        * @description              - start interval time to create dynamic fields
        */
        startInterval = function (){
            if(createEleInterval)  clearTimeout(createEleInterval)
            createEleInterval = setTimeout(function() { 
                createFormField();
            }, 200);
        };

        /**
        * @description                   - When create layout method called
        *
        * @param {Array} arr             - Which contains a row or column objects
        *
        * @param {string} parentId       - Which contains a parent div id
        *
        * @param {string} type            - Which contains what type of div should be created row/column
        */
        createLayout = function (arr, parentId, type){
            if (arr instanceof Array) {
                arr.forEach(function (obj) {
                    createRowOrCol(obj, parentId, type);
                })
            } else {
                createRowOrCol(arr, parentId, type);
            }
        };

        /**
        * @description                    - To create row and colomn
        *
        * @param {Object} obj             - Which contains a row or column data
        *
        * @param {string} parentId       - Which contains a parent div id
        *
        * @param {string} type           - Which contains a type of div row/column
        */
        createRowOrCol = function (obj, parentId, type){
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
        };

        /**
        * @description              - to create form fields from the configuration
        */
        createFormField = function (){
            var dynamicFields = Defaults.config.fields;
            var formData = Defaults.config.formData;
            dynamicFields.forEach(function (obj) {
                dfElements.createElement(obj, Defaults.showSelectedCount);
                if (obj.inputType == SELECT || obj.inputType == MULTISELECT) {
                    dfElements.setOptions(obj, obj.range);
                }
            });
            setMetadata(function(){
                dependency.mapObject(dynamicFields, formData, function(fields){
                    dependency.init(fields)
                });
            });
        };

        /**
        * @description                    - Set metadata to the created form element
        *
        * @param {callback} callback      - callback method which will call after the setmedata exicution
        */
        setMetadata = function (callback){
            $.each(Defaults.data, function( code, data ){
                dfElements.setMetadata(code, data)
            });
            callback();
        };
  
        return _sbDynamicForm;
    }
  
    // We need that our library is globally accesible, then we save in the window
    if(typeof(window.SBdynamicForm) === 'undefined'){
        window.SBdynamicForm = SBdynamicForm();
    }
})(window); // We send the window variable withing our function
  
// Now see the content of your library
console.log(SBdynamicForm);