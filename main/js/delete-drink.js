// not needed, extra for future development

async function deleteDrinkHandler(event) {
    // Prevents page from automatically re-loading.
    event.preventDefault();

    // Identify the id for the particular drink
    const drinkId = event.target.dataset.drinkId;

    // Delete the appropriate drink per identified id
    const response = await fetch(`/api/drinks/${drinkId}`, {
      method: 'DELETE',
    });

    // Once drink is deleted, return the user to the homepage.
    if (response.ok) {
      document.location.replace('/');

      // otherwise alert error
    } else {
      alert(response.statusText);
    }
  }

  // Use delete button on drink to delete the particular drink on click
  document
    .querySelector('.delete-drink-btn')
    .addEventListener('click', deleteDrinkHandler);