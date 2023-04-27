import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('checks if it renders', () => {
    const check = shallow(<App />);
    expect(check).toBeDefined();
  });
  it('renders Notification Component', () => {
    const check = shallow(<App />);
    expect(check.find('Notification')).to.have.lengthOf(1);
  });
  it('renders Header component', () => {
    const check = shallow(<App />);
    expect(check.find('Header')).to.have.lengthOf(1);
  });
  it('renders Login component', () => {
    const check = shallow(<App />);
    expect(check.find('Login')).to.have.lengthOf(1);
  });
  it('renders Footer component', () => {
    const check = shallow(<App />);
    expect(check.find('Footer')).to.have.lengthOf(1);
  });
});