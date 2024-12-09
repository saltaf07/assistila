import ProfileCard from '../../components/profile/ProfileCard';
import { useAuth } from '../../contexts/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  const profile = {
    fullName: user.name,
    companyName: user.company,
    designation: user.designation,
    location: user.location,
    mobile: user.mobile,
    email: user.email,
    expertSkills: user.expertSkills,
    stats: user.stats
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your profile information</p>
      </div>
      
      <div className="max-w-2xl">
        <ProfileCard profile={profile} />
      </div>
    </div>
  );
} 