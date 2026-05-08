const fetch = require('node-fetch'); // or use axios if you prefer

const createAdmin = async () => {
  const adminData = {
    username: 'admin',
    password: 'adminadmin',
    name: 'Administrator'
  };

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Admin account created successfully:');
      console.log(data);
    } else {
      console.error('Failed to create admin account:');
      console.error(data);
    }
  } catch (error) {
    console.error('Error creating admin account:', error.message);
  }
};

createAdmin();

