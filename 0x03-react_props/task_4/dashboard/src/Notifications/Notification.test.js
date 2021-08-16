import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure} from 'enzyme';
import Notifications from './Notifications'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.contains('Here is the list of notifications')).toBe(true)
  })
})

describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.contains('Here is the list of notifications')).toBe(true)
  })
})


describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>)
    expect(wrapper.find(".menuItem")).toHaveLength(1)
    expect(wrapper.find("div.Notifications")).toHaveLength(0)
  })
})


describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find(".menuItem")).toHaveLength(1)
    expect(wrapper.find("div.Notifications")).toHaveLength(1)
  })
})