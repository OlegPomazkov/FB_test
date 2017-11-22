var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

var React = require('react');
var shallow = require('enzyme').shallow;
var mount = require('enzyme').mount;
var renderer = require('react-test-renderer');
var configureStore = require('redux-mock-store').default;
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var PathConstructor = require('../app/containers/PathConstructor.js');

// import ConnectedHome, { Home } from '../src/js/components/Home';
// import { addInputs, subtractInputs } from '../src/js/actions/calculatorActions';
// import calculatorReducers from '../src/js/reducers/calculatorReducers';

describe('TEST: First one just to see that Jest is in work -------> ', () => {
  const initialState = {
    points: [{
  	  name: 'One',
      coords: [55.55, 37.37]
    }],
    pathMap: {},
    placemarks: [],
    lines: [],
    isMap: false
  }; 

  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<PathConstructor store={store} />);
  });

  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  // it('+++ check Prop matches with initialState', () => {
  //   expect(container.prop('output')).toEqual(initialState.output);
  // });
});