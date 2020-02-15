import styled from "styled-components"
import { theme } from "../theme"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.primaryDark};
  padding-top: 10px;
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
`

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-style: solid;
  border-color: ${theme.gray};
`

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 5px;
  transition: all 0.3s ease 0s;
  border-style: solid;
  min-height: 10em;
  resize: none;
  border-style: solid;
  border-width: 2px;
  border-color: ${theme.gray};
`

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
`

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 10px;
  height: fit-content;
  background-color: white;
  border: 1px solid ${theme.gray};
`
