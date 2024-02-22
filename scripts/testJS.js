console.log("test1---Start");

const currentDate = new Date();
console.log(currentDate);

const timezoneOffset = currentDate.getTimezoneOffset();
console.log("Zeitzonenoffset (in Minuten):", timezoneOffset);

const isDaylightSavingTime = currentDate.getTimezoneOffset() < new Date(currentDate.getFullYear(), 5, 1).getTimezoneOffset();
console.log("Sommerzeit aktiv:", isDaylightSavingTime);

const currentDateLocal = new Date().toLocaleTimeString(); 
console.log(currentDateLocal);