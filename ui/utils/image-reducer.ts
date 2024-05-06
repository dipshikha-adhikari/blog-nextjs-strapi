export const imageReducer = (src: string | undefined) => {
  let imageUrl = src ? src : null;
  return {
    url: imageUrl
      ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imageUrl} `
      : null,
  };
};
