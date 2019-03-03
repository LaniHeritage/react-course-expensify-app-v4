import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';
import {startLogin} from '../../actions/auth';


test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click correctly', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin ={startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled()
});


