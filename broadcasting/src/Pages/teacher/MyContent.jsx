import { useEffect, useState } from "react";

const MyContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: 1,
          title: "Math Lecture",
          subject: "Math",
          status: "Pending",
        },
        {
          id: 2,
          title: "Science Notes",
          subject: "Science",
          status: "Approved",
        },
      ]);
    }, 500);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Content</h1>

      {data.length === 0 ? (
        <p>No content available</p>
      ) : (
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr className="bg-gray-200">
              <th className="px-6 py-4 font-semibold text-sm">Title</th>
              <th className="px-6 py-4 font-semibold text-sm">Subject</th>
              <th className="px-6 py-4 font-semibold text-sm">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-2">{item.title}</td>
                <td>{item.subject}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyContent;