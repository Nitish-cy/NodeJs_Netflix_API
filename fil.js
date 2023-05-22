function convertPdfToBase64(pdfFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const base64String = btoa(event.target.result);
        resolve(base64String);
      };
  
      reader.onerror = (event) => {
        reject(event.target.error);
      };
  
      reader.readAsBinaryString(pdfFile);
    });
  }
  
  const pdfFile = 'C:/Users/nitish.mishra1/Documents/AdharCard.pdf';
  convertPdfToBase64(pdfFile).then((base64String) => {
    console.log(base64String);
  }).catch((error) => {
    console.error(error);
  });
  