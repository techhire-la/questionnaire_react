import React from 'react';
import { shallow } from 'enzyme';
import FilterForm from '../src/components/FilterForm.js';

const selectRadioBtn = (wrapper, answerNum) => {
   wrapper.find('Radio').at(answerNum).simulate('change');
}

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

   it('renders each question', () => {
      const wrapper = shallow(<FilterForm />);
      
   });

   it('renders question 7 only for correct age ranges', () => {
      // {'0-4', '5-10', '11-13', '14-18'}
      const disabledQ2Answers = [0, 1, 2, 3]; 
     
      // {'18-24, 25-65'}
      const disabledAQ2Answers = [4, 5]; 
 
   });

   it('renders question 7 correctly if question 2 answers is modified', () => {

   });

   it('correctly asks about after-school programs for question 5', () => {
      
   });

   it('correctly asks about vocational programs for question 5', () => {
      
   });

   it('correctly asks about GED programs for question 5', () => {
      
   });

   it('renders question 5 correctly if questions 3 & 4 answers are modified', () => {
      
   });

   it('renders the correct number of radio buttons for each questions', () => {
      const wrapper = shallow(<FilterForm />);
      const nextBtn = wrapper.find('#next-btn').at(0);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      // g5 has 3 options * 2 radio buttons each = 6 total
      const expectedRadioBtnCount = [2, 6, 5, 2, 6, 2, 2];
      for(let i=0; i < 7; i++) {
         expect(wrapper.find('Radio')).toHaveLength(expectedRadioBtnCount[i]);
         if(i < 6) { // go to next question
            selectRadioBtn(wrapper, radioBtnAnswers[i]);
            nextBtn.simulate('click');
         }
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
      const nextButton = wrapper.find('#next-btn').at(0);
      for(let i = 2; i <= 5; i++) {
         selectRadioBtn(wrapper, 0)
         nextButton.simulate('click');
         // there should be exactly two buttons: { back, next }
         expect(wrapper.find('.button-header')).toHaveLength(2);
         expect(wrapper.find('#next-btn')).toHaveLength(1);
         expect(wrapper.find('#back-btn')).toHaveLength(1);
         expect(wrapper.find('#submit-btn')).toHaveLength(0);  
      }
   });

   it('renders next and back buttons for question 6 if question 7 is asked', () => {
      const wrapper = shallow(<FilterForm />);
      const nextButton = wrapper.find('#next-btn').at(0);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      for(let i = 0; i < 5; i++) {  // answer first five questions
         console.log()
         selectRadioBtn(wrapper, radioBtnAnswers[i]);
         nextButton.simulate('click');
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(1);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(0);
   });

   it('renders back and submit buttons for question 6 if question 7 is not asked', () => {
      const wrapper = shallow(<FilterForm />);
      const nextButton = wrapper.find('#next-btn').at(0);
      // select age "0-4" for q2 to not enable q7
      for(let i = 0; i < 5; i++) {  // answer first five questions
         selectRadioBtn(wrapper, 0);
         nextButton.simulate('click');
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(0);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(1);  
   });

   it('renders back and submit buttons for question 7 if it is asked', () => {
      const wrapper = shallow(<FilterForm />);
      const nextButton = wrapper.find('#next-btn').at(0);
      // select age "25-65" for q2 to enable q7
      const radioBtnAnswers = [0, 5, 0, 0, 0, 0, 0];
      for(let i = 0; i < 6; i++) {  // answer first six questions
         selectRadioBtn(wrapper, radioBtnAnswers[i]);
         nextButton.simulate('click');
      }
      expect(wrapper.find('.button-header')).toHaveLength(2);
      expect(wrapper.find('#next-btn')).toHaveLength(0);
      expect(wrapper.find('#back-btn')).toHaveLength(1);
      expect(wrapper.find('#submit-btn')).toHaveLength(1);
   });
});
