import { expect } from 'chai';
import sinon from 'sinon';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import ComponentWithButtons from '@/sandbox/vuex/ComponentWithButtons.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: sinon.spy(),
};

describe('ComponentWithButtons.vue: Tests that clicking a button dispatches the correct action with payload.', () => {
  it('commits a mutation when a button is clicked', () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store: new Vuex.Store({
        mutations,
      }),
      localVue,
    });

    wrapper.find('.commit').trigger('click');

    expect(mutations.testMutation.called).to.be.true;
    expect(mutations.testMutation.getCall(0).args[1]).to.eql({ msg: 'Test Commit' });
  });

  it('dispatches an action when a button is clicked', () => {
    const mockStore = { dispatch: sinon.spy() };
    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore,
      },
    });

    wrapper.find('.dispatch').trigger('click');

    expect(mockStore.dispatch.called).to.be.true;
    expect(mockStore.dispatch.getCall(0).args[1]).to.eql({ msg: 'Test Dispatch' });
  });
});
