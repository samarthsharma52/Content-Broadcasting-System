import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    // simulate API
    setTimeout(() => {
      setStats({
        total: 20,
        pending: 5,
        approved: 10,
        rejected: 5,
      });
    }, 800);
  }, []);

  const statColors = [
    'bg-blue-100 text-blue-700',
    'bg-yellow-100 text-yellow-700',
    'bg-green-100 text-green-700',
    'bg-red-100 text-red-700',
  ];
  const statTitles = ['Total', 'Pending', 'Approved', 'Rejected'];
  const statValues = [stats.total, stats.pending, stats.approved, stats.rejected];
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-green-700 mb-8 tracking-wide">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statTitles.map((title, i) => (
          <div
            key={title}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${statColors[i]}`}
          >
            <span className="uppercase text-xs font-semibold mb-2 tracking-wider">{title}</span>
            <span className="text-4xl font-bold">{statValues[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;