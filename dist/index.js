import { jsx as _jsx } from "react/jsx-runtime";
import { Document, Page, Text, renderToFile, Font } from "@react-pdf/renderer";
import SentToLawyer from "./SentToLawyer";
import WriteChecks from "./WriteChecks";
// src/index.tsx
import path from "path";
var getFontPath = function (fontName) {
    return path.join(__dirname, "fonts", fontName);
};
Font.register({
    family: "Times New Roman",
    fonts: [
        {
            src: getFontPath("timesNewRomanBold.ttf"),
            fontWeight: "bold",
        },
        {
            src: getFontPath("timesNewRoman.ttf"),
        },
        {
            src: getFontPath("timesNewRomaItalic.ttf"),
            fontStyle: "italic",
        },
        {
            src: getFontPath("timesNewRomanBoldItalic.ttf"),
            fontStyle: "italic",
            fontWeight: "bold",
        },
    ],
});
Font.register({
    family: "Arial MT",
    fonts: [
        {
            src: getFontPath("/arialMT.ttf"),
        },
        {
            src: getFontPath("/ArialMTBoldItalic.ttf"),
            fontStyle: "italic",
            fontWeight: "bold",
        },
    ],
});
var FormType;
(function (FormType) {
    FormType["SentToLawyer"] = "SentToLawyer";
    FormType["WriteChecks"] = "WriteChecks";
})(FormType || (FormType = {}));
function createPDFDocument(data, options) {
    switch (options === null || options === void 0 ? void 0 : options.formType) {
        case FormType.SentToLawyer: {
            return (_jsx(SentToLawyer, { data: data, withPreview: options === null || options === void 0 ? void 0 : options.withPreview }));
        }
        case FormType.WriteChecks: {
            return (_jsx(WriteChecks, { data: data, withPreview: options === null || options === void 0 ? void 0 : options.withPreview }));
        }
        default:
            return (_jsx(Document, { children: _jsx(Page, { children: _jsx(Text, { children: "Default PDF View Content" }) }) }));
    }
}
export { createPDFDocument, renderToFile, FormType };
