
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
            var eleStr = '<span>'+obj.name+'</span><' + tag + ' id="df_' + obj.code + '"></' + tag + '>' ;
            $(parentEle).html(eleStr);
            if(type) $('#df_'+obj.code).attr('type', type);
        }
    },
    setOptions: function(code, optionData){
        var select = $('#df_' + code);
        if (select.length){
            if(select.prop) {
            var options = select.prop('options');
            }
            else {
            var options = select.attr('options');
            }
            $.each(optionData, function(index, option) {
                options[index] = new Option(option.name, option.code);
            });
        }
    },
    setMetadata: function(code, data){
        var element = $('#df_' + code);
        if (element.length){
            $('#df_' + code).val(data);
        }
    }
}