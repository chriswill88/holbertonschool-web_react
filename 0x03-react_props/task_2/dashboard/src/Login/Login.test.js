import React from 'react';
import Login from './Login';
import { shallow, configure} from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

/*
Shallow render the Login component to verify it renders without crashing
Verify that the components renders 2 input tags and 2 label tags
*/

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toHaveLength(1)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find("input")).toHaveLength(2)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find("label")).toHaveLength(2)
  })
})
