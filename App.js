import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import logo from './assets/picture.png';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: 'grey' }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              style={styles.AvatarImage}
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmR1eHQucHJvZi5mcm9udF9pY29uXzBfNzM5NThjNGY/icon.png?w=340&fakeurl=1',
              }}></Image>
            <Text style={styles.followText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  card: {
    backgroundColor: '#fff',
    width: screen.width * 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  followText: {
    fontWeight: 'bold',
    color: '#0095f6',
    width: 240,
  },
  AvatarImage: {
    height: 75,
    width: 75,
    resizeMode: 'stretch',
    margin: 15,
  },
});
