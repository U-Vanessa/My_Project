// Get form elements and business list

const registrationForm = document.getElementById('registrationForm');
const businessList = document.getElementById('businessList');

// Array to store businesses

let businesses = [];

// Event listener for business registration

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    const fname = document.getElementById('name').value;
    const lname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('id').value;
    const address = document.getElementById('address').value;
    const businessTitle = document.getElementById('businessTitle').value;
    const businessTitle = document.getElementById('businessTitle').value;
    const description = document.getElementById('description').value;
    
    const businessObj = {
        id: Date.now(),
        name,
        email,
        businessTitle,
        description,
        status: 'Incomplete'
    };
    
    businesses.push(businessObj);
    renderBusinesses();
    
    // Clear form inputs

    registrationForm.reset();
});

// Function to render businesses

function renderBusinesses() {
    businessList.innerHTML = '';
    
    businesses.forEach((business) => {
        const businessItem = document.createElement('li');
        businessItem.className = business.status === 'Complete' ? 'completed' : '';
        businessItem.innerHTML = `
            <h3>${business.businessTitle} - ${business.name}</h3>
            <p>Email: ${business.email}</p>
            <p>${business.description}</p>
            <div class="status">Status: ${business.status}</div>
            <div class="buttons">
                <button onclick="updateBusiness(${business.id})">Update</button>
                <button onclick="toggleComplete(${business.id})">${business.status === 'Complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
            </div>
        `;
        
        businessList.appendChild(businessItem);
    });
}

// Function to update business details

function updateBusiness(id) {
    const businessToUpdate = businesses.find(business => business.id === id);
    
    const updatedName = prompt("Update Name:", businessToUpdate.name);
    const updatedEmail = prompt("Update Email:", businessToUpdate.email);
    const updatedTitle = prompt("Update Business Title:", businessToUpdate.businessTitle);
    const updatedDescription = prompt("Update Description:", businessToUpdate.description);
    
    if (updatedName !== null && updatedName.trim() !== '') {
        businessToUpdate.name = updatedName;
    }
    if (updatedEmail !== null && updatedEmail.trim() !== '') {
        businessToUpdate.email = updatedEmail;
    }
    if (updatedTitle !== null && updatedTitle.trim() !== '') {
        businessToUpdate.businessTitle = updatedTitle;
    }
    if (updatedDescription !== null && updatedDescription.trim() !== '') {
        businessToUpdate.description = updatedDescription;
    }
    
    businessToUpdate.status = 'Updated';
    renderBusinesses();
}

// Function to toggle business completion status

function toggleComplete(id) {
    const businessToToggle = businesses.find(business => business.id === id);
    businessToToggle.status = businessToToggle.status === 'Complete' ? 'Incomplete' : 'Complete';
    renderBusinesses();
}
