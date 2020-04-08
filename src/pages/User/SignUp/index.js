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
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

   async function handleFormSubmit(e) {
        e.preventDefault()
        if(!first_name || !last_name || !email || !password) return setError('Please, fill in all the inputs.')

        await api.post('/user', { first_name, last_name, email, password }).then((response) => {
            localStorage.setItem('@u_id', response.data.token)
            return history.push('/dashboard')
        }).catch(() => {
            return setError('Email is alredy registered.')
        }) 
    }

    return (
        <Content>
            <SignContainer>
                <Sign>
                <Logo />
                    <div className="text">
                        <Title>Create your free account here.</Title>
                        <Text>
                            With an account you can uploads files for free.
                        </Text>
                    </div>
                    
                    <form onSubmit={ handleFormSubmit }>
                        { error && <p className="error">{ error }</p> }
                        <input placeholder="First name" value={ first_name } onChange={ e => setFirstName(e.target.value) }/>
                        <input placeholder="Last name" value={ last_name } onChange={ e => setLastName(e.target.value) } />
                        <input type="email" placeholder="Email" value={ email } onChange={ e => setEmail(e.target.value) } />
                        <input type="password" placeholder="Password" value={ password } onChange={ e => setPassword(e.target.value) } />
                        <Button type="submit">Sign up</Button>
                    </form>
                    <Link className="link" to="/signin">Alredy have an account ?</Link>
                </Sign>
            </SignContainer>
            <ImageContainer>
                <img src={ downloadImg } alt="filehub" width="400" />
            </ImageContainer>
        </Content>
    )
}