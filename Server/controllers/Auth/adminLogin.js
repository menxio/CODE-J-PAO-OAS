import sendError from '../../utils/sendError.js'
import { Admin } from '../../models/Admin.js'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const adminLogin = async (req, res) => {
  try {
    if (req.cookies.authorization)
      return sendError('already logged in', 400, res)
    if (req.body.username === undefined || req.body.password === undefined)
      return sendError('missing required fields', 404, res)

    let admin
    admin = await Admin.findOne({ username: req.body.username })

    if (!admin) sendError('username incorrect', 400, res)

    const hashedPass = admin.password

    bcrypt.compare(req.body.password, hashedPass, async (err, result) => {
      if (err) {
        console.log(err)
        return sendError('Internal Server Error', 500, res)
      }
      if (result) {
        //token signing
        const id = { id: admin._id }

        const token = JWT.sign(id, process.env.JWT_SECRET)
        res.cookie('authorization', token)
        const payload = {
          token: token,
          role: 'admin',
        }
        return sendSuccess(payload, 200, res)
      } else {
        sendError('password incorrect', 400, res)
      }
    })
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default adminLogin
