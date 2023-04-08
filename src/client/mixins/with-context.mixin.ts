import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { Context } from 'page';
import { LitConstructor } from '../types';

export const withContext = <T extends LitConstructor<LitElement>>(Base: T) => {
  class ContextMixin extends Base {
    @property({ type: Object }) context?: Context;
  }

  return ContextMixin;
};
