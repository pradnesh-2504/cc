'use client';

import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, Button } from '@mui/material';
import { auth } from '../utils/firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create user with Firebase
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User signed up:', formData);
      setFormData({ name: '', email: '', password: '' });
    } catch (err:any) {
      setError(err.message);
      console.error('Error signing up:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardContent>
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 text-purple-600">
              {/* You can place an icon here, if needed */}
            </div>
          </div>
          <Typography variant="h5" component="h2" className="text-center">
            Create Your Dentelo Account
          </Typography>
          <Typography variant="body2" className="text-center" gutterBottom>
            Sign up to access our premium dental services
          </Typography>
          {error && <Typography color="error" className="text-center">{error}</Typography>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              id="name"
              name="name"
              label="Full Name"
              type="text"
              required
              fullWidth
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <TextField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              required
              fullWidth
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              required
              fullWidth
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
            <CardActions>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className="w-full" 
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Account'}
              </Button>
            </CardActions>
          </form>
        </CardContent>
        <div className="flex flex-col items-center space-y-2 pb-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-purple-600 hover:text-purple-500">
              Log in
            </a>
          </p>
          <p className="text-xs text-gray-500">
            By signing up, you agree to our{' '}
            <a href="/terms" className="underline hover:text-gray-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
