import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './header.component';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';

describe('<Header/>', () => {
    it('expect to render Header component', () => {
        expect(shallow(<Header/>).length).to.equal(1);
    });

    it('expect to render one AppBar component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(AppBar)).to.have.lengthOf(1);
    });
});