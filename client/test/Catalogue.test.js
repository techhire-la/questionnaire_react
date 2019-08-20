import React from 'react';
import { shallow } from 'enzyme';
import Catalogue from '../src/components/Catalogue.js';

describe('Catalogue', () => {
   it('renders without crashing', () => {
      shallow(<Catalogue />);
    });
});