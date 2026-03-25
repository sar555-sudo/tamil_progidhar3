const express = require('express');
const cors = require('cors');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = 'enquiries.xlsx';

/**
 * Initializes the Excel file if it doesn't exist
 */
function initExcel() {
  if (!fs.existsSync(FILE_PATH)) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
    XLSX.writeFile(wb, FILE_PATH);
  }
}

app.post('/submit-enquiry', (req, res) => {
  try {
    initExcel();
    const newData = req.body;
    
    // Read the existing file
    const workbook = XLSX.readFile(FILE_PATH);
    const sheetName = 'Enquiries';
    const worksheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON array
    let existingData = XLSX.utils.sheet_to_json(worksheet);

    // Add new row with Tamil friendly headers and Timestamp
    existingData.push({
      "name (பெயர்)": newData.name || '',
      "Phone (தொலைபேசி)": newData.phone || '',
      "City (இடம்)": newData.city || '',
      "Date (தேதி)": newData.date || '',
      "Pooja Type (வகை)": newData.poojaType || '',
      "Message (தகவல்)": newData.message || '',
      "Submitted On": new Date().toLocaleString('ta-IN') // Indian Tamil Timestamp
    });
    newSheet['!cols'] = [
  { wch: 25 }, // Column A: Name (பெயர்)
  { wch: 15 }, // Column B: Phone (தொலைபேசி)
  { wch: 20 }, // Column C: City (இடம்)
  { wch: 12 }, // Column D: Date (தேதி)
  { wch: 30 }, // Column E: Pooja Type (வகை)
  { wch: 40 }, // Column F: Message (தகவல்)
  { wch: 25 }  // Column G: Submitted On
];

    // Write back to sheet
    const headers = ["Name (பெயர்)", "Phone (தொலைபேசி)", "City (இடம்)", "Date (தேதி)", "Pooja Type (வகை)", "Message (தகவல்)", "Submitted On"];
    const newSheet = XLSX.utils.json_to_sheet(existingData, { header: headers });

    workbook.Sheets[sheetName] = newSheet;
    
    // Save file (.xlsx naturally supports Unicode/Tamil)
    XLSX.writeFile(workbook, FILE_PATH);

    console.log(`✅ Entry Saved for: ${newData.name}`);
    res.status(200).json({ success: true });

  } catch (err) {
    console.error('❌ Excel Error:', err);
    res.status(500).json({ success: false, message: 'Server side error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📂 Data will be saved to: ${FILE_PATH}`);
});
