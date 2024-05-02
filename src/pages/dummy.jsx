import React, { useState } from "react";
import Avatar from "../components/avatar";
import menu from "../assets/kebab.png";

const USER_ROLE = "SUPER";

const data = [
  {
    name: "John Doe",
    email: "john@example.com",
    manager: "Jane Smith",
    department: "Marketing",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    manager: "Mike Johnson",
    department: "Sales",
  },
  // Add more data as needed
];

function Employee() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto p-4">
      <div className="overflow-x-auto w-full">
        <div className="flex items-center justify-between mb-4">
          {/* Search bar with icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 rounded-md border border-gray-300"
            />
            <span className="absolute inset-y-0 left-3 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m4-6a8 8 0 11-16 0 8 8 0 0116 0z"
                ></path>
              </svg>
            </span>
          </div>

          {/* Drop down */}
          <div className="relative">
            <select className="appearance-none pl-3 pr-10 py-2 rounded-md border border-gray-300">
              <option value="">Select Country</option>
              <option value="USA">
                <div className="flex items-center space-x-3">
                  <input value="test" type="checkbox" />
                  <div>USA</div>
                </div>
              </option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Table */}
        <table className="table-auto min-w-max mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Employee Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Manager</th>
              <th className="px-6 py-3 text-left">Current Department</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((employee, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">
                  <div className="flex space-x-3 items-center">
                    <Avatar fullName={employee.name} />
                    <div>{employee.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.manager}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-3 items-center justify-between">
                    <div>{employee.department}</div>
                    <button onClick={toggleMenu}>
                      <img
                        src={menu}
                        alt="kebab menu icon"
                        className="w-[23px] h-[23px] relative"
                      />
                    </button>
                    {isMenuOpen && (
                      <div className="absolute top-[200px] mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          Edit
                        </button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          Delete
                        </button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          Assign Manager
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
