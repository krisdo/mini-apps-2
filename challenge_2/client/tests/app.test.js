import React from 'react';
import App from '../App.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from 'semantic-ui-react';

 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<App/>)
  });
});


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Cryptocurrency header", () => {
  const wrapper = shallow(<App />);
  const Cryptocurrency = 'Cryptocurrency';
  expect(wrapper.contains(Cryptocurrency)).toEqual(true);
});