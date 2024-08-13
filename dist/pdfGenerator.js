"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPDFDocument = void 0;
var _renderer = require("@react-pdf/renderer");
const createPDFDocument = (data, formType) => {
  switch (formType) {
    case 'FORM1':
      {
        return /*#__PURE__*/React.createElement(_renderer.Document, null, /*#__PURE__*/React.createElement(_renderer.Page, null, /*#__PURE__*/React.createElement(_renderer.Text, null, "Form 1"), /*#__PURE__*/React.createElement(_renderer.Text, null, data?.text)));
      }
    default:
      return /*#__PURE__*/React.createElement(_renderer.Document, null, /*#__PURE__*/React.createElement(_renderer.Page, null, /*#__PURE__*/React.createElement(_renderer.Text, null, data?.text)));
  }
};
exports.createPDFDocument = createPDFDocument;