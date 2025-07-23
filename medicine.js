let orderId = 1;

function placeOrder() {
    const customerName = document.getElementById('customerName').value.trim();
    const medicineName = document.getElementById('medicineName').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!customerName || !medicineName || !quantity || !address) {
        alert("Please fill in all the fields.");
        return;
    }

    const tbody = document.getElementById('orderBody');
    const row = tbody.insertRow();

    row.insertCell(0).innerText = orderId++;
    row.insertCell(1).innerText = customerName;
    row.insertCell(2).innerText = medicineName;
    row.insertCell(3).innerText = quantity;
    row.insertCell(4).innerText = address;

    clearFields();
}

function clearFields() {
    document.getElementById('customerName').value = '';
    document.getElementById('medicineName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('address').value = '';
}

function searchOrders() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const rows = document.querySelectorAll('#orderBody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}
