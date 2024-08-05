// components/TableComponent.tsx
import React, { useState, useEffect } from 'react';
import { getData } from '../../api';
import { ApiData, mockData } from '../../data';
import Filter from './Filter';
import SortComponent from './SortComponent';

const TableComponent: React.FC = () => {
  const [data, setData] = useState<ApiData[]>(mockData);
  const [filteredData, setFilteredData] = useState<ApiData[]>(mockData);
  const [sortedData, setSortedData] = useState<ApiData[]>(mockData);

  const handleFilter = (data: ApiData[]) => {
    setFilteredData(data);
    setSortedData(data); 
  };

  const handleSort = (data: ApiData[]) => {
    setSortedData(data);
  };
    
  return (
    <div>
      <Filter data={data} onFilter={handleFilter} />
      <SortComponent data={filteredData} onSort={handleSort} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Hire Date</th>
            <th>Is Active</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Projects Completed</th>
            <th>Last Login</th>
            <th>Access Level</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(sortedData) && sortedData.length > 0 ? (
            sortedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.role}</td>
                <td>{item.hireDate}</td>
                <td>{item.isActive ? 'True' : 'False'}</td>
                <td>{item.salary}</td>
                <td>{item.department}</td>
                <td>{item.projectsCompleted}</td>
                <td>{new Date(item.lastLogin).toLocaleString()}</td>
                <td>{item.accessLevel}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={11}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
