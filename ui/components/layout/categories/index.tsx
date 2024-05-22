import React from "react";
import CategoriesMobile from "./mobile/categories-mobile";
import { parentCategoriesQuery } from "@/graphql/queries";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import { ICategories } from "@/types";
import CategoriesDesktop from "./desktop";

const Categories = () => {
  const { data }: UseSuspenseQueryResult<ICategories> = useSuspenseQuery(
    parentCategoriesQuery,
  );

  const categories = data?.categories?.data;

  return (
    <>
      <CategoriesMobile categories={categories} />
      <CategoriesDesktop categories={categories} />
    </>
  );
};

export default Categories;
