function sortTable(table_id, sortColumn){
    var tableData = document.getElementById(table_id).getElementsByTagName('tbody').item(0);
    var rowData = tableData.getElementsByTagName('tr');
    for(var i = 0; i < rowData.length - 1; i++){
        for(var j = 0; j < rowData.length - (i + 1); j++){
            if(Number(rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\\.]+/g, '')) < Number(rowData.item(j+1).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\\.]+/g, ''))){
                tableData.insertBefore(rowData.item(j+1),rowData.item(j));
            }
        }
    }

    tableData = document.getElementById(table_id).getElementsByTagName('tbody').item(0);
    rowData = tableData.getElementsByTagName('tr');
    for(var i = 0; i <= rowData.length - 1; i++){
        //console.log(rowData.item(i).getElementsByTagName('td').item(0));
        rowData.item(i).getElementsByTagName('td').item(0).innerHTML = i+1;
    }
}

