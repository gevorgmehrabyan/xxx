import { jsx as _jsx } from "react/jsx-runtime";
import { PDFStyles } from "./baseStyles";
import { Text } from "@react-pdf/renderer";
var DefaultFooter = function () {
    return _jsx(Text, { style: PDFStyles.footerTitle, children: "\"Courtesy and Service\"" });
};
export default DefaultFooter;
