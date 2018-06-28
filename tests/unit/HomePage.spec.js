import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/HomePage.vue';

describe('HomePage.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'title message';
    const wrapper = shallowMount(HomePage, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
