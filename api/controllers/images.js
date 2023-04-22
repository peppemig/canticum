import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import dotenv from "dotenv"
dotenv.config()

const bucketName = process.env.BUCKET

const client = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET
    }
})

export const uploadImage = async (req,res) => {
    const links = []
    const {file} = req

    const ext = file.originalname.split('.')[1]
    const newFileName = "Music" + Date.now() + '.' + ext

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