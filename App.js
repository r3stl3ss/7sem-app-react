import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      <><View style={styles.window}>
      <View >
        <Image style={styles.avatar} source={{ uri: 'https://5energy.ru/sites/5energy.ru/files/5us.png'}} />
      </View>
      <View style={styles.name}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 38}}>John Doe</Text>
      </View>
    </View><View style={styles.main}>
      </View></>
  );
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff'
  },
  name: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
  }
});
