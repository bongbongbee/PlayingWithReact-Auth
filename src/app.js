import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCsHxUbFc_0_3v-HX7oY88ogFWbnAn8OGc',
            authDomain: 'authentication-27aba.firebaseapp.com',
            databaseURL: 'https://authentication-27aba.firebaseio.com',
            projectId: 'authentication-27aba',
            storageBucket: 'authentication-27aba.appspot.com',
            messagingSenderId: '24429697061'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
