import { jsx as _jsx } from "react/jsx-runtime";
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer';
// src/index.tsx
import path from 'path';
var getFontPath = function (fontName) { return path.join(__dirname, 'fonts', fontName); };
// Регистрация шрифтов
Font.register({
    family: 'Times New Roman',
    fonts: [
        {
            src: getFontPath('timesNewRomanBold.ttf'),
            fontWeight: 'bold',
        },
        {
            src: getFontPath('timesNewRoman.ttf'),
        },
        {
            src: getFontPath('timesNewRomaItalic.ttf'),
            fontStyle: 'italic',
        },
        {
            src: getFontPath('timesNewRomanBoldItalic.ttf'),
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
});
Font.register({
    family: 'Arial MT',
    fonts: [
        {
            src: getFontPath('/arialMT.ttf'),
        },
        {
            src: getFontPath('/ArialMTBoldItalic.ttf'),
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
