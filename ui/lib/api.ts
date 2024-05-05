export const fetcher = async (url: string, options?: any) => {
  let response;

  try {
    if (options) {
      response = await fetch(url, options);
    } else {
      response = await fetch(url);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
