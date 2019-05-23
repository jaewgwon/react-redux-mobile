import React from 'react';
import { View, Text } from 'react-native';
import Count from './components/Count';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <TodoApp/>
      </View>
    </Provider>
  );
};

export default App;