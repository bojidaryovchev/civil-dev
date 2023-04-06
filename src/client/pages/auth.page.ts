import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { initParse } from '../common';
import { resetCss } from '../common/reset-css';

@customElement('app-auth')
export class AuthPage extends LitElement {
  static styles = [resetCss, css``];

  static properties = {};

  @query('#fileInput')
  fileInput?: HTMLInputElement;

  async upload(): Promise<void> {
    if (!this.fileInput || !this.fileInput.files || !this.fileInput.files.length) {
      return;
    }

    const [file] = Array.from(this.fileInput.files);
    const parse = await initParse();
    const parseFile = new parse.File(file.name, file);

    try {
      const savedFile = await parseFile.save();

      console.log(savedFile);
    } catch (error) {
      // handle error
    }
  }

  render(): TemplateResult {
    return html`
      <p>auth</p>
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
    `;
  }
}
