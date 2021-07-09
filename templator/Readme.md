```javascript
// TODO: Добавить обработку вложенных в компонент элементов
```

# Шаблонизатор

## Начало работы

```javascript
import Templator from '~/templator';
```

## Инициализация компонента

Компонент - это функция, которая принимает в качестве аргумента объект с данными.

**component.js**
```javascript

const settings = {
  name: 'Component', // Имя компонента. Нужно для вывода ошибок в консоли
  template, // Шаблон компонента
  components: {}, // Объект с компонентами, которые используются в текущем компоненте
};

const Сomponent = (ctx) => {
  return new Templator(settings).compile(ctx);
};
```

Шаблон представляет собой шаблонную строку, куда неизменяемые данные вставляются через ${}.

```javascript
const template = `
  <div
    class="${styles.page}"
  >
    <h1
      class="title ${styles.title}"
    >
      Заголовок страницы
    </h1>
  </div>
`;
```

Условный рендеринг

```javascript
const template = `
  <t-if={{shouldShow}}>
    <span>
      Условный рендеринг
    </span>
  </t-if>
`;
