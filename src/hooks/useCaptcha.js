import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const UseCaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState(null)

  const onChange = value => {
    setCaptchaValue(value)
    // console.log("Captcha value:", value)
  }

  const Captcha = () => (
    <ReCAPTCHA
      sitekey="6Lcj2tQUAAAAAGaVk2I86ViCT1Xoe_B7nFateNCA"
      onChange={onChange}
    />
  )

  return { Captcha, captchaValue }
}

export default UseCaptcha
