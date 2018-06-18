// @flow
import marked from 'marked';
import React, { Component } from 'react';
import './MarkdownRender.scss';

type Props = {
  body: string
}

type State = {
  html: string
}

marked.setOptions({
  renderer: new marked.Renderer(),
});

export default class MarkdownRender extends Component<Props, State> {
  state = {
    html: '',
  }
  renderMarkdown() {
    this.setState({
      html: marked(this.props.body),
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.body !== this.props.body) {
      this.renderMarkdown();
    }
  }

  render() {
    const { html } = this.state;
    const markup = { __html: html };
    return (
      <div className="MarkdownRender" dangerouslySetInnerHTML={markup} />
    );
  }
}