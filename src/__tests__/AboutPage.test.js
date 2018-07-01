import { shallowMount } from '@vue/test-utils';
import AboutPage from '@/components/AboutPage/AboutPage.vue';

describe('AboutPage.vue', () => {
  it('renders props.title when passed', () => {
    const wrapper = shallowMount(AboutPage, {});
    expect(wrapper.text()).toMatch('About page');
  });
});
