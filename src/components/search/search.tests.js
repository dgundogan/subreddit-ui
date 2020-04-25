import { shallow } from 'enzyme';
import { expect } from 'chai';
import Search from './search.component';
import React from 'react';

describe('<Search/>', () => {
    it('expect to render Search component', () => {
        expect(shallow(<Search/>).length).to.equal(1);
    });
});