import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetCss } from '../common/reset-css';

@customElement('app-not-found')
export class NotFoundPage extends LitElement {
  static styles = [resetCss, css``];

  static properties = {};

  render(): TemplateResult {
    return html`<p>404: Not found</p>`;
  }
}
