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
                    alt="Remy Sharp"
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah-hs-1.jpg"
                    sx={{
                        width: {
                            xs: 200,
                            sm: 250,
                            md: 300,
                            lg: 350,
                            xl: 400,
                        },
                        height: {
                            xs: 200,
                            sm: 250,
                            md: 300,
                            lg: 350,
                            xl: 400,
                        },
                    }}
                />
            </Box>
    );
};

export default PhotoCard;
