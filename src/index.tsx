import React from 'react';
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer'
import path from 'path';

Font.register({
    family: 'Times New Roman',
    fonts: [
        {
            src: path.join(__dirname, 'fonts/timesNewRomanBold.ttf'),
            fontWeight: 'bold',
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRoman.ttf'),
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRomaItalic.ttf'),
            fontStyle: 'italic',
        },
        {
            src: path.join(__dirname, 'fonts/timesNewRomanBoldItalic.ttf'),
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
});

Font.register({
    family: 'Arial MT',
    fonts: [
        {
            src: path.join(__dirname, 'fonts/arialMT.ttf'),
        },
        {
            src: path.join(__dirname, 'fonts/ArialMTBoldItalic.ttf'),
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
});

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
