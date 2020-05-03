import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Menu = styled.ul`
    display:flex;
    justify-content:space-around;
    background-color:#333;
    padding-left:0;
    margin-top:0;
    margin-bottom:0;
    list-style:none;
`

const MenuItem = styled.li`
    padding:1rem;
`

const MenuLink = styled(NavLink)`
    text-decoration:none;
    text-transform:uppercase;
    color: #fff;

    &.active{
        color:red;

        &:hover{
            border-bottom:1px solid red;
        }
    }
`

const Navigation = () => (
    <nav>
        <Menu>
            <MenuItem>
                <MenuLink activeClassName="active" exact to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink activeClassName="active" to="/user">User</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink activeClassName="active" to="/contact">Contact</MenuLink>
            </MenuItem>
        </Menu>
    </nav>
)

export default Navigation