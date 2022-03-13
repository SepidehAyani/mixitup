async function favHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#drink').value.trim();

  const getFavDrinks = localStorage.getItem("Favorite Drinks");

  localStorage.setItem("Favorite Drinks", JSON.stringify(getFavDrinks))

}

document.querySelector('.fav-drink').addEventListener('submit', favHandler);