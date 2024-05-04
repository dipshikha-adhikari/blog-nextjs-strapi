'use client'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const user = Cookies.get('username')
        if (user) {
            setUser({
                username: user
            })
        } else {
            setUser(null)
        }
        setIsLoading(false)
    }, [])


    return { isLoading, user }

}