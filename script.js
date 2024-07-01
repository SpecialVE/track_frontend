function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utc-time'); 
    const dayOfWeekElement = document.getElementById('day-of-week');

    const now = new Date(); const utcTimeString = now.toUTCString().split(' ')[4]; 
    const dayOfWeekString = now.toLocaleString('en-US', { weekday: 'long' });
    
    utcTimeElement.textContent = utcTimeString;
    dayOfWeekElement.textContent = dayOfWeekString; 
} 

setInterval(updateTimeAndDay, 1000); 
updateTimeAndDay(); 