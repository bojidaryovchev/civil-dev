import { html } from 'lit';
import page from 'page';
import { commonLayoutDecorator, baseDecorator } from '../common/page-decorators';

page.base('/civil-dev');

//#region Routes
page('/', commonLayoutDecorator, (ctx) => {
  ctx.render(html`<app-home></app-home>`);
});
page('/projects', commonLayoutDecorator, (ctx) => {
  ctx.render(html`<app-projects></app-projects>`);
});
page('/auth', baseDecorator, (ctx) => {
  ctx.render(html`<app-auth></app-auth>`);
});
page('*', baseDecorator, (ctx) => {
  ctx.render(html`<app-not-found></app-not-found>`);
});
//#endregion

page();
