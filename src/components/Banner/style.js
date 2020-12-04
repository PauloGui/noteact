import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`

export const ImgTitle = styled.img`
    padding: 20px;
`

export const ImgSub = styled.img`
`

export const Img = styled.img`
    padding: 20px;
`

export const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  height:45px;
  border:0;
  background-color:#14CC45;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border-radius:3px;
  text-decoration: none;
  outline: none;
  color: white;
  margin:30px;
  padding:10px 80px;
  cursor: pointer;
  transition: 0.2s;

    :hover{
        background: ${shade(0.2, '#14CC45')}
    }
`