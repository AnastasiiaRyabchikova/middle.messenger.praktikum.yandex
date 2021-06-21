const stringHash = require('string-hash');

module.exports = {
  modules: true,

  plugins: {
    autoprefixer: {
      grid: true
    },
    'postcss-modules': {
      generateScopedName(name, filename, css) {

        if (!filename.endsWith('module.css')) {
          return name;
        }

        const i = css.indexOf(`.${name}`);
        const lineNumber = css.substr(0, i).split(/[\r\n]/).length;
        const hash = stringHash(css)
          .toString(36)
          .substr(0, 5);

        return `_${name}_${hash}_${lineNumber}`;

      },
      root: '.'
    }
  }
}
