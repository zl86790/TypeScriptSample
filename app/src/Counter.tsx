import * as React from "react";
import { connect } from "react-redux";
import { createStore, Dispatch } from "redux";

interface IReactState {
  list: any;
}

interface ICounterProps {
  value: any;
  handleIncrement: any;
  handleDecrement: any;
}

class Counter extends React.Component<ICounterProps> {
  public state: IReactState;

  constructor(props: ICounterProps) {
    super(props);
  }

  public render() {
    const { value, handleIncrement, handleDecrement } = this.props;

    return (
      <div>
        <h1>{value}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
  }
}

const handleIncrementAction = {
  type: "INCREMENT"
};
const handleDecrementAction = {
  type: "DECREMENT"
};

const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);

function mapStateToProps(state: IReactState) {
  return { value: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleDecrement: () => dispatch(handleDecrementAction),
    handleIncrement: () => dispatch(handleIncrementAction)
  };
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
