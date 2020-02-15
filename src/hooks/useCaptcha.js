import React, { useState, useMemo } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const RECAPTCHA_KEY =
  process.env.SITE_RECAPTCHA_KEY ?? "6LfcMNkUAAAAANeRwUR_kw2o8XFgJ4DiYAe7TUZL"

console.log("RECAPTCHA_KEY", RECAPTCHA_KEY)

if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const UseCaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState(null)

  const onChange = value => {
    setCaptchaValue(value)
    // console.log("Captcha value:", value)
  }

  const Captcha = () => (
    <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={onChange} />
  )

  return { Captcha, captchaValue, encode }
}

export default UseCaptcha
