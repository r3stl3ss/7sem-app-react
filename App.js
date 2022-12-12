import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native" ;
import axios from "axios";
import { TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation, route}) {
  return ( 
  <View style={styles.container}>
    <Text style={{ margin: 10 }}>Post: {route.params?.city}</Text>
    <Button 
      title="Get Advice" 
      onPress={() => {
        navigation.navigate({
          name: 'Choose',
        });
      }} />
  </View> 
  )
}

function ChooseScreen({navigation, route}) {
  const [city, setCity] = useState('');

  return ( 
  <View style={styles.container}>
    <Text style={styles.advice}>Enter your city:</Text>
    <TextInput 
      value={city}
      onChangeText={setCity}  
    ></TextInput>
    <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {
              city: city
            }
          });
        }}
      />
  </View> 
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
 const [advice, setAdvice] = useState("");

 const getRandomId = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return (Math.floor(Math.random() *
     (max - min + 1)) + min).toString();
 };

 const getAdvice = () => {
   axios
 .get("https://api.adviceslip.com/advice/" +
       getRandomId(1, 200))
     .then((response) => {
       setAdvice(response.data.slip.advice);
     });
 };

 return (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Choose" component={ChooseScreen} />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  advice: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});