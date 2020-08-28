import React, { Component } from 'react';
import { Document, Page} from 'react-pdf';
import { getCV } from '../../services/FetchHTTP';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class CVView extends Component {

  constructor(props){
    super(props);
    this.state = {
      numPages: 0,
      pageNumber: 1
    };
  }

  onDocumentLoadSuccess = (pdfinfo) => {
    this.setState({numPages: pdfinfo._pdfInfo.numPages});
  }

  render(){

    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    };

    const buttonStyle = {
      height: "50%",
      backgroundColor: "white"
    }

    return(
      <div>
        <Document
          file="cv.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={this.state.pageNumber}/>
        </Document>
        {/*
        <div style={containerStyle}>
          <button style={buttonStyle} onClick={() => {if (this.state.pageNumber > 1) this.setState({pageNumber: this.state.pageNumber-1})}}> Prev </button>
          <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
          <button style={buttonStyle} onClick={() => {if (this.state.pageNumber < this.state.numPages) this.setState({pageNumber: this.state.pageNumber+1})}}> Next </button>
        </div>
        */}
      </div>
    );
  }
}
