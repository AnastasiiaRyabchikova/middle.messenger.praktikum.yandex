import * as Ryabact from 'ryabact';
import Router from './Router';

export default class WithRouter extends Ryabact.Component {
  router: Router;

  constructor(props: any) {
    super(props);
    this.router = new Router();
  }
}
