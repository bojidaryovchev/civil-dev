import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetCss } from '../common/reset-css';

@customElement('app-auth')
export class AuthPage extends LitElement {
  static styles = [resetCss, css``];

  static properties = {};

  render(): TemplateResult {
    return html`<p>auth</p>`;
  }
}
