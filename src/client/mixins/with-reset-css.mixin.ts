import { CSSResultGroup, LitElement } from 'lit';
import { resetCss } from '../common';
import { LitConstructor } from '../types';

interface WithStyles {
  readonly styles?: CSSResultGroup;
}

type LitConstructorWithStyles = LitConstructor<LitElement> & WithStyles;

export const withResetCss = <T extends LitConstructorWithStyles>(Base: T) => {
  class ResetCssMixin extends Base {
    createRenderRoot() {
      const renderRoot = super.createRenderRoot();
      const styleElement = document.createElement('style');
      styleElement.textContent = resetCss.cssText;
      renderRoot.prepend(styleElement);
      return renderRoot;
    }
  }

  return ResetCssMixin;
};
