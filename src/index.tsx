import React from 'react';
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer'

// src/index.tsx
import path from 'path';
import { DataType, ISentToLawyer } from "./types";

const getFontPath = (fontName: string) => path.join(__dirname, 'fonts', fontName);

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
})

type Options = {
    formType: FormType;
    withPreview?: boolean;
};

enum FormType {
    SentToLawyer = 'SentToLawyer',
    WriteChecks = 'WriteChecks'
}

function createPDFDocument(data: DataType, options: Options): React.ReactElement {
    switch (options?.formType) {
        case FormType.SentToLawyer: {
            return <SentToLawyer data={data as ISentToLawyer} withPreview={options?.withPreview} />
        }

        default:
            return (
                <Document>
                    <Page>
                        <Text>{data?.text}</Text>
                    </Page>
                </Document>
            );
    }
};

export { createPDFDocument, renderToFile, FormType };