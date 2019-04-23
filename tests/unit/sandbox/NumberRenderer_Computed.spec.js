import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NumberRenderer from '@/sandbox/computed/NumberRenderer.vue';

describe('NumberRenderer.vue', () => {
  it('renders even numbers', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });

    expect(wrapper.text()).to.equal('2,4,6,8');
  });

  it('renders odd numbers', () => {
    const localThis = { even: false };
    expect(NumberRenderer.computed.numbers.call(localThis)).to.equal('1,3,5,7,9');
  });
});
