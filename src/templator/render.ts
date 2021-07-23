import { compiledComponent } from '~/src/types/component';

const render = (root: HTMLElement, Component: compiledComponent): void => {
  if (!root) {
    throw new Error('Не определен корень проекта');
  }

  root.appendChild(Component);
};

export default render;
