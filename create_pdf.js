const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

async function createPdf(text) {
  // Membuat dokumen PDF kosong
  const pdfDoc = await PDFDocument.create();

  // Membuat halaman baru
  const page = pdfDoc.addPage([400, 200]);

  // Menggambar teks di halaman
  page.drawText(text, {
    x: 50,
    y: 150,
    size: 10,
    color: rgb(0, 0, 0), // warna hitam
  });

  // Menghasilkan file PDF dari dokumen
  const pdfBytes = await pdfDoc.save();

  // Menyimpan file PDF ke disk
  fs.writeFileSync('signature/document2.pdf', pdfBytes);
}

const textToSave = `
Ini adalah contoh teks yang akan disimpan dalam file PDF - new.
`;
createPdf(textToSave);
