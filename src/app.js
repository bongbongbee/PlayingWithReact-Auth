import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, LoadingIndicator } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => { firebase.auth().signOut(); }}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;

            default:
                return <LoadingIndicator />;
        }
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
