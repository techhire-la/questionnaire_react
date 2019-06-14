import React from 'react';
import { shallow } from 'enzyme';
import FilterForm from '../src/components/FilterForm.js';

const selectAnswer = (answerNum, wrapper) => {
   // here we are simulating clicking our radio buttons by
   // simulating a call to the onChange() method. We don't 
   // need to pass arguments to this simulate call because
   // of how our radio buttons and handleChange() method are
   // written in FilterForm.js ie: 
   // handleChange = (key, val) => () => {...}
   wrapper.find('Radio').at(answerNum).simulate('change');
   // find either 'next' button or 'submit' button and click
   if(wrapper.find('#next-btn').length === 1) {
      wrapper.find('#next-btn').at(0).simulate('click');
   } else if(wrapper.find('#submit-btn').length === 1) {
      wrapper.find('#submit-btn').at(0).simulate('click');
   } else {
      throw "Neither next-btn nor submit-btn are present";
   }
}

describe('FilterForm', () => {
   it('renders without crashing', () => {
      shallow(<FilterForm />);
   });

   it('initially renders <Form /> but not <Catalogue />', () => {
      const wrapper = shallow(<FilterForm />);
      expect(wrapper.find('Form')).toHaveLength(1);
      expect(wrapper.find('Catalogue')).toHaveLength(0);
   });

   it('<Catalogue /> replaces <Form /> after answers are submitted', () => {
      const wrapper = shallow(<FilterForm />);
      const nextBtn = wrapper.find('#next-btn').at(0);
      for(let i=0; i < 6; i++) {
         selectAnswer(0, wrapper);
      } // selected age '0-4': q7 not enabled
      expect(wrapper.find('Form')).toHaveLength(0);
      expect(wrapper.find('Catalogue')).toHaveLength(1);
   });

   it('renders questions 1 through 6 correctly', () => {
      const wrapper = shallow(<FilterForm />);
      const divIDs = ['#q1', '#q2', '#q3', '#q4', '#q5', '#q6'];
      for(let i = 0; i < divIDs.length; i++) {
         for(let j = 0; j < divIDs.length; j++) {
            if(j === i) {
               // current question's div is rendered
               expect(wrapper.find(divIDs[j])).toHaveLength(1);
            } else {
               // other questions' divs are not rendered
               expect(wrapper.find(divIDs[j])).toHaveLength(0);
            }
         }
         selectAnswer(0, wrapper);
      } // selected age '0-4' for q2: q7 not enabled
      expect(wrapper.find('#q7')).toHaveLength(0);
      expect(wrapper.find('Catalogue')).toHaveLength(1);
   });

   it('renders question 7 only for correct age ranges', () => {
      // {'0-4', '5-10', '11-13', '14-18'}
      const disabledQ2Answers = [0, 1, 2, 3]; 
      for(let i=0; i < disabledQ2Answers.length; i++) {
         let wrapper = shallow(<FilterForm />);
          // answer each question
         for(let j=0; j < 6; j++) {
            // give specified answer for question 2
            let answerNum = (j === 1) ? disabledQ2Answers[i] : 0;
            selectAnswer(answerNum, wrapper);
         }
         // verify that there is no question 7
         expect(wrapper.find('#q7')).toHaveLength(0);
         expect(wrapper.find('Catalogue')).toHaveLength(1);
      }
      // {'18-24', '25-65'}
      const enabledQ2Answers = [4, 5]; 
      for(let i=0; i < enabledQ2Answers.length; i++) {
         let wrapper = shallow(<FilterForm />);
          // answer each question
         for(let j=0; j < 6; j++) {
            // give specified answer for question 2
            let answerNum = (j === 1) ? enabledQ2Answers[i] : 0;
            selectAnswer(answerNum, wrapper);
         }
         // verify that question 7 is present
         expect(wrapper.find('#q7')).toHaveLength(1);
      }
   });

   it('renders question 7 correctly if question 2 answers is modified', () => {
      /* If age '18-24' or '25-65' is selected question 7 with be rendered. If   *
       * the user then navigates back and selects a lower age, question 7 should *
       * not be rendered when they later navigate to the end of the questionaire */
      const wrapper1 = shallow(<FilterForm />);
      for(let i = 0; i < 6; i++) {
         // answer '25-65' for question 2
         let answerNum = (i === 1) ? 5 : 0;
         selectAnswer(answerNum, wrapper1);
      }
      // verify that quesiton 7 is present
      expect(wrapper1.find('#q7')).toHaveLength(1);
      // go back to question 2
      for(let i = 0; i < 5; i++) {
         wrapper1.find('#back-btn').at(0).simulate('click');
      }
      // change answer to '0-4' and go to question 3
      selectAnswer(0, wrapper1);
      // go through questions 3 through 6
      for(let i = 0; i < 4; i++) {
         selectAnswer(0, wrapper1);
      }
      // verify that quesiton 7 is present
      expect(wrapper1.find('#q7')).toHaveLength(0);
      expect(wrapper1.find('Catalogue')).toHaveLength(1);


      /* If age '0-4', '5-10', '11-13', or '14-18' is selected, question 7 will *
       * not be rendered. If the user then navigates back and selectes a higher *
       * age, then question 7 should be rendered when they later reach the end. */
      const wrapper2 = shallow(<FilterForm />);
      for(let i = 0; i < 5; i++) {
         // answer '14-18' for question 2
         let answerNum = (i === 1) ? 3 : 0;
         selectAnswer(answerNum, wrapper2);
      }
      // verify that submit button is present
      expect(wrapper2.find('#submit-btn')).toHaveLength(1);
      expect(wrapper2.find('#next-btn')).toHaveLength(0);
      // go back to question 2
      for(let i = 0; i < 4; i++) {
         wrapper2.find('#back-btn').at(0).simulate('click');
      }
      // change answer to '25-65' and go to question 3
      selectAnswer(5, wrapper2);
      // go through questions 3 through 6
      for(let i = 0; i < 4; i++) {
         selectAnswer(0, wrapper2);
      }
      // verify that quesiton 7 is present
      expect(wrapper2.find('#q7')).toHaveLength(1);
   });

   it('correctly asks about after-school programs for question 5', () => {
      expect(false).toBe(true);
   });

   it('correctly asks about vocational programs for question 5', () => {
      expect(false).toBe(true);
   });

   it('correctly asks about GED programs for question 5', () => {
      expect(false).toBe(true);
   });

   it('renders question 5 correctly if questions 3 & 4 answers are modified', () => {
      expect(false).toBe(true);
   });

   it('renders the correct number of radio buttons for each questions', () => {
      const wrapper = shallow(<FilterForm />);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      // g5 has 3 options * 2 radio buttons each = 6 total
      const expectedRadioBtnCount = [2, 6, 5, 2, 6, 2, 2];
      for(let i=0; i < 7; i++) {
         expect(wrapper.find('Radio')).toHaveLength(expectedRadioBtnCount[i]);
         selectAnswer(radioBtnAnswers[i], wrapper);
      }
   });

   it('renders only the next button for question 1', () => {
      const wrapper = shallow(<FilterForm />);
      expect(wrapper.find('#next-btn')).toHaveLength(1);
      expect(wrapper.find('.button-header')).toHaveLength(1);
      expect(wrapper.find('#back-btn')).toHaveLength(0);
      expect(wrapper.find('#submit-btn')).toHaveLength(0);
   });

   it('renders next and back buttons for questions 2 through 5', () => {
      const wrapper = shallow(<FilterForm />);
      for(let i = 2; i <= 5; i++) {
         selectAnswer(0, wrapper);
         // there should be exactly two buttons: { back, next }
         expect(wrapper.find('.button-header')).toHaveLength(2);
         expect(wrapper.find('#next-btn')).toHaveLength(1);
         expect(wrapper.find('#back-btn')).toHaveLength(1);
         expect(wrapper.find('#submit-btn')).toHaveLength(0);  
      }
   });

   it('renders next and back buttons for question 6 if question 7 is asked', () => {
      const wrapper = shallow(<FilterForm />);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      for(let i = 0; i < 5; i++) {  // answer first five questions
         selectAnswer(radioBtnAnswers[i], wrapper);
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(1);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(0);
   });

   it('renders back and submit buttons for question 6 if question 7 is not asked', () => {
      const wrapper = shallow(<FilterForm />);
      // select age "0-4" for q2 to not enable q7
      for(let i = 0; i < 5; i++) {  // answer first five questions
         selectAnswer(0, wrapper);
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(0);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(1);  
   });

   it('renders back and submit buttons for question 7 if it is asked', () => {
      const wrapper = shallow(<FilterForm />);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      for(let i = 0; i < 6; i++) {  // answer first six questions
         selectAnswer(radioBtnAnswers[i], wrapper);
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(0);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(1);
   });
});
