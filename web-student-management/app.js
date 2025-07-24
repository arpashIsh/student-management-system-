const mainContent = document.getElementById('mainContent');

const employees = [];

function renderAddEmployee() {
    mainContent.innerHTML = `
        <h2>Add Employee</h2>
        <form id="addEmployeeForm">
            <label>Name: <input type="text" id="name" required></label><br><br>
            <label>Father's Name: <input type="text" id="fname" required></label><br><br>
            <label>Date of Birth: <input type="date" id="dob" required></label><br><br>
            <label>Salary: <input type="number" id="salary" required></label><br><br>
            <label>Address: <input type="text" id="address" required></label><br><br>
            <label>Phone: <input type="tel" id="phone" required></label><br><br>
            <label>Email: <input type="email" id="email" required></label><br><br>
            <label>Highest Education: <input type="text" id="education" required></label><br><br>
            <label>Designation: <input type="text" id="designation" required></label><br><br>
            <label>Aadhar Number: <input type="text" id="aadhar" required></label><br><br>
            <button type="submit">Add Employee</button>
        </form>
        <p id="addMessage"></p>
    `;

    const form = document.getElementById('addEmployeeForm');
    const addMessage = document.getElementById('addMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEmployee = {
            id: Date.now().toString(),
            name: form.name.value,
            fname: form.fname.value,
            dob: form.dob.value,
            salary: form.salary.value,
            address: form.address.value,
            phone: form.phone.value,
            email: form.email.value,
            education: form.education.value,
            designation: form.designation.value,
            aadhar: form.aadhar.value
        };
        employees.push(newEmployee);
        addMessage.textContent = "Employee added successfully!";
        form.reset();
    });
}

function renderViewEmployees() {
    if (employees.length === 0) {
        mainContent.innerHTML = "<p>No employees to display.</p>";
        return;
    }
    let html = `
        <h2>View Employees</h2>
        <table border="1" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Father's Name</th>
                    <th>DOB</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Education</th>
                    <th>Designation</th>
                    <th>Aadhar</th>
                </tr>
            </thead>
            <tbody>
    `;
    employees.forEach(emp => {
        html += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.fname}</td>
                <td>${emp.dob}</td>
                <td>${emp.salary}</td>
                <td>${emp.address}</td>
                <td>${emp.phone}</td>
                <td>${emp.email}</td>
                <td>${emp.education}</td>
                <td>${emp.designation}</td>
                <td>${emp.aadhar}</td>
            </tr>
        `;
    });
    html += "</tbody></table>";
    mainContent.innerHTML = html;
}

function renderUpdateEmployee() {
    if (employees.length === 0) {
        mainContent.innerHTML = "<p>No employees to update.</p>";
        return;
    }
    let html = `
        <h2>Update Employee</h2>
        <label>Select Employee:
            <select id="selectEmployee">
                <option value="">Select</option>
    `;
    employees.forEach(emp => {
        html += `<option value="${emp.id}">${emp.name} (${emp.id})</option>`;
    });
    html += `
            </select>
        </label>
        <div id="updateFormContainer"></div>
    `;
    mainContent.innerHTML = html;

    const selectEmployee = document.getElementById('selectEmployee');
    const updateFormContainer = document.getElementById('updateFormContainer');

    selectEmployee.addEventListener('change', () => {
        const empId = selectEmployee.value;
        const emp = employees.find(e => e.id === empId);
        if (!emp) {
            updateFormContainer.innerHTML = "";
            return;
        }
        updateFormContainer.innerHTML = `
            <form id="updateEmployeeForm">
                <label>Father's Name: <input type="text" id="ufname" value="${emp.fname}" required></label><br><br>
                <label>Salary: <input type="number" id="usalary" value="${emp.salary}" required></label><br><br>
                <label>Address: <input type="text" id="uaddress" value="${emp.address}" required></label><br><br>
                <label>Phone: <input type="tel" id="uphone" value="${emp.phone}" required></label><br><br>
                <label>Email: <input type="email" id="uemail" value="${emp.email}" required></label><br><br>
                <label>Highest Education: <input type="text" id="ueducation" value="${emp.education}" required></label><br><br>
                <label>Designation: <input type="text" id="udesignation" value="${emp.designation}" required></label><br><br>
                <button type="submit">Update Employee</button>
            </form>
            <p id="updateMessage"></p>
        `;

        const updateForm = document.getElementById('updateEmployeeForm');
        const updateMessage = document.getElementById('updateMessage');

        updateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            emp.fname = updateForm.ufname.value;
            emp.salary = updateForm.usalary.value;
            emp.address = updateForm.uaddress.value;
            emp.phone = updateForm.uphone.value;
            emp.email = updateForm.uemail.value;
            emp.education = updateForm.ueducation.value;
            emp.designation = updateForm.udesignation.value;
            updateMessage.textContent = "Employee updated successfully!";
        });
    });
}

function renderRemoveEmployee() {
    if (employees.length === 0) {
        mainContent.innerHTML = "<p>No employees to remove.</p>";
        return;
    }
    let html = `
        <h2>Remove Employee</h2>
        <label>Select Employee:
            <select id="removeEmployeeSelect">
                <option value="">Select</option>
    `;
    employees.forEach(emp => {
        html += `<option value="${emp.id}">${emp.name} (${emp.id})</option>`;
    });
    html += `
            </select>
        </label>
        <button id="removeEmployeeBtn">Remove</button>
        <p id="removeMessage"></p>
    `;
    mainContent.innerHTML = html;

    const removeEmployeeSelect = document.getElementById('removeEmployeeSelect');
    const removeEmployeeBtn = document.getElementById('removeEmployeeBtn');
    const removeMessage = document.getElementById('removeMessage');

    removeEmployeeBtn.addEventListener('click', () => {
        const empId = removeEmployeeSelect.value;
        if (!empId) {
            removeMessage.textContent = "Please select an employee to remove.";
            return;
        }
        const index = employees.findIndex(e => e.id === empId);
        if (index === -1) {
            removeMessage.textContent = "Employee not found.";
            return;
        }
        employees.splice(index, 1);
        removeMessage.textContent = "Employee removed successfully!";
        removeEmployeeSelect.remove(empId);
        renderRemoveEmployee();
    });
}

document.getElementById('btnAdd').addEventListener('click', renderAddEmployee);
document.getElementById('btnView').addEventListener('click', renderViewEmployees);
document.getElementById('btnUpdate').addEventListener('click', renderUpdateEmployee);
document.getElementById('btnRemove').addEventListener('click', renderRemoveEmployee);
