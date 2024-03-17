    // JavaScript code for form validation

    let inputField = document.getElementById('inputField');

	// Prevent form from submitting
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

      // Retrieve the input field value
      let inputValue = inputField.value;

      // Regular expression pattern for alphanumeric input
      let alphaNumeric = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphaNumeric.test(inputValue)) {
        // Valid input: display confirmation and submit the form      
        alert("Form submitted");
        event.target.submit();
      
        // Invalid input: display error message 
      } else {       
        alert("Error, your input is not alphanumeric, please try again");
      }
     });
















