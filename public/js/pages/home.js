import { LitElement, css, html } from 'lit';

export class HomePage extends LitElement {
  static styles = css``;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`<app-timer duration="60"></app-timer>`;
  }
}

customElements.define('app-home-page', HomePage);
