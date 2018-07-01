import { shallowMount } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'title message';
    const wrapper = shallowMount(TodoItem, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
