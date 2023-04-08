import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { withResetCss } from '../mixins';
import { NavItem } from '../types';

@customElement('app-nav-item')
export class NavItemComponent extends withResetCss(LitElement) {
  static styles = [css``];

  @property({ type: Object }) navItem!: NavItem;

  render(): TemplateResult {
    return html`
      <li>
        <a href="${this.navItem.path}">${this.navItem.title}</a>
      </li>
    `;
  }
}
