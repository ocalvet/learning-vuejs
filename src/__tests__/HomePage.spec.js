import Vue from 'vue'
import Vuex from 'vuex'
import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/HomePage/HomePage.vue';

Vue.use(Vuex);

describe('HomePage.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        todos: [{
          title: 'Do some work',
          completed: false
        }],
      }
    });
  });

  it('renders props.title when passed', () => {
    const title = 'title message';
    const wrapper = shallowMount(HomePage, {
      propsData: { title },
      store
    });
    expect(wrapper.text()).toMatch(title);
  });
});
