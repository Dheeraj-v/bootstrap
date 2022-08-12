const enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';




describe('Test Suite for <App /> ', () => {
  let wrapper;
  it(' App component is mounted ', () => {

    wrapper = shallow(
          <App />
      );
      expect(wrapper).to.exist;
  });
});
