if (process.env.NODE_ENV === 'production') {

  const configureStore = require('./configureStore.production.js').default;

  let store = configureStore();
  module.exports = store;
} else {
  const configureStore = require('./configureStore.development.js').default;
  let store = configureStore();
  module.exports = store;
}
