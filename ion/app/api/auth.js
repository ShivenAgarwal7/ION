const jwt = require('jsonwebtoken');
const { findUser } = require('../../models/User');
const bcrypt = require('bcryptjs');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = findUser(username);

    // Check if user exists and password is correct
    if (user && bcrypt.compareSync(password, user.password)) {
      // Create JWT token
      const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

      return res.status(200).json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}
