import { html, render, TemplateResult } from 'lit';
import { Context } from 'page';

const commonLayout = (content: TemplateResult) => html`
  <app-nav></app-nav>
  ${content}
`;

interface RenderStrategy {
  executeRender(content: TemplateResult, container: HTMLElement): void;
}

class BaseRenderStrategy implements RenderStrategy {
  executeRender(content: TemplateResult, container: HTMLElement): void {
    render(content, container);
  }
}

class LayoutRenderStrategy implements RenderStrategy {
  executeRender(content: TemplateResult, container: HTMLElement): void {
    render(commonLayout(content), container);
  }
}

const executeRender = (content: TemplateResult, strategy: RenderStrategy): void => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    return;
  }

  strategy.executeRender(content, rootElement);
};

export const baseDecorator = (ctx: Context, next: () => void) => {
  ctx.render = (content: TemplateResult) => {
    executeRender(content, new BaseRenderStrategy());
  };
  next();
};

export const commonLayoutDecorator = (ctx: Context, next: () => void) => {
  ctx.render = (content: TemplateResult) => {
    executeRender(content, new LayoutRenderStrategy());
  };
  next();
};
