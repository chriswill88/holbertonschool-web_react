import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure, mount} from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BodySection from './BodySection';

configure({ adapter: new Adapter() });


describe('<bodySection>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='hello' />)
  expect(wrapper.find('BodySection')).toHaveLength(1)
  })
})
