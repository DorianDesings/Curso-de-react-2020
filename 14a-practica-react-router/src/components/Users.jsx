import React from 'react';

import { users } from '../assets/users'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { generate as id } from 'shortid'

const UsersContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
    gap:10px;
`

const UserTag = styled.div`
    background-color: #bbb;
    padding:.5rem;
    text-align: center;
    border-radius:10px;
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color:#222;
`

const Users = () => (
    <UsersContainer>
        {
            users.map(user => (
                <UserTag key={id()}>
                    <StyledLink to={`/user/${user.id}`}>
                        {user.name}
                    </StyledLink>
                </UserTag>
            ))
        }

    </UsersContainer>
)

export default Users