(function() {
    $.fn.SBdynamicForm = function(options) {
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
        config = {
            id: 'dynamicFormDiv',
            config: config,
            data: metadata,
            addHtml: function(node) {
                return false;
            }
        };
        $.extend(config, options);
        /**
        * @description    - When the SBdynamicForm lib is initialized
        */
        init = function (){
            var templateLayout = options.config.templateLayout;
            if (Object.keys(templateLayout)[0] == ROW) {
                createLayout(templateLayout[row], "dynamicFormDiv", ROW);
            } else {
                createLayout(templateLayout[COLUMN], "dynamicFormDiv", COLUMN);
            }
        };
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
            dynamicFields.forEach(function (obj) {
                dfElements.createElement(obj);
                if (obj.inputType == SELECT || obj.inputType == MULTISELECT) {
                    formData.forEach(function (field) {
                        if (obj.code === field.code) dfElements.setOptions(obj, field.terms);
                    });
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
            $.each(metadata, function( code, data ){
                dfElements.setMetadata(code, data)
            });
            callback();
        };
        return init();
    };
}).call(this);
//# sourceURL=SBdynamicForm.js

// setTimeout(function () {
//     jQuery('#dynamicFormDiv').SBdynamicForm({
//         id: "dynamicFormDiv",
//         config: formConfig,
//         data: metadata
//     });
// }, 0)
