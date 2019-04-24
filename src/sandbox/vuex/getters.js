export default {
  poodles: state => state.dogs.filter(dog => dog.breed === 'poodle'),
  poodlesByAge: (state, getters) => age => getters.poodles.filter(dog => dog.age === age),
};
