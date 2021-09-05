import React from 'react';
import Footer from './Footer'
import { shallow, configure} from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({ adapter: new Adapter() });

/*
Shallow render the Footer component to verify it renders without crashing
Verify that the components render img and h1 tags
*/
describe('<Footer>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toHaveLength(1)
  })
})

describe('<Footer>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.text()).toEqual(' Copyright 2021 - Holberton School ')
  })
})

