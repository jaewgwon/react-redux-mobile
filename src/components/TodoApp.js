import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Todo from './Todo';
import Navbar from './Navbar';

const TodoApp = () => {
    return (
        <View style = {{flex : 1}}>
            <View style = {s.pageContainer}>
                <Todo/>
            </View>
            <View style = {s.navbarContainer}>
                <Navbar/>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    header: {
        flex: 2,
    },
    pageContainer: {
        flex: 5,
        
    },
    navbarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default TodoApp;