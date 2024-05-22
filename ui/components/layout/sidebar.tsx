import Categories from "./categories";
import SearchInput from "./search-input";

const Sidebar = () => {
  return (
    <div className="absolute left-0 top-[10vh] pt-md md:hidden bg-background w-full ">
      <SearchInput />
      <Categories />
    </div>
  );
};

export default Sidebar;
