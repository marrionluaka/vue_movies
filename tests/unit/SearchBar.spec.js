import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchBar from '@/movie-listings/components/Header/SearchBar.vue';

describe('SearchBar.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchBar);
  });

  context('@events', () => {
    it('@onSearch - emits an "onSearch" event when a user presses the enter key.', () => {
      const search = 'Avengers';

      wrapper.setData({ search });

      wrapper.find('input').trigger('keydown.enter');

      expect(wrapper.emitted().onSearch.length).to.equal(1);
      expect(wrapper.emitted().onSearch[0]).to.eql([search]);
    });
  });
});
