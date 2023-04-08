import { LitElement } from 'lit';

export type LitConstructor<T extends LitElement> = new (...args: any[]) => T;
