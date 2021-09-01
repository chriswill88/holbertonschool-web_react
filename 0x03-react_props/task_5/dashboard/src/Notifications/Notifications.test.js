import React from 'react';
import {spy} from 'sinon';
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

describe('Notifications runs properly without array', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Notifications runs properly without array', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />)
    expect(wrapper).toHaveLength(1)
  })
})

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available', html: null},
  {id: 2, type: 'urgent', value: 'New course available', html: null},
  {id: 3, type: 'urgent', value: null, html: { __html: '<p>hi</p>' }},
]

const listNotifications1 = [
  {id: 1, type: 'default', value: 'New course available', html: null},
  {id: 2, type: 'urgent', value: 'New course NOT available', html: null},
  {id: 3, type: 'urgent', value: null, html: { __html: '<p>hi</p>' }},
]

describe('Notifications runs properly with array', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications}/>)
    expect(wrapper).toHaveLength(1)
    expect(wrapper.find('NotificationItem')).toHaveLength(3)
  })
})

describe('Notifications same props', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications}/>)
    wrapper.setProps({listNotifications: listNotifications})
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: {listNotifications}})
    expect(shouldUpdate).toBe(true)
  })
})

describe('Notifications different props', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications}/>)
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: {listNotifications1}})
    expect(shouldUpdate).toBe(true)
  })
})
