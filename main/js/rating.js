var rating = null;

// use raty for creating a user/drink rating, displaying 1-5 hearts (i.e. stars)
$('#star-rating').raty({
  path: '../assets/images',
  click: (score) => {
    rating = score;
  },
});

// create a rating by user to be stored in the database
async function createUserRating(postData) {
	let ratedDrink = ratedDrink.id;

	const response = await fetch("/api/rating", {
		method: "POST",
		body: JSON.stringify({
			drink_id: ratedDrink,
			rating: rating
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.ok) {
		document.location.replace("/catalog");
	} else {
		alert(response.statusText);
	}
}

document.querySelector('').addEventListener('click', createUserRating);