import React from 'react';
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer'

// src/index.tsx
import path from 'path';

const getFontPath = (fontName) => path.join(__dirname, 'fonts', fontName);

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
})

const createPDFDocument = (data: { text: string }, options: {formType: string, withPreview: boolean}): JSX.Element => {
    switch (options?.formType) {
        case 'SentToLawyer': {
            return <SentToLawyer data={data} withPreview={options?.withPreview} />
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

export { createPDFDocument, renderToFile };
