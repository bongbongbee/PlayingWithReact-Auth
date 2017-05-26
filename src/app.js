import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCsHxUbFc_0_3v-HX7oY88ogFWbnAn8OGc',
            authDomain: 'authentication-27aba.firebaseapp.com',
            databaseURL: 'https://authentication-27aba.firebaseio.com',
            projectId: 'authentication-27aba',
            storageBucket: 'authentication-27aba.appspot.com',
            messagingSenderId: '24429697061'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>

            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
