import React from 'react'
import { View, Button, Text } from 'react-native'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

class Clicker {
    clicks = 0

    constructor() {
        makeAutoObservable(this)
    }

    addClick() {
        this.clicks += 1
    }

    deleteClick() {
      this.clicks -= 1
    }
}

const clicker = new Clicker()

const App = observer(() => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: clicker.clicks}}>{clicker.clicks}</Text>
        <Button onPress={() => clicker.addClick()} title="increase" />
        <Button onPress={() => clicker.deleteClick()} title="decrease" />
    </View>
))

export default App;