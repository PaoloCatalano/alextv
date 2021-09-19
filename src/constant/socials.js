import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ImFacebook2, ImSoundcloud } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { FaInstagram, FaYoutube, FaBandcamp } from "react-icons/fa"

const email = "napolirockersyndicate@gmail.com"
const numberDavide = "393801220366"
const numberEnrico = "393771050823"

export const socials = [
  {
    id: 0,
    text: `${email}`,
    url: `mailto:${email}`,
    icon: <FiMail className="icon" style={{ color: "var(--black-logo)" }} />,
  },
  {
    id: 1,
    text: `Davide: +${numberDavide}`,
    url: `https://wa.me/${numberDavide}`,
    icon: <FaWhatsapp className="icon" />,
  },
  {
    id: 2,
    text: `Enrico: +${numberEnrico}`,
    url: `https://wa.me/${numberEnrico}`,
    icon: <FaWhatsapp className="icon" />,
  },
  {
    id: 3,
    text: "",
    url: "https://www.facebook.com/napolirockers/",
    icon: <ImFacebook2 className="icon" style={{ color: "blue" }} />,
  },
  {
    id: 4,
    text: "",
    url: "https://www.youtube.com/user/NapoliRockersSyndic",
    icon: <FaYoutube className="icon" style={{ color: "var(--red)" }} />,
  },
  {
    id: 5,
    text: "",
    url: "https://napolirockersyndicate.bandcamp.com/",
    icon: <FaBandcamp className="icon" style={{ color: "var(--black)" }} />,
  },
  {
    id: 6,
    text: "",
    url: "https://www.instagram.com/napolirockers/",
    icon: (
      <FaInstagram className="icon" style={{ color: "var(--orange-logo)" }} />
    ),
  },
  {
    id: 7,
    text: "",
    url: "https://soundcloud.com/napolirockersyndicate",
    icon: <ImSoundcloud className="icon" style={{ color: "var(--yellow)" }} />,
  },
]

const tempSocials = socials.map(({ id, text, url, icon }) => {
  return (
    <li key={id}>
      <a href={url} className="a-social" target="_blank" rel="noreferrer">
        {icon}
        {text}
      </a>
    </li>
  )
})
const social = ({ styleClass }) => {
  return (
    <>
      <div
        style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "center" }}
      >
        Contacts
      </div>
      <ul className={styleClass}>{tempSocials}</ul>
    </>
  )
}
export default social
