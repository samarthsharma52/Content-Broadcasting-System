import { Link } from "react-router-dom";

const TeacherLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Teacher Panel</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/teacher/dashboard">Dashboard</Link>
          <Link to="/teacher/upload">Upload Content</Link>
          <Link to="/teacher/my-content">My Content</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default TeacherLayout;