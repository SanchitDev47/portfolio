import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Set the file path and name
  const filePath = path.join(process.cwd(), 'path/to/SanchitBarjibhe.pdf');
  const fileName = 'SanchitBarjibhe.pdf';

  // Read the file contents
  const fileContent = fs.readFileSync(filePath);

  // Set the response headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

  // Send the file contents as response
  res.send(fileContent);
}
