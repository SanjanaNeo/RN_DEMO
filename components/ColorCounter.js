import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColorCounter = ({colorText,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{colorText}</Text>
      <Button
        title={`Increase ${colorText}`}
        onPress={()=>onIncrease()}
      />
      <Button 
       title={`Decrease ${colorText}`}
       onPress={()=>onDecrease()}
      />
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})