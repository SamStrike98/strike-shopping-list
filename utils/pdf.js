import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units

export const generatePdf = (name) => {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");
    const savedDoc = doc.output('datauristring', `${name}.pdf`)
    console.log(savedDoc)

    return savedDoc;
}
