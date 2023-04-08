import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import page from 'page';
import { withBaseHref } from '../common';
import { withResetCss } from '../mixins';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  {
    title: 'Home',
    path: withBaseHref('/'),
  },
  {
    title: 'Projects',
    path: withBaseHref('/projects'),
  },
];

@customElement('app-nav')
export class NavComponent extends withResetCss(LitElement) {
  static styles = [css``];

  private signIn(): void {
    page(withBaseHref('/auth'));
  }

  render(): TemplateResult {
    return html`
      <nav>
        <ul>
          ${navItems.map((navItem) => html`<app-nav-item .navItem="${navItem}"></app-nav-item>`)}
        </ul>

        <button type="button" @click="${this.signIn}">Sign in</button>
      </nav>
    `;
  }
}
