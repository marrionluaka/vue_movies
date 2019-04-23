import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import FormSubmitter from '@/sandbox/http/FormSubmitter.vue';

let data = '';
let url = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url;
      data = _data;

      resolve();
    });
  },
};

describe('FormSubmitter.vue', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    });

    wrapper.find('[data-username]').setValue('alice');
    wrapper.find('form').trigger('submit.prevent');

    // immediatly resolve all promises
    await flushPromises();

    expect(url).to.equal('/api/v1/register');
    expect(data).to.eql({ username: 'alice' });
    expect(wrapper.find('.message').text()).to.equal('Thank you for your submission, alice.');
  });
});
