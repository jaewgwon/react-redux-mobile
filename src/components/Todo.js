import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    FlatList, 
    Button,
    } from 'react-native';
import {
    CheckBox
} from 'react-native-elements';
import { connect } from 'react-redux';
import ActionCreators from '../actions';
import { Haptic } from 'expo';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input_text: ""
        }
        this.submitPress = this.submitPress.bind(this);
        this.clearPress = this.clearPress.bind(this);
    }

    submitPress = (str) => {
        Haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
        if(str != '') {
            this.props.insertTodo(str);
        }
        this.setState({input_text: ''});
    }

    clearPress = () => {
        Haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
        this.props.clearTodo();
        this.setState({input_text: ''});
    }

    render() {
        return (
            <View style = {s.container}>
                <View style = {s.bulletJournal}>
                    <FlatList
                    data = {this.props.todo}
                    renderItem = {({item}) => 
                    <View>
                        <CheckBox 
                        title={item.key}
                        containerStyle = {{backgroundColor: 'white'}}
                        checked={item.status}
                        onPress={() => {
                            Haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
                            this.props.pressTodo(item.key)
                        }}/>
                    </View>
                    } style={{width:300}}/>
                </View>
                <TextInput style = {s.inputText} value = {this.state.input_text}
                placeholder = '할 일을 입력하세요.'
                placeholderTextColor = '#EFEFEF'
                onChangeText = {(str) => {
                    this.setState({input_text: str})
                }}
                returnKeyType = 'done'
                />

                <View style = {s.buttonContainer}>
                    <Button title = "Submit" onPress = {() => this.submitPress(this.state.input_text)} style = {s.submitButton}/>
                    <Button title = "Clear" onPress = {() => this.clearPress()} style = {s.submitButton}/>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center'
    },
    inputText: {
        marginTop: 30,
        alignItems: 'center',
        height: 30,
        width: 300,
        borderWidth: 1,
        borderColor: 'gray'
    },
    bulletJournal: {
        alignItems: 'center',
        height: 400,
        width: 300,
        borderWidth: 0,
        borderColor: 'gray'
    },
    submitButton: {
        height: 20,
        color: "#FF6F61"
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
        width: 300,
        flexDirection: 'row'
    }
})

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        insertTodo: (str) => {
            dispatch(ActionCreators.insertTodo(str))
        },
        deleteTodo: (str) => {
            dispatch(ActionCreators.deleteTodo(str))
        },
        clearTodo: () => {
            dispatch(ActionCreators.clearTodo())
        },
        pressTodo: (str) => {
            dispatch(ActionCreators.pressTodo(str))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

