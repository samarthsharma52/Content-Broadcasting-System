import { Link } from "react-router-dom";

const TeacherLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gradient-to-tr from-gray-100 to-green-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl border-r border-gray-200 flex flex-col items-center py-8 px-4">
        <h2 className="text-2xl font-extrabold text-green-700 mb-10 tracking-wide">Teacher Panel</h2>
        <nav className="flex flex-col gap-4 w-full">
          <Link to="/teacher/dashboard" className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Dashboard</Link>
          <Link to="/teacher/upload" className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Upload Content</Link>
          <Link to="/teacher/my-content" className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium transition-colors">My Content</Link>
        </nav>
        <div className="mt-auto w-full flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold text-green-700 mb-2">T</div>
          <span className="text-gray-500 text-sm">Welcome, Teacher</span>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-transparent">
        <div className="max-w-5xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;