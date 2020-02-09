import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "../index.styles"

// https://www.zimrre.com/legal-app/

const AvisoLegal = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "carousel/im7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Aviso legal" />
      <Img
        style={{ minHeight: 200 }}
        fluid={data.fiscal.childImageSharp.fluid}
        alt="Aviso legal"
      />
      <Content>
        <Section>
          <Title big>Aviso legal</Title>
          <Title start>Política de Cookies</Title>
          <Text>
            En esta web se utilizan cookies de terceros y propias para conseguir
            que tengas una mejor experiencia de navegación, puedas compartir
            contenido en redes sociales y para que podamos obtener estadísticas
            de los usuarios. Puedes evitar la descarga de cookies a través de la
            configuración de tu navegador, evitando que las cookies se almacenen
            en su dispositivo. Como propietario de este sitio web, te comunico
            que no utilizamos ninguna información personal procedente de
            cookies, tan sólo realizamos estadísticas generales de visitas que
            no suponen ninguna información personal. Es muy importante que leas
            la presente política de cookies y comprendas que, si continúas
            navegando, consideraremos que aceptas su uso. Según los términos
            incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la
            Sociedad de la Información y Comercio Electrónico, si continúas
            navegando, estarás prestando tu consentimiento para el empleo de los
            referidos mecanismos.
          </Text>
        </Section>
        <Section>
          <Title start>Entidad Responsable</Title>
          <Text>
            La entidad responsable de la recogida, procesamiento y utilización
            de tus datos personales, en el sentido establecido por la Ley de
            Protección de Datos Personales es la página www.baires-asesoria.com,
            propiedad de Mónica Fernández Alvarez – Paseo Colón 33, 1°D. 20301
            Irun.
          </Text>
        </Section>
        <Section>
          <Title start>¿Qué son las cookies?</Title>
          <Text>
            Las cookies son un conjunto de datos que un servidor deposita en el
            navegador del usuario para recoger la información de registro
            estándar de Internet y la información del comportamiento de los
            visitantes en un sitio web. Es decir, se trata de pequeños archivos
            de texto que quedan almacenados en el disco duro del ordenador y que
            sirven para identificar al usuario cuando se conecta nuevamente al
            sitio web. Su objetivo es registrar la visita del usuario y guardar
            cierta información. Su uso es común y frecuente en la web ya que
            permite a las páginas funcionar de manera más eficiente y conseguir
            una mayor personalización y análisis sobre el comportamiento del
            usuario.
          </Text>
        </Section>
        <Section>
          <Title start>¿Qué tipos de cookies existen?</Title>
          <Text>
            Las cookies utilizadas en nuestro sitio web, son de sesión y de
            terceros, y nos permiten almacenar y acceder a información relativa
            al idioma, el tipo de navegador utilizado, y otras características
            generales predefinidas por el usuario, así como, seguir y analizar
            la actividad que lleva a cabo, con el objeto de introducir mejoras y
            prestar nuestros servicios de una manera más eficiente y
            personalizada. Las cookies, en función de su permanencia, pueden
            dividirse en cookies de sesión o permanentes. Las que expiran cuando
            el usuario cierra el navegador. Las que expiran en función de cuando
            se cumpla el objetivo para el que sirven (por ejemplo, para que el
            usuario se mantenga identificado en los servicios de Mónica
            Fernández Alvarez) o bien cuando se borran manualmente.
            Adicionalmente, en función de su objetivo, las cookies pueden
            clasificarse de la siguiente forma:
          </Text>
        </Section>
        <Section>
          <Title start>Cookies de rendimiento</Title>
          <Text>
            Este tipo de Cookie recuerda sus preferencias para las herramientas
            que se encuentran en los servicios, por lo que no tiene que volver a
            configurar el servicio cada vez que usted visita. A modo de ejemplo,
            en esta tipología se incluyen: Ajustes de volumen de reproductores
            de vídeo o sonido. Las velocidades de transmisión de vídeo que sean
            compatibles con su navegador. Los objetos guardados en el “carrito
            de la compra” en los servicios de e-commerce tales como tiendas.
          </Text>
        </Section>
        <Section>
          <Title start>Cookies de geo-localización</Title>
          <Text>
            Estas cookies son utilizadas para averiguar en qué país se encuentra
            cuando se solicita un servicio. Esta cookie es totalmente anónima, y
            sólo se utiliza para ayudar a orientar el contenido a su ubicación.
          </Text>
        </Section>
        <Section>
          <Title start>Cookies de registro</Title>
          <Text>
            Las cookies de registro se generan una vez que el usuario se ha
            registrado o posteriormente ha abierto su sesión, y se utilizan para
            identificarle en los servicios con los siguientes objetivos:
            Mantener al usuario identificado de forma que, si cierra un
            servicio, el navegador o el ordenador y en otro momento u otro día
            vuelve a entrar en dicho servicio, seguirá identificado, facilitando
            así su navegación sin tener que volver a identificarse. Esta
            funcionalidad se puede suprimir si el usuario pulsa la funcionalidad
            [cerrar sesión], de forma que esta cookie se elimina y la próxima
            vez que entre en el servicio el usuario tendrá que iniciar sesión
            para estar identificado. Comprobar si el usuario está autorizado
            para acceder a ciertos servicios, por ejemplo, para participar en un
            concurso. Adicionalmente, algunos servicios pueden utilizar
            conectores con redes sociales tales como Facebook o Twitter. Cuando
            el usuario se registra en un servicio con credenciales de una red
            social, autoriza a la red social a guardar una Cookie persistente
            que recuerda su identidad y le garantiza acceso a los servicios
            hasta que expira. El usuario puede borrar esta Cookie y revocar el
            acceso a los servicios mediante redes sociales actualizando sus
            preferencias en la red social que específica.
          </Text>
        </Section>
        <Section>
          <Title start>Cookies de analíticas</Title>
          <Text>
            Cada vez que un usuario visita un servicio, una herramienta de un
            proveedor externo genera una cookie analítica en el ordenador del
            usuario. Esta cookie que sólo se genera en la visita, servirá en
            próximas visitas a los servicios de Mónica Fernández Alvarez para
            identificar de forma anónima al visitante. Los objetivos principales
            que se persiguen son: Permitir la identificación anónima de los
            usuarios navegantes a través de la cookie (identifica navegadores y
            dispositivos, no personas) y por lo tanto la contabilización
            aproximada del número de visitantes y su tendencia en el tiempo.
            Identificar de forma anónima los contenidos más visitados y por lo
            tanto más atractivos para los usuarios Saber si el usuario que está
            accediendo es nuevo o repite visita. Importante: Salvo que el
            usuario decida registrarse en un servicio de Mónica Fernández
            Alvarez, la cookie nunca irá asociada a ningún dato de carácter
            personal que pueda identificarle. Dichas cookies sólo serán
            utilizadas con propósitos estadísticos que ayuden a la optimización
            de la experiencia de los usuarios en el sitio.
          </Text>
        </Section>
        <Section>
          <Title start>Cookies de publicidad</Title>
          <Text>
            Este tipo de cookies permiten ampliar la información de los anuncios
            mostrados a cada usuario anónimo en los servicios de Mónica
            Fernández Alvarez. Entre otros, se almacena la duración o frecuencia
            de visualización de posiciones publicitarias, la interacción con las
            mismas, o los patrones de navegación y/o comportamientos del usuario
            ya que ayudan a conformar un perfil de interés publicitario. De este
            modo, permiten ofrecer publicidad afín a los intereses del usuario.
          </Text>
        </Section>
        <Section>
          <Title start>Cookies publicitarias de terceros</Title>
          <Text>
            Además de la publicidad gestionada por las webs de Mónica Fernández
            Alvarez en sus servicios, las webs de Mónica Fernández Alvarez
            ofrecen a sus anunciantes la opción de servir anuncios a través de
            terceros (“Ad-Servers”). De este modo, estos terceros pueden
            almacenar cookies enviadas desde los servicios de Mónica Fernández
            Alvarez procedentes de los navegadores de los usuarios, así como
            acceder a los datos que en ellas se guardan. Las empresas que
            generan estas cookies tienen sus propias políticas de privacidad. En
            la actualidad, las webs de Mónica Fernández Alvarez utilizan la
            plataforma Doubleclick (Google) para gestionar estos servicios. Para
            más información, acuda a
            <a href="http://www.google.es/policies/privacy/ads/#toc-doubleclick">
              http://www.google.es/policies/privacy/ads/#toc-doubleclick
            </a>
            y a{" "}
            <a href="http://www.google.es/policies/privacy/ads/">
              http://www.google.es/policies/privacy/ads/
            </a>
          </Text>
        </Section>
        <Section>
          <Title start>
            ¿Cómo puedo deshabilitar las cookies en mi navegador?
          </Title>
          <Text>
            Se pueden configurar los diferentes navegadores para avisar al
            usuario de la recepción de cookies y, si se desea, impedir su
            instalación en el equipo. Asimismo, el usuario puede revisar en su
            navegador qué cookies tiene instaladas y cuál es el plazo de
            caducidad de las mismas, pudiendo eliminarlas. Para ampliar esta
            información consulte las instrucciones y manuales de su navegador:
            Para más información sobre la administración de las cookies en
            Google Chrome:{" "}
            <a href="https://support.google.com/chrome/answer/95647?hl=es">
              https://support.google.com/chrome/answer/95647?hl=es
            </a>
            Para más información sobre la administración de las cookies en
            Internet Explorer:
            <a href="http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions">
              http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions
            </a>
            Para más información sobre la administración de las cookies en
            Mozilla Firefox:
            <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
              http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
            </a>
            Para más información sobre la administración de las cookies en
            Safari:{" "}
            <a href="http://www.apple.com/es/privacy/use-of-cookies/">
              http://www.apple.com/es/privacy/use-of-cookies/
            </a>
            Para más información sobre la administración de las cookies en
            Opera:{" "}
            <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html">
              http://help.opera.com/Windows/11.50/es-ES/cookies.html
            </a>{" "}
            Si desea dejar de ser seguido por Google Analytics visite:
            <a href="http://tools.google.com/dlpage">
              http://tools.google.com/dlpage
            </a>
          </Text>
        </Section>
        <Section>
          <Title start>
            Actualizaciones y cambios en la política de privacidad/cookies
          </Title>
          <Text>
            Las webs de Mónica Fernández Alvarez pueden modificar esta Política
            de Cookies en función de exigencias legislativas, reglamentarias, o
            con la finalidad de adaptar dicha política a las instrucciones
            dictadas por la Agencia Española de Protección de Datos, por ello se
            aconseja a los usuarios que la visiten periódicamente. Cuando se
            produzcan cambios significativos en esta Política de Cookies, estos
            se comunicarán a los usuarios bien mediante la web o a través de
            correo electrónico a los usuarios registrados.
          </Text>
        </Section>
      </Content>
    </Layout>
  )
}

export default AvisoLegal
