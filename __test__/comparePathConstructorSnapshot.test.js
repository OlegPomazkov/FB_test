var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

var React = require('react');
var renderer = require('react-test-renderer');
var configureStore = require('redux-mock-store').default;

var PathConstructor = require('../app/containers/PathConstructor.js');

describe('Check application Snapshot to be the same ==========> ',()=>{
  const initialState = {
    mapReducer: {
      points: [],
      pathMap: {},
      placemarks: [],
      lines: [],
      isMap: false
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState); 

  it('Capturing Snapshot of PathConstructor  ---------------> ', () => {
    const renderedValue =  renderer.create(<PathConstructor store={store}/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
