// script.js
let id = 1;

function addAppointment() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const age = document.getElementById('age').value.trim();
    const risk = document.getElementById('risk').value.trim();

    if (!name || !email || !number || !age || !risk) {
        alert("Please fill all the fields.");
        return;
    }

    if (!/^\d{10}$/.test(number)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    const tbody = document.getElementById('tbody');
    const row = tbody.insertRow();

    row.insertCell(0).innerText = id++;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = email;
    row.insertCell(3).innerText = age;
    row.insertCell(4).innerText = number;
    row.insertCell(5).innerText = risk;

    clearFields();
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('age').value = '';
    document.getElementById('risk').value = '';
}

function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#tbody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}
