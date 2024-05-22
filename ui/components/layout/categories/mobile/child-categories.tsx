import { childCategoriesQuery } from "@/graphql/queries";
import { ICategories } from "@/types";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import CategoryItem from "./category-item";

interface Props {
  parentId: string;
}

const ChildCategories = ({ parentId }: Props) => {
  const { data }: UseSuspenseQueryResult<ICategories> = useSuspenseQuery(
    childCategoriesQuery,
    {
      variables: {
        id: parentId,
      },
    },
  );

  if (data.categories.data.length === 0)
    return <div className="pl-sm">No items here!</div>;

  return (
    <div className="pl-sm">
      {data.categories.data.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </div>
  );
};

export default ChildCategories;
