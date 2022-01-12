import path from "path"
import express from "express"
import multer from "multer"
import { protect, admin } from "../middleware/authMiddleware.js"
import cloudinary from "../utils/cloudinary.js"
import asyncHandler from "express-async-handler"

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/")
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb("Images only!")
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// cloudinary.uploader.upload()

// @desc Upload an image
// @route POST /api/upload
// @access Private/Admin
router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const cloudinaryRes = await cloudinary.uploader.upload(req.file.path)
    res.send(cloudinaryRes.url)
  })
)

export default router
