import { LitElement, css, html } from 'lit';

export const replay = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 24 24"
  height="24px"
  viewBox="0 0 24 24"
  width="24px"
  fill="#000000"
>
  <title>Replay</title>
  <g>
    <rect fill="none" height="24" width="24" />
    <rect fill="none" height="24" width="24" />
    <rect fill="none" height="24" width="24" />
  </g>
  <g>
    <g />
    <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
  </g>
</svg>`;
export const pause = html`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
  <title>Pause</title>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
</svg>`;
export const play = html`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
  <title>Play</title>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
</svg>`;

function pad(pad, val) {
  return pad ? String(val).padStart(2, '0') : val;
}

export class TimerComponent extends LitElement {
  static properties = {
    duration: {},
    end: { state: true },
    remaining: { state: true },
  };
  static styles = css`
    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    footer {
      user-select: none;
      font-size: 0.6em;
    }
  `;

  constructor() {
    super();
    this.duration = 60;
    this.end = null;
    this.remaining = 0;
  }

  render() {
    const { remaining, running } = this;
    const min = Math.floor(remaining / 60000);
    const sec = pad(min, Math.floor((remaining / 1000) % 60));
    const hun = pad(true, Math.floor((remaining % 1000) / 10));

    return html`
      ${min ? `${min}:${sec}` : `${sec}.${hun}`}
      <footer>
        ${remaining === 0
          ? ''
          : running
          ? html`<span @click=${this.pause}>${pause}</span>`
          : html`<span @click=${this.start}>${play}</span>`}
        <span @click=${this.reset}>${replay}</span>
      </footer>
    `;
  }

  start() {
    this.end = Date.now() + this.remaining;
    this.tick();
  }

  pause() {
    this.end = null;
  }

  reset() {
    const running = this.running;

    this.remaining = this.duration * 1000;
    this.end = running ? Date.now() + this.remaining : null;
  }

  tick() {
    if (!this.running) {
      return;
    }

    this.remaining = Math.max(0, this.end - Date.now());

    requestAnimationFrame(() => this.tick());
  }

  get running() {
    return this.end && this.remaining;
  }

  connectedCallback() {
    super.connectedCallback();
    this.reset();
  }
}

customElements.define('app-timer', TimerComponent);
