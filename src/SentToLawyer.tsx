import React from "react";
import { ISentToLawyer } from "./types";
import { PDFStyles } from "./baseStyles";
import { Document, Page, Text, PDFViewer, View } from "@react-pdf/renderer";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

type Props = {
  data: ISentToLawyer;
  withPreview?: boolean;
};

const SentToLawyer = ({ data, withPreview }: Props) => {
  const renderView = () => (
    <Document>
      <Page size="A4" style={PDFStyles.page}>
        <View>
          <DefaultHeader />

          <View style={PDFStyles.contentWrapper}>
            <View
              style={{ marginTop: 16, display: "flex", alignItems: "center" }}
            >
              <Text>{data?.currentDate}</Text>
            </View>

            <View style={[PDFStyles.flexBetween, { marginTop: 16 }]}>
              <View>
                <Text>{data?.lawyer?.name}</Text>
                <Text>{data?.lawyer?.address1}</Text>
                <Text>{data?.lawyer?.address2}</Text>
                <Text>
                  {data?.lawyer?.city}, {data?.lawyer?.state}
                  {data?.lawyer?.zip}
                </Text>
              </View>
              <View>
                <Text>Re: {data?.lawyer?.name || "-"}</Text>
                <Text>{data?.irs}</Text>
                <Text>{data?.name || "-"}</Text>
              </View>
            </View>

            <View style={{ marginTop: 24 }}>
              <Text>{data?.lawyer?.salutation}:</Text>
            </View>

            <View style={{ padding: 24 }}>
              <Text>
                {`We are enclosing copies of our files on the above reference. Please pursue the
                      necessary collection on a ${data?.billingBasis} basis.`}
              </Text>

              <View style={{ padding: "24px 0" }}>
                {data?.selectedDetails?.map((detail, index) => (
                  <Text key={index}>{detail}</Text>
                ))}
              </View>

              <Text>The total net loss on this case is {data?.netAmount}.</Text>
              <Text>
                Please note other cases for the same importer have previously
                been sent to you.
              </Text>
              <Text style={{ margin: "8px 0" }}>
                The total net loss on all cases is {""}
                {data?.allLossesCaseAmount}.
              </Text>
              <Text>Please advise accordingly.</Text>
            </View>

            <View
              style={{
                marginTop: 24,
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <View>
                <Text>Regards,</Text>
                <Text>C.A.Shea & Company, Inc.</Text>
              </View>
            </View>

            <View style={[PDFStyles.flexBetween, { marginTop: 24 }]}>
              <View>
                <Text>{data?.selectedInitial?.initials}</Text>
                <Text>Encl.</Text>
              </View>

              <View>
                <Text>{data?.selectedInitial?.name}</Text>
                <Text>{data?.selectedInitial?.title}</Text>
              </View>
            </View>
          </View>
        </View>

        <DefaultFooter />
      </Page>
    </Document>
  );

  return withPreview ? (
    <PDFViewer style={PDFStyles.viewer}>{renderView()}</PDFViewer>
  ) : (
    renderView()
  );
};

export default SentToLawyer;
