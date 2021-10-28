import EventBus from '../event-bus';

export interface Action {
  type: string;
  payload?: any;
}

type Indexed = {[key: string]: any};

type Reducer<S = Indexed> = (state: S, action: Action) => S;

export class Store extends EventBus {
  private state: Indexed = {};

  private reducer: Reducer;

  constructor(reducers: Indexed) {
    super();

    this.reducer = this.combineReducers(reducers);

    this.dispatch({ type: '@@INIT' });
  }

  public dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);

    this.emit('changed');
  }

  public getState(): Indexed {
    return this.state;
  }

  private combineReducers(reducers: Indexed): Reducer {
    return (action: Action) => {
      const newState: Indexed = {};

      Object.entries(reducers).forEach(([key, reducer]) => {
        // eslint-disable-next-line
        newState[key] = reducer(this.state[key], action);
      });

      return newState;
    };
  }
}
