import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const recentStreamsData = [
  {
    songName: "Blank Space",
    artist: "Taylor Swift",
    dateStreamed: "2025-02-01",
    streamCount: 15000,
    userId: "U123",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2025-02-02",
    streamCount: 12000,
    userId: "U456",
  },
  {
    songName: "Uptown Funk",
    artist: "Mark Ronson",
    dateStreamed: "2025-02-03",
    streamCount: 10000,
    userId: "U789",
  },
  {
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: "2025-02-04",
    streamCount: 18000,
    userId: "U101",
  },
  {
    songName: "Flowers",
    artist: "Miley Cyrus",
    dateStreamed: "2025-02-05",
    streamCount: 22000,
    userId: "U102",
  },
  {
    songName: "Kill Bill",
    artist: "SZA",
    dateStreamed: "2025-02-06",
    streamCount: 19000,
    userId: "U103",
  },
  {
    songName: "Calm Down",
    artist: "Rema",
    dateStreamed: "2025-02-07",
    streamCount: 16500,
    userId: "U104",
  },
  {
    songName: "Die For You",
    artist: "The Weeknd",
    dateStreamed: "2025-02-08",
    streamCount: 21000,
    userId: "U105",
  },
  {
    songName: "Creepin'",
    artist: "Metro Boomin",
    dateStreamed: "2025-02-09",
    streamCount: 17500,
    userId: "U106",
  },
  {
    songName: "Last Night",
    artist: "Morgan Wallen",
    dateStreamed: "2025-02-10",
    streamCount: 20000,
    userId: "U107",
  },
];

function StreamsTable() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const sortedAndFilteredStreams = useMemo(() => {
    let filteredStreams = recentStreamsData.filter((stream) => {
      const searchMatch =
        !searchQuery ||
        stream.songName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const dateMatch = !dateFilter || stream.dateStreamed.includes(dateFilter);
      return searchMatch && dateMatch;
    });

    if (sortConfig.key) {
      filteredStreams.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (sortConfig.key === "dateStreamed") {
          const dateA = new Date(aValue);
          const dateB = new Date(bValue);
          return sortConfig.direction === "asc"
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        } else {
          if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
          if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
          return 0;
        }
      });
    }

    return filteredStreams;
  }, [sortConfig, searchQuery, dateFilter]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="p-4 overflow-x-auto bg-gray-950">
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Recent Streams
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex items-center flex-1">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search songs or artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th
                  className="p-3 text-left text-gray-300 font-medium uppercase tracking-wider cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort("songName")}
                >
                  Song Name{" "}
                  {sortConfig.key === "songName" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="p-3 text-left text-gray-300 font-medium uppercase tracking-wider cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort("artist")}
                >
                  Artist{" "}
                  {sortConfig.key === "artist" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="p-3 text-left text-gray-300 font-medium uppercase tracking-wider cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort("dateStreamed")}
                >
                  Date Streamed{" "}
                  {sortConfig.key === "dateStreamed" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="p-3 text-right text-gray-300 font-medium uppercase tracking-wider cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort("streamCount")}
                >
                  Stream Count{" "}
                  {sortConfig.key === "streamCount" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th className="p-3 text-left text-gray-300 font-medium uppercase tracking-wider whitespace-nowrap">
                  User ID
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedAndFilteredStreams.map((stream, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                >
                  <td className="p-3 text-gray-300 break-words">
                    {stream.songName}
                  </td>
                  <td className="p-3 text-gray-300 break-words">
                    {stream.artist}
                  </td>
                  <td className="p-3 text-gray-300 whitespace-nowrap">
                    {stream.dateStreamed}
                  </td>
                  <td className="p-3 text-gray-300 text-right whitespace-nowrap">
                    {stream.streamCount.toLocaleString()}
                  </td>
                  <td className="p-3 text-gray-300 whitespace-nowrap">
                    {stream.userId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StreamsTable;
