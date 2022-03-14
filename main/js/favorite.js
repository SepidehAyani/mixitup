async function favHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#drink').value.trim();

  console.log(name);

  let favDrinks;

  const favDrinksString = localStorage.getItem('favDrinks');

  console.log(favDrinksString);

  if (favDrinksString) {
    favDrinks = JSON.parse(favDrinksString);
  }
  else {
    favDrinks = [];
  }
  if (favDrinks.indexOf(name === -1)) {
    favDrinks.push(name);
  }

  localStorage.setItem('favDrinks', JSON.stringify(favDrinks));

  console.log(favDrinks);
}
  document.querySelector('.fav-drink').addEventListener('submit', favHandler);