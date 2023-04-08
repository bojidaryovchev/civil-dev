import { html } from 'lit';
import page from 'page';
import { baseDecorator, commonLayoutDecorator } from '../common';

page.base('/civil-dev');

//#region Routes
page('/', commonLayoutDecorator, (context) => {
  context.render(html`<app-home .context="${context}"></app-home>`);
});
page('/projects', commonLayoutDecorator, (context) => {
  context.render(html`<app-projects .context="${context}"></app-projects>`);
});
page('/projects/:id', commonLayoutDecorator, (context) => {
  context.render(html`<app-project-details .context="${context}"></app-project-details>`);
});
page('/auth', baseDecorator, (context) => {
  context.render(html`<app-auth .context="${context}"></app-auth>`);
});
page('/email-verification-success', baseDecorator, (context) => {
  context.render(html`<app-email-verification-success .context="${context}"></app-email-verification-success>`);
});
page('*', baseDecorator, (context) => {
  context.render(html`<app-not-found .context="${context}"></app-not-found>`);
});
//#endregion

page();
