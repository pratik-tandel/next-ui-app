import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

interface CustomComponentProps {
  value: { type: string; search: string };
  handleChange: (value: { type: string; search: string }) => void;
}

const CustomComponent = ({ value, handleChange }: CustomComponentProps) => {
  const types = [
    { key: "type1", label: "Type 1" },
    { key: "type2", label: "Type 2" },
    { key: "type3", label: "Type 3" },
  ];

  return (
    <div className="flex flex-row">
      <Select
        items={types}
        label="Type"
        placeholder="Select type"
        value={value.type}
        onChange={(event) =>
          handleChange({ ...value, type: event.target.value })
        }
      >
        {(type) => <SelectItem key={type.key}>{type.label}</SelectItem>}
      </Select>

      <Input
        label="Search"
        name="search"
        placeholder="Search here"
        type="text"
        value={value.search}
        onChange={(event) =>
          handleChange({ ...value, search: event.target.value })
        }
      />
    </div>
  );
};

export default CustomComponent;
