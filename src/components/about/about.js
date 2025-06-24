import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./about.css"
import CertOne from "../certOne/certOne"
import CertTwo from "../certTwo/certTwo"
import icon1 from "../../assets/images/langcert1.jpg"
import icon2 from "../../assets/images/langcert2.jpg"
import icon3 from "../../assets/images/langcert3.jpg"
import icon4 from "../../assets/images/langcert4.jpg"
import icon5 from "../../assets/images/webdevcert1.png"
import icon6 from "../../assets/images/webdevcert2.png"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 80
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const aboutImage = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <div className="about">
      <div className="about__facts">
        <div className="about__facts-text">
          <h3> Несколько фактов обо мне:</h3>
        <div className="about__facts-image">
          <GatsbyImage image={aboutImage} alt="About Image" />
        </div>
          <p><b>Кто я: </b>Елена Трифонова, проживаю в городе Чебоксары (столице Чувашской Республики), преподаватель английского языка в настоящем, устный и письменный переводчик в прошлом (английский, испанский и немецкий), веб-разработчик-любитель в настоящем и обозримом будущем, создатель этого сайта</p>
          <h4>Образование</h4>
          <ul>
            <li className="about__facts-list-item">
            Лингвист-переводчик по специальности перевод и переводоведение (английский и немецкий), Чувашский государственный педагогический университет им. И. Я. Яковлева
            </li>
            <li className="about__facts-list-item">
            Диплом профессиональной переподготовки: теория и методика преподавания иностранного языка (испанский), Чувашский государственный педагогический университет им. И. Я. Яковлева
            </li>
            <li className="about__facts-list-item">
            Сертификат CAE (Certificate in Advanced English) с оценкой Grade A (высшая оценка)
            </li>
            <li className="about__facts-list-item">
            Сертификаты по 3 модулям TKT (Teaching Knowledge Test) с оценкой Band 4 (высшая оценка)
            </li>
            <li className="about__facts-list-item">
              Мои хобби: веб-разработка, музыка (играю на гитаре и укулеле,
              учусь играть на ударных и пою немного), квизы, спорт.
            </li>
            <li>
              У меня есть личный помощник, а иногда и мешальщик — пушистая и
              прекрасная кошка Сима.
            </li>
          </ul>
          
          <p><b>Области преподавания: </b>общий английский, подготовка к кембриджским экзаменам, собеседования на английском, разговоры на английском на любые темы (в рамках приличного)</p>

          <p><b>Стиль преподавания: </b>душевная атмосфера, много разговорной практики, индивидуальная программа обучения, игры на английском</p>
        </div>
      </div>

      <div className="about__certificates grid-container" id="certificates">
        <div className="about__certificates-heading">
          <h2>Мои сертификаты</h2>
        </div>
        <div className="about__certificates-lang">
          <h3 className="about__certificates-subheading">
            Английский язык и преподавание
          </h3>
          <CertOne
            icon={icon1}
            title="Certificate in Advanced English"
            bullet1="Средний балл – 204 из 210, Grade A (средний уровень — C2);"
          />
          <CertOne
            icon={icon2}
            title="Teaching Knowledge Test Module 1"
            bullet1="Background to language learning and teaching, Band 4 (высшая оценка)"
          />
          <CertOne
            icon={icon3}
            title="Teaching Knowledge Test Module 2"
            bullet1="Lesson planning and use of resources for teaching, Band 4 (высшая оценка)"
          />
          <CertOne
            icon={icon4}
            title="Teaching Knowledge Test Module 3"
            bullet1="Managing the teaching and learning process, Band 4 (высшая оценка)"
          />
        </div>
        <div className="about__certificates-webdev">
          <h3 className="about__certificates-subheading">Веб-разработка</h3>
          <CertTwo
            icon={icon5}
            title="Адаптивная вёрстка веб-страниц (HTML + CSS)"
          />
          <CertTwo
            icon={icon6}
            title="Алгоритмы и структуры данных в JavaScript"
          />
        </div>
      </div>
    </div>
  )
}

export default About
