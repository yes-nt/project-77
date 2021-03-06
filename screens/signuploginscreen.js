import * as React from 'react';
import { Image, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                //return Alert.alert("Successful Login");
                console.log('Successful Login');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                //return Alert.alert(errorMessage);
                console.log(errorMessage);
            });
    }

    userSignUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                //return Alert.alert("Successful Signup");
                console.log('Successful Signup');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                //return Alert.alert(errorMessage);
                console.log(errorMessage);
            })
    }

    render() {
        return (
            <View style={{ backgroundColor: 'orange' }}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../assets/barter.jpeg')}
                    />
                    <Text style={styles.titleText}> Barter System </Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Please enter your email...'}
                        keyboardType={'email-address'}
                        onChangeText={(text) => {
                            this.setState({ email: text });
                        }}
                        value={this.state.email}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder={'Please enter your password...'}
                        onChangeText={(text) => {
                            this.setState({ password: text });
                        }}
                        value={this.state.password}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => { this.userLogin(this.state.email, this.state.password); }}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signup}
                        onPress={() => { this.userSignUp(this.state.email, this.state.password); }}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 2,
        borderColor: '#0A1045',
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    text: {
        fontSize: 30,
        color: '#F13030',
    },
    titleText: {
        color: '#38686A',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 50,
        marginBottom: 100,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    login: {
        width: '20%',
        height: '100',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 100,
        padding: 50,
        backgroundColor: '#1E555C',
        marginLeft: '20%',
    },
    signup: {
        width: '20%',
        height: '100',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 100,
        padding: 50,
        backgroundColor: '#1E555C',
        marginLeft: '60%',
        marginTop: '-9.4%',
        marginBottom: '4.25%',
    }
});