import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import {
    CardSection,
    Input
} from './common';


class EmployeeForm extends Component {
    render() {
        const {
            name,
            phone,
            shift,
            employeeUpdate,
            employee
        } = this.props, {
            pickerStyles,
            pickerLabelStyles
        } = styles;

        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Kristine"
                        value={ name }
                        onChangeText={ (value) => employeeUpdate({
                            prop: 'name',
                            value
                        }) }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-1212"
                        value={ phone }
                        onChangeText={ (value) => employeeUpdate({
                            prop: 'phone',
                            value
                        }) }
                    />
                </CardSection>

                <CardSection
                    style={{ flexDirection: 'column' }}>
                    <Text
                        style={ pickerLabelStyles }>
                        Shift
                    </Text>
                    <Picker
                        style={ pickerStyles }
                        selectedValue={ shift }
                        onValueChange={ (value) => employeeUpdate({
                            prop: 'shift',
                            value
                        }) }>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles = {
    pickerStyles: {
        flex: 1
    },
    pickerLabelStyles: {
        fontSize: 18,
        paddingLeft: 20
    }
};


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate
})(EmployeeForm);
