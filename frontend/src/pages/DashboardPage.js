import React from 'react';
import { useAuth } from '../hooks/useAuth';

const DashboardPage = () => {
  const { user } = useAuth();

  const travelDestinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The City of Light offers iconic landmarks, world-class museums, and romantic ambiance',
      rating: 4.8,
      icon: '🗼',
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      description: 'Experience vibrant culture, cutting-edge technology, and exquisite cuisine',
      rating: 4.7,
      icon: '🗾',
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with stunning beaches, ancient temples, and serene rice paddies',
      rating: 4.9,
      icon: '🏝️',
    },
    {
      id: 4,
      name: 'New York, USA',
      description: 'The city that never sleeps with towering skyscrapers and endless entertainment',
      rating: 4.6,
      icon: '🗽',
    },
    {
      id: 5,
      name: 'Sydney, Australia',
      description: 'Harbor views, beautiful beaches, and vibrant multicultural city life',
      rating: 4.8,
      icon: '🦘',
    },
    {
      id: 6,
      name: 'Barcelona, Spain',
      description: 'Artistic heritage, Gaudí architecture, and Mediterranean coastal charm',
      rating: 4.7,
      icon: '🎨',
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1>Welcome, {user?.fullName}! 🌍</h1>
        <p>Explore amazing travel destinations from around the world</p>
      </div>

      <div className="destinations-grid">
        {travelDestinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <div className="destination-icon">{dest.icon}</div>
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
            <div className="destination-rating">⭐ {dest.rating}/5.0</div>
          </div>
        ))}
      </div>

      <div className="user-profile-section">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <div className="profile-item">
            <strong>Full Name:</strong> <span>{user?.fullName}</span>
          </div>
          <div className="profile-item">
            <strong>Email:</strong> <span>{user?.email}</span>
          </div>
          <div className="profile-item">
            <strong>Username:</strong> <span>{user?.username}</span>
          </div>
          <div className="profile-item">
            <strong>Member Since:</strong> <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
