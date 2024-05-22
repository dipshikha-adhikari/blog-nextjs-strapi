import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SearchInput = () => {
  return (
    <div className={cn(" w-full flex max-w-sm items-center space-x-2")}>
      <Input type="text" placeholder="Search" />
      <Button type="submit">Search</Button>
    </div>
  );
};

export default SearchInput;
