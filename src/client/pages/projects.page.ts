import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetCss } from '../common/reset-css';

@customElement('app-projects')
export class ProjectsPage extends LitElement {
  static styles = [resetCss, css``];

  static properties = {};

  render(): TemplateResult {
    return html`<p>projects list</p>`;
  }
}
