import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, Image } from "lucide-react";

export default function ContentScreen() {
  const { title } = useParams(); // Corrected destructuring
  const navigate = useNavigate();
  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false);

  const handlePost = (platform) => {
    navigate("/profile", { state: { platform } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {decodeURIComponent(title || "")}
      </h1>

      <div className="mb-8">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => setIsSourceDropdownOpen(!isSourceDropdownOpen)}
        >
          Source <ChevronDown className="ml-2" />
        </button>
        {isSourceDropdownOpen && (
          <div className="mt-2 bg-gray-800 rounded-md p-2">
            <a
              href="#"
              className="block text-blue-400 hover:text-blue-300 mb-1"
            >
              Source 1
            </a>
            <a
              href="#"
              className="block text-blue-400 hover:text-blue-300 mb-1"
            >
              Source 2
            </a>
            <a href="#" className="block text-blue-400 hover:text-blue-300">
              Source 3
            </a>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">LinkedIn Post</h3>
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <p>
            This is a placeholder for LinkedIn post content. It would typically
            contain trending information related to {title}.
          </p>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            onClick={() => handlePost("LinkedIn")}
          >
            Post on LinkedIn
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
            Schedule for LinkedIn
          </button>
        </div>
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          <Image className="mr-2" size={20} /> Attach Media
        </button>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">X Post</h3>
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <p>
            This is a placeholder for X post content. It would typically contain
            a concise version of the trending information related to {title}.
          </p>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            onClick={() => handlePost("X")}
          >
            Post on X
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
            Schedule for X
          </button>
        </div>
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          <Image className="mr-2" size={20} /> Attach Media
        </button>
      </div>
    </div>
  );
}
