import express from 'express'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import {fileURLToPath} from 'url'
import {protect,adminOnly} from '../middleware/auth.js'

const root=path.dirname(fileURLToPath(import.meta.url))
const uploadDir=path.resolve(root,'../uploads')
const allowed=new Set(['image/jpeg','image/png','image/webp','image/avif'])
const storage=multer.diskStorage({destination:uploadDir,filename:(req,file,done)=>done(null,`${Date.now()}-${crypto.randomBytes(8).toString('hex')}${path.extname(file.originalname).toLowerCase()}`)})
const upload=multer({storage,limits:{files:8,fileSize:8*1024*1024},fileFilter:(req,file,done)=>allowed.has(file.mimetype)?done(null,true):done(new Error('Only JPG, PNG, WebP, and AVIF images are supported'))})
const router=express.Router()
router.post('/',protect,adminOnly,upload.array('images',8),(req,res)=>res.status(201).json({images:req.files.map(file=>`/uploads/${file.filename}`)}))
export default router
