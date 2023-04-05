import { render } from 'lit';
import { ROOT_ELEMENT } from '../constants';

export const baseDecorator = (ctx, next) => {
  ctx.render = (content) => render(content, ROOT_ELEMENT);
  next();
};
