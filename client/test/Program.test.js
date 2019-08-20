import React from 'react';
import { shallow } from 'enzyme';
import Program from '../src/components/Program.js';

describe('Program', () => {
   it('renders without crashing', () => {
      shallow(<Program />);
    });
});