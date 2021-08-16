import React from 'react';
import CourseListRow from './CourseListRow.js';
import { shallow, configure } from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe('<CourseListRow> isheader is true and colspan = 2', () => {
  it ('renders app', () => {
    const courseRow = shallow(<CourseListRow isHeader={true} textFirstCell='First' textSecondCell={null}/>)
    expect(courseRow.find("th")).toHaveLength(1)
  })
})


describe('<CourseListRow> isHeader is true and 2 cells present', () => {
  it ('renders app', () => {
    const courseRow = shallow(<CourseListRow isHeader={true} textFirstCell='ONE' textSecondCell='TWO'/>)
    expect(courseRow.find("th")).toHaveLength(2)
  })
})


describe('<CourseListRow> isHeader is False', () => {
  it ('renders app', () => {
    const courseRow = shallow(<CourseListRow isHeader={false} textFirstCell='Hello' textSecondCell='Person'/>)
    expect(courseRow.find("td")).toHaveLength(2)
  })
})
