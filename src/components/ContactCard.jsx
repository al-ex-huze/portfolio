import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";
import { Margin } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5">Contact Me</Typography>
        </CardContent>
        <CardActions
            sx={{
                display: "flex",
                alignItems: "flex-end",
                width: "fit-content",
                justifyContent: "space-between",
            }}
        >
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href = "https://github.com/al-ex-huze")
                }
            >
                <GitHubIcon style={{ fontSize: "200px" }} />
            </IconButton>
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href =
                        "https://www.linkedin.com/in/alex-hughes-b960a1301/")
                }
            >
                <LinkedInIcon style={{ fontSize: "200px" }} />
            </IconButton>
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href = "mailto:al.ex.hughes@outlook.com")
                }
            >
                <EmailIcon style={{ fontSize: "200px" }} />
            </IconButton>
        </CardActions>
        <Typography
            sx={{
                color: "text.secondary",
                mb: 1.5,
            }}
        >
            {"("}Yes I'm Open For Work{")"}
        </Typography>
    </React.Fragment>
);

const ContactCard = () => {
    return (
        <div className="Contact__card">
            <Box sx={{ marginTop: "15px", minWidth: 275 }}>
                <Item>
                    <Card variant="outlined">{card}</Card>
                </Item>
            </Box>
        </div>
    );
};

export default ContactCard;
