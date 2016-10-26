import React from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {
        containerStyles,
        inputStyles, // 2/3 flex
        labelStyles // 1/3 flex
    } = styles;

    return (
        <View style={ containerStyles }>
            <Text style={ labelStyles }>
                { label }
            </Text>
            <TextInput
                autoCorrect={ false }
                autoCapitalize={ 'none' }
                placeholder={ placeholder }
                style={ inputStyles }
                value={ value }
                onChangeText={ onChangeText }
                secureTextEntry={ secureTextEntry } />
        </View>
    );
};


const styles = {
    inputStyles: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyles: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyles: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
