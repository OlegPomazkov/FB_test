var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

var React = require('react');
var shallow = require('enzyme').shallow;
var configureStore = require('redux-mock-store').default;

var PathConstructor = require('../app/containers/PathConstructor.js');
var addPoint = require('../app/actions/addPoint.js');
var changePointsOrder = require('../app/actions/changePointsOrder.js');
var deletePoint = require('../app/actions/deletePoint.js');
var movePoint = require('../app/actions/movePoint.js');

describe('TEST: Container mounting and actions dispatching ==========> ', () => {
  const initialState = {
    mapReducer: {
      points: [{
  	    name: 'One',
        coords: [55.55, 37.37]
      }],
      pathMap: {},
      placemarks: [],
      lines: [],
      isMap: false
    }
  }; 

  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<PathConstructor store={store}/>);
  });

  it('To see that the connected(SMART) component is rendered ------->', () => {
    expect(container.length).toEqual(1);
  });

  it('Check actions on dispatching  transmit correct ------->', () => {
    let action;

    store.dispatch(addPoint('Some data 1'));
    store.dispatch(changePointsOrder('Some data 2'));
    store.dispatch(deletePoint('Some data 3'));
    store.dispatch(movePoint('Some data 4'));

    action = store.getActions();

    expect(action[0]).toEqual({type: 'ADD_POINT', payload: 'Some data 1'});
    expect(action[1]).toEqual({type: 'CHANGE_POINTS_ORDER', payload: 'Some data 2'});
    expect(action[2]).toEqual({type: 'DELETE_POINT', payload: 'Some data 3'});
    expect(action[3]).toEqual({type: 'MOVE_POINT', payload: 'Some data 4'});
   });
});