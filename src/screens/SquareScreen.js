import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import ColorCounter from '../../components/ColorCounter'

const reducer = (state, action) => {
  //state === {red:number,green:number,blue:number}
  //action === {type:'change_red'||'change_green'||'change_blue',payload:15||-15}

  switch (action.type) {
    case 'change_red':
      return state.red+action.payload>255 || state.red+action.payload<0
      ?state
      : { ...state, red: state.red + action.payload }
    //it is as good as
    //{red:0,green:0,blue:0,red:0+15}
    //here we are not directly changing state instead we are creating a copy of all the values
    //from state and updating state.red with a new value
    //so, it will be updated as {green:0,blue:0,red:0+15}
    case 'change_green':
      return state.green+action.payload>255 || state.green+action.payload<0
      ?state
      : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue+action.payload>255 || state.blue+action.payload<0
      ?state
      : { ...state, blue: state.blue + action.payload }
    default:
      return state
  }

}

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const {red,green,blue} = state
  //state === {red:number,green:number,blue:number}

  const COLOR_INCREMENT = 15

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        colorText='Red' />
      <ColorCounter
        colorText='Green'
        onIncrease={() =>dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        colorText='Blue'
        onIncrease={() =>dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }
        onDecrease={() =>dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
      />

      <View
        style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})