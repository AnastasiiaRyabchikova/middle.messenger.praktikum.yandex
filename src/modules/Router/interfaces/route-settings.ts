import { ComponentConstructable } from '@/types/component';

export default interface routeSettings {
  pathname: string;
  component: ComponentConstructable;
};
