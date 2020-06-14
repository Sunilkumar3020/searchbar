let inputBar = document.getElementById("searchField");

inputBar.addEventListener("keyup", () => {
  let inputValue = inputBar.value.toUpperCase();
  let myTable = document.getElementById("table1");
  let tableRow = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tableRow.length; i++) {
    let td = tableRow[i].getElementsByTagName("td")[0];
    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(inputValue) > -1) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    }
  }
});
