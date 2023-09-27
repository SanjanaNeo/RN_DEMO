import React from "react";
import { Text, StyleSheet , View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>Hi there!!</Text>
      <Button
      onPress={()=>navigation.navigate("Components")}
      title="Go to components screen"
      />
     <Button
      title="Go to List demo"
      onPress={()=>navigation.navigate('List')} 
     />
     <Button
      title="Go to Image Screen"
      onPress={()=>navigation.navigate('Img')} 
     />
      <Button
      title="Go to Counter Screen"
      onPress={()=>navigation.navigate('Counter')} 
     />
      <Button
      title="Go to Color Screen"
      onPress={()=>navigation.navigate('Color')} 
     />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
