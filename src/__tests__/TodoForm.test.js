import { shallowMount } from '@vue/test-utils';
import TodoForm from '@/components/TodoForm/TodoForm.vue';

describe('TodoForm.vue', () => {
  it('renders 2 child elements', () => {
    const title = 'title message';
    const wrapper = shallowMount(TodoForm, {
      propsData: { title },
    });
    expect(wrapper.element.children.length).toBe(2);
  });
});
