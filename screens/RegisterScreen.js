import React, { Component } from 'react';
import { Text, View,Alert } from 'react-native';

export default class RegisterScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Register Screen!</Text>
            </View>
        )
    }
}
