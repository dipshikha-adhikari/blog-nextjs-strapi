import { ICategory } from "@/types";
import CategoryItem from "./category-item";

const CategoriesMobile = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className=" py-md md:hidden overflow-y-scroll category-mobile max-h-[80vh]">
      {categories?.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesMobile;
