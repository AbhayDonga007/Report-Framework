// components/FilterComponent.tsx
import React, { useState } from "react";
import { ApiData } from "../../data";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";

interface FilterComponentProps {
  data: ApiData[];
  onFilter: (filteredData: ApiData[]) => void;
}

const Filter: React.FC<FilterComponentProps> = ({ data, onFilter }) => {
  const [idFilter, setIdFilter] = useState<number | null>(null);
  const [IdFilterType, setIdFilterType] = useState<string>("Equals");

  const [ageFilter, setAgeFilter] = useState<number | null>(null);
  const [ageFilterType, setAgeFilterType] = useState<string>("Equals");
  const [ageRange, setAgeRange] = useState<{ min: number | null, max: number | null }>({ min: null, max: null });


  const [nameFilter, setNameFilter] = useState<string>("");
  const [nameFilterType, setNameFilterType] = useState<string>("Contains");
  
  
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [roleFilterType, setRoleFilterType] = useState<string>("Contains");

  const [salaryFilter, setSalaryFilter] = useState<number | null>(null);
  const [salaryFilterType, setSalaryFilterType] = useState<string>("Equals");
  const [salaryRange, setSalaryRange] = useState<{ min: number | null, max: number | null }>({ min: null, max: null });


  const [activeFilter, setActiveFilter] = useState<boolean | null>(null);

  const applyFilters = () => {
    let filteredData = data;

    if (idFilter !== null) {
      switch (IdFilterType) {
        case "Equals":
          filteredData = filteredData.filter((item) => item.id === idFilter);
          break;
        case "Less than":
          filteredData = filteredData.filter((item) => item.id < idFilter);
          break;
        case "Less than or equal":
          filteredData = filteredData.filter((item) => item.id <= idFilter);
          break;
        case "Greater than":
          filteredData = filteredData.filter((item) => item.id > idFilter);
          break;
        case "Greater than or equal":
          filteredData = filteredData.filter((item) => item.id >= idFilter);
          break;
        case "Not equal":
          filteredData = filteredData.filter((item) => item.id !== idFilter);
          break;
        default:
          break;
      }
    }

    if (nameFilter) {
      switch (nameFilterType) {
        case "Contains":
          filteredData = filteredData.filter((item) =>
            item.name.includes(nameFilter)
          );
          break;
        case "Not contains":
          filteredData = filteredData.filter(
            (item) => !item.name.includes(nameFilter)
          );
          break;
        case "Equals":
          filteredData = filteredData.filter(
            (item) => item.name === nameFilter
          );
          break;
        case "Not equal":
          filteredData = filteredData.filter(
            (item) => item.name !== nameFilter
          );
          break;
        case "Starts with":
          filteredData = filteredData.filter((item) =>
            item.name.startsWith(nameFilter)
          );
          break;
        case "Ends with":
          filteredData = filteredData.filter((item) =>
            item.name.endsWith(nameFilter)
          );
          break;
        case "Is null":
          filteredData = filteredData.filter(
            (item) => item.name === null || item.name === ""
          );
          break;
        case "Is not null":
          filteredData = filteredData.filter(
            (item) => item.name !== null && item.name !== ""
          );
          break;
        default:
          break;
      }
    }

    if (ageFilterType === "Range") {
        if (ageRange.min !== null) {
          filteredData = filteredData.filter((item) => item.age >= ageRange.min!);
        }
        if (ageRange.max !== null) {
          filteredData = filteredData.filter((item) => item.age <= ageRange.max!);
        }
      } else if (ageFilter !== null) {
      switch (ageFilterType) {
        case "Equals":
          filteredData = filteredData.filter((item) => item.age === ageFilter);
          break;
        case "Less than":
          filteredData = filteredData.filter((item) => item.age < ageFilter);
          break;
        case "Less than or equal":
          filteredData = filteredData.filter((item) => item.age <= ageFilter);
          break;
        case "Greater than":
          filteredData = filteredData.filter((item) => item.age > ageFilter);
          break;
        case "Greater than or equal":
          filteredData = filteredData.filter((item) => item.age >= ageFilter);
          break;
        case "Not equal":
          filteredData = filteredData.filter((item) => item.age !== ageFilter);
          break;
        default:
          break;
      }
    }

    if (salaryFilterType === "Range") {
        if (salaryRange.min !== null) {
          filteredData = filteredData.filter((item) => item.salary >= salaryRange.min!);
        }
        if (salaryRange.max !== null) {
          filteredData = filteredData.filter((item) => item.salary <= salaryRange.max!);
        }
      } else if (salaryFilter !== null) {
      switch (salaryFilterType) {
        case "Equals":
          filteredData = filteredData.filter(
            (item) => item.salary === salaryFilter
          );
          break;
        case "Less than":
          filteredData = filteredData.filter(
            (item) => item.salary < salaryFilter
          );
          break;
        case "Less than or equal":
          filteredData = filteredData.filter(
            (item) => item.salary <= salaryFilter
          );
          break;
        case "Greater than":
          filteredData = filteredData.filter(
            (item) => item.salary > salaryFilter
          );
          break;
        case "Greater than or equal":
          filteredData = filteredData.filter(
            (item) => item.salary >= salaryFilter
          );
          break;
        case "Not equal":
          filteredData = filteredData.filter(
            (item) => item.salary !== salaryFilter
          );
          break;
        default:
          break;
      }
    }

    if (roleFilter) {
      switch (roleFilterType) {
        case "Contains":
          filteredData = filteredData.filter((item) =>
            item.role.includes(roleFilter)
          );
          break;
        case "Not contains":
          filteredData = filteredData.filter(
            (item) => !item.role.includes(roleFilter)
          );
          break;
        case "Equals":
          filteredData = filteredData.filter(
            (item) => item.role === roleFilter
          );
          break;
        case "Not equal":
          filteredData = filteredData.filter(
            (item) => item.role !== roleFilter
          );
          break;
        case "Starts with":
          filteredData = filteredData.filter((item) =>
            item.role.startsWith(roleFilter)
          );
          break;
        case "Ends with":
          filteredData = filteredData.filter((item) =>
            item.role.endsWith(roleFilter)
          );
          break;
        case "Is null":
          filteredData = filteredData.filter(
            (item) => item.role === null || item.role === ""
          );
          break;
        case "Is not null":
          filteredData = filteredData.filter(
            (item) => item.role !== null && item.role !== ""
          );
          break;
        default:
          break;
      }
    }

    onFilter(filteredData);
  };

  return (
    <div>
      <div className="space-y-2 justify-center flex items-center text-center">
        <h1 className="text-3xl font-bold text-gray-900">Filter Product</h1>
      </div>

      <div className="justify-center grid items-center text-center">

      <div className="space-y-2">
        <div className="w-full flex flex-col gap-4">
          <div
            key="md"
            className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
          >
            <Input
              className="p-3"
              type="number"
              label="Enter ID"
              onChange={(e) => setIdFilter(Number(e.target.value))}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-[300px]" variant="bordered">{IdFilterType}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Age Filter Type"
                onAction={(key) => setIdFilterType(key as string)}
              >
                <DropdownItem key="Equals">Equals</DropdownItem>
                <DropdownItem key="Less than">Less than</DropdownItem>
                <DropdownItem key="Less than or equal">
                  Less than or equal
                </DropdownItem>
                <DropdownItem key="Greater than">Greater than</DropdownItem>
                <DropdownItem key="Greater than or equal">
                  Greater than or equal
                </DropdownItem>
                <DropdownItem key="Not equal">Not equal</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full flex flex-col gap-4">
          <div
            key="md"
            className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
          >
            <Input
              className="p-3"
              type="text"
              label="Enter Name"
              onChange={(e) => setNameFilter(e.target.value)}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-[300px]" variant="bordered">{nameFilterType}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Age Filter Type"
                onAction={(key) => setNameFilterType(key as string)}
              >
                <DropdownItem key="Contains">Contains</DropdownItem>
                <DropdownItem key="Not contains">Not contains</DropdownItem>
                <DropdownItem key="Equals">Equals</DropdownItem>
                <DropdownItem key="Not equal">Not equal</DropdownItem>
                <DropdownItem key="Starts with">Starts with</DropdownItem>
                <DropdownItem key="Ends with">Ends with</DropdownItem>
                <DropdownItem key="Is not null">Is not null</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full flex flex-col gap-4">
          <div
            key="md"
            className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
          >
            <Input
              className="p-3"
              type="number"
              label="Enter Age"
              onChange={(e) => setAgeFilter(Number(e.target.value))}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-[300px]" variant="bordered">{ageFilterType}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Age Filter Type"
                onAction={(key) => setAgeFilterType(key as string)}
              >
                <DropdownItem key="Equals">Equals</DropdownItem>
                <DropdownItem key="Less than">Less than</DropdownItem>
                <DropdownItem key="Less than or equal">
                  Less than or equal
                </DropdownItem>
                <DropdownItem key="Greater than">Greater than</DropdownItem>
                <DropdownItem key="Greater than or equal">
                  Greater than or equal
                </DropdownItem>
                <DropdownItem key="Not equal">Not equal</DropdownItem>
                <DropdownItem key="Range">Range</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {ageFilterType === "Range" && (
              <div className="flex gap-4">
                <Input
                  type="number"
                  label="Min Age"
                  onChange={(e) => setAgeRange({ ...ageRange, min: Number(e.target.value) })}
                />
                <Input
                  type="number"
                  label="Max Age"
                  onChange={(e) => setAgeRange({ ...ageRange, max: Number(e.target.value) })}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full flex flex-col gap-4">
          <div
            key="md"
            className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
          >
            <Input
              className="p-3"
              type="text"
              label="Enter Role"
              onChange={(e) => setRoleFilter(e.target.value)}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-[300px]" variant="bordered">{roleFilterType}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Age Filter Type"
                onAction={(key) => setRoleFilterType(key as string)}
              >
                <DropdownItem key="Contains">Contains</DropdownItem>
                <DropdownItem key="Not contains">Not contains</DropdownItem>
                <DropdownItem key="Equals">Equals</DropdownItem>
                <DropdownItem key="Not equal">Not equal</DropdownItem>
                <DropdownItem key="Starts with">Starts with</DropdownItem>
                <DropdownItem key="Ends with">Ends with</DropdownItem>
                <DropdownItem key="Is not null">Is not null</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full flex flex-col gap-4">
          <div
            key="md"
            className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
          >
            <Input
              className="p-3"
              type="number"
              label="Enter Salary"
              onChange={(e) => setSalaryFilter(Number(e.target.value))}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-[300px]" variant="bordered">{salaryFilterType}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Age Filter Type"
                onAction={(key) => setSalaryFilterType(key as string)}
              >
                <DropdownItem key="Equals">Equals</DropdownItem>
                <DropdownItem key="Less than">Less than</DropdownItem>
                <DropdownItem key="Less than or equal">
                  Less than or equal
                </DropdownItem>
                <DropdownItem key="Greater than">Greater than</DropdownItem>
                <DropdownItem key="Greater than or equal">
                  Greater than or equal
                </DropdownItem>
                <DropdownItem key="Not equal">Not equal</DropdownItem>
                <DropdownItem key="Range">Range</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {salaryFilterType === "Range" && (
              <div className="flex gap-4">
                <Input
                  type="number"
                  label="Min Salary"
                  onChange={(e) => setSalaryRange({ ...salaryRange, min: Number(e.target.value) })}
                />
                <Input
                  type="number"
                  label="Max Salary"
                  onChange={(e) => setSalaryRange({ ...salaryRange, max: Number(e.target.value) })}
                />
              </div>
            )}
          </div>
        </div>
      </div>


        
      </div>

      {/* <div>
        <label>Active: </label>
        <input type="checkbox" checked={activeFilter || false} onChange={e => setActiveFilter(e.target.checked)} />
      </div> */}
      
      <div className="space-y-2 justify-center flex items-center text-center">
        {/* <h1 className="text-3xl font-bold text-gray-900">Filter Product</h1> */}
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  );
};

export default Filter;
