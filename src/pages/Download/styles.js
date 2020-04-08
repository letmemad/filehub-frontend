import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 780px) {
        height: 100%;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

export const Header = styled.header`
    width: 100%;
    padding: 15px;
    background: #22A517;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
`

export const DownloadContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 780px) {
        width: 90%;
    }
`

export const DownloadContent = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border-radius: 5px 20px;
    background: transparent;
    box-shadow: 0 0 100px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 400px;
    color: #060719;
    opacity: .8;
    font-weight: bolder;
`

export const Text = styled.p`
    width: 98%;
    max-width: 500px;
    color: #886688;
    opacity: .8;
`

export const Button = styled.button`
    padding: 15px 30px;
    margin: 10px 0;
    border: none;
    font-family: "Nunito", sans-serif;
    font-weight: bolder;
    border-radius: 20px 50px;
    background-color: #FA5C19;
    color: #fff;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    background: #e5e5e5;
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    @media only screen and (max-width: 780px) {
        width: 100%;
        background: transparent;
    }
`