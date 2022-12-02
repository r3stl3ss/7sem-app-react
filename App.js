import { StyleSheet,Image, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={{color: '#fff',fontSize: 28}}>LOREM IPSUM</Text>
      </View>
      <View style={styles.body}>
        <Text style={{fontSize: 20, width: '80%', fontWeight: 'bold', marginTop: 5}}>The lorem ipsum is, in printing, a series of meaningless</Text>
        <Text style={{width: '80%', color: 'gray', marginTop: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Text style={{color:'#735928', width: '80%', marginTop: 5}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</Text>
        <Text style={{color:'gray', width: '80%'}}>2017-11-27 13:03:01</Text>
        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', width: '80%'}}>
          <Image
          style={styles.avatar}
          source={{
            uri : 'https://cdn-icons-png.flaticon.com/512/147/147139.png'
          }}></Image>
          <Text style={{marginLeft: 10, fontSize: 22, color: '#735928', fontWeight: 'bold'}}>Mark Doe</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'#fff'}}>Like</Text>
        </TouchableOpacity>
      </View>
    
        
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    backgroundColor: '#fff',
    width: "100%",
    marginTop: 4 ,
    alignItems: 'center',
  },
  button: {
    marginTop: 4,
    backgroundColor: '#962456',
    height: 40,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    backgroundColor: '#837123',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  avatar: {
    width: 80, 
    height: 80, 
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#735928'

  }
});