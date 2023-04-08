import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { createParseFactory, initParse } from '../common';
import { resetCss } from '../common/reset-css';
import { withContext, withResetCss } from '../mixins';

@customElement('app-auth')
export class AuthPage extends withContext(withResetCss(LitElement)) {
  static styles = [resetCss, css``];

  static properties = {};

  @query('#username') usernameInput?: HTMLInputElement;
  @query('#email') emailInput?: HTMLInputElement;
  @query('#password') passwordInput?: HTMLInputElement;
  @query('#confirmPassword') confirmPasswordInput?: HTMLInputElement;

  private async signUp(): Promise<void> {
    try {
      const username = this.usernameInput?.value;
      const email = this.emailInput?.value;
      const password = this.passwordInput?.value;
      const confirmPassword = this.confirmPasswordInput?.value;

      if (!username || !email || !password || !confirmPassword) {
        return;
      }

      if (password !== confirmPassword) {
        return;
      }

      const parse = await initParse();
      const parseFactory = createParseFactory(parse);
      const user = parseFactory.createUser(username, password, email);
      const createdUser = await user.signUp();

      console.log(createdUser.getEmail());
    } catch (error) {
      // TODO: handle errors
      console.log({ ...error });
    }
  }

  render(): TemplateResult {
    return html`
      <p>auth</p>

      <input type="text" id="username" placeholder="Username" />
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <input type="password" id="confirmPassword" placeholder="Confirm password" />

      <button type="button" @click="${this.signUp}">Sign up</button>
    `;
  }
}
