import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log("colors", colors);

    const randonRgb = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        return `rgb(${red},${green},${blue})`
    }
    return (
        <View>
            <Button
                title="Add a color"
                onPress={() => {
                    setColors([...colors, randonRgb()])
                }}
            />
            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={({ item }) => {
                    return(
                        <View style={{ width: 100, height: 100, backgroundColor: item }}></View>
                    )
                }}
            />
        </View>
    )
}

export default ColorScreen

const styles = StyleSheet.create({})