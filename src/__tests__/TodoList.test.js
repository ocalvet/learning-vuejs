import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList/TodoList.vue';

describe('TodoList.vue', () => {
  it('renders Todo List as title', () => {
    const wrapper = shallowMount(TodoList, {
    });
    expect(wrapper.text()).toBe('Todo List');
  });

  it('renders a TodoItem for each todo in the todos props', () => {
    const todos = [{ title: '1' }, { title: '2' }, { title: '5'}];
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos
      }
    });
    expect(wrapper.findAll('.todo-item').length).toBe(todos.length);
  })
});
