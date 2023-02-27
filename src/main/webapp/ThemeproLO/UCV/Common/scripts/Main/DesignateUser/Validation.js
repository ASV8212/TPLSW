function cleartxt(){
	 document.getElementById('StartDate').value = '';
     document.getElementById('EndDate').value = ''; 
}
function CompareDateFields(startDate, endDate) {

    var end = endDate.id;
    var startDate = startDate.value;
    //document.getElementById("#" +startDate).value;
    var endDate = endDate.value;
    //document.getElementById("#" + endDate).value;
    var one_day = 1000 * 60 * 60 * 24;
    var x = startDate.split("-");
    var y = endDate.split("-");
    var date1 = new Date(x[2], (x[1] - 1), x[0]);

    var date2 = new Date(y[2], (y[1] - 1), y[0])
    Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));
    if (Diff < 0) {
	window.alert(LoadFrmXML("V0130"));
       // alertify.alert("End date is greater than Start  Date");

        return document.getElementById(end).value = "";
    }


}