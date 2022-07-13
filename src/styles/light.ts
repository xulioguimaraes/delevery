import { createTheme } from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";


export const LightTheme = (colors: string[])=>{
    
    return createTheme({
        palette:{
            background:{
                default: "#f3f3f3",
                paper: "#fff",
            },...(colors[0] &&{
                primary:{
                    main: colors[0] ? colors[0] :""
                },
                secondary:{
                    main: colors[1] ? colors[1] :""
                },
                info: {
                    main: grey[300]
                }
            }),
            divider:grey[800]
        },
        typography:{
            fontFamily: "Quicksand, sans-serif"
        }
        

    })
}