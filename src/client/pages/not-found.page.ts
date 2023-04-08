import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withContext, withResetCss } from '../mixins';

@customElement('app-not-found')
export class NotFoundPage extends withContext(withResetCss(LitElement)) {
  static styles = [css``];

  static properties = {};

  render(): TemplateResult {
    return html`<p>404: Not found</p>`;
  }
}
