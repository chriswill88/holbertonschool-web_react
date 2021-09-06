import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WithLogging from './WithLogging';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });


describe('<bodySection>', () => {
  it ('renders app', () => {
    const spy = jest.spyOn(console, 'log')
    const Comp = WithLogging(() => <p />)
    const wrapper = mount(<Comp />)
    expect(spy).toHaveBeenCalledWith('Component  is mounted');
		wrapper.unmount();
		expect(spy).toHaveBeenCalledWith('Component  is going to unmount');
		spy.mockRestore();
  })
})