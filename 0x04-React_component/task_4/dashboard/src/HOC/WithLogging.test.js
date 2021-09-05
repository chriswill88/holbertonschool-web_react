import React from 'react';
import {expect, jest, test} from '@jest/globals';
import { shallow, configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WithLogging from './WithLogging';

import sinon, { spy } from 'sinon';

configure({ adapter: new Adapter() });


describe('<bodySection>', () => {
  it ('renders app', () => {
    const spi = spy(console, 'log');
    const wrapper = mount(WithLogging(() => <p />))
    console.log("this ->", spi.args[0])
    // expect(didMount).to.have.property('callCount', 1);
    // expect(willUnmount).to.have.property('callCount', 0);
    wrapper.unmount();
  })
})