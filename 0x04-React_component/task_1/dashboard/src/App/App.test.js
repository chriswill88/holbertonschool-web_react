import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure, mount} from 'enzyme';
import App from './App'
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
    expect(wrapper.find(".App-body")).toHaveLength(1)
  })
})

describe('<App>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(".App-footer")).toHaveLength(1)
  })
})


describe('<!Login>', () => {
  it ('renders app', () => {
    const wrapper = shallow(< App isLoggedIn={true}/>)
    expect(wrapper.find('CourseList')).toHaveLength(1)
  })
})


describe('<!CourseList>', () => {
  it ('renders app', () => {
    const wrapper = shallow(<App isLoggedIn={false} />)
    expect(wrapper.find('Login')).toHaveLength(1)
  })
})

