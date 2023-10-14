import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState}from "react"

export default function CounterPage() {

    const [counter,setCounter]= useState(0)

    const increaseHandler = ()=>{
        setCounter(counter+1)
        console.log(`Counter value is ${counter}`)
    }
    
    const decreaseHandler = ()=>{
        setCounter(counter-1)
    
    }

    const restartHandler = ()=>{
        setCounter(0)
    }
 return (
    <View style={styles.container}>
      <Text>Value is : {counter}</Text>
      <View>
     
        <Button title="increase" onPress={increaseHandler}></Button>
        <Button title="decrease" onPress={decreaseHandler}></Button>
        <Button title="Restart" onPress={restartHandler}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
