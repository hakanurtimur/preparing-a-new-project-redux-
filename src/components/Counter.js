import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.isShown)

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseByFive = () => {
    dispatch({type: "ADD", value: 10})
  }

  const toggleHandler = () => {

    dispatch({type: 'toggle'})
  }

 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByFive} >Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

// WITH CLASS BASED COMPONENTS
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
