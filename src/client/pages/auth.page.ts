import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createParseFactory, initParse } from '../common';
import { resetCss } from '../common/reset-css';
import { withContext, withResetCss } from '../mixins';

@customElement('app-auth')
export class AuthPage extends withContext(withResetCss(LitElement)) {
  static styles = [resetCss, css``];

  static properties = {};

  private async signUp(): Promise<void> {
    try {
      const parse = await initParse();
      const parseFactory = createParseFactory(parse);
      const user = parseFactory.createUser('blizz', 'pass', 'blizzcon@gmail.com');
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

      <button type="button" @click="${this.signUp}">Sign up</button>
    `;
  }
}
