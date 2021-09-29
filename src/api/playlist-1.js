require("dotenv").config()
const axios = require("axios")

export default async function playlist1(req, res) {
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=status&pageToken=EAEaBlBUOkNHUQ&maxResults=200&key=${process.env.TY_KEY}&playlistId=PLzc14R1Ecr9BnkvNvjoUip_b0TRQl1uMh`

  const method = req.method
  console.log(req.headers.channel)

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
