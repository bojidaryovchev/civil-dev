import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetCss } from '../common/reset-css';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
];

const renderNavItem = (navItem: NavItem) => html`
  <li>
    <a href="${navItem.href}">${navItem.title}</a>
  </li>
`;

@customElement('app-nav')
export class NavComponent extends LitElement {
  static styles = [resetCss, css``];

  render(): TemplateResult {
    return html`
      <nav>
        <ul>
          ${navItems.map((navItem) => renderNavItem(navItem))}
        </ul>
      </nav>
    `;
  }
}
