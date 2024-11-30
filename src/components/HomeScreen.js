import { Link } from "react-router-dom";
import { User } from "lucide-react";

const cards = [
  { id: 1, title: "Tech Trends" },
  { id: 2, title: "Marketing Strategies" },
  { id: 3, title: "Financial Insights" },
  { id: 4, title: "Health & Wellness" },
];

export default function HomeScreen() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        {/* Profile Icon */}
        <div className="flex flex-col items-center">
          <Link to="/profile" className="text-blue-400 hover:text-blue-300">
            <User size={24} />
          </Link>
          <span className="text-sm text-gray-400 mt-2">Profile</span>
        </div>
        {/* Trend Analyzer */}
        <Link
          to="/"
          className="text-3xl font-bold text-gray-100 hover:text-gray-300"
        >
          Trend Analyzer
        </Link>
        {/* Spacer */}
        <div className="w-6"></div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={`/content/${encodeURIComponent(card.title)}`}
            className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
