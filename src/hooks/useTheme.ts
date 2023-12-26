import { useEffect, useState } from "react";

type Theme = "light" | "dark"; 

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");
    
    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") ?? "dark";

        if(currentTheme === "light" || currentTheme === "dark") {
            changeTheme(currentTheme);
        }

    }, []);

    const changeTheme = (value?:Theme) => {
        if(value) {
            setTheme(value);
        }
        else {
            setTheme(prev => prev === "light" ? "dark" : "light");
        }
    }

    return [theme, changeTheme] as const;
}