import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../routes/AppRouter';

describe('AppRouter', () => {
   it('renders without crashing', () => {
      shallow(<AppRouter />);
    });
});