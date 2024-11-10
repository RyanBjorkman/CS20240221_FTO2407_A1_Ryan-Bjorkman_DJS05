Overview:
A simple counter app inspired by Redux which uses a custom stoe to manage the state of a counter with buttons to increment, decrement, or reset the count. Changes are the shown on the webpage and logged to the console.

HOw to run the code:
Open index.html with live server. The follwing will be displayed:
Tally Counter - Heading
Counter display
3 Buttons, Increment, Decrement and Reset.
To interact with the counter click on any of the 3 buttons to perform their specific function. The counter will then display the update and the current count will be logged to the console.

Approach:
The use of 3 main functions to manage the state of a counter.
getState - Retrieves the current count
dispatch - Accepts actions to update the count (Increment, Decrement and Reset)
subscriber - Allows functions to run each time the state changes

Event listeners were used on the buttons to dispatch actions to the store. When the state updates, a subscribed function automatically refreshes the counter display on the page.

Challenge:
Displaying the updated counter on the webpage after the state had changed. getState did not display the changes in real time. subscribe function was then used allowing functions to listen for state changes. By subscribing a display function (updateCounterDisplay) to the store, the counter display then automatically refreshed when the state changed.