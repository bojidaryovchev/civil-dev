import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withContext, withResetCss } from '../mixins';

@customElement('app-projects')
export class ProjectsPage extends withContext(withResetCss(LitElement)) {
  static styles = [css``];

  static properties = {};

  render(): TemplateResult {
    return html`<p>projects list</p>`;
  }
}
