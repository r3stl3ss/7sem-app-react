import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <View style={{flexDirection: 'row', }}>
          <Image
          style={{width:30, height:30, borderRadius: 30}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
          }}></Image>
          <Text style={{color: 'white',marginLeft: 40}}>whatsapp call</Text>
        </View>
        <Text style={{fontSize: 25, color: 'white'}}>Mark Johnson</Text>
        <Text style={{color: 'white'}}>CALLING</Text>
      </View>
      <Image 
      style={styles.image}
      source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/147/147138.png'
      }}
      ></Image>
      <View style={styles.call}>
        <Image
        style={{width:35, height:35, borderRadius: 30}}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1678/PNG/512/wondicon-ui-free-speaker_111240.png'
        }}
        ></Image>
        <Image
        style={{width:60, height:60, borderRadius: 30}}
        source={{
          uri: 'https://w7.pngwing.com/pngs/654/892/png-transparent-end-call-logo-telephone-number-email-telephone-call-payphone-telefono-miscellaneous-text-trademark.png'
        }}
        ></Image>
        <Image
        style={{width:35, height:35, borderRadius: 30}}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/2036/PNG/512/audio_mute_icon_124172.png'
        }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d4e33',
  },
  name: {
    flex: 1.5,
    justifyContent: 'center',
    paddingLeft: 20

  },
  image: {
    flex: 7.5,
  },
  call: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});