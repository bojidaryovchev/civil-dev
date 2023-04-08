import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { initParse } from '../common';
import { withContext, withResetCss } from '../mixins';

@customElement('app-project-details')
export class ProjectDetailsPage extends withContext(withResetCss(LitElement)) {
  static styles = [css``];

  static properties = {};

  private get projectId(): string | undefined {
    return this.context?.params?.['id'];
  }

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

  attributeChangedCallback(): void {
    console.log(this.context);
  }

  render(): TemplateResult {
    return html`
      ${this.projectId}
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
      <button type="button" @click="${this.getFiles}">Get files</button>
      <h1>brrr</h1>
    `;
  }
}
