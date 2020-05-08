import styled from "styled-components"
import { theme } from "../theme"
import { string } from "prop-types"

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
  align-content: center;
  align-items: center;
`

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 10px;
  height: fit-content;
  background-color: ${props => (props.active ? "#dcdde1" : "white")};
  border: 1px solid ${theme.gray};
  cursor: pointer;
  border-radius: 2px;
`

export const Row = styled.div`
  display: flex;
`

export const UnderlineText = styled.a`
  text-decoration: underline;
  color: black;
`
export const Comp = styled.p`
  margin: 0 8px 0 8px;
  padding: 0;
`

export const CheckBox = styled.input``
