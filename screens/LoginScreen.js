import React, { Component } from 'react';
import { Text, View,Alert,TextInput,StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <TextInput
                        style={StyleSheet.inputBox}
                        label="Email"
                        returnKeyType="next"
                        value={this.state.text}
                        onChangeText={text => this.setState({ email:text })}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"pink"
    },
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      borderColor:"black",
    },
});
