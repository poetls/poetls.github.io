function exportToPDF() {
  const formElements = [
    { id: "name-9478", label: "Patient ID" },
    { id: "email-9478", label: "Patient Name" },
    { id: "message-9478", label: "Patient Information" },
    { id: "text-fda8", label: "Prescription Advice" },
  ];

  const exportContent = document.createElement("div");
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  const title = document.createElement("th");
  title.setAttribute("colspan", "2");
  title.innerText = "Prescription";
  headerRow.appendChild(title);
  tableHeader.appendChild(headerRow);

  formElements.forEach((element) => {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    const valueCell = document.createElement("td");

    labelCell.innerText = element.label;
    valueCell.innerText = document.getElementById(element.id).value;

    row.appendChild(labelCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  exportContent.appendChild(table);

  const opt = {
    margin: 1,
    filename: "prescription.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  setTimeout(() => {
    html2pdf().from(exportContent).set(opt).save();
  }, 2000);
}



