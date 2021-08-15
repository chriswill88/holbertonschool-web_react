import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure} from 'enzyme';
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
/* 
test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
*/

describe('<App>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(".App-header")).toHaveLength(1)
  })
})

describe('<App>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(".App-body")).toHaveLength(1)
  })
})

describe('<App>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(".App-footer")).toHaveLength(1)
  })
})

describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('li')).toHaveLength(3)
  })
})

describe('<Notifications>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.contains('Here is the list of notifications')).toBe(true)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Notifications)).toHaveLength(1)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header)).toHaveLength(1)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Login)).toHaveLength(1)
  })
})

describe('<Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })
})