import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setStats({
        total: 50,
        pending: 15,
        approved: 25,
        rejected: 10,
      });
    }, 500);
  }, []);

  const statColors = {
    total: 'bg-blue-100 text-blue-700',
    pending: 'bg-yellow-100 text-yellow-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-blue-700 mb-8 tracking-wide">Principal Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${statColors[key] || 'bg-gray-100 text-gray-700'}`}
          >
            <span className="uppercase text-xs font-semibold mb-2 tracking-wider">{key}</span>
            <span className="text-4xl font-bold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;