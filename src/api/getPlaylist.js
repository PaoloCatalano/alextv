require("dotenv").config()
const axios = require("axios")

export default async function getPlaylist(req, res) {
  const playlists = [
    "PLzc14R1Ecr9CxnrJ610YvETd-A0M7692z",
    "PLzc14R1Ecr9BnkvNvjoUip_b0TRQl1uMh",
    "PLzc14R1Ecr9A63eMiyBLH7aX9ZB5m5z1f",
    "PLzc14R1Ecr9A5O7kOfLqhOAdNjRXgQIiH",
    "PLzc14R1Ecr9CzA4y33wen4DN61quy7MSO",
    "PLzc14R1Ecr9Cg_L6JvZzBGOEDUpQ3iRdT",
    "PLzc14R1Ecr9BsN41elWchjhkSl-ypSRw_",
    "PLzc14R1Ecr9DsbBtjZsASUSW_Qwvk2V4L",
    "PLzc14R1Ecr9AqkXA4jPtq8-CWCdBQCLDT",
  ]
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=status&maxResults=200&key=${
    process.env.TY_KEY
  }&playlistId=${playlists[req.headers.channel - 1]}`

  const method = req.method

  if (method !== "GET") {
    res.status(405).json({ mgs: "Only Get requests allowed!" })
  }

  try {
    const { data } = await axios.get(url)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(400).json({ mgs: error })
  }
}
