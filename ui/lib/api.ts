
type Fetcher = (url: string, options?: any) => Promise<any>;

export const fetcher: Fetcher = async (url, options) => {
    let response;

    try {
        if (options) {
            response = await fetch(url, options);
        } else {
            response = await fetch(url);
        }
        return response.json()
    } catch (err) {
        console.log(err)
    }

};
