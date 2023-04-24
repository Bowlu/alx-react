import App from './App';
import { shallow } from 'enzyme';

describe('App.js test', () => {
  it('no crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
})