import React from 'react';
import { Document, Page, Text, PDFViewer } from '@react-pdf/renderer';

const createPDFDocument = (data: { text: string }, options: {formType: string, withPreview: boolean}): JSX.Element => {
    switch (options?.formType) {
        case 'FORM1': {
            return options?.withPreview ? <PDFViewer>
                <Document>
                    <Page>
                        <Text>Form 1 With Preview</Text>
                        <Text>{data?.text}</Text>
                    </Page>
                </Document>
            </PDFViewer>  : (
                <Document>
                    <Page>
                        <Text>Form 1 Without Preview</Text>
                        <Text>{data?.text}</Text>
                    </Page>
                </Document>
            );
        }

        case 'FORM2': {
            return options?.withPreview ? <PDFViewer>
                <Document>
                    <Page>
                        <Text>Form 2 With Preview</Text>
                        <Text>{data?.text}</Text>
                    </Page>
                </Document>
            </PDFViewer>  : (
                <Document>
                    <Page>
                        <Text>Form 2 Without Preview</Text>
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

export { createPDFDocument };
