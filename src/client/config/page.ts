import { html } from 'lit';
import page from 'page';
import { baseDecorator } from '../common/page-decorators';

//#region Routes
page('/', baseDecorator, (ctx) => {
  ctx.render(html`<app-home></app-home>`);
});
page('/projects', baseDecorator, (ctx) => {
  ctx.render(html`<app-projects></app-projects>`);
});
page('*', baseDecorator, (ctx) => {
  ctx.render(html`<app-not-found></app-not-found>`);
});
//#endregion

page();
