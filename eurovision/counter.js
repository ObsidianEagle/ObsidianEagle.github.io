let counter = 0;

document.getElementById('drink-counter-plus').addEventListener('click', () => {
  counter++;
  document.getElementById('drink-counter-value').textContent = counter;
});
document.getElementById('drink-counter-minus').addEventListener('click', () => {
  counter--;
  document.getElementById('drink-counter-value').textContent = counter;
});
