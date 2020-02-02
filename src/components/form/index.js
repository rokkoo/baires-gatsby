import React, { useState } from "react"

// Hooks
import useCaptcha from "../../hooks/useCaptcha"

// styles
import { Text, Wrapper, Input, TextArea, Block } from "./styles"
import { Divider, Button, message } from "antd"

const Form = () => {
  const { Captcha, captchaValue } = useCaptcha()
  const [isLoading, setIsloading] = useState(false)

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

  const onClick = value => {
    try {
      console.log(value)
      setIsloading(true)
      setTimeout(() => {
        success()
        setIsloading(false)
      }, 2000)
    } catch (e) {
      error()
    }
  }

  return (
    <Wrapper>
      <Divider orientation="left">Formulario</Divider>
      <Input placeholder="Asunto" />
      <Input placeholder="email de contacto" />
      <TextArea placeholder="Mensaje" />
      <Block>
        <Captcha />
        <Button type="secundary" loading={isLoading} onClick={onClick}>
          Enviar
        </Button>
      </Block>
    </Wrapper>
  )
}

export default Form
