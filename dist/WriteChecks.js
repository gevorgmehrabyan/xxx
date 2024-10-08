import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PDFStyles } from "./baseStyles";
import { Document, Page, Text, PDFViewer, View } from "@react-pdf/renderer";
var WriteChecks = function (_a) {
    var data = _a.data, withPreview = _a.withPreview;
    var renderView = function () {
        var _a;
        return (_jsx(Document, { children: _jsxs(Page, { size: "A4", style: PDFStyles.page, children: [_jsx(View, { children: _jsxs(View, { style: PDFStyles.headerWrapper, children: [_jsx(Text, { style: PDFStyles.headerTitle, children: "C.A Shea & Company, Inc." }), _jsxs(View, { style: PDFStyles.flexBetween, children: [_jsxs(View, { children: [_jsxs(View, { style: PDFStyles.headerSections, children: [_jsx(Text, { children: "Cornelius A. Shea" }), _jsx(Text, { children: "1906 - 1995" }), _jsx(Text, { style: { fontStyle: "italic" }, children: "Founder" })] }), _jsxs(View, { style: PDFStyles.headerSections, children: [_jsx(Text, { children: "John J. Sheppard" }), _jsx(Text, { children: "1930 - 2009" }), _jsx(Text, { style: { fontStyle: "italic" }, children: "President" })] })] }), _jsxs(View, { style: { marginTop: 8, display: "flex", alignItems: "center" }, children: [_jsx(Text, { style: PDFStyles.text10, children: "6 Mill Ridge Lane" }), _jsx(Text, { style: PDFStyles.text10, children: "Chester, NJ 07930" }), _jsx(Text, { style: PDFStyles.text10, children: "Phone (908) 879-0990 .Fax (908) 879-2272" }), _jsx(Text, { style: [
                                                        PDFStyles.text10,
                                                        { fontStyle: "italic", fontWeight: 400 },
                                                    ], children: "bonds@cashea.com" })] }), _jsxs(View, { children: [_jsxs(View, { style: PDFStyles.headerSections, children: [_jsx(Text, { children: "John K. Daily" }), _jsx(Text, { children: "Bruce S. Haskell" })] }), _jsxs(View, { style: PDFStyles.headerSections, children: [_jsx(Text, { children: "John J. Sheppard, II" }), _jsx(Text, { children: "Christopher C. Flagg" }), _jsx(Text, { children: "Kevin. J. Daily" }), _jsx(Text, { children: "Cornelius A. Haskel" }), _jsx(Text, { children: "John F. Greco" }), _jsx(Text, { children: "Joseph H. Corby" }), _jsx(Text, { children: "Dennis Pokler" })] })] })] }), _jsx(View, { style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        marginTop: 16,
                                    }, children: (_a = data === null || data === void 0 ? void 0 : data.initials) === null || _a === void 0 ? void 0 : _a.map(function (initial) { return (_jsxs(View, { style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            marginBottom: 16,
                                            width: "25%",
                                        }, children: [_jsx(Text, { children: (initial === null || initial === void 0 ? void 0 : initial.initials) || "-" }), _jsx(Text, { children: (initial === null || initial === void 0 ? void 0 : initial.name) || "-" })] }, initial === null || initial === void 0 ? void 0 : initial.id)); }) })] }) }), _jsx(Text, { style: PDFStyles.footerTitle, children: "\"Courtesy and Service\"" })] }) }));
    };
    return withPreview ? (_jsx(PDFViewer, { style: PDFStyles.viewer, children: renderView() })) : (renderView());
};
export default WriteChecks;
