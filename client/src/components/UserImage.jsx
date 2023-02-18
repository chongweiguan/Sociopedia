import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px "}) => { //profile picture
    return (
        <Box width={size} height={size}>
            <img 
                style={{objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alr="user"
                src={`http://localhost:3001/assets/${image}`}
            />
        </Box>
    );
}

export default UserImage;
