import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    padding: 2%;
    @media only screen and (max-width: 780px) {
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 5% 0;
    overflow: auto;
`

export const ProfileBackground = styled.div`
    background: #e5e5e5;
    margin-bottom: 5%;
    width: 200px;
    border-bottom: 2px solid #fa5c19;

`

export const Image = styled.img`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`
export const ProfileContent = styled.div`
    padding: 15px;
    text-align: left;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
`

export const Text = styled.p`
    margin: 2.5% 0;
    opacity: .7;
    font-size: 15px;
    color: grey;
`

export const DetailContainer = styled.div`
    width: 50%;
    background: #e5e5e5;
    padding: 14px;
    color: #060719;
    border-bottom: 2px solid #fa5c19;
    @media only screen and (max-width: 780px) {
        width: 90%;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Input = styled.input`
    width: 46%;
    background: transparent;
    margin: 2%;
`

export const Button = styled.button`
    background: #f45c19;
    padding: 15px 25px;
    margin: 1.5%;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`