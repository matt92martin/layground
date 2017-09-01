import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { actionSomething } from './actions/actions.js'
import * as reducers from './reducers/reducers.js'

import App from './app'

let store = createStore(combineReducers(reducers))


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)