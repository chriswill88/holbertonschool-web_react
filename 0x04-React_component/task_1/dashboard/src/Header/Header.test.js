import React from 'react';
import Header from './Header'
import { shallow, configure} from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

/*
Shallow render the Header component to verify it renders without crashing
Verify that the components render img and h1 tags
*/
describe('<Header>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toHaveLength(1)
  })
})

describe('<Header>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find("img")).toHaveLength(1)
  })
})

describe('<Header>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find("h1")).toHaveLength(1)
  })
})