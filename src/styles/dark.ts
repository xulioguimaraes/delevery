import { createTheme } from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";

export const DarkTheme = (colors: string[])=>{
    console.log(colors);
    
    return createTheme({
        palette:{
            primary:{
                main: colors[0]
            },
            secondary:{
                main: colors[1]
            },
            background:{
                default: "#000",
                paper: "#333"
            },
            text:{
                primary: "#fff",
                secondary: "#ddd"
            },
            info: {
                main: grey[900]
            }
        },
       
    })
}