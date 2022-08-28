import React, { Component } from 'react';
import { Text, View,Alert, TouchableOpacity, StyleSheet,TextInput } from 'react-native';

export default class StartScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate("LoginScreen")
                    }>
                 
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate("RegisterScreen")
                    }>    
                
                    <Text style={styles.buttonText}>Sign-up</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'pink',
    },
    buttonText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",        
    },
    button: {
        flex: 0.17,
        marginTop:10,
        borderRadius: 10,
        width:200,
        backgroundColor: 'blue',
        justifyContent: "center",
        alignItems: "center"
    },

});