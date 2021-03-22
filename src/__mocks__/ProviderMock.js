import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from '../initialState';
import rootReducer from '../redux/rootReducer';
import store from '../store/store.js';


const ProviderMock = (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
)
export default ProviderMock;