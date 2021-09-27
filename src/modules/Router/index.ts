import routeSettings from './interfaces/route-settings';
import Route from './Route';

export default class Router {
  static __instance: Router;

  routes: Array<Route> = [];

  history: History;

  _currentRoute: Route | null ;

  _rootQuery: HTMLElement | null;

  constructor(rootQuery?: HTMLElement | null) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(routes: Array<routeSettings>): this {
    routes.forEach(({ pathname, component }) => {
      this.routes.push(new Route(pathname, component, { rootQuery: this._rootQuery }));
    });
    return this;
  }

  start(): void {
    this._onRoute(window.location.pathname);
    window.addEventListener('popstate', (e: PopStateEvent) => {
      const pathname: string = (<Window>e.currentTarget).location.pathname || '/';
      this._onRoute(pathname);
    });
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({
      pathname,
      prevPath: window.location.href,
    }, '', pathname);
    this._onRoute(pathname);
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }

  getRoute(pathname: string): Route| undefined {
    return this.routes.find((route: Route) => route.match(pathname));
  }
};