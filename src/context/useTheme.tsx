import { Box, Theme, ThemeProvider } from "@mui/material";
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LightTheme } from "../styles/light";
import { DarkTheme } from "../styles/dark";
import { ThemeColorConfigAppTypes } from "../interfaces/dataInterfaces";
interface IThemeContextData {
    themeName: "light" | "dark"
    toggleTheme: () => void
    colors: ThemeColorConfigAppTypes
    setColors: React.Dispatch<React.SetStateAction<ThemeColorConfigAppTypes>>
}
const ThemeContext = createContext({} as IThemeContextData)
interface AppThemeProviderProps {
    children: ReactNode
}
export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light")
    const [colors, setColors] = useState<ThemeColorConfigAppTypes>({} as ThemeColorConfigAppTypes)
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light")
    }, [])

    const theme = useMemo(() => {
        if (themeName === "light") {
            return LightTheme(colors?.default ? colors?.default : [])
        }
        return DarkTheme(colors?.nightmode ? colors?.nightmode : [])
    }, [themeName, colors])
    return <ThemeContext.Provider value={{ themeName, toggleTheme, colors, setColors }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
}
export const useThemes = () => useContext(ThemeContext)