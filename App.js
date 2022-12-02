import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.body}>
        <Image
          style={{width:150, height: 150, borderRadius:75, margin: 30}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKNsBt5QHBOwzvpCQXQ-bc2Aq8O3825_RbQ&usqp=CAU'
          }}
        />
        <Text style={{color: '#6c6c6c', fontSize: 18, fontWeight: 'bold'}}>Congratulation, your order is accepted</Text>
        <Text style={{color: '#a7a7a7', width: '70%', marginTop: 20, fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.</Text>  
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'#fff'}}>Continue</Text>
        </TouchableOpacity>
      
    
        
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    marginTop: 4 ,
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#0080ff',
    height: 40,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});