import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ColorCounter from '../../components/ColorCounter'
import { set } from 'react-native-reanimated'

const SquareScreen = () => {

  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const COLOR_INCREMENT = 15

  const setColor = (color, change) => {
    switch (color) {
      // case 'red':
      //   red + change > 255 || red + change < 0 ? null : setRed(red + change)
      //   return
      // case 'green':
      //   green + change > 255 || green + change < 0 ? null : setGreen(green + change)
      //   return
      // case 'blue':
      //   blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
      //   return
      case 'red':
        let newColorValue = red + change;
        if (newColorValue >= 0 && newColorValue <= 255) {
          setRed(newColorValue);
        }
        return;
      case 'green':
        newColorValue = green + change;
        if (newColorValue >= 0 && newColorValue <= 255) {
          setGreen(newColorValue);
        }
        return;
      case 'blue':
        newColorValue = blue + change;
        if (newColorValue >= 0 && newColorValue <= 255) {
          setBlue(newColorValue);
        }
        return;
      default:
        return
    }

  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        colorText='Red' />
      <ColorCounter
        colorText='Green'
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        colorText='Blue'
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />

      <View
        style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})