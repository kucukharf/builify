import React, { Component, PropTypes } from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import { connect } from 'react-redux';
import { geThemeCustomStylesheetSheet } from '../../Actions/ActionCreators';
import _ from 'lodash';

class Frame extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: 'Page Title'
  }

  constructor (props) {
    super(props);

    this._isFrameRendered = false;

    this._documentElement = null;
    this._headElement = null;
    this._bodyElement = null;
    this._templateCustomStyleSheet = null;
  }

  shouldComponentUpdate () {
    return false;
  }

  componentDidMount () {
    this.renderFrame();
  }

  componentWillUnmount () {
    unmountComponentAtNode(this._bodyElement);
  }

  renderFrame () {
    if (!this._isFrameRendered) {
      const { template, title } = this.props;
      const frame = this.refs.frm;
      const frameDoc = frame.contentWindow.document;
      const rootElement = document.createElement('div');

      frameDoc.title = title;
      this._documentElement = frameDoc;
      this._headElement = frameDoc.head;
      this._bodyElement = frameDoc.body;

      this._bodyElement.appendChild(rootElement);
      render(this._children, rootElement);

      if (_.has(template, 'external.core')) {
        this.appendFiles(template.external.core);
      }

      this.createThemeCustomStyleSheet();

      // Until we figure out how to make firefox work...
      //this._isFrameRendered = true;
    }
  }

  createThemeCustomStyleSheet () {
    let styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.id = 'customtemplatestylesheet';

    this._headElement.appendChild(styleElement);
    this._templateCustomStyleSheet = styleElement.sheet;

    this.sendThemeCustomStylesheetToReducer();
  }

  sendThemeCustomStylesheetToReducer () {
    const { onSendThemeCustomStylesheet } = this.props;

    if (this._templateCustomStyleSheet !== null) {
      onSendThemeCustomStylesheet(this._templateCustomStyleSheet);
    }
  }

  appendFiles (coreFiles) {
    coreFiles.unshift({
      type: 'css',
      src: '/IFrameStylesheet.css'
    });

    _.map(coreFiles, (file) => {
      let type = file.type;

      if (type === 'css') {
        this.createStylesheet(file);
      }
    });
  }

  createStylesheet (styleSheet) {
    if (_.has(styleSheet, 'src')) {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = styleSheet.src;

      this._headElement.appendChild(link);
    }
  }

  createJavaScript (javaScript) {
    if (_.has(javaScript, 'src')) {
      let script = document.createElement('script');
      script.src = javaScript.src;
      script.async = true;

      this._bodyElement.appendChild(script);
    }
  }

  render () {
    this._children = this.props.children;

    return (
      <iframe
        id='ab-cfrm'
        ref='frm'
        onLoad={::this.renderFrame} />
    )
  }
}

function mapStateToProps (state) {
  return {
    template: state.template
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSendThemeCustomStylesheet: (sheet) => {
      dispatch(geThemeCustomStylesheetSheet(sheet));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame);
