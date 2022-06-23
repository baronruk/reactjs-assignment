import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f8f8f2',
            }}
            showLabels
            value={value}
            onChange={handleChange}>
            <BottomNavigationAction
                label='Back To Top'
                value='recents'
                icon={<ArrowCircleUpIcon sx={{ fontSize: 40 }} />}
            />
            <BottomNavigationAction
                component={Link}
                to='/'
                label='Homepage'
                value='favorites'
                icon={<HomeIcon sx={{ fontSize: 40 }} />}
            />
            <BottomNavigationAction
                label='Buy Now'
                value='folder'
                icon={<AddShoppingCartIcon sx={{ fontSize: 40 }} />}
            />
        </BottomNavigation>
    );
}
