import Cards from "./Cards";
import Chart from "./Chart";
import Navbar from "./Navbar";
import StreamsTable from "./StreamsTable";

const MusicStreamingDashboard = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Dashboard Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Key Metrics Section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Key Metrics</h2>
              <select className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <Cards />
          </section>

          {/* Charts Section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Performance Overview
              </h2>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Download Report
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200">
                  Share
                </button>
              </div>
            </div>
            <div className=" p-6">
              <Chart />
            </div>
          </section>

          {/* Streams Table Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Recent Activity
              </h2>
              <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                View All
              </button>
            </div>
            <StreamsTable />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Music Analytics Dashboard. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MusicStreamingDashboard;
