async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/drink/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      drink_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/catalog/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('#delete-drink-btn').addEventListener('click', deleteFormHandler);