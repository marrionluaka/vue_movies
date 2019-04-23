import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import ParentWithAPICallChild from '@/sandbox/stub/ParentWithAPICallChild.vue';
import ComponentWithAsyncCall from '@/sandbox/stub/ComponentWithAsyncCall.vue';

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does not initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        // setting true here, replaces the original component with a stub
        ComponentWithAsyncCall: true,
      },
    });

    expect(wrapper.find(ComponentWithAsyncCall).exists()).to.be.true;
  });

  it('renders with shallowMount and and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild);
    expect(wrapper.find(ComponentWithAsyncCall).exists()).to.be.true;
  });
});
