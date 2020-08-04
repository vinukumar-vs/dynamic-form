var dependency = {
    fields: undefined,
    init: function(fields) {
        this.fields = fields;
        const DROPDOWN_INPUT_TYPES = ['select', 'multiSelect'];
    },
    getTargetField: function(target){
        var object = [];
        this.fields.forEach(function(field){
            if (field.code === target.getAttribute("code")){
                object = field;
            }               
        })
        return object;
    },
    updateForm: function(object) {
        if (object && object.range) {
            dependency.getAssociations($('#df_' + object.code).val(), object.range, function(associations) {
                var data = dependency.getFormValues();
                dependency.getParentAssociations(object, associations, data, function(commonAssociations){
                    dependency.applyDependencyRules(object, commonAssociations, true);
                })
            });
        }
    },
    getFormValues: function(){
        var updatedFormData = new Object();
        this.fields.forEach(function(field){
            updatedFormData[field.code] = $('#df_' + field.code).val();
            var count = Array.isArray(updatedFormData[field.code]) ? updatedFormData[field.code].length : (updatedFormData[field.code] ? 1 : 0) ;
            $("#selectedCount_" + field.code).text(count);
        });
        return updatedFormData;
    },
    getParentAssociations: function(field, associations, formData, callback) {
        if (field.parent && field.parent.length){
            field.parent.forEach(function(val) {
                dependency.fields.forEach(function(field) {
                    if (field.code === val){
                        field.range.forEach(function(range) {
                            if(Array.isArray(formData[val]) && formData[val].length > 0){
                                formData[val].forEach(function(metadata) {
                                    if (range.name === metadata){
                                        associations = dependency.getCommonAssociations(range.associations, associations);
                                    }
                                });
                            }else{
                                if (range.name === formData[val]){
                                    associations = dependency.getCommonAssociations(range.associations, associations);
                                }
                            }
                        });
                    }
                });
            })
        }  
        callback(associations);
    },
    getCommonAssociations: function(parentAssociations, childAssociations){
        var intersectionData = [];
        if (parentAssociations && parentAssociations.length){
            parentAssociations.forEach(function(parent){
                childAssociations.forEach(function(child){
                    if (parent.code === child.code) intersectionData.push(child)
                })
            })
                //value => childAssociations.includes(value))
            //intersectionData = _.filter(parentAssociations, function(e) { return _.find(childAssociations, e)});
        }
        return intersectionData;
    },
    getAssociations: function(keys, range, callback) {
        var names = [];
        var associations = [];
        var filteredAssociations = [];
        if (typeof keys === "string") {
            names.push(keys);
        } else {
            names = []
        }
        range.forEach(function(res) {
            names.forEach(function(value, key) {
                if (res.name === value) {
                    filteredAssociations.push(res)
                }
            });
        });
        filteredAssociations.forEach(function(val, index) {
            if (val.associations) {
                val.associations.forEach(function(key, value) {
                    associations.push(key);
                })
            }
        });
        callback && callback(associations);
    },
    applyDependencyRules: function(field, associations) {
        var dependedValues, groupdFields;
        if (field.depends && field.depends.length) {
            field.depends.forEach(function(id) {
                dependedValues = [];
                associations.forEach(function(association){
                    if (id == association.category){
                        dependedValues.push(association)
                    }
                })
                var obj;
                dependency.fields.forEach(function(field){
                    if (id == field.code){
                        obj = field;
                        return;
                    }
                })
                if (dependedValues.length) dfElements.setOptions(obj, dependedValues);
            });
        }
    },
    mapObject: function(destination, source, callback) {
        var instance = this;
        instance.mapParents(destination, function(mappedParents){
            destination = mappedParents;
        })

        destination.forEach(function(dest) {
            source.forEach(function(src) {
                if (dest.code === src.code) {
                    dest.range = src.terms;
                }
            })
        });
        callback(destination);
    },
    mapParents: function(data, callback) {
        data.forEach(function(val, index) {
            data[index].parent = [];
        });
        data.forEach(function(field, index) {
            if(field.depends){
                field.depends.forEach(function(depend){
                   data.forEach(function(category, index) {
                       if (depend === category.code){
                           data[index].parent.push(field.code);
                       }
                    });

                })
            }
        });
        return callback(data)
    }
}
window.dependency = dependency;