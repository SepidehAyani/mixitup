async function favHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#drink').value.trim();;
    const instruction = document.querySelector('#instruction').value.trim();
    const ingredient = document.querySelector('#ingredient').value.trim();
    
    const response = await fetch('/api/drink', {
      method: 'PUT',
      body: JSON.stringify({
        name,
        instruction,
        ingredient
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/catalog');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.fav-drink').addEventListener('submit', favHandler);