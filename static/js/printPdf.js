function printPdf() {
  alert("Saving PDF");

  var doc = new jspdf.jsPDF({
    
  });
  doc.text("Hello world", 10, 10);
  doc.save("Sam_Nicholson_CV.pdf");
}

