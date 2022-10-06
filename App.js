import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Button 
            title="Decrease"
            onPress={() => setCounter(counter - 1)} 
          />
        </View>
        <Text>{counter}</Text>
        <Button
        onPress={() => setCounter(counter + 1)}
          title="Increase"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "space-around", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  },
});