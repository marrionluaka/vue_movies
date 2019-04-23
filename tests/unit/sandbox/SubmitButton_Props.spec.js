import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SubmitButton from '@/sandbox/props/SubmitButton.vue';

describe('SubmitButton.vue', () => {
  let msg;
  let wrapper;
  beforeEach(() => {
    msg = 'submit';
    wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg,
      },
    });
  });
  it('diplays a non authorized message', () => {
    expect(wrapper.find('span').text()).to.equal('Not Authorized');
    expect(wrapper.find('button').text()).to.equal('submit');
  });

  it('displays an admin privileges message', () => {
    wrapper.setProps({ isAdmin: true });

    expect(wrapper.find('span').text()).to.equal('Admin Privileges');
    expect(wrapper.find('button').text()).to.equal('submit');
  });
});
