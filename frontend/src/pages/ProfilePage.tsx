import React from 'react';
import UserProfile from '../components/auth/UserProfile';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Profile</h1>
        <p className="text-gray-600">Track your progress and achievements</p>
      </div>
      
      <UserProfile />
      
      {/* Additional profile sections can be added here in future tasks */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <p className="text-gray-600">Activity tracking will be implemented in future tasks.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
          <p className="text-gray-600">Achievement system will be implemented in future tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;