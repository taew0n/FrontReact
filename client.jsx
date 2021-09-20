const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');
const WordRelayHooks = require('./WordRelayHooks');
import NB from './NB'


ReactDom.render(<WordRelay />, document.querySelector('#root'));

ReactDom.render(<NB />, document.querySelector('#boot'));