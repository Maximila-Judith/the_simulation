import jwt from 'jsonwebtoken'

export default function handler(req, res) {
  const tokenHeaderKey = 'jwt-token'
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET
  const token = req.headers[tokenHeaderKey]
  
  try {
    const verified = jwt.verify(token, secret)
    if (verified) {
      return res.status(200).json({ userName: verified.userName , message: 'success' })
    } else {
      return res.status(401).json({ message: 'error' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'error' })
  }
}