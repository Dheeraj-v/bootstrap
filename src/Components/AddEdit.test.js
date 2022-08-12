
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import AddEdit from './AddEdit';
import { shallow } from 'enzyme';
import { expect } from 'chai';


let store;
const mockStore = configureStore([]);

describe('Test Suite for <AddEdit /> ', () => {
  let wrapper;
  it(' AddEdit component is mounted ', () => {
    store = mockStore({
      isAddEdit:{}
  });
    wrapper = shallow(
      <Provider store={store}>
          <AddEdit />
      </Provider>);
      expect(wrapper).to.exist;
  });
});
