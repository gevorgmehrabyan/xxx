import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const createPDFDocument = (data: { text: string }, formType: string): JSX.Element => {
    switch (formType) {
        case 'FORM1': {
            return (
                <Document>
                    <Page>
                        <Text>Form 1</Text>
                        <Text>{data?.text}</Text>
                    </Page>
                </Document>
            );
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

export default createPDFDocument;