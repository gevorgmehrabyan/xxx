import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { DataType } from "./types";
type Options = {
    formType: FormType;
    withPreview?: boolean;
};
declare enum FormType {
    SentToLawyer = "SentToLawyer",
    WriteChecks = "WriteChecks"
}
declare function createPDFDocument(data: DataType, options: Options): React.ReactElement;
export { createPDFDocument, renderToFile, FormType };
