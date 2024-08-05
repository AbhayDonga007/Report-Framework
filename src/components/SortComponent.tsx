// components/SortComponent.tsx
import React from 'react';
import { ApiData } from '../../data';
import { Button } from '@nextui-org/react';

interface SortComponentProps {
  data: ApiData[];
  onSort: (sortedData: ApiData[]) => void;
}

const SortComponent: React.FC<SortComponentProps> = ({ data, onSort }) => {
  const sortData = (key: keyof ApiData, order: 'asc' | 'desc') => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    onSort(sortedData);
  };

  return (
    <div>
      <div>
        {/* <button onClick={() => sortData('id', 'asc')}>ID Asc</button> */}
        <Button onClick={() => sortData('id', 'asc')}>ID Asc</Button>
        <Button onClick={() => sortData('id', 'desc')}>ID Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('name', 'asc')}>Name Asc</Button>
        <Button onClick={() => sortData('name', 'desc')}>Name Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('age', 'asc')}>Age Asc</Button>
        <Button onClick={() => sortData('age', 'desc')}>Age Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('role', 'asc')}>Role Asc</Button>
        <Button onClick={() => sortData('role', 'desc')}>Role Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('hireDate', 'asc')}>Date Asc</Button>
        <Button onClick={() => sortData('hireDate', 'desc')}>Date Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('isActive', 'asc')}>isActive Asc</Button>
        <Button onClick={() => sortData('isActive', 'desc')}>isActive Desc</Button>
      </div>
      <div>
        <Button onClick={() => sortData('salary', 'asc')}>Salary Asc</Button>
        <Button onClick={() => sortData('salary', 'desc')}>Salary Desc</Button>
      </div>
    </div>
  );
};

export default SortComponent;
