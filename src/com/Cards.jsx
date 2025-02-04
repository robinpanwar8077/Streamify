import { Users, Disc, TrendingUp, DollarSign, Trophy } from "lucide-react";
import PropTypes from "prop-types";

function Cards() {
  const keyMetrics = {
    totalUsers: 250000,
    activeUsers: 180000,
    totalStreams: 5600000,
    revenue: 1250000,
    topArtist: "Taylor Swift",
  };

  const MetricCard = ({ icon: Icon, title, value }) => (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-800 p-3 rounded-lg">
          <Icon className="text-blue-400" size={24} />
        </div>
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold text-white tracking-wide">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
        </div>
      </div>
    </div>
  );

  MetricCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  };

  return (
    <div className="p-6 bg-gray-950 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <MetricCard
          icon={Users}
          title="Total Users"
          value={keyMetrics.totalUsers}
        />
        <MetricCard
          icon={Disc}
          title="Active Users"
          value={keyMetrics.activeUsers}
        />
        <MetricCard
          icon={TrendingUp}
          title="Total Streams"
          value={keyMetrics.totalStreams}
        />
        <MetricCard
          icon={DollarSign}
          title="Revenue"
          value={keyMetrics.revenue}
        />
        <MetricCard
          icon={Trophy}
          title="Top Artist"
          value={keyMetrics.topArtist}
        />
      </div>
    </div>
  );
}

export default Cards;
