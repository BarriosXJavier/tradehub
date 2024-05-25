import React from "react";
import { Bell, ShoppingCart, User, TrendingUp } from "lucide-react";

interface RightBarProps {
  className?: string;
}

const RightBar: React.FC<RightBarProps> = ({ className }) => {
  return (
    <div
      className={`p-4 bg-[#151c2c] text-white shadow-lg rounded-lg ${className}`}
    >
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">User Stats</h3>
        <div className="flex items-center mb-2">
          <User className="mr-2" />
          <div>
            <p className="text-gray-400">Total Users</p>
            <p className="text-xl font-bold">1,234</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <TrendingUp className="mr-2" />
          <div>
            <p className="text-gray-400">New Signups</p>
            <p className="text-xl font-bold">56</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <ul className="list-disc list-inside text-gray-400">
          <li>Order #12345 has been shipped</li>
          <li>New message from John Doe</li>
          <li>Stock running low for product XYZ</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        <ul className="text-gray-400">
          <li>John Doe purchased Product ABC</li>
          <li>Jane Smith left a 5-star review</li>
          <li>Order #12346 has been delivered</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="flex space-x-4">
          <button className="flex items-center p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            <ShoppingCart className="mr-2" />
            New Order
          </button>
          <button className="flex items-center p-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
            <Bell className="mr-2" />
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
