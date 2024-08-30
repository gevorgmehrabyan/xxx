import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { DataType } from "./types";
type Options = {
    formType: FormType;
    withPreview?: boolean;
};
type Props = {
    options: Options;
    data: DataType;
};
declare enum FormType {
    SentToLawyer = "SentToLawyer",
    WriteChecks = "WriteChecks"
}
declare function generatePDFDocument({ data, options }: Props): React.ReactElement;
export { generatePDFDocument, renderToFile, FormType };
