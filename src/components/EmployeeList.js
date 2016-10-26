import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
    ListView
} from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        /* nextProps are next set of props this component will be rendered with. this.props is the old props. */
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return (
            <ListItem employee={ employee } />
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={ this.dataSource }
                renderRow={ this.renderRow } />
        );
    }
}

const mapStateToProps = (state) => {
    /* state.employees is an object. It has many k/v pairs. For each k/v pair, run this fat arrow function. The key is the ID of the record. _map pushes them into an array. */
    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val, // employee model
            uid
        }; // { shift, name, id... }
    });

    return { employees };
};

export default connect(mapStateToProps, {
    employeesFetch
})(EmployeeList);
