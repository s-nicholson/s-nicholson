function printPdf() {
  var doc = new jspdf.jsPDF({
    unit: "in",
    lineHeight: lineHeight,
    autoPaging: "text"
  });
  var cvDiv = document.getElementById("cv");

  var pageWidth = 8.5,
    lineHeight = 1.2,
    margin = 0.5,
    maxLineWidth = pageWidth - margin * 4,
    fontSize = 10,
    ptsPerInch = 72,
    oneLineHeight = (fontSize * lineHeight) / ptsPerInch;

  var line = 1;
  var prevLines = 1;
  function addText(text, opts) {
    opts = opts ?? {};

    var textLines = doc.setFont(opts.font ?? "helvetica", opts.style ?? "normal")
      .setFontSize(opts.size ?? fontSize)
      .splitTextToSize(text, maxLineWidth);
    
    var pageHeight = doc.internal.pageSize.getHeight() - 1.2;
    var offsetY = (margin + (line+prevLines+1) * oneLineHeight);
    if (offsetY >= pageHeight) {
      line = 1;
      prevLines = 1;
      doc.addPage();
      offsetY = (margin + (line+prevLines+1) * oneLineHeight);
    }

    doc.text(textLines, margin, offsetY);

    prevLines += textLines.length;
    line++;
  }

  function processDetails(details) {
    var detailsSummary = details.getElementsByTagName("summary")[0];
    var range = detailsSummary.getElementsByTagName("code")[0].textContent;
    var title = detailsSummary.getElementsByTagName("strong")[0].textContent;
    var subTitle = detailsSummary.getElementsByTagName("subtitle")[0].textContent;

    addText(range.trim() + ": " + title.trim(), { style: "bold" });
    addText(subTitle.trim());
    
    var detailsContent = details.getElementsByClassName("details-content")[0];
    // var bullets = detailsContent.getElementsByTagName("li");
    // for (var bullet of bullets) {
    //   var bulletText = bullet.textContent.trim();
    //   addText("\u2022 " + bulletText);
    // }

    var blocks = detailsContent.getElementsByTagName("p");
    for (var block of blocks) {
      var blockTitle = block.getElementsByTagName("strong")[0];
      var blockSkills = block.getElementsByTagName("code")[0];
      if (blockSkills) {
        addText(blockSkills.textContent.trim(), {
          size: (fontSize * 0.75),
          font: "courier"
        });
      } else if (blockTitle) {
        addText("\u2022 " + blockTitle.textContent.trim());
      }
    }
  }

  function addGenerationNote() {
    var stamp = new Intl.DateTimeFormat('en-GB', {
      dateStyle: "short",
      timeStyle: "short"
    })
    .format(new Date())
    .replace(",", " @");

    var opts = {
      size: (fontSize * 0.75)
    };
    addText("This doc was generated from https://s-nicholson.co.uk/experience at " + stamp + ".\nYou can go there to get the latest version.", opts);
  }

  // Contact details
  addText("Sam Nicholson - hello@s-nicholson.co.uk", {
    size: (fontSize * 1.1),
    style: "bold",
    font: "courier"
  });

  // Intro
  var intro = cvDiv.getElementsByTagName("p")[0].textContent;
  addText(intro);

  // Note 
  addGenerationNote();

  // Details sections
  var detailSections = cvDiv.getElementsByTagName("details");
  for (var d of detailSections) {
    processDetails(d);
  }

  // write file
  doc.output("dataurlnewwindow");
  // doc.save("Sam_Nicholson_CV.pdf");
}

