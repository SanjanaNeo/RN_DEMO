import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
  <View style={styles.viewStyle}>
    <View style={styles.view1}></View>
    <View style={styles.view2}></View>
    <View style={styles.view3}></View>

  </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
   viewStyle:{
    borderWidth:3,
    height:500,
    flexDirection:'row',
    justifyContent:'center'
   },
   view1:{
    width:100,
    height:100,
    borderWidth:1,
    backgroundColor:'orange',
    right:55
   },
   view2:{
    width:100,
    height:100,
    borderWidth:1,
    backgroundColor:'green',
    marginTop:100
   },
   view3:{
    width:100,
    height:100,
    borderWidth:1,
    backgroundColor:'purple',
    left:55
   },
})