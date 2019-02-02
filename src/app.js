import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const root = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, root)