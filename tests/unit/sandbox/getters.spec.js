import { expect } from 'chai';
import getters from '@/sandbox/vuex/getters';

const dogs = [
  { name: 'Hiro', breed: 'poodle', age: 1 },
  { name: 'Mugen', breed: 'dalmatian', age: 2 },
  { name: 'Saito', breed: 'poodle', age: 4 },
];

const state = { dogs };

describe('poodles', () => {
  it('returns poodles', () => {
    const actual = getters.poodles(state);
    expect(actual).to.eql([dogs[0], dogs[2]]);
  });

  it('returns poodlesByAge', () => {
    const poodles = [dogs[0], dogs[2]];
    const actual = getters.poodlesByAge(state, { poodles })(1);
    expect(actual).to.eql([dogs[0]]);
  });
});
