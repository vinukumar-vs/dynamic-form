
var dfElements = {
    create: function() {

    },
    createElement: function(obj) {
        switch(obj.inputType) {
            case "text": dfElements.addElement(obj, 'input'); break;
            case "textarea": dfElements.addElement(obj, 'textarea'); break;
            case "checkbox": dfElements.addElement(obj, 'input', 'checkbox'); break;            
            case "select": dfElements.addElement(obj, 'select'); break;
            case "multiselect": dfElements.addElement(obj, 'select'); break;
            case "label": dfElements.addElement(obj, 'label'); break;
            default: console.log("no element added");
        }
    },
    addElement: function(obj, tag, type) {
        var ele = $('[name ="'+ obj.code+'"]');
        if(ele) {
            var parentEle = ele[0];
            var eleStr = '<span>'+obj.name+'</span><' + tag + ' id="df_' + obj.code + '" onChange="dfElements.updateForm(this)" code="'+obj.code +'" data="'+obj.name+'"></' + tag + '>' ;
            $(parentEle).html(eleStr);
            if(type) $('#df_'+obj.code).attr('type', type);
        }
    },
    updateForm: function(target){
        var field = dependancy.getTargetField(target);
        dependancy.updateForm(field)
    },
    getSortedOptions: function(options){
        options = options.sort(function(a, b) {
            var optionA = a.name.toUpperCase(); 
            var optionB = b.name.toUpperCase();
            if (optionA < optionB) {
                return -1;
            }
            if (optionA > optionB) {
                return 1;
            }
            return 0;
        });
        return options;
    },
    getUniqOptions: function(options){
        let uniqueOptions = [];
        let itemsFound = {};
        for(let val of options) {
            if(itemsFound[val.name]){
                continue;
            }
            uniqueOptions.push(val);
            itemsFound[val.name] = true;
        }
        return uniqueOptions;
    },
    setOptions: function(obj, optionData){
        optionData = this.getUniqOptions(optionData);
        optionData = this.getSortedOptions(optionData);
        if (obj.inputType == "select" || obj.inputType =="multiselect"){
            var select = $('#df_' + obj.code);
            select.empty();
            if (select.length){
                if(select.prop) {
                    var options = select.prop('options');
                }
                else {
                    var options = select.attr('options');
                }
                options[0] = new Option(obj.placeholder, "");
                $.each(optionData, function(index, option) {
                    options[index + 1] = new Option(option.name, option.name);
                });
            }
        }
    },
    setSelect: function(pID, pSelectedValue)
    {
        $('#df_'+pID + ' option:selected').removeAttr('selected');
        $('#df_'+pID + ' option[value='+pSelectedValue+']').attr('selected', true);   
    },
    setMetadata: function(code, data){
        var element = $('#df_' + code);
        if (element.length &&  Array.isArray(data)){
            dfElements.setSelect(code, data[0]);
        }else{
            $('#df_' + code).val(data);
        }
    }
}
window.dfElements = dfElements;