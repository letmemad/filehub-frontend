import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

// Components
import Logo from '../../../components/Logo'


// Api
import api from '../../../services/api'

// icons
import {
    FaSignOutAlt
} from 'react-icons/fa'

import {
    Content,
    ProfileContainer,
    ProfileBackground,
    Image,
    ProfileContent,
    Title,
    Text,
    DetailContainer,
    Form,
    Input,
    Button
} from './styles'

export default function Profile() {
    const history = useHistory()
    const [user, setUser] = useState({})

    useEffect(() => {
        async function loadUser() {
            await api.get('/getUser', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@u_id')}`
                }
            }).then((response) => {
                return setUser(response.data.user)
            }).catch(() => {
                localStorage.clear()
                return history.push('/signin')
            })
        }

        loadUser()
    }, [history])

    return (
        <>
        {
            user.email ?
                <Content>
                    <Logo />
                    <ProfileContainer>
                        <ProfileBackground>
                            <Image src={ user.picture_url } alt="You" width="200" />
                            <ProfileContent>
                                <Title>{ `${user.first_name} ${user.last_name}` }</Title>
                                <Text>{user.email}</Text>
                                <br/>
                                
                                <Link to="/logout" style={{textDecoration: "none", color: "#e02041", fontWeight: "bold"}}>
                                    <span style={{
                                        display: "flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        fontSize: 16
                                    }}>LOGOUT &nbsp; <FaSignOutAlt size={16} color="#e02041" /></span>
                                </Link>
                            </ProfileContent>
                        </ProfileBackground>

                        <DetailContainer>
                            <Text style={{ fontSize: 20, fontWeight: "bold", opacity: .4 }}>DETAILS</Text>
                            <Form>
                                <Input value={ user.first_name }/>
                                <Input value={ user.last_name }/>
                                <Button type="submit">UPDATE</Button>
                            </Form>
                        </DetailContainer>
                    </ProfileContainer>
                </Content>
            :
                <p>Loading profile...</p>
        }
        </>
    )
}