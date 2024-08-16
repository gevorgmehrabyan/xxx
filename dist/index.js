import { jsx as _jsx } from "react/jsx-runtime";
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer';
import path from 'path';
Font.register({
    family: 'Times New Roman',
    fonts: [
        {
            src: path.join(__dirname, 'fonts/timesNewRomanBold.ttf'),
            fontWeight: 'bold',
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRoman.ttf'),
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRomaItalic.ttf'),
            fontStyle: 'italic',
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRomanBoldItalic.ttf'),
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
});
Font.register({
    family: 'Arial MT',
    fonts: [
        {
            src: path.join(__dirname, 'fonts/arialMT.ttf'),
        },
        {
            src: path.join(__dirname, 'fonts/ArialMTBoldItalic.ttf'),
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
});
var createPDFDocument = function (data, options) {
    switch (options === null || options === void 0 ? void 0 : options.formType) {
        case 'SentToLawyer': {
            return _jsx(SentToLawyer, { data: data, withPreview: options === null || options === void 0 ? void 0 : options.withPreview });
        }
        default:
            return (_jsx(Document, { children: _jsx(Page, { children: _jsx(Text, { children: data === null || data === void 0 ? void 0 : data.text }) }) }));
    }
};
export { createPDFDocument, renderToFile };
