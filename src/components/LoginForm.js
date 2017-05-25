import React, { Component } from 'react';
import { Button, Card, CardSection, InputField } from './common';


class LoginForm extends Component {
    state = { text: '' };
    render() {
        console.log(this.state.text);
        return (
            <Card>
                <CardSection>
                    <InputField
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
