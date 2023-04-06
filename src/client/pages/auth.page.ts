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
      // Save file metadata to FileMetaData class
      const FileMetaData = parse.Object.extend('FileMetaData');
      const fileMetaData = new FileMetaData();
      fileMetaData.set('file', savedFile);
      fileMetaData.set('fileName', file.name);

      await fileMetaData.save();

      console.log(savedFile);
    } catch (error) {
      // handle error
    }
  }

  async getFiles(): Promise<void> {
    const parse = await initParse();
    const FileMetaData = parse.Object.extend('FileMetaData');
    const query = new parse.Query(FileMetaData);

    try {
      const files = await query.find();

      console.log(files);

      files.forEach((fileMetaData) => {
        const file = fileMetaData.get('file');
        const fileName = fileMetaData.get('fileName');
        console.log(`File: ${fileName}, URL: ${file.url()}`);
      });
    } catch (error) {
      // handle error
    }
  }

  render(): TemplateResult {
    return html`
      <p>auth</p>
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
      <button type="button" @click="${this.getFiles}">Get files</button>
    `;
  }
}
