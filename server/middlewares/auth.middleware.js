const {verifyAccessToken} = require('../utils/jwt')

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(!token) {
            return res.status(401).json({
                message: 'Unauthorized',
            })
        }
        const payload = await verifyAccessToken(token)
        
        req.user = payload
        next()
    } catch (error) {
        return res.status(500).json({
            message: "Invalid token",
        })
    }
}

module.exports = {authMiddleware}