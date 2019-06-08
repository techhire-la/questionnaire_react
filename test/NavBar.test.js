import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../src/components/NavBar.js';

describe('NavBar', () => {
   it('renders without crashing', () => {
      shallow(<NavBar />);
    });
});