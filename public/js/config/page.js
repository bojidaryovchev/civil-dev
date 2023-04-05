// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes

import { html } from 'lit';
import page from 'page.js';
import { baseDecorator } from '../common/page-decorators';

page.base('/');

// register routes
page('/', baseDecorator, (ctx) => {
  ctx.render(html`<app-home-page></app-home-page>`);
});

page();
