import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Document, Page, Text } from '@react-pdf/renderer';
var createPDFDocument = function (data, formType) {
    switch (formType) {
        case 'FORM1': {
            return (_jsx(Document, { children: _jsxs(Page, { children: [_jsx(Text, { children: "Form 1" }), _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text })] }) }));
        }
        default:
            return (_jsx(Document, { children: _jsx(Page, { children: _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text }) }) }));
    }
};
export default createPDFDocument;
