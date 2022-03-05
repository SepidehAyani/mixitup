const newPostHandler = async (event) => {

    event.preventDefault();

    const drink_name = document.querySelector('#drink-name-entry').value.trim();
    const drink_type = document.querySelector('#drink-type-entry').value.trim();
    const ingredient = document.querySelector('#ingredient-entry').value.trim();
    const instruction = document.querySelector('#instruction-log').value.trim();

    if (drink_name && drink_type && ingredient && instruction) {
        const response = await fetch('/api/drinks/add-drink', {
            method: 'POST',
            body: JSON.stringify({ drink_name, drink_type, ingredient, instruction}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            document.location.replace('/');
            alert('New Drink Created!');
        }

    } else {
        alert('Must fill drink name, drink type, ingredient and instruction!')
    }
};

document.querySelector('#newFormBtn').addEventListener('click', newPostHandler);