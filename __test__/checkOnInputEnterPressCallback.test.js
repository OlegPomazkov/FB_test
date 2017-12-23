var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

var React = require('react');
var shallow = require('enzyme').shallow;

var Input = require('../app/components/input.js');

describe('TEST: Simulate on input keyDown ==========> ', () => {
  it('should render input', () => {
    const addPointSpy = jest.fn();

    const thisInput = shallow (<Input addPoint={addPointSpy} />);

    expect(thisInput.find('input').length).toBe(1);

    thisInput.find('input').simulate('keyDown', { keyCode: 13});
    expect(addPointSpy).toBeCalledWith({ keyCode: 13});
   });
});