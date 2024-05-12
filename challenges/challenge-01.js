/**
 * Given a 3 letter weekday, convert it to a full length day in English.
 *
 * @example
 *   convertToWeekDay('mon') => 'Monday'
 *   convertToWeekDay('tue') => 'Tuesday'
 *   ...
 *
 * @param shortWeekDay {string} ('mon', 'tue', 'wed', etc...)
 * @return {string}
 **/

function convertToWeekDay(shortWeekDay) {
  // Add code here ‍💻
  
  //Definerer ugedagene
 const weekDays = {
  "mon": "Monday",
  "tue": "Tuesday",
  "wed": "Wednesday",
  "thu": "Thursday",
  "fri": "Friday",
  "sat": "Saturday",
  "sun": "Sunday"
 };

 //Konvertere fra uppercase til lowercase
const weekDaysLowercase = shortWeekDay.toLowerCase();

//If statement 
if (weekDays[weekDaysLowercase]) {
  return weekDays[weekDaysLowercase];
} else {
  return "invalid"
}

};
//console.log for at tjekke om det virker i konsolen
console.log(convertToWeekDay("wed"));
