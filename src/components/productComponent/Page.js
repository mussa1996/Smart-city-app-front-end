import { Box } from "@mui/material";
import React from "react";
// import Topnav from "./navbar/Topnav"

const Page = (props)=>{
    return(
        <React.Fragment>
            {/* <Topnav /> */}
           <Box
             sx={{
                my: 4,
                mx: 27,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
           >
             {props.children}
           </Box>
        </React.Fragment>
    )
}

export default Page;