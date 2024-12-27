import { useRouter } from "next/router"

export const useLogged = () => {
    const { query } = useRouter();
    return query.logged?.toString().toLowerCase() === "yes";
}