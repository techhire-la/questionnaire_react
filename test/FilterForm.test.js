import React from 'react';
import { shallow } from 'enzyme';
import FilterForm from '../src/components/FilterForm.js';

describe('FilterForm', () => {
   it('renders without crashing', () => {
      shallow(<FilterForm />);
    });
});