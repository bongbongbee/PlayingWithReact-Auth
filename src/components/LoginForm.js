import React, { Component } from 'react';
import { Button, Card, CardSection, InputField } from './common';


class LoginForm extends Component {
    state = { email: '' };
    render() {
        console.log(this.state.text);
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
