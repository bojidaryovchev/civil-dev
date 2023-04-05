import { html, render, TemplateResult } from 'lit';
import { Context } from 'page';

const renderCommonLayout = (content: TemplateResult) => html`
  <app-nav></app-nav>
  ${content}
`;

export const baseDecorator = (ctx: Context, next: () => void) => {
  ctx.render = (content: TemplateResult) => {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
      return;
    }

    render(renderCommonLayout(content), rootElement);
  };
  next();
};
