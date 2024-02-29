const { PrismaClient } = require("@prisma/client");

if (process.env.NODE_ENV === 'production'){
    let prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma;