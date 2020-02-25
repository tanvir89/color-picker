import React from 'react';
import { useReducer } from 'react';
import './App.css';



const rgbToHex = rgb => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return "" + hex;
};

const hexString = (r, g, b) => {
  return "#" + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
};

const initialState = {
  red: "101",
  green: "157",
  blue: "189"
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_RED":
      return {...state, red: action.value};
    case "SET_GREEN":
      return {...state, green: action.value};
    case "SET_BLUE":
      return {...state, blue: action.value};
    default:
      throw new Error();
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const styled = hexString(
    state.red,
    state.green,
    state.blue
  );
  const red = (
     `rgb(${state.red}, 0, 0)` 
  )
  const green = (
    `rgb(0, ${state.green}, 0)`
  )
  const blue = (
    `rgb(0, 0, ${state.blue})`
  )

  
  return (
    <div className="box">

      <div className="colors" style={{ background: `${styled}` }} >
          
      </div>
      <label>Red</label>
      <input type="range" min="0" max="255" style={{ background: `${red}`  }} className="color-slide r"
        onChange={e => dispatch({ type: "SET_RED", value: e.target.value})}
        value={state.red}/>

      <label>Green</label>
      <input type="range" min="0" max="255" style={{ background: `${green}`  }} className="color-slide g" 
        onChange={e => dispatch({ type: "SET_GREEN", value: e.target.value})}
        value={state.green}/>

      <label>Blue</label>
      <input type="range" min="0" max="255" style={{ background: `${blue}`  }} className="color-slide b" 
        onChange={e => dispatch({ type: "SET_BLUE", value: e.target.value})}
        value={state.blue}/>


      <div className="results" style= {{ boxShadow: `5px 10px rgba(${styled}, 0.3)` }}>
          <div className="hex">hex- {hexString(state.red, state.green, state.blue)}</div>
          <br />
          <div className="rgb">rgb({state.red}, {state.green}, {state.blue})</div>
      </div>
    </div>

    
  );
}



export default App;
