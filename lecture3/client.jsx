const React = require('react');
const ReactDom = require('react-dom');

const NumberBaseball = require('./NB');
const NB = require('./NumberBaseball')

ReactDom.render(<NB />, document.querySelector('#root'));