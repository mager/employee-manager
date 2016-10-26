import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {
            email,
            password,
            loginUser
        } = this.props;

        loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size="large" />
            );
        }

        return (
            <Button
                onPress={ this.onButtonPress.bind(this) }>
                Login
            </Button>
        );
    }

    render() {
        const {
            email,
            password,
            error,
            loading
        } = this.props, {
            errorTextStyles
        } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@example.xyz"
                        onChangeText={ this.onEmailChange.bind(this) }
                        value={ email } />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={ this.onPasswordChange.bind(this) }
                        value={ password }/>
                </CardSection>
                <Text style={ errorTextStyles }>
                    { error }
                </Text>
                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const {
        email,
        password,
        error,
        loading
    } = auth;

    return { email, password, error, loading };
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
