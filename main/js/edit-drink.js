const editDrinkHandler = async (event) => {

    event.preventDefault();

    const drink_name = document.querySelector('#drink-name-entry').value.trim();
    const drink_type = document.querySelector('#drink-type-entry').value.trim();
    const ingredient = document.querySelector('#ingredient-entry').value.trim();
    const instruction = document.querySelector('#instruction-entry').value.trim();

    if (drink_name && drink_type && ingredient && instruction) {
        const response = await fetch('/api/drinks/edit-drink', {
            method: 'PUT',
            body: JSON.stringify({ drink_name, drink_type, ingredient, instruction }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            document.location.replace('/');
            alert('Drink has been updated!');
        }

    } else {
        alert('Please make update to drink name, drink type, ingredient or instruction!');
    }
};

document.querySelector('#editDrinkBtn').addEventListener('click', editDrinkHandler);