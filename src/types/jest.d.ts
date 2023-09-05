/// <reference types="jest" />

declare namespace jest {
  interface It {
    customRender: <
      Q extends Queries = typeof queries,
      Container extends Element | DocumentFragment = HTMLElement,
      BaseElement extends Element | DocumentFragment = Container
    >(
      ui: React.ReactElement,
      options?: RenderOptions<Q, Container, BaseElement>
    ) => RenderResult<Q, Container, BaseElement>;
  }
}
