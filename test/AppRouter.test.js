import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../src/routes/AppRouter';

describe('AppRouter', () => {
   it('renders without crashing', () => {
      shallow(<AppRouter />);
    });
});