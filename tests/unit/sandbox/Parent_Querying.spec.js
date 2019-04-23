import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Parent from '@/sandbox/querying/Parent.vue';
import Child from '@/sandbox/querying/Child.vue';
import ParentWithManyChildren from '@/sandbox/querying/ParentWithManyChildren.vue';

describe.only('Parent', () => {
  it('does not render a span', () => {
    const wrapper = shallowMount(Parent);
    expect(wrapper.find('span').isVisible()).to.be.false;
  });

  it('does render a span', () => {
    const wrapper = shallowMount(Parent, {
      data: () => ({
        showSpan: true,
      }),
    });
    expect(wrapper.find('span').isVisible()).to.be.true;
    // use .exists when conditionally rendering with v-if
  });

  it('does not render a Child component', () => {
    const wrapper = shallowMount(Parent);
    expect(wrapper.find(Child).exists()).to.be.false;
  });

  it('renders a Child component', () => {
    const wrapper = shallowMount(Parent, {
      data: () => ({ showChild: true }),
    });
    expect(wrapper.find({ name: 'Child' }).exists()).to.be.true;
  });

  it('renders many children', () => {
    const wrapper = shallowMount(ParentWithManyChildren);
    expect(wrapper.findAll(Child).length).to.equal(3);
  });
});
