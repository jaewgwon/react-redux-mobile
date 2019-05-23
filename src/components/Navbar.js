import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import ActionCreator from '../actions';

const Navbar = () => (
        <View style={s.container}>
            <Image source = {require('./icons/calendar.png')} style = {{width:30, height:30}}/>
            <Image source = {require('./icons/checklist.png')} style = {{width:30, height:30}}/>
            <Image source = {require('./icons/setting.png')} style = {{width:30, height:30}}/>
            {/* <Button title="test" onPress ={testButton}/>
            <Button title="test" onPress ={testButton}/> */}
        </View>
    );

const testButton = () => {
    console.log('testing..');
}
const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
   
})

export default Navbar;