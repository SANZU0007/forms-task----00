// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Create a new table row and cells
  const table = document.querySelector('table');
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const lastNameCell = row.insertCell();
  const addressCell = row.insertCell();
  const pincodeCell = row.insertCell();
  const genderCell = row.insertCell();
  const foodCell = row.insertCell();

  // Set the cell values to the form data
  firstNameCell.textContent = formData.get('firstname');
  lastNameCell.textContent = formData.get('lastname');
  addressCell.textContent = formData.get('address');
  pincodeCell.textContent = formData.get('pincode');
  genderCell.textContent = formData.get('gender');
  foodCell.textContent = formData.get('food');

  // Reset the form
  form.reset();
});
