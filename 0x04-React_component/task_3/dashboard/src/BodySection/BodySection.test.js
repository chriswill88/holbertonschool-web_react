import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure, mount} from 'enzyme';
import BodySection from './BodySection';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe('<bodySection>', () => {
  it ('renders app', () => {
    const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>
  )
  expect(wrapper.find("h2")).toHaveLength(1)
  expect(wrapper.find("p")).toHaveLength(1)
  })
})