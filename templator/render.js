const render = (root, Component) => {
  if (!root) {
    throw new Error('Не определен корень проекта');
  }

  root.appendChild(Component);
};

export default render;