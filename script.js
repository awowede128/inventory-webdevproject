$(document).ready(function () {
    // Load stored data from Local Storage and populate the table
    loadFromLocalStorage();

    // Event listener for form submission
    $('#inventory-form').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting in the default way

        // Collect form data
        var formData = {
            make: $('#make').val(),
            model: $('#model').val(),
            year: $('#year').val(),
            color: $('#color').val(),
            bodyStyle: $('#body-style').val(),
            trim: $('#trim').val(),
            fuelType: $('#fuel-type').val(),
            engineSize: $('#engine-size').val(),
            engineConfiguration: $('#engine-configuration').val(),
            transmissionType: $('#transmission-type').val(),
            driveTrain: $('#drive-train').val(),
            mileage: $('#mileage').val(),
            costPrice: $('#cost-price').val(),
        };

        // Append the form data to the inventory table
        appendToInventoryTable(formData);

        // Store the data in Local Storage
        saveToLocalStorage(formData);

        // Display form submitted message
        window.alert("Form has been submitted");

        document.getElementById('inventory-form').reset();

        // Redirect to the inventory page
        window.location.href = "inventory.html";
    });

    // Function to load data from Local Storage and populate the table
    function loadFromLocalStorage() {
        var existingData = JSON.parse(localStorage.getItem('inventoryData')) || [];

        // Append each stored data to the inventory table
        existingData.forEach(function (data) {
            appendToInventoryTable(data);
        });
    }

    // Function to add data to the inventory table
    function appendToInventoryTable(data) {
        var tableBody = $('#inventory-table-body');
        var newRow = $('<tr>');

        // Iterate through the data and create table cells
        Object.keys(data).forEach(function (key) {
            var cell = $('<td>').text(data[key]);
            newRow.append(cell);
        });

        // Append the new row to the table body
        tableBody.append(newRow);
    }

    // Function to save data to Local Storage
    function saveToLocalStorage(data) {
        // Retrieve existing data from Local Storage
        var existingData = JSON.parse(localStorage.getItem('inventoryData')) || [];

        // Add the new form data
        existingData.push(data);

        // Save the updated data back to Local Storage
        localStorage.setItem('inventoryData', JSON.stringify(existingData));
    }
});
