import { ICategory } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ChildCategories from "./child-categories";
import { useComponentsStore } from "@/store/components";

const CategoryItem = ({ category }: { category: ICategory }) => {
  const [showChildCategories, setShowChildCategories] = useState(false);
  const { setIsSidebarOpen } = useComponentsStore();

  const handleLink = (e: React.MouseEvent) => {
    if (!showChildCategories) {
      e.preventDefault();
      setShowChildCategories(true);
    } else {
      setShowChildCategories(false);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div
      key={category.id}
      className={`${category.attributes.parentCategory?.data?.id ? "font-normal" : "font-bold"} pt-2`}
    >
      <div className="flex items-center cursor-pointer w-fit gap-xl hover:text-secondary">
        <Link href={`/tag/${category.attributes.name}`} onClick={handleLink}>
          {category.attributes.name}
        </Link>
        <div
          className=" flex justify-end max-w-sm  p-sm "
          onClick={() => setShowChildCategories(!showChildCategories)}
        >
          {showChildCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {showChildCategories && <ChildCategories parentId={category?.id} />}
    </div>
  );
};

export default CategoryItem;
