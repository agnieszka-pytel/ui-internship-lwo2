function populateTable ( arr ) {
  let table = document.createElement("table");
  let tHead = document.createElement("thead");
  let tBody = document.createElement("tbody");

  let hRow = document.createElement("tr");
  Object.keys(arr[0]).forEach((key) => {
    let cell = document.createElement("th");
    cell.textContent = key;
    hRow.appendChild(cell);
  });
  tHead.appendChild(hRow);

  arr.forEach((student) => {
    let row = document.createElement("tr");

    Object.keys(student).forEach((key) => {
      let cell = document.createElement("td");
      cell.textContent = student[key];
      row.appendChild(cell);
    });

    tBody.appendChild(row);
  });

  table.appendChild(tHead);
  table.appendChild(tBody);
  table.setAttribute('border',1);
  document.body.appendChild(table);
}
