import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  YAxis,
  Pie,
  PieChart,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Chart() {
  const userGrowthData = [
    { month: "Jan", totalUsers: 200000, activeUsers: 150000 },
    { month: "Feb", totalUsers: 210000, activeUsers: 160000 },
    { month: "Mar", totalUsers: 220000, activeUsers: 170000 },
    { month: "Apr", totalUsers: 230000, activeUsers: 175000 },
    { month: "May", totalUsers: 240000, activeUsers: 178000 },
    { month: "Jun", totalUsers: 250000, activeUsers: 180000 },
  ];
  const revenueData = [
    { name: "Subscriptions", value: 60000, color: "#FF6B6B" },
    { name: "Ad Revenue", value: 30000, color: "#4ECDC4" },
    { name: "Merchandise", value: 15000, color: "#45B7D1" },
    { name: "Events", value: 8000, color: "#96CEB4" },
  ];

  const topSongsData = [
    { name: "Song 1", streams: 8500, color: "#FF6B6B" },
    { name: "Song 2", streams: 7200, color: "#4ECDC4" },
    { name: "Song 3", streams: 6800, color: "#45B7D1" },
    { name: "Song 4", streams: 5900, color: "#96CEB4" },
    { name: "Song 5", streams: 4500, color: "#FFE66D" },
  ];
  const chartStyle = {
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  };
  return (
    <div className="p-2 bg-gray-950">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {/* User Growth Chart */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-white">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="month" stroke="#fff" style={chartStyle} />
              <YAxis stroke="#fff" style={chartStyle} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a202c",
                  border: "1px solid #2d3748",
                  borderRadius: "0.5rem",
                  color: "#fff",
                }}
              />
              <Legend wrapperStyle={{ color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="totalUsers"
                stroke="#FF6B6B"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#4ECDC4"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Revenue Distribution */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Revenue Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                  labelLine={false}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #2d3748",
                    borderRadius: "0.5rem",
                    color: "#fff",
                  }}
                />
                <Legend wrapperStyle={{ color: "#fff" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top 5 Streamed Songs */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Top 5 Streamed Songs
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSongsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="name" stroke="#fff" style={chartStyle} />
                <YAxis stroke="#fff" style={chartStyle} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #2d3748",
                    borderRadius: "0.5rem",
                    color: "#2d3748",
                  }}
                />
                <Bar dataKey="streams">
                  {topSongsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
