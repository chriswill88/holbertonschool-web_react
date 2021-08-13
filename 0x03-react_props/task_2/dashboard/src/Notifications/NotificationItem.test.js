import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow, configure } from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<NotificationItem> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<NotificationItem />)
    expect(Notes).toHaveLength(1)
  })
})

describe('<NotificationItem>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>)
    expect(wrapper.text()).toBe('test');
  })
})

describe('<NotificationItem>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>)
    expect(wrapper.html()).toContain('test');
  })
})
