import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Bell from '@/movie-listings/components/Header/Bell.vue';

describe('Bell.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Bell, {
      propsData: {
        notifications: 11,
      },
    });
  });

  context('@events', () => {
    it('@onToggle - emits an "onToggle" event when a user clicks the notification bell.', () => {
      wrapper.find('button').trigger('click');
      expect(wrapper.emitted()).to.have.own.property('onToggle');
    });

    it('@onToggle - hides notification bubble when clicked.', () => {
      expect(wrapper.vm.showBubble).to.be.true;

      wrapper.find('button').trigger('click');

      expect(wrapper.vm.showBubble).to.be.false;
    });
  });

  context('@render', () => {
    it('formats notification\'s count.', () => {
      expect(wrapper.vm.notificationCount).to.equal('9+');

      wrapper.setProps({ notifications: 2 });

      expect(wrapper.vm.notificationCount).to.equal(2);
    });
  });
});
