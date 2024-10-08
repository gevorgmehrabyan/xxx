import React from "react";
import { Document, Page, Text, renderToFile, Font } from "@react-pdf/renderer";
import SentToLawyer from "./SentToLawyer";
import WriteChecks from "./WriteChecks";

// src/index.tsx
import path from "path";
import { DataType, ISentToLawyer, IWriteChecks } from "./types";

const getFontPath = (fontName: string) =>
  path.join(__dirname, "fonts", fontName);

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

type Options = {
  formType: FormType;
  withPreview?: boolean;
};

type Props = {
  options: Options;
  data: DataType;
};

enum FormType {
  SentToLawyer = "SentToLawyer",
  WriteChecks = "WriteChecks",
}

function generatePDFDocument({ data, options }: Props): React.ReactElement {
  switch (options?.formType) {
    case FormType.SentToLawyer: {
      return (
        <SentToLawyer
          data={data as ISentToLawyer}
          withPreview={options?.withPreview}
        />
      );
    }

    case FormType.WriteChecks: {
      return (
        <WriteChecks
          data={data as IWriteChecks}
          withPreview={options?.withPreview}
        />
      );
    }

    default:
      return (
        <Document>
          <Page>
            <Text>Default PDF View Content</Text>
          </Page>
        </Document>
      );
  }
}

export { generatePDFDocument, renderToFile, FormType };
