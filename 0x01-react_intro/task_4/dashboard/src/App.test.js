import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Testing App Component', () => {
  it('renders without a crash', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it('renders a App-header div', () => {
    const app = shallow(<App />);
    expect(app.find('.App-header')).toBeDefined();
  });
  it('renders a App-body div', () => {
    const app = shallow(<App />);
    expect(app.find('.App-body')).toBeDefined();
  });
  it('renders a App-footer', () => {
    const app = shallow(<App />);
    expect(app.find('.App-footer')).toBeDefined();
  });
});