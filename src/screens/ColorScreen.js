import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const ColorScreen = () => {

    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title='Add a color'
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />
            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                    )
                }
            }
            />
        </View>
    )
}

const randomRgb = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`


}

export default ColorScreen

const styles = StyleSheet.create({})