import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>

    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        flexDirection:'row',
        height:200,
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:4
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:4
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:2
    }
})