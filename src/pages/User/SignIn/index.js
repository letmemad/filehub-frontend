import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Components
import Logo from '../../../components/Logo'

// Images
import downloadImg from '../../../assets/banner_1.png'

import api from '../../../services/api'

import { 
    Content,
    SignContainer,
    Sign,
    Title,
    Text,
    Button,
    ImageContainer
 } from './styles'

export default function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleFormSubmit(e) {
        e.preventDefault()
        if(!email || !password) return setError('Please, fill in all the inputs.')

        await api.post('/user/store', { email, password }).then((response) => {
            localStorage.setItem('@u_id', response.data.token)
            return history.push('/')
        }).catch(() => {
            return setError('Email/Password are invalid.')
        }) 
    }

    return (
        <Content>
            <SignContainer>
                <Sign>
                <Logo />
                    <div className="text">
                        <Title>Sign in your account here.</Title>
                        <Text>
                            With an account you can uploads files for free.
                        </Text>
                    </div>
                    
                    <form onSubmit={ handleFormSubmit }>
                        { error && <p className="error">{ error }</p> }
                        <input type="email" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value) } />
                        <input type="password" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value) } />
                        <Button type="submit">Sign in</Button>
                    </form>
                    <Link className="link" to="/signup">Do not have an account ?</Link>
                </Sign>
            </SignContainer>
            <ImageContainer>
                <img src={ downloadImg } alt="filehub" width="400" />
            </ImageContainer>
        </Content>
    )
}