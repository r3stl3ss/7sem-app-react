import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import picture1 from './assets/picture1.png';
import picture2 from './assets/picture2.png';
import picture3 from './assets/picture3.png';
import picture4 from './assets/picture4.png';
import picture5 from './assets/picture5.png';
import picture6 from './assets/picture6.png';
import picture7 from './assets/picture7.png';
import picture8 from './assets/picture8.png';
import picture9 from './assets/picture9.png';
import picture10 from './assets/picture10.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture1.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture2.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture3.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture4.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture5.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture6.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture7.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture8.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture9.png')
        }
          />
      </View>
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={
          require('./assets/picture10.png')
        }
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  child: {
    width: '33%', 
    height: '15%', 
    marginRight: 1,
    marginBottom:1,
    marginTop: 15
  },
  image: {
    width: '100%',
    height: '100%',
  }
});