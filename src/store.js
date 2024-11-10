const store = {
    state: { count: 0 },
    getState() {
        return this.state;
    },
    subscribers: [],
    subscribe(callback) {
        this.subscribers.push(callback);
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD':
                this.state.count += 1;
                break;
            case 'SUBTRACT':
                this.state.count -= 1;
                break;
            case 'RESET':
                this.state.count = 0;
                break;
            default:
                console.warn(`Unknown action: ${action.type}`);
        }
        this.subscribers.forEach(subscriber => subscriber());
    }
};

function logState() {
    console.log('Current state:', store.getState());
}

store.subscribe(logState);


console.log('Scenario 1: Initial State Verification');
console.log(store.getState()); // Should log { count: 0 }

console.log('Scenario 2: Incrementing the Counter');
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

console.log('Scenario 3: Decrementing the Counter');
store.dispatch({ type: 'SUBTRACT' });

console.log('Scenario 4: Resetting the Counter');
store.dispatch({ type: 'RESET' });


// DOM elements
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Update counter display
function updateCounterDisplay() {
    counterDisplay.innerText = `Count: ${store.getState().count}`;
}

// Subscribe the display update function to the store
store.subscribe(updateCounterDisplay);

// Event listeners for buttons
incrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'ADD' });
});

decrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'SUBTRACT' });
});

resetButton.addEventListener('click', () => {
    store.dispatch({ type: 'RESET' });
});
