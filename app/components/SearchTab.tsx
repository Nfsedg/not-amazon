'use client'
import {Button, Input} from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'

export default function App() {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/result/${search}`)
    setSearch("")
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Input
          onChange={handleOnChange}
          radius="sm"
          value={search}
          fullWidth
          classNames={{
            inputWrapper: "pr-0"
          }}
          placeholder="Type to search..."
          endContent={
            <Button type="submit">
              <IconSearch />
            </Button>
          }
        />
      </form>
    </div>
  );
}
