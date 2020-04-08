import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    margin: 5% 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 780px) {
    }
`

export const SignContainer = styled.div`
    width: 40%;
    /* display: flex;
    flex-direction: column; */
    @media only screen and (max-width: 780px) {
        width: 100%;
    }
`

export const Sign = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 780px) {
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.h1`
    width: 300px;
    color: #060719;
    opacity: .8;
    font-weight: bolder;
`

export const Text = styled.p`
    width: 200px;
    color: #886688;
    opacity: .8;
`