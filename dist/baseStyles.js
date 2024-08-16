import { StyleSheet } from "@react-pdf/renderer";
export var PDFStyles = StyleSheet.create({
    page: {
        fontSize: 12,
        fontFamily: 'Times New Roman',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    section: {
        margin: 10,
        flexGrow: 1,
    },
    viewer: {
        zIndex: 11,
        height: '100vh',
        backgroundColor: 'white',
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 23,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    headerWrapper: {
        marginBottom: 24,
    },
    headerSections: {
        fontSize: 7,
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
    },
    footerTitle: {
        fontStyle: 'italic',
        textAlign: 'center',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexEnd: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    contentWrapper: {
        padding: 24,
    },
    text7: {
        fontSize: 7,
    },
    text8: {
        fontSize: 8,
    },
    text9: {
        fontSize: 9,
    },
    text10: {
        fontSize: 10,
    },
    text11: {
        fontSize: 11,
    },
    text12: {
        fontSize: 12,
    },
    text14: {
        fontSize: 14,
    },
});
