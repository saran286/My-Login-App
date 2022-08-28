import React, { Component } from 'react';
import { Text, View,Alert } from 'react-native';

export default class DashboardScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Dashboard Screen!</Text>
            </View>
        )
    }
}
