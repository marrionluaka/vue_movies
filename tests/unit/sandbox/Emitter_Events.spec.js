import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Emitter from '@/sandbox/events/Emitter.vue';

describe('Emitter.vue', () => {
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(Emitter);

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().myEvent.length).to.equal(1);
    expect(wrapper.emitted().myEvent[0]).to.eql(['name', 'password']);
  });

  it('emits an event without mounting the component', () => {
    const events = {};
    const $emit = (event, ...args) => { events[event] = [...args]; };

    Emitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).to.eql(['name', 'password']);
  });
});
