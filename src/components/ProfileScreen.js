import { useLocation } from "react-router-dom";

export default function ProfileScreen() {
  const location = useLocation();
  const platform = location.state?.platform || "Unknown";

  // Placeholder data for post analytics
  const analytics = {
    views: 1234,
    likes: 567,
    comments: 89,
    shares: 45,
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Post Status: Success</h3>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold mb-4">
          Post Analytics for {platform}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-md">
            <p className="text-lg font-medium">Views</p>
            <p className="text-2xl font-bold">{analytics.views}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-md">
            <p className="text-lg font-medium">Likes</p>
            <p className="text-2xl font-bold">{analytics.likes}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-md">
            <p className="text-lg font-medium">Comments</p>
            <p className="text-2xl font-bold">{analytics.comments}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-md">
            <p className="text-lg font-medium">Shares</p>
            <p className="text-2xl font-bold">{analytics.shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
