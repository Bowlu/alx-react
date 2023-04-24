import App from './App';
import { shallow } from 'enzyme';

describe('App.js test', () => {
  it('no crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
  it ('App-header', (done) => {
    const division = shallow(<App />);
    expect(division.contains(<header className='App-header' />))
    done();
  });
  it ('App-body', (done) => {
    const division = shallow(<App />);
    expect(division.contains(<body className='App-body' />))
    done();
  });
  it ('App-footer', (done) => {
    const division = shallow(<App />);
    expect(division.contains(<footer className='App-footer' />))
    done();
  });
})