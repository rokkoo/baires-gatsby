import React, { useState } from "react"

// Hooks
import useCaptcha from "../../hooks/useCaptcha"

// styles
import {
  Text,
  Wrapper,
  Input,
  TextArea,
  Block,
  FormBlock,
  Button,
} from "./styles"
import { Divider, message } from "antd"

const Form = () => {
  const [state, setState] = useState()
  const { Captcha, encode } = useCaptcha()
  const recaptchaRef = React.createRef()

  const success = () => {
    message.success("Correo enviado!")
  }

  const error = () => {
    message.error("This is an error message")
  }

  const warning = () => {
    message.warning(
      "No se ha podido enviar el correo, porfavor llama al teléfono"
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // const s = recaptchaRef.current.getValue()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => success())
      .catch(error => error())
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper id="form-contact">
      <Divider orientation="left">Formulario</Divider>
      <FormBlock
        name="Formulario de contacto"
        method="post"
        action="/"
        data-netlify="true"
        // data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="asunto"
          type="text"
          required
          name="mail"
          onChange={handleChange}
        />
        <Input
          placeholder="email"
          type="email"
          name="mail"
          required
          onChange={handleChange}
        />
        <Input
          placeholder="email2"
          type="email2"
          name="mail2"
          required
          onChange={handleChange}
        />
        <TextArea
          required
          placeholder="Mensaje"
          onChange={handleChange}
          name="mensage"
        />
        <Block>
          {/* <Captcha ref={recaptchaRef} /> */}
          <Button type="submit">Enviar</Button>
        </Block>
      </FormBlock>
    </Wrapper>
  )
}

export default Form
