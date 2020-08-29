// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import { createStore } from "redux"
import { Provider } from "react-redux"
import { gameReducer } from "./reducers"

// Styling
import './index.css'
import '@rmwc/typography/styles'
import '@rmwc/fab/styles'
import '@rmwc/select/styles'
import '@rmwc/top-app-bar/styles'
import '@rmwc/grid/styles'
import './App.css'

let store = createStore(gameReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"))