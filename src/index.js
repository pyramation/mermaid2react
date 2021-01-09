import React, { Component, useEffect, useState } from 'react';
import { getMermaid, loadMermaid } from './utils';

// export class Mermaid extends Component {
//   constructor(props) {
//     super(props);
//     this.onLoad = this.onLoad.bind(this);
//   }

//   componentDidMount() {
//     if (getMermaid()) {
//       this.onLoad();
//     }
//     loadMermaid(this.onLoad);
//   }

//   onLoad() {
//     window.mermaid.contentLoaded();
//     this.setState({
//       loaded: true
//     });
//   }

//   render() {
//     return <div className="mermaid">{this.props.chart}</div>;
//   }
// }

export const Mermaid = ({ chart, options }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    window.mermaid.contentLoaded();
    setLoaded(true);
  };

  useEffect(() => {
    if (getMermaid()) {
      onLoad();
    }
    loadMermaid(onLoad);
  }, [chart]);

  if (!loaded || !chart) return null;
  return <div className="mermaid">{chart}</div>;
};
