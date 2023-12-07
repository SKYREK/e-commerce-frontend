export function getTimestamp(year, month, day, hour, minute) {
    // Create a new Date object with the provided year, month, day, hour, and minute
    const dateObject = new Date(year, month - 1, day, hour, minute); // Note: Month is 0-indexed in JavaScript
  
    // Set the seconds and milliseconds to zero to represent midnight
    dateObject.setSeconds(0, 0);
  
    // Format the date as a string in the desired format (UTC)
    const formattedTimestamp = dateObject.toISOString();
  
    return formattedTimestamp;
}
  
export function getDateFromTimestamp(timestamp) {
    const dateObject = new Date(timestamp);  
    return dateObject;
}

export function getDateDifference(inputDate) {
    // Get the current date and time
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds
    const differenceMs = inputDate.getTime() - currentDate.getTime();
  
    // If the given date is in the past, set the difference to zero
    const timeDifference = Math.max(differenceMs, 0);
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // Create and return the JSON object
    const differenceJSON = {
      days: days,
      hours: hours,
      mins: mins,
      seconds: seconds
    };
  
    return differenceJSON;
}
  