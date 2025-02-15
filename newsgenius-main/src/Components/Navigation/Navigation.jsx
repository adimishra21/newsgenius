import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("logout");
        handleClose();
    };

    return (
        <div className="h-screen sticky top-0">
            <div>
                <div className="py-5">
                    <img
                        src="/logo.jpg"
                        alt="Logo"
                        width="80"
                        height="80"
                        className="cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>

                {/* Horizontal Navigation Bar */}
                <div className="space-y-6">
                    {navigationMenu.map((item) => (
                        <div
                            key={item.title}
                            className="cursor-pointer flex space-x-3 items-center"
                            onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}
                        >
                            {item.icon}
                            <p className="text-xl">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="py-10">
                    <Button
                        sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: '#1e88e5' }}
                        variant="contained"
                    >
                        Post Article
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Avatar
                        alt="username"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                    />
                    <div>
                        <span>Aditya Kumar Mishra</span>
                        <span className="opacity-70">@Adikra21</span>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
