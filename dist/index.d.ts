declare const createPDFDocument: (data: {
    text: string;
}, options: {
    formType: string;
    withPreview: boolean;
}) => JSX.Element;
export { createPDFDocument };
