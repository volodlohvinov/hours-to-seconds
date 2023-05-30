const hours = prompt('Enter how many hours');

if (hours === null || hours.trim() === "") {
    alert('Invalid value')
}
else if(!isNaN(hours)) {
    const seconds = hours * 3600;
    alert("There are "  + seconds +  " seconds in "    + hours +  " hours.");
}
else {
    alert('Invalid value');
}