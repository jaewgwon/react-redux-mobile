import React from 'react';
import { View, Text } from 'react-native';
import Count from './components/Count';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Todo from './components/Todo';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {{fontSize: 40}}>React app</Text>
        <Todo/>
        <Count/>
      </View>
    </Provider>
  );
};

export default App;