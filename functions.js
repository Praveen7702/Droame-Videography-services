<script>
document.addEventListener('DOMContentLoaded', () => {
    const addCustomerBtn = document.querySelector('#customers button');
    const nameInput = document.querySelector('#customers input[name="name"]');
    const emailInput = document.querySelector('#customers input[name="email"]');
    const phoneInput = document.querySelector('#customers input[name="phone_number"]');

    addCustomerBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please enter all fields.');
            return;
        }

        const xhr = new XMLHttpRequest();
        const url = 'add-customer.php';
        const params = `name=${name}&email=${email}&phone=${phone}`;

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // Clear input fields
                nameInput.value = '';
                emailInput.value = '';
                phoneInput.value = '';

                // Reload table data
                refreshCustomersTable();
            } else {
                alert('Error occurred when adding customer.');
            }
        });

        xhr.send(params);
    });

    function refreshCustomersTable() {
        const xhr = new XMLHttpRequest();
        const url = 'get-customers.php';

        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                const tbody = document.querySelector('#customers tbody');
                tbody.innerHTML = xhr.responseText;
            } else {
                alert('Error occurred when fetching customer data.');
            }
        });

        xhr.send();
    }

    // Load customers data on initial page load
    refreshCustomersTable();
});
</script>