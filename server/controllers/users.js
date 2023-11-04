
const {prisma} = require('../utils/prismaClient');

// Controller to get a single user by ID or email
const getUser = async (req, res) => {
    try {
        const { email } = req.query;
        const { id } = req.params;
        if (email) {
            const user = await prisma.user.findUnique({
                where: { email: email },
            });
            return res.status(200).json(user);
         } else if (id) {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
            });
            return res.status(200).json(user);
            }
        }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Controller to get all users (needs fix on specific queries)
const getAllUsers = async (req, res) => {
    try {
        const { slug, email, id,  } = req.query;
        const users = await prisma.user.findMany({
            where: {
                name: slug ? { contains: slug } : undefined,
                email: email ? { contains: email } : undefined,
                id: id ? { contains: id } : undefined,
            },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a user by ID
const updateUser = async (req, res) => {
    try {
        const { slug } = req.params;
        const { email, firstName, lastName, photoUrl } = req.body;
        const user = await prisma.user.update({
            where: { slug: slug },
            data: req.body,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUser,
    getAllUsers,
    updateUser,
};
