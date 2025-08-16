/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a new Promise
  return new Promise((resolve) => {
    // Use setTimeout to schedule the logging of the message
    setTimeout(() => {
      console.log(message); // Log the message
      resolve(); // Resolve the promise once the message is logged
    }, delay);
  });
}

module.exports = { delayedReminder };