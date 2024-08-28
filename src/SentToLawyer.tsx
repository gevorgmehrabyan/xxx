import React from 'react';
import { Document, Page, Text, PDFViewer, View } from "@react-pdf/renderer";
import { PDFStyles } from "./baseStyles";

type Props<T> = {
    data: T;
    withPreview?: boolean;
};

type Initial = {
    id: number
    initials?: string | null
    name?: string | null
}

const SentToLawyer = <T extends { text: string; initials: Array<Initial> }>({ data, withPreview }: Props<T>) => {
    const renderView = () => <Document>
        <Page size='A4' style={PDFStyles.page}>
            <View>
                <View style={PDFStyles.headerWrapper}>
                    <Text style={PDFStyles.headerTitle}>C.A Shea & Company, Inc.</Text>
                    <View style={PDFStyles.flexBetween}>
                        <View>
                            <View style={PDFStyles.headerSections}>
                                <Text>Cornelius A. Shea</Text>
                                <Text>1906 - 1995</Text>
                                <Text style={{ fontStyle: 'italic' }}>Founder</Text>
                            </View>
                            <View style={PDFStyles.headerSections}>
                                <Text>John J. Sheppard</Text>
                                <Text>1930 - 2009</Text>
                                <Text style={{ fontStyle: 'italic' }}>President</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                            <Text style={PDFStyles.text10}>6 Mill Ridge Lane</Text>
                            <Text style={PDFStyles.text10}>Chester, NJ 07930</Text>
                            <Text style={PDFStyles.text10}>Phone (908) 879-0990 .Fax (908) 879-2272</Text>
                            <Text style={[PDFStyles.text10, { fontStyle: 'italic', fontWeight: 400 }]}>bonds@cashea.com</Text>
                        </View>
                        <View>
                            <View style={PDFStyles.headerSections}>
                                <Text>John K. Daily</Text>
                                <Text>Bruce S. Haskell</Text>
                            </View>
                            <View style={PDFStyles.headerSections}>
                                <Text>John J. Sheppard, II</Text>
                                <Text>Christopher C. Flagg</Text>
                                <Text>Kevin. J. Daily</Text>
                                <Text>Cornelius A. Haskel</Text>
                                <Text>John F. Greco</Text>
                                <Text>Joseph H. Corby</Text>
                                <Text>Dennis Pokler</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text>{data?.text}</Text>
            </View>

            <Text style={PDFStyles.footerTitle}>"Courtesy and Service"</Text>
        </Page>
    </Document>

    return (
        withPreview ? <PDFViewer style={PDFStyles.viewer}>
            {renderView()}
        </PDFViewer> : renderView()
    );
};

export default SentToLawyer;