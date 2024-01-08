// This is a mock user database for demonstration
const users = [
    // Normally, you should store hashed passwords. These are plain text for simplicity.
    { id: '1', username: 'user1', password: 'password1' },
    { id: '2', username: 'user2', password: 'password2' }
  ];
  
  // Function to find a user by username
  const findUser = (username) => users.find(user => user.username === username);
  
  module.exports = { findUser };
  