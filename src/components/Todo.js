import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    FlatList, 
    Button,
    Keyboard
    } from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../actions';

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
        if(str != '') {
            this.props.insertTodo(str);
        }
        this.setState({input_text: ''});
    }

    clearPress = () => {
        this.props.clearTodo();
        this.setState({input_text: ''});
    }

    render() {
        return (
            <View style = {s.container}>
                <View style = {s.bulletJournal}>
                    <FlatList
                    data = {this.props.todo}
                    renderItem = {({item}) => <Text>{item}</Text>} style={{width:300}}
                    />
                </View>
                <TextInput style = {s.inputText} value = {this.state.input_text} onChangeText = {(str) => {
                    this.setState({input_text: str})
                }}
                onEndEditing = {() => this.submitPress(this.state.input_text)}/>
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
        height: 100,
        width: 300,
        borderWidth: 1,
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

