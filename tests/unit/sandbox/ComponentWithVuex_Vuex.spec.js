import { expect } from 'chai';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuex from '@/sandbox/vuex/ComponentWithVuex.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'alice',
    firstName: 'Alice',
    lastName: 'Doe',
  },
  getters: {
    fullName: state => `${state.firstName} ${state.lastName}`,
  },
});

describe('ComponentWithGetter.vue', () => {
  context('state', () => {
    it('renders a username using a real Vuex store', () => {
      const wrapper = shallowMount(ComponentWithVuex, {
        store,
        localVue,
      });

      expect(wrapper.find('.username').text()).to.equal('alice');
      expect(wrapper.find('.fullName').text()).to.equal('Alice Doe');
    });

    it('renders a username using a mock store', () => {
      const wrapper = shallowMount(ComponentWithVuex, {
        mocks: {
          $store: {
            state: { username: 'Alice' },
            getters: { fullName: 'Alice Doe' },
          },
        },
      });

      expect(wrapper.find('.username').text()).to.equal('Alice');
      expect(wrapper.find('.fullName').text()).to.equal('Alice Doe');
    });

    it.skip('renders a username using computed mounting options', () => {
      const wrapper = shallowMount(ComponentWithVuex, {
        computed: {
          fullName: () => 'Alice Doe',
        },
      });
      expect(wrapper.find('.fullName').text()).to.equal('Alice Doe');
    });
  });
});
