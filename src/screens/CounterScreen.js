import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'

const INCREMENT=1

const reducer = (state,action) =>{
//state===counter:number
//action===type:increase||decrease,payload:1||-1
switch(action.type){
  case 'increase':
    return {...state,counter:state.counter+action.payload}
  case 'decrease':
    return {...state,counter:state.counter-action.payload}
  default:
    return state
}
}

const CounterScreen = () => {
    //This syntax is basically array destructuring
    //Ex: colors=['red','green']
    //console.log(colors) will give 'red','green'
    //Similarly const [colorOne,colorTwo] = colors, will give outputs as,
    //console.log(colorOne)="red", and console.log(colorTwo)="green"

    //const [counter,setCounter] = useState(0)
    const[state,dispatch]=useReducer(reducer,{counter:0})

    //useState is used to initialize the counter state
    //Whenever setCounter(), is called, the entire functional component gets re-rendered,and updated value of counter gets 
    //displayed.
    //We cannot directly modify state as counter=counter+1
    //It has to be modified via setter function, setCounter(counter+1)
  return (
    <View>
        <Button title="Increase" onPress={()=>{
            //setCounter(counter+1)
            dispatch({type:'increase',payload:INCREMENT})
        }}/>
          <Button title="Decrease" onPress={()=>{
            //setCounter(counter-1)
            dispatch({type:'decrease',payload:INCREMENT})
        }}/>
      <Text>Current Count:{state.counter}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})