import React, { Component } from 'react';
import { getMermaid, loadMermaid } from './utils';

export class Mermaid extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    if (getMermaid()) {
      this.onLoad();
    }
    loadMermaid(this.onLoad);
  }

  onLoad() {
    window.mermaid.contentLoaded();
    this.setState({
      loaded: true
    });
  }

  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}
