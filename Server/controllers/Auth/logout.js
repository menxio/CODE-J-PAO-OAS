import sendSuccess from '../../utils/sendSuccess.js'

const logout = async (req, res) => {
  res.clearCookie('authorization')
  sendSuccess('Successfully logged out', 200, res)
}

export default logout
