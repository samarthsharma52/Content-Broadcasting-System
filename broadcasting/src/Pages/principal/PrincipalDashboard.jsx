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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Principal Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded shadow">
            <p>{key}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;