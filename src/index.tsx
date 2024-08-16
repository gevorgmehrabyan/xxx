import React from 'react';
import { Document, Page, Text, renderToFile, Font } from '@react-pdf/renderer';
import SentToLawyer from './SentToLawyer'

Font.register({
    family: 'Times New Roman',
    fonts: [
        {
            src: './fonts/timesNewRomanBold.ttf',
            fontWeight: 'bold',
        },
        {
            src: './fonts/timesNewRoman.ttf',
        },
        {
            src: './fonts/timesNewRomaItalic.ttf',
            fontStyle: 'italic',
        },
        {
            src: './fonts/timesNewRomanBoldItalic.ttf',
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    ],
})

Font.register({
    family: 'Arial MT',
    fonts: [
        {
            src: './fonts/arialMT.ttf',
        },
        {
            src: './fonts/ArialMTBoldItalic.ttf',
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
