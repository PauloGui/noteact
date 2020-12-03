import styled from 'styled-components'

export const Container = styled.div`
    overflow: hidden;
    height: 100vh;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 10px 20px;
`

export const Logo = styled.img`
    object-fit: cover;
    height: 58px;
`

export const Button = styled.button`
    padding: 5px 40px;
    outline: none;
    cursor: pointer;
    border: 2px solid var(--color-green);
    background: transparent;
    color: var(--color-green);
    font-weight: 600;
`