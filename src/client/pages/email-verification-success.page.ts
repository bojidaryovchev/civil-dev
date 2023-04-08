import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withBaseHref } from '../common';
import { withContext, withResetCss } from '../mixins';

@customElement('app-email-verification-success')
export class EmailVerificationSuccessPage extends withContext(withResetCss(LitElement)) {
  static styles = [css``];

  static properties = {};

  private get username(): string | undefined {
    const searchParams = new URLSearchParams(this.context?.querystring);
    const username = searchParams.get('username');

    if (!username) {
      return;
    }

    return username;
  }

  render(): TemplateResult {
    return html`
      <p>Congratulations, ${this.username}, you have successfully verified your email!</p>
      <a href="${withBaseHref('/')}">Go back</a>
    `;
  }
}
