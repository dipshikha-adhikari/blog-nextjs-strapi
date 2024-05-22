import { ICategories, ICategory } from "@/types";
import Link from "next/link";
import React from "react";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import { childCategoriesQuery } from "@/graphql/queries";

const CategoriesDesktop = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="absolute hidden w-full top-[10vh] bg-primary-dark p-sm left-0  category-desktop">
      <div className="grid grid-cols-3 gap-xl">
        {categories.map((item) => {
          return (
            <div key={item.id} className="h-fit">
              <CategoryItem category={item} />
              <ChildCategories
                parentId={item.id}
                parentName={item.attributes.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesDesktop;

const CategoryItem = ({ category }: { category: ICategory }) => {
  return (
    <Link href={`/${category.attributes.name}`} className="w-fit font-bold ">
      {category.attributes.name}
    </Link>
  );
};

const ChildCategories = ({
  parentId,
  parentName,
}: {
  parentId: string;
  parentName: string;
}) => {
  const { data }: UseSuspenseQueryResult<ICategories> = useSuspenseQuery(
    childCategoriesQuery,
    {
      variables: {
        id: parentId,
      },
    },
  );

  if (data.categories.data.length === 0) return null;

  return (
    <div className="pl-sm pt-sm text-primary-dark-foreground grid gap-xs h-fit">
      {data.categories.data.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/${parentName}/${item?.attributes?.name}`}>
              {item.attributes.name}
            </Link>
            <ChildCategories
              parentId={item.id}
              parentName={item.attributes.name}
            />
          </div>
        );
      })}
    </div>
  );
};
