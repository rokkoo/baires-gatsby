import React from "react"
import { Link } from "gatsby"

// Styles
import {
  Footer,
  AddressWrapper,
  MapWrapper,
  HourWrapper,
  ContactWrapper,
  Title,
  Text,
  Block,
  MapUrl,
  InformationWrapper,
  Column,
} from "./styles"
import { Divider } from "antd"

// Deep link
// https://www.google.com/maps/search/?api=1&query=irun+paseo+colon

const FooterComponent = ({ siteTitle, telephone, mobile, address }) => {
  function currentDate() {
    const date = new Date()
    var monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octobre",
      "Nomviembre",
      "Deciembre",
    ]

    var day = date.getDate()
    var monthIndex = date.getMonth()
    var year = date.getFullYear()

    return `${siteTitle}® - ${day} de ${monthNames[monthIndex]} de ${year}`
  }

  return (
    <Footer>
      <MapWrapper>
        <Block>
          <Title>Mapa</Title>
          <MapUrl
            href="https://www.google.com/maps/search/?api=1&query=irun+Paseo+Colón+33+1°D"
            target="_blank"
          >
            - Abrir en maps
          </MapUrl>
        </Block>
        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%20Paseo%20Col%C3%B3n%2033%2C%201%C2%B0D.%2020301%20Irun+(Baires-asesoria)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </MapWrapper>
      <InformationWrapper>
        <AddressWrapper>
          <Title>Dirección</Title>
          <Text>{address}</Text>
          <Text>20301 - Irún, Guipúzkoa</Text>
        </AddressWrapper>
        <HourWrapper>
          <Title>Horario</Title>
          <Text primary>Lunes A Jueves</Text>
          <Text>8:30 A 16:30</Text>
          <Text primary>Viernes</Text>
          <Text>8:30 A 14:30</Text>
        </HourWrapper>
        <ContactWrapper>
          <Title>Contacto</Title>
          <Text primary>Teléfono: {telephone}</Text>
          <Text>Movil: {mobile}</Text>
        </ContactWrapper>
      </InformationWrapper>
      <Divider style={{ opacity: 0.1, margin: "20px 0" }} />

      <Text>{currentDate()}</Text>
      <Column>
        <Link
          to="/aviso-legal"
          style={{ color: "white", opacity: 0.8 }}
          onClick={() => sessionStorage.setItem("key", "none")}
        >
          Aviso legal
        </Link>
        <Link
          to="/politica-privacidad"
          style={{ color: "white", opacity: 0.8 }}
          onClick={() => sessionStorage.setItem("key", "none")}
        >
          Política de privacidad
        </Link>
      </Column>
    </Footer>
  )
}

export default FooterComponent
