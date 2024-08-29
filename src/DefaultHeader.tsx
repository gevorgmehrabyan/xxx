import React from "react";
import { PDFStyles } from "./baseStyles";
import { Text, View } from "@react-pdf/renderer";

const DefaultHeader = () => {
  return (
    <View style={PDFStyles.headerWrapper}>
      <Text style={PDFStyles.headerTitle}>C.A Shea & Company, Inc.</Text>
      <View style={PDFStyles.flexBetween}>
        <View>
          <View style={PDFStyles.headerSections}>
            <Text>Cornelius A. Shea</Text>
            <Text>1906 - 1995</Text>
            <Text style={{ fontStyle: "italic" }}>Founder</Text>
          </View>
          <View style={PDFStyles.headerSections}>
            <Text>John J. Sheppard</Text>
            <Text>1930 - 2009</Text>
            <Text style={{ fontStyle: "italic" }}>President</Text>
          </View>
        </View>
        <View style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
          <Text style={PDFStyles.text10}>6 Mill Ridge Lane</Text>
          <Text style={PDFStyles.text10}>Chester, NJ 07930</Text>
          <Text style={PDFStyles.text10}>
            Phone (908) 879-0990 .Fax (908) 879-2272
          </Text>
          <Text
            style={[PDFStyles.text10, { fontStyle: "italic", fontWeight: 400 }]}
          >
            bonds@cashea.com
          </Text>
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
  );
};

export default DefaultHeader;
