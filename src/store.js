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
