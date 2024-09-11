import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const PhotoCard = () => {
    return (
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Avatar
                    alt="Alex Hughes"
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah-hs-1.jpg"
                    sx={{
                        width: {
                            xs: 300,
                            sm: 400,
                            md: 500,
                            lg: 550,
                            xl: 600,
                        },
                        height: {
                            xs: 300,
                            sm: 400,
                            md: 500,
                            lg: 550,
                            xl: 600,
                        },
                    }}
                />
            </Box>
    );
};

export default PhotoCard;
