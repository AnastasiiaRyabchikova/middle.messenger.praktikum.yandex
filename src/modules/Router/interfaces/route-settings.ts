import { ComponentConstructable } from '~/src/types/component';

export default interface routeSettings {
  pathname: string,
  component: ComponentConstructable,
};
