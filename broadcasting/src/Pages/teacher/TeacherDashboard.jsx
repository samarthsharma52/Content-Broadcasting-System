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

  const Card = ({ title, value }) => (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <Card title="Total" value={stats.total} />
        <Card title="Pending" value={stats.pending} />
        <Card title="Approved" value={stats.approved} />
        <Card title="Rejected" value={stats.rejected} />
      </div>
    </div>
  );
};

export default Dashboard;