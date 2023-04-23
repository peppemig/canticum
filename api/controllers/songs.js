import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import dotenv from "dotenv"
import getMP3Duration from "get-mp3-duration"

dotenv.config()

const bucketName = process.env.BUCKET

const client = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET
    }
})

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  

export const uploadSong = async (req,res) => {
    const links = []
    const {file} = req

    const duration = getMP3Duration(file.buffer)

    const ext = file.originalname.split('.')[1]
    const newFileName = "Song" + Date.now() + '.' + ext

    await client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: newFileName,
        Body: file.buffer,
        ACL: 'public-read',
        ContentType: file.mimetype
    }))

    const link = `https://${bucketName}.s3.amazonaws.com/${newFileName}`
    links.push(link)

    return res.status(200).json(links)

}

export const getSongDuration = async (req,res) => {
    const {file} = req
    const duration = getMP3Duration(file.buffer)
    const durationFormatted = millisToMinutesAndSeconds(duration)
    return res.status(200).json(durationFormatted)
}