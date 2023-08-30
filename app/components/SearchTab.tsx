'use client'
import {Input} from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

export default function App() {
  return (
    <div>
      <Input
        radius="sm"
        fullWidth
        placeholder="Type to search..."
        startContent={
          <IconSearch />
        }
      />
    </div>
  );
}
