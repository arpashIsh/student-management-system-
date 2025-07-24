const apiBaseUrl = 'http://localhost:3000/api/students';

document.addEventListener('DOMContentLoaded', () => {
  const btnAdd = document.getElementById('btnAdd');
  const btnView = document.getElementById('btnView');
  const btnUpdate = document.getElementById('btnUpdate');
  const btnRemove = document.getElementById('btnRemove');

  const mainContent = document.getElementById('mainContent');

  btnAdd.addEventListener('click', () => {
    mainContent.innerHTML = `
      <h2>Add Student</h2>
      <form id="addStudentForm">
        <label>Name: <input type="text" id="name" required></label><br>
        <label>Father's Name: <input type="text" id="fname" required></label><br>
        <label>Date of Birth: <input type="date" id="dob" required></label><br>
        <label>Salary: <input type="number" id="salary" required></label><br>
        <label>Address: <input type="text" id="address" required></label><br>
        <label>Phone: <input type="text" id="phone" required></label><br>
        <label>Email: <input type="email" id="email" required></label><br>
        <label>Highest Education: <input type="text" id="education" required></label><br>
        <label>Designation: <input type="text" id="designation" required></label><br>
        <label>Aadhar Number: <input type="text" id="aadhar" required></label><br>
        <button type="submit">Add Student</button>
      </form>
      <div id="message"></div>
    `;

    const form = document.getElementById('addStudentForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const student = {
        studentID: Date.now().toString(),
        name: document.getElementById('name').value,
        fname: document.getElementById('fname').value,
        dob: document.getElementById('dob').value,
        salary: document.getElementById('salary').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        designation: document.getElementById('designation').value,
        aadhar: document.getElementById('aadhar').value,
      };

      try {
        const response = await fetch(apiBaseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(student),
        });
        const result = await response.json();
        messageDiv.textContent = result.message;
        form.reset();
      } catch (error) {
        messageDiv.textContent = 'Error adding student';
      }
    });
  });

  btnView.addEventListener('click', async () => {
    mainContent.innerHTML = '<h2>View Students</h2><div id="studentList"></div>';
    try {
      const response = await fetch(apiBaseUrl);
      const students = await response.json();
      const listDiv = document.getElementById('studentList');
      if (students.length === 0) {
        listDiv.textContent = 'No students to display.';
        return;
      }
      const table = document.createElement('table');
      const headerRow = document.createElement('tr');
      ['ID', 'Name', 'Father\'s Name', 'DOB', 'Salary', 'Address', 'Phone', 'Email', 'Education', 'Designation', 'Aadhar'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
      students.forEach(student => {
        const row = document.createElement('tr');
        Object.values(student).forEach(val => {
          const td = document.createElement('td');
          td.textContent = val;
          row.appendChild(td);
        });
        table.appendChild(row);
      });
      listDiv.appendChild(table);
    } catch (error) {
      mainContent.textContent = 'Error loading students';
    }
  });

  btnUpdate.addEventListener('click', () => {
    mainContent.innerHTML = `
      <h2>Update Student</h2>
      <label for="updateStudentId">Student ID:</label>
      <input type="text" id="updateStudentId" required>
      <button id="loadStudentBtn">Load Student</button>
      <form id="updateStudentForm" style="display:none;">
        <label>Name: <input type="text" id="updateName" required></label><br>
        <label>Father's Name: <input type="text" id="updateFname" required></label><br>
        <label>Date of Birth: <input type="date" id="updateDob" required></label><br>
        <label>Salary: <input type="number" id="updateSalary" required></label><br>
        <label>Address: <input type="text" id="updateAddress" required></label><br>
        <label>Phone: <input type="text" id="updatePhone" required></label><br>
        <label>Email: <input type="email" id="updateEmail" required></label><br>
        <label>Highest Education: <input type="text" id="updateEducation" required></label><br>
        <label>Designation: <input type="text" id="updateDesignation" required></label><br>
        <label>Aadhar Number: <input type="text" id="updateAadhar" required></label><br>
        <button type="submit">Update Student</button>
      </form>
      <div id="updateMessage"></div>
    `;

    const loadBtn = document.getElementById('loadStudentBtn');
    const form = document.getElementById('updateStudentForm');
    const messageDiv = document.getElementById('updateMessage');

    loadBtn.addEventListener('click', async () => {
      const studentID = document.getElementById('updateStudentId').value;
      if (!studentID) {
        messageDiv.textContent = 'Please enter a Student ID';
        return;
      }
      try {
        const response = await fetch(\`\${apiBaseUrl}/\${studentID}\`);
        if (!response.ok) {
          messageDiv.textContent = 'Student not found';
          form.style.display = 'none';
          return;
        }
        const student = await response.json();
        form.style.display = 'block';
        document.getElementById('updateName').value = student.name;
        document.getElementById('updateFname').value = student.fname;
        document.getElementById('updateDob').value = student.dob;
        document.getElementById('updateSalary').value = student.salary;
        document.getElementById('updateAddress').value = student.address;
        document.getElementById('updatePhone').value = student.phone;
        document.getElementById('updateEmail').value = student.email;
        document.getElementById('updateEducation').value = student.education;
        document.getElementById('updateDesignation').value = student.designation;
        document.getElementById('updateAadhar').value = student.aadhar;
      } catch (error) {
        messageDiv.textContent = 'Error loading student';
        form.style.display = 'none';
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const studentID = document.getElementById('updateStudentId').value;
      const updatedStudent = {
        studentID,
        name: document.getElementById('updateName').value,
        fname: document.getElementById('updateFname').value,
        dob: document.getElementById('updateDob').value,
        salary: document.getElementById('updateSalary').value,
        address: document.getElementById('updateAddress').value,
        phone: document.getElementById('updatePhone').value,
        email: document.getElementById('updateEmail').value,
        education: document.getElementById('updateEducation').value,
        designation: document.getElementById('updateDesignation').value,
        aadhar: document.getElementById('updateAadhar').value,
      };
      try {
        const response = await fetch(\`\${apiBaseUrl}/\${studentID}\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedStudent),
        });
        const result = await response.json();
        messageDiv.textContent = result.message;
      } catch (error) {
        messageDiv.textContent = 'Error updating student';
      }
    });
  });

  btnRemove.addEventListener('click', () => {
    mainContent.innerHTML = `
      <h2>Remove Student</h2>
      <label for="removeStudentId">Student ID:</label>
      <input type="text" id="removeStudentId" required>
      <button id="removeStudentBtn">Remove Student</button>
      <div id="removeMessage"></div>
    `;

    const removeBtn = document.getElementById('removeStudentBtn');
    const messageDiv = document.getElementById('removeMessage');

    removeBtn.addEventListener('click', async () => {
      const studentID = document.getElementById('removeStudentId').value;
      if (!studentID) {
        messageDiv.textContent = 'Please enter a Student ID';
        return;
      }
      try {
        const response = await fetch(\`\${apiBaseUrl}/\${studentID}\`, {
          method: 'DELETE',
        });
        const result = await response.json();
        messageDiv.textContent = result.message;
      } catch (error) {
        messageDiv.textContent = 'Error removing student';
      }
    });
  });
});
