({
	doInit: function(component, event, helper) {
        debugger;
        helper.setColumns(component);
        helper.setData(component);
    },
    
    handleSort : function(component, event, helper) {
      helper.handleSort(component,event);  
    }
})