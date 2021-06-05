({
    setColumns : function(component) {
        
        var tableColumns = [
            {
                type: 'Text',
                fieldName: 'Name',
                label: 'Account Name',
                initialWidth: 200,
                sortable:true,
                wrapText: true,
            },
            {
                type: 'Text',
                fieldName: 'OwnerId',
                label: 'Account Owner',
                initialWidth: 200,
                sortable:true,
                wrapText: true
            },
            {
                type: 'Text',
                fieldName: 'Phone',
                label: 'Phone',
                initialWidth: 200,
                
                wrapText: true
            },
            {
                type: 'Text',
                fieldName: 'Website',
                label: 'Website',
                initialWidth: 200,
                wrapText: true
            },
            {
                type: 'Text',
                fieldName: 'AnnualRevenue',
                label: 'Annual Revenue',
                initialWidth: 200,
                wrapText: true
            }
        ];
        component.set("v.tableColumns",tableColumns);
        
    },
    
    setData : function(component){
        
        var getAccountList = component.get('c.getAccountList');
        getAccountList.setCallback(this,function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                var accountList = response.getReturnValue();
                component.set("v.accountTableData",accountList);
            }
            if(state==="ERROR"){
                 var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "ERROR",
                        "message": "There was an error retreiving Account List"
                    });
                    toastEvent.fire();
            }
            
        });
        
    },
    
    handleSort: function(component, event) {
        var sortedBy = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        var accountTableData = component.get('v.accountTableData');
        var cloneData = accountTableData;
        cloneData.sort((this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1)));
        
        component.set('v.accountTableData', cloneData);
        component.set('v.sortDirection', sortDirection);
        component.set('v.sortedBy', sortedBy);
    }
    
})