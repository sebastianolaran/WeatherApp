const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const today = new Date();
const nextSevenDays = [];

for (let i = 1; i <= 7; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);
  const dayName = daysOfWeek[nextDay.getDay()];
  nextSevenDays.push(dayName);
}

console.log(nextSevenDays);
