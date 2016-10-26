import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';

const Spinner = ({ size }) => {
    const {
        spinnerStyles
    } = styles;

    return (
        <View style={ spinnerStyles }>
            <ActivityIndicator
                size={ size || 'large' } />
        </View>
    );
};


const styles = {
    spinnerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};


export { Spinner };
