interface ImageData {
    caption: string | null,
    width: number,
    height: number,
    formats: {
        thumbnail: {
            url: string
        }
    }
}

export const imageReducer = (data: ImageData) => {
    let imageUrl = data?.formats?.thumbnail?.url
    let caption = data?.caption
    let h = data?.height
    let w = data?.width
    return {
        url: imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imageUrl} ` : null,
        alt: caption ? caption : null,
        height: h ? h : undefined,
        width: w ? w : undefined,
    }
}