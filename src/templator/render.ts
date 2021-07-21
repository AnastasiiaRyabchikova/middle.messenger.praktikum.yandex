const render = (root: HTMLElement, Component: HTMLElement): void => {
  if (!root) {
    throw new Error('Не определен корень проекта');
  }

  root.appendChild(Component);
};

export default render;
