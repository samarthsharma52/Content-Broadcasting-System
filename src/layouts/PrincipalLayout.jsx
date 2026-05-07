import { Link } from "react-router-dom";

const PrincipalLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gradient-to-tr from-gray-100 to-blue-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl border-r border-gray-200 flex flex-col items-center py-8 px-4">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-10 tracking-wide">Principal Panel</h2>
        <nav className="flex flex-col gap-4 w-full">
          <Link to="/principal/dashboard" className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors">Dashboard</Link>
          <Link to="/principal/pending" className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors">Pending Approval</Link>
          <Link to="/principal/all-content" className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors">All Content</Link>
        </nav>
        <div className="mt-auto w-full flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700 mb-2">P</div>
          <span className="text-gray-500 text-sm">Welcome, Principal</span>
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

export default PrincipalLayout;