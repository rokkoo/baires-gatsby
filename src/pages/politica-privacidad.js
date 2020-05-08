import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "../index.styles"

const PoliticaPrivacidad = () => {
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
          <Title big>
            Política de Privacidad - Protección de datos Personales
          </Title>
          <Title start>1. Finalidades y Responsable del Tratamiento</Title>
          <Text>
            En cumplimiento de la normativa vigente sobre Protección de Datos
            Personales, con especial referencia al Reglamento UE 2016/679 del
            Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de estos
            datos (“RGPD”) y a la Ley Orgánica 3/2018, de 5 de diciembre, de
            Protección de Datos Personales y garantía de los derechos digitales
            (“LOPDGDD”), se informa a las personas usuarias que los datos
            personales que faciliten mediante correo electrónico, enviados a
            través de formularios, áreas privadas, o por cualquier otro medio
            ubicado en este sitio web serán incorporados a sistemas de
            tratamiento de datos de Baires Asesoramiento, S.L., Responsable del
            Tratamiento (NIF: B75234534), con la finalidad de atender a las
            consultas y solicitudes recibidas, contactar con usted, gestionar
            los servicios solicitados, las relaciones profesionales y
            comerciales y las funciones e intereses legítimos propios de su
            actividad, así como para el envío de los boletines y noticias a los
            que se haya podido suscribir y para el envío de futuras
            comunicaciones profesionales y comerciales que pudieran ser de su
            interés.
          </Text>
        </Section>
        <Section>
          <Title start>2. Bases jurídicas y legitimadoras</Title>
          <Text>
            Las bases jurídicas de los tratamientos de datos descritos son, en
            los términos establecidos por la normativa sobre protección de
            datos, su consentimiento para el tratamiento de los datos (por
            ejemplo, formularios de contacto), la necesidad del tratamiento de
            sus datos para la ejecución de los servicios solicitados por usted
            (por ejemplo, navegación y utilización de nuestro sitio web o
            contratación de nuestros servicios), el cumplimiento de obligaciones
            legales (por ejemplo, comunicaciones obligatorias a administraciones
            públicas), y/o el interés legítimo del Responsable del Tratamiento
            (por ejemplo, a efectos de enviarle comunicaciones profesionales,
            comerciales o informativas). El tratamiento de sus datos personales
            se realizará de manera confidencial. Baires Asesoramiento, S.L. está
            comprometida con la privacidad y la protección de los datos
            personales de las personas usuarias y utiliza sus recursos para
            garantizar la seguridad y privacidad de los interesados.
          </Text>
        </Section>
        <Section>
          <Title start>3. Recogida de datos personales</Title>
          <Text>
            El Responsable del Tratamiento no requiere que proporcione datos
            personales para acceder al sitio web, no obstante, en el sitio web
            pueden existir formularios de contacto y suscripción a boletines,
            cuyo uso requiera que la persona usuaria aporte datos personales, en
            su mayoría identificativos y/o de contacto. La persona usuaria
            aporta sus datos personales de forma libre y voluntaria. Baires
            Asesoramiento, S.L. no solicita más información personal que la que
            es necesaria para llevar a cabo el servicio solicitado. La persona
            usuaria que incluya en este sitio web cualquier tipo de contenido
            (documentos, datos, textos, imágenes, mensajes u otro material)
            declara y garantiza hacerlo de modo que se ajuste a las condiciones
            aquí expresadas y a la legalidad vigente. La persona usuaria que
            incluya datos personales de terceros declara que cuenta con el
            consentimiento expreso de éstos para su tratamiento. La persona
            usuaria es la única responsable de la veracidad, corrección y
            tratamiento legítimo de los datos incluidos, exonerando a Baires
            Asesoramiento, S.L. de cualquier responsabilidad al respecto. Las
            personas usuarias garantizan y responden, en cualquier caso, de la
            exactitud, vigencia y autenticidad de los datos personales
            facilitados, y se comprometen a mantenerlos debidamente
            actualizados. La no cumplimentación o cumplimentación errónea de
            campos indicados como obligatorios en los formularios del sitio web
            podrá tener como consecuencia que el Responsable del Tratamiento no
            pueda atender la solicitud de la persona usuaria. El Responsable del
            Tratamiento recogerá los datos personales de manera adecuada,
            pertinente según las finalidades, utilidades, servicios y/o
            prestaciones incluidas en su web, de forma determinada, explícita y
            legítima, por lo que en ningún caso se emplearán medios
            fraudulentos, desleales, ilícitos o que en alguna forma pongan en
            peligro los legítimos derechos de las personas usuarias. El envío de
            información a través de este sitio web conlleva necesariamente la
            autorización expresa para los tratamientos de datos descritos en
            esta política de privacidad, política de cookies y en las
            condiciones generales del sitio web
          </Text>
        </Section>
        <Section>
          <Title start>4. Recogida de datos de menores</Title>
          <Text>
            Los servicios del Responsable del Tratamiento no van dirigidos a
            menores de edad. En el supuesto que algunos de nuestros servicios
            fueran dirigidos específicamente a menores de edad, Baires
            Asesoramiento, S.L. solicitaría la conformidad de los padres o
            tutores para la recogida de los datos personales o, en su caso, para
            el tratamiento de los datos.
          </Text>
        </Section>
        <Section>
          <Title start>5. Currículos</Title>
          <Text>
            La persona usuaria que aporte su currículum vitae a través de este
            sitio web, formularios, correo electrónico o mecanismos similares,
            otorga su consentimiento expreso para la inclusión de sus datos en
            el tratamiento de datos denominado "Administración". Sus datos
            podrán ser utilizados con la finalidad de hacerle participar en
            futuros procesos de selección de personal de la empresa. Asimismo,
            sus datos podrán ser cedidos a empresas externas a las que el
            Responsable del Tratamiento contrate para la realización de procesos
            de selección de personal.
          </Text>
        </Section>
        <Section>
          <Title start>6. Boletín electrónico</Title>
          <Text>
            En el caso de suscripción a boletines informativos, las personas
            usuarias podrán solicitar la baja de dichos servicios en el momento
            que lo deseen dirigiendo una solicitud a la dirección de correo
            electrónico info@baires-asesoria.com o utilizando cualquier otro
            medio que el Responsable del Tratamiento facilite a tal efecto, como
            por ejemplo el mecanismo denominado “Darse de baja” o “Unsubscribe”,
            ubicado en la parte final de los propios boletines informativos.
          </Text>
        </Section>
        <Section>
          <Title start>7. Enlace a redes sociales y canales web</Title>
          <Text>
            Este sitio web puede ofrecer enlaces a redes sociales y sitios y
            canales web externos (Facebook, Twitter, etc.). Baires
            Asesoramiento, S.L. no asume ninguna responsabilidad en relación con
            estos sitios enlazados. La persona usuaria que acceda a redes
            sociales y sitios y canales web externos, relacionados con Baires
            Asesoramiento, S.L., desde los enlaces ubicados en este sitio web o
            de cualquier otra forma, queda previa y expresamente informada de
            que las condiciones de uso, políticas de privacidad, políticas de
            cookies y cualesquiera condiciones y/o normativas dependen de las
            entidades responsables de dichas redes sociales y sitios y canales
            web, y nunca de Baires Asesoramiento, S.L.
          </Text>
        </Section>
        <Section>
          <Title start>8. Derechos de las personas interesadas</Title>
          <Text>
            Puede ejercer los derechos de acceso, rectificación, supresión,
            limitación al tratamiento, portabilidad y oposición, así como
            retirar su consentimiento o realizar cualquier otra solicitud sobre
            esta materia dirigiéndose por escrito al Responsable del
            Tratamiento, Baires Asesoramiento, S.L., en Paseo de Colón, 33, 1º
            D, en 20301 Irun (Gipuzkoa), tef. 943532029, o bien a través de la
            dirección de correo electrónico info@baires-asesoria.com. La
            solicitud deberá llevar adjunta copia de documento de acreditativo
            de la identidad del solicitante (DNI o similares). En caso de
            realizar la solicitud en su condición de representante legal, deberá
            adjuntar, además de la copia de documento de acreditativo de la
            identidad del solicitante, un documento acreditativo de tal
            representación. La autoridad de control a la que usted puede
            dirigirse en caso de no estar de acuerdo con la resolución de las
            solicitudes o para presentar una reclamación es la Agencia Española
            de Protección de Datos: www.aepd.es
          </Text>
        </Section>
        <Section>
          <Title start>9. Medidas de seguridad</Title>
          <Text>
            El Responsable del Tratamiento tratará los datos personales
            contenidos en sus tratamientos de datos adoptando las medidas de
            índole técnica y organizativa que sean necesarias para garantizar su
            seguridad y evitar su alteración, pérdida, tratamiento o acceso no
            autorizado, habida cuenta del estado de la tecnología, la naturaleza
            de los datos almacenados y los riesgos a que están expuestos, ya
            provengan de la acción humana o del medio físico o natural, de
            acuerdo con la legislación vigente que resulte de aplicación en
            materia de medidas de seguridad de los tratamientos de datos
            personales. Sin embargo, las personas usuarias son informadas de que
            las medidas de seguridad informática no son inexpugnables y no se
            está a salvo de posibles intromisiones ilegales e indebidas, que no
            serían responsabilidad del Responsable del Tratamiento. Con el fin
            de garantizar la seguridad y privacidad dla persona usuaria Baires
            Asesoramiento, S.L. utiliza tecnología de encriptación basada en
            protocolos de capa de conexión segura con el objetivo de que la
            navegación sea lo más segura posible.
          </Text>
        </Section>

        <Section>
          <Title start>10. Brechas de seguridad e incidencias</Title>
          <Text>
            La persona usuaria deberá comunicar inmediatamente a Baires
            Asesoramiento, S.L. cualquier brecha de seguridad, incidencia o
            utilización indebida o no autorizada que detecte en relación con
            este sitio web. Como mecanismos de aviso preferentes se establecen
            el teléfono 943532029 y la dirección de correo electrónico
            info@baires-asesoria.com
          </Text>
        </Section>
        <Section>
          <Title start>11. Vigencia</Title>
          <Text>
            Baires Asesoramiento, S.L. se reserva el derecho de modificar su
            política de privacidad de acuerdo a su criterio, a cambios
            legislativos o jurisprudenciales. Si el Responsable del Tratamiento
            introdujera alguna modificación, el nuevo texto será publicado en
            este mismo sitio web, donde la persona usuaria podrá tener
            conocimiento de la misma. En cualquier caso, la relación con las
            personas usuarias se regirá por las normas previstas en el momento
            preciso en que se accede al sitio web. Es por ello que el
            Responsable del Tratamiento le recomienda visitar esta política de
            privacidad cada vez que se conecte al sitio web.
          </Text>
        </Section>
        <Section>
          <Title start>12. Jurisdicción</Title>
          <Text>
            Las relaciones establecidas entre Baires Asesoramiento, S.L. y la
            persona usuaria se regirán por lo dispuesto en la normativa vigente
            acerca de la legislación aplicable y la jurisdicción competente. No
            obstante, para los casos en los que la normativa prevea la
            posibilidad a las partes de someterse a un fuero, Baires
            Asesoramiento, S.L. y la persona usuaria, con renuncia expresa a
            cualquier otro fuero que pudiera corresponderles, se someten a los
            Juzgados y Tribunales de Irun (Gipuzkoa). Baires Asesoramiento, S.L.
            perseguirá el incumplimiento de esta Política de Privacidad, así
            como cualquier utilización indebida de los contenidos presentados en
            este sitio web ejerciendo todas las acciones civiles y penales que
            le puedan corresponder en Derecho, incluyendo las de naturaleza
            económica.
          </Text>
        </Section>
      </Content>
    </Layout>
  )
}

export default PoliticaPrivacidad
