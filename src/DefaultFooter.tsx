import React from "react";
import { PDFStyles } from "./baseStyles";
import { Text } from "@react-pdf/renderer";

const DefaultFooter = () => {
  return <Text style={PDFStyles.footerTitle}>"Courtesy and Service"</Text>;
};

export default DefaultFooter;
