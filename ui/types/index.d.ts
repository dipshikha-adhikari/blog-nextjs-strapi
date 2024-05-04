import { BlocksContent } from "@strapi/blocks-react-renderer"
import { ReactNode } from "react"

export interface Post {
    id: string
    attributes: {
        title: string
        slug: string
        publishedAt: Date
        content: any
        author: string
        description: string
        featuredimage: {
            data: {
                attributes: {
                    caption: string | null,
                    width: number,
                    height: number,
                    formats: {
                        thumbnail: {
                            url: string
                        }
                    }
                }
            }
        }
    }
}


