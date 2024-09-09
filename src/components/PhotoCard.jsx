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
                            xs: 250,
                            sm: 200,
                            md: 300,
                            lg: 400,
                            xl: 500,
                        },
                        height: {
                            xs: 250,
                            sm: 200,
                            md: 300,
                            lg: 400,
                            xl: 500,
                        },
                    }}
                />
            </Box>
    );
};

export default PhotoCard;
