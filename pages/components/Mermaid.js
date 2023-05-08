import React from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
    console.log(this.props);
  }
  render() {
    return (
      <div
        className="mermaid"
        dangerouslySetInnerHTML={{ __html: this.props.chart }}
      />
    );
  }
}
