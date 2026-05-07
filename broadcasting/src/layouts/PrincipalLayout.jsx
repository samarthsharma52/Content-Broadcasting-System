import { Link } from "react-router-dom";

const PrincipalLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      
      <div className="w-64 bg-black text-white p-4">
        <h2 className="text-xl font-bold mb-6">Principal Panel</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/principal/dashboard">Dashboard</Link>
          <Link to="/principal/pending">Pending Approval</Link>
          <Link to="/principal/all-content">All Content</Link>
        </nav>
      </div>

      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default PrincipalLayout;