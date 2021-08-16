import React from 'react';
import CourseList from './CourseList';
import { shallow, configure} from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<CourseList> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList />)
    expect(Notes).toHaveLength(1)
  })
})


describe('<CourseList> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList />)
    expect(Notes.find('CourseListRow')).toHaveLength(5)
  })
})