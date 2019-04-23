import { shallowMount } from '@vue/test-utils';
import Bilingual from '@/sandbox/mocking/Bilingual.vue';

describe('Bilingual.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(Bilingual, {
      mocks: {
        $t: msg => msg,
      },
    });

    /** come back to this test once you setup mocha init js */
    //expect(wrapper.html()).to.have.string()
  });
});
