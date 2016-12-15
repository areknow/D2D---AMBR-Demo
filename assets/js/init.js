getRowCount();

//open and close the modal
var dialog = document.getElementById("addBuyerDialog"); 
function showDialog() { 
  dialog.style.display="block";
  
} 
function closeDialog() { 
  dialog.style.display="none";
}

//insert a new row to the table
function insertRow() {
  var table = document.getElementById("buyers");
  var company = document.getElementById("in-company").value; 
  var industry = document.getElementById("in-industry").value; 
  var date = document.getElementById("in-date").value; 
  if (company!=="" && industry!=="" && date!=="") {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = company;
    cell2.innerHTML = industry;
    cell3.innerHTML = date;
    document.getElementById("in-company").value = "";
    document.getElementById("in-industry").value = "";
    document.getElementById("in-date").value = "";
    closeDialog();
    getRowCount();
  }
}

//add the row count to the drop down
function getRowCount() {
  var rows = document.getElementById("buyers").rows.length;
  document.getElementById("numOfRows").innerHTML = rows;
}

//open and close mobile menu
function openMenu() {
  var tabMain = document.getElementById("tab-main");
  if (tabMain.classList.contains('menu-open')) {
    var el = document.getElementsByClassName("tab-label");
    for (var i = 0, ilen = el.length - 1; i < ilen; i++) {
      el[i].style.zIndex="0";
    }
    tabMain.classList.toggle('menu-open');
  } else {
    var el = document.getElementsByClassName("tab-label");
    for (var i = 0, ilen = el.length - 1; i < ilen; i++) {
      el[i].style.zIndex="10";
    }
    tabMain.classList.toggle('menu-open');
  }
}

