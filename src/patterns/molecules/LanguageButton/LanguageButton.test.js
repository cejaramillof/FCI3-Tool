import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import LanguageButton from './index';

describe('LanguageButton test in English mode', () => {
    const props = {
        lang: 'en',
        onClick: sinon.spy(),
        currentLang: 'en'
    }
    
    const wrapper = mount(
      <LanguageButton {...props} />
    );
    
    it('Should render correctly', () => expect(wrapper).toMatchSnapshot());
    
    it('Should render with English lang', () => expect(wrapper.props().lang).toEqual('en'));
    
    it('Should render with currentLang', () => expect(
        wrapper.props().lang).toEqual('en')
    );
});

describe('LanguageButton test in Espanish mode', () => {
    const props = {
        lang: 'es',
        onClick: sinon.spy(),
        currentLang: 'es'
    }
    
    const wrapper = mount(
      <LanguageButton {...props} />
    );
    
    it('Should render correctly', () => expect(wrapper).toMatchSnapshot());
    
    it('Should render with Espanish lang', () => expect(wrapper.props().lang).toEqual('es'));
    
    it('Should render with currentLang', () => expect(
        wrapper.props().lang).toEqual('es')
    );
})







