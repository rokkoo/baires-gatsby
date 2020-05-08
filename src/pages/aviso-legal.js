import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "../index.styles"

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
          <Title start>Información legal</Title>
          <Text>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico, le
            informamos que el dominio de internet www.baires-asesoria.com es
            titularidad de Baires Asesoramiento, S.L. (NIF: B75234534), con
            domicilio en Paseo de Colón, 33, 1º D, en 20301 Irun (Gipuzkoa),
            teléfono 943532029, correo electrónico info@baires-asesoria.com,
            inscrita en el Registro Mercantil de Gipuzkoa, Tomo 2935, Folio 50,
            Hoja SS-42479. Baires Asesoramiento, S.L. (en adelante “el
            Responsable del Tratamiento”) es una sociedad cuyo objeto es la
            prestación de servicios de asesoramiento y gestión contable, fiscal,
            laboral y en materias relacionadas. La finalidad del sitio web es
            dar a conocer los servicios del Responsable del Tratamiento. El
            sitio web ubicado en www.baires-asesoria.com (en adelante “el sitio
            web”) es propiedad de Baires Asesoramiento, S.L. La persona que
            visita y utiliza este sitio web es usuaria del sitio web (en
            adelante “la persona usuaria”).
          </Text>
        </Section>
        <Section>
          <Title start>1. Condiciones Generales</Title>
          <Text>
            La persona usuaria accede a este sitio web de forma voluntaria. El
            acceso a este sitio web tiene carácter gratuito. La navegación en
            este sitio web implica aceptar y conocer las advertencias legales,
            condiciones y términos de uso, política de privacidad y política de
            cookies contenidos en él. Si la persona usuaria no está de acuerdo
            con estas condiciones, no podrá hacer uso de este sitio web. El
            acceso a este sitio web, así como el uso que pueda hacerse de la
            información que contiene, son de la exclusiva responsabilidad de la
            persona usuaria, que se compromete a hacer uso del mismo de acuerdo
            a la finalidad del sitio web. La persona usuaria no puede hacer un
            uso ilícito de la información contenida en este sitio web, ni llevar
            a cabo acciones que puedan dañar o alterar sus sistemas
            informáticos. Queda prohibida la inclusión y comunicación de
            contenidos, por parte de las personas usuarias, que sean falsos o
            inexactos y que induzcan o puedan inducir a error al Responsable del
            Tratamiento, a otras personas usuarias del sitio web o terceros. La
            persona usuaria será la única responsable de los perjuicios que
            cause mediante la comunicación de dichos datos. Queda prohibido el
            uso de datos personales de terceros sin su consentimiento, así como
            el uso de datos identificativos de terceros con el ánimo de hacerse
            pasar por o fingir ser cualquier otra persona o entidad. El
            Responsable del Tratamiento realiza los máximos esfuerzos a su
            alcance para evitar errores en los contenidos que se publican en el
            sitio web, reservándose la facultad de poder modificarlos en
            cualquier momento. Baires Asesoramiento, S.L. declina expresamente
            cualquier responsabilidad por error u omisión en los contenidos de
            este sitio web y de los daños y perjuicios que puedan deberse a la
            falta de veracidad, exactitud y actualidad de los mismos. El sitio
            web puede ofrecer enlaces a otros sitios web o facilitar su acceso
            mediante un buscador ubicado en el sitio web. Baires Asesoramiento,
            S.L. no asume ninguna responsabilidad en relación con estos sitios
            enlazados, ni los resultados de las búsquedas, ya que no tiene
            ningún tipo de control sobre ellos, su contenido, productos y
            servicios ofrecidos, etc. La finalidad de estos servicios es
            informar a la persona usuaria de otras fuentes de información, por
            lo que la persona usuaria accede bajo su exclusiva responsabilidad
            al contenido y en las condiciones de uso que rijan en los mismos. En
            el caso de enlaces a redes sociales, titularidad del Responsable del
            Tratamiento o de terceros, las mismas se regirán por las condiciones
            generales de dichas redes. Baires Asesoramiento, S.L. no se
            responsabilizará de ninguna consecuencia, daño o perjuicio que
            pudieran derivarse del uso de este sitio web o de sus contenidos,
            incluidos daños informáticos y la introducción de virus o cualquier
            tipo de software malicioso. El Responsable del Tratamiento no
            garantiza la ausencia de virus ni de otros elementos dañinos en el
            sitio web, introducidos por terceros, que puedan producir
            alteraciones en los sistemas físicos o lógicos de las personas
            usuarias, pero utiliza los medios a su alcance para que esto no
            suceda. Baires Asesoramiento, S.L. se reserva el derecho de
            modificar o borrar en cualquier momento, sin previo aviso y/o
            justificación, el diseño, la configuración y la información
            contenida en este sitio web, si así lo estima oportuno. El
            Responsable del Tratamiento no se hace responsable de los perjuicios
            que estas modificaciones puedan causar. No obstante, utilizará los
            recursos que tenga a su alcance para informar a las personas
            usuarias de dichas modificaciones.
          </Text>
        </Section>
        <Section>
          <Title start>2. Propiedad intelectual e industrial</Title>
          <Text>
            Los derechos de propiedad de este sitio web, de sus páginas,
            secciones, pantallas, la información que contienen, su apariencia y
            diseño, textos, fotografías, imágenes, audios, vídeos, animaciones,
            sus productos y servicios, marcas, logos, lemas, etc. son propiedad
            de Baires Asesoramiento, S.L., salvo que se especifique otra cosa.
            En ningún caso el acceso o navegación en el sitio web implica
            renuncia, transmisión o licencia total o parcial de Baires
            Asesoramiento, S.L. para uso personal y/o profesional a la persona
            usuaria sobre sus derechos de propiedad intelectual e industrial. La
            reproducción, distribución, comercialización o transformación no
            autorizadas de estos contenidos constituye una infracción de los
            derechos de propiedad intelectual del Responsable del Tratamiento.
            La persona usuaria se compromete a no realizar ninguna acción que
            perjudique la titularidad de este sitio web. La utilización no
            autorizada de la información contenida en este sitio web, así como
            los perjuicios ocasionados en los derechos de propiedad intelectual
            e industrial de sus titulares, pueden dar lugar al ejercicio de las
            acciones que legalmente correspondan y, si procede, a las
            responsabilidades que de dicho ejercicio se deriven, incluidas las
            de naturaleza económica.
          </Text>
        </Section>
        <Section>
          <Title start>3. Modificaciones</Title>
          <Text>
            Estas Condiciones podrán sufrir modificaciones cuando Baires
            Asesoramiento, S.L. lo considere oportuno, bien con la finalidad de
            adecuarse a los cambios legislativos, bien con el fin de llevar a
            cabo otro tipo de mejoras. Estas modificaciones serán válidas desde
            su publicación en este sitio web. El Responsable del Tratamiento
            utilizará los medios a su alcance para dar a conocer a las personas
            usuarias del sitio web los cambios realizados.
          </Text>
        </Section>
        <Section>
          <Title start>4. Jurisdicción</Title>
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
            Las relaciones establecidas entre Baires Asesoramiento, S.L. y la
            persona usuaria se regirán por lo dispuesto en la normativa vigente
            acerca de la legislación aplicable y la jurisdicción competente. No
            obstante, para los casos en los que la normativa prevea la
            posibilidad a las partes de someterse a un fuero, el Responsable del
            Tratamiento y la persona usuaria, con renuncia expresa a cualquier
            otro fuero que pudiera corresponderles, se someten a los Juzgados y
            Tribunales de Irun (Gipuzkoa). Baires Asesoramiento, S.L. perseguirá
            el incumplimiento de las anteriores condiciones, así como cualquier
            utilización indebida de los contenidos y funciones incluidas en su
            sitio web ejerciendo todas las acciones civiles y penales que le
            puedan corresponder en Derecho, incluyendo las de naturaleza
            económica.
          </Text>
        </Section>
      </Content>
    </Layout>
  )
}

export default AvisoLegal
