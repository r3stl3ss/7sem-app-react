import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const App = () => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    if (passReg.test(pass)) {
        return (
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                padding: 16,
            }}>
                <Text>Welcome, {name}</Text>
            </View>
        )
    } else {
        return (
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                padding: 16,
            }}>
                <Text style={{marginVertical: 16}}>
                    Name
                </Text>
                <TextInput
                    style={{padding: 8, backgroundColor: '#f5f5f5', marginBottom: 10}}
                    onChangeText={text => setName(text)}
                />
                <Text style={{marginVertical: 16}}>
                    Password (8+ symbols, digits and letters)
                </Text>
                <TextInput
                    style={{padding: 8, backgroundColor: '#f5f5f5'}}
                    onChangeText={text => setPass(text)}
                />
            </View>
        )
    }
};

export default App;