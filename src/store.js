// Define the store object
const store = {
    // Initial state of 0
    state: { count: 0 },

    // Function to get the current state
    getState() {
        return this.state;
    },

    // Array to hold subscribers
    subscribers: [],

    // Function to add a new subscriber function to listen for state updates
    subscribe(callback) {
        this.subscribers.push(callback);
    },

    // Function to update the state based on the action type
    dispatch(action) {
        // Handle different action types to update modify the count
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
        // Call each subscriber function to notify them of the state change
        this.subscribers.forEach(subscriber => subscriber());
    }
};

// Function to log the current state to the console
function logState() {
    console.log('Current state:', store.getState());
}

// Subscribe logState to store updates to log the state changes
store.subscribe(logState);

//Testing Scenarios

// Scenario 1: Initial State Verification
console.log('Scenario 1: Initial State Verification');
console.log(store.getState()); // Should log { count: 0 }

// Scenario 2: Incrementing the Counter
console.log('Scenario 2: Incrementing the Counter');
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

// Scenario 3: Decrementing the Counter
console.log('Scenario 3: Decrementing the Counter');
store.dispatch({ type: 'SUBTRACT' });

// Scenario 4: Resetting the Counter
console.log('Scenario 4: Resetting the Counter');
store.dispatch({ type: 'RESET' });


// DOM elements
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Function to update the counter display with the current count
function updateCounterDisplay() {
    counterDisplay.innerText = `Count: ${store.getState().count}`;
}

// Subscribe the display update function to the store
store.subscribe(updateCounterDisplay);

// Event listeners for buttons
incrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'ADD' }); // Dispatch an action to increment the count
});

decrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'SUBTRACT' }); // Dispatch an action to decrement the count
});

resetButton.addEventListener('click', () => {
    store.dispatch({ type: 'RESET' }); // Dispatch an action to reset the count
});
