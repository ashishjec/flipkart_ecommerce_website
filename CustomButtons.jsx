import { useState, useContext } from 'react';

import {  Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from "../login/LoginDialog";
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'    
        }
}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform:none;
    padding:5px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`


const CustomButtons = () => {

    const [open, setOpen] = useState(false);
                            
    const { account, setAccount } =useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () =>  {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
              
              account ? <Profile account={account} setAccount={setAccount} /> :
              <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            
            }

            {
            account ? <Profile account={account} setAccount={setAccount} /> :
            <LoginButton variant="contained" onClick={() => openDialog()} style={{ marginTop: 1, width: 180}}>Become a Seller </LoginButton>
            }

                
            <LoginButton style={{ marginTop:3, width: 80}}><a href="https://www.google.com/maps/@26.7458896,94.2473715,17.25z?entry=ttu" rel="noreferrer" target="_blank"  > Address </a></LoginButton>

            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary"> 
                <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
            
    )
}

export default CustomButtons;