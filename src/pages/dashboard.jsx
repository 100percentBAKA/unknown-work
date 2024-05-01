import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const employeeData = [
    { name: "India", value: 18000 },
    { name: "USA", value: 15000 },
    { name: "Japan", value: 800 },
    { name: "UK", value: 452 },
    { name: "Singapore", value: 228 },
  ];

  const departmentData = [
    { name: "QA", employees: 550 },
    { name: "Sales", employees: 415 },
    { name: "Digital Marketing", employees: 425 },
    { name: "Engineering", employees: 195 },
    { name: "Talent Team", employees: 183 },
    { name: "Project Management", employees: 78 },
    { name: "Design", employees: 0 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#8B008B",
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const totalEmployees = employeeData.reduce(
    (total, data) => total + data.value,
    0
  );

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-64 py-6 px-4 bg-gray-700 text-white">
        <ul className="space-y-4">
          <li className="text-blue-500 font-semibold">Dashboard</li>
          <li>Employees</li>
          <li>Departments</li>
          <li>Org Hierarchy</li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">BRAND NAME</h1>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md ${
              isDarkMode
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Employee vs Regions</h2>
          <div className="flex items-center">
            <div className="mr-8 relative">
              <PieChart width={400} height={400}>
                <Pie
                  data={employeeData}
                  cx={200}
                  cy={200}
                  innerRadius={95}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {employeeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-2xl font-bold">{totalEmployees}</span>
                <div>Total Employees</div>
              </div>
            </div>
            <Legend layout="vertical" align="right" />
            <div className="ml-8 overflow-x-auto">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Country
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Employees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.slice(0, 5).map((entry, index) => (
                    <tr key={`row-${index}`}>
                      <td className="px-4 py-2">{entry.name}</td>
                      <td className="px-4 py-2">{entry.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {employeeData.length > 5 && (
                <table className="table-auto ml-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-300">
                        Country
                      </th>
                      <th className="px-4 py-2 border-b border-gray-300">
                        Employees
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.slice(5).map((entry, index) => (
                      <tr key={`row-${index}`}>
                        <td className="px-4 py-2">{entry.name}</td>
                        <td className="px-4 py-2">{entry.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-5">Departments</h2>
          <BarChart
            width={1200}
            height={400}
            data={departmentData}
            layout="vertical"
            style={{ height: "100vh" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              dataKey="employees"
              fill="#3182ce"
              barSize={300}
              radius={8}
              barGap={15}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
