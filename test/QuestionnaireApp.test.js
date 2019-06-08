import React from 'react';
import { shallow } from 'enzyme';
import QuestionnaireApp from '../src/components/QuestionnaireApp.js';

describe('QuestionnaireApp', () => {
   it('renders without crashing', () => {
      shallow(<QuestionnaireApp />);
    });
});