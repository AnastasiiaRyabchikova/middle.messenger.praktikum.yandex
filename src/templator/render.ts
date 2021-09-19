import { compiledComponentType } from '../types/component';

const render = (root: HTMLElement | null, Component: compiledComponentType): void => {
  if (!root) {
    throw new Error('Не определен корень проекта');
  }

  if (!Component) {
    throw new Error('Нет корневого компонента');
  }

  root.appendChild(Component);
};

export default render;
