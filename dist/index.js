import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Document, Page, Text, PDFViewer } from '@react-pdf/renderer';
var createPDFDocument = function (data, options) {
    switch (options === null || options === void 0 ? void 0 : options.formType) {
        case 'FORM1': {
            return (options === null || options === void 0 ? void 0 : options.withPreview) ? _jsx(PDFViewer, { children: _jsx(Document, { children: _jsxs(Page, { children: [_jsx(Text, { children: "Form 1 With Preview" }), _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text })] }) }) }) : (_jsx(Document, { children: _jsxs(Page, { children: [_jsx(Text, { children: "Form 1 Without Preview" }), _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text })] }) }));
        }
        case 'FORM2': {
            return (options === null || options === void 0 ? void 0 : options.withPreview) ? _jsx(PDFViewer, { children: _jsx(Document, { children: _jsxs(Page, { children: [_jsx(Text, { children: "Form 2 With Preview" }), _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text })] }) }) }) : (_jsx(Document, { children: _jsxs(Page, { children: [_jsx(Text, { children: "Form 2 Without Preview" }), _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text })] }) }));
        }
        default:
            return (_jsx(Document, { children: _jsx(Page, { children: _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text }) }) }));
    }
};
export { createPDFDocument };
