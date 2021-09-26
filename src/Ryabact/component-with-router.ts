import Component from './Component';
import { ComponentSettingsInterface } from '~/src/types/component';
import Router from '../Router';

export default class ComponentWithRouter extends Component {
  router: Router;

  constructor(context: ComponentSettingsInterface) {
    super(context);
    this.router = new Router();
  }
};
