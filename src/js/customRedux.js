(function () {
  const customRedux = (function () {
    function createStore(reducer) {
      let state;
      let listeners = [];

      const getState = () => state;

      const dispatch = (action) => {
        state = reducer(state, action);

        // show subscribe listeners
        listeners.forEach((listener) => listener());
      };

      const subscribe = (listener) => {
        listeners.push(listener);
      };

      return {
        getState,
        dispatch,
        subscribe,
      };
    }

    return {
      createStore,
    };
  })();

  // checking if the window object contains the customRedux function
  if (!window.customRedux) {
    window.$redux = window.customRedux = customRedux;
  }
})();
