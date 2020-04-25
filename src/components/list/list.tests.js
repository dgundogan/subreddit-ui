import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ListPreview from './list.component';
import React from 'react';

const mockData = require('./test.json');

describe('<ListPreview/>', () => {

    it('expect to render ListPreview component', () => {
        expect(shallow(<ListPreview subreddits={mockData}/>).length).to.equal(1);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<ListPreview page={0} rowsPerPage={10} subreddits={mockData} />);
        expect(wrapper.props().subreddits).to.equal(mockData);
        wrapper.setProps({ subreddits: mockData });
        expect(wrapper.props().subreddits).to.equal(mockData);
        expect(wrapper.props().page).to.equal(0);
        expect(wrapper.props().rowsPerPage).to.equal(10);
      });
});