import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.button}>
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Users"
          onPress={() => {
            navigation.navigate('Users');
          }}
        />
      </View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <View style={styles.button}>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function UsersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Users Screen</Text>
      <View style={styles.button}>
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </View>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <View style={styles.button}>
      <Button 
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      </View>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.button}>
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Users"
          onPress={() => {
            navigation.navigate('users');
          }}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffad1f',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'black',
    margin: 4,
  },
});

export default App;
