// REDUCER
const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - action.payload;
    case "DEPOSITE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};

// STORE
const store = $redux.createStore(bankReducer);

// ACTION CREATORS
const withdrawAction = (amount) => ({
  type: "WITHDRAW_MONEY",
  payload: amount,
});
const depositeAction = (amount) => ({
  type: "DEPOSITE_MONEY",
  payload: amount,
});

// SUBSCRIBE
store.subscribe(() => {
  console.log("BANK BALANCE: ", store.getState());

  // changing the value in the UI
  document.getElementById(
    "value"
  ).innerText = `BANK BALANCE: $${store.getState()}`;
});

// DISPATCH
store.dispatch(withdrawAction(100));
store.dispatch(withdrawAction(100));
store.dispatch(depositeAction(10000));

// Now let's interact with the UI
const amount = document.getElementById("amount");
const withdrawBtn = document.getElementById("withdraw");
const depositeBtn = document.getElementById("deposite");

withdrawBtn.addEventListener("click", () => {
  store.dispatch(withdrawAction(+amount.value));
});

depositeBtn.addEventListener("click", () => {
  store.dispatch(depositeAction(+amount.value));
});
