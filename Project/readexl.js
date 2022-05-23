// load a workbook
var workbook = aspose.cells.Workbook("n1.xlsx");

// convert Excel to PDF
workbook.save("Excel to PDF.pdf", SaveFormat.PDF);

