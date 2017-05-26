import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, LoadingIndicator } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed.',
            loading: false
        });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <LoadingIndicator size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <InputField
                        label="Email"
                        value={this.state.email}
                        placeholder="rofl@lmao.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <InputField
                        label="Password"
                        value={this.state.password}
                        secureTextEntry
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
