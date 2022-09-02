const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
  
  const createFirstUser = await prisma.user.create({
    data: {
      userName: "AliceWonderland",
      email: "alice@gmail.com",
      password: "alice123",
        profile: {
          create : {
            firstName: "Alice",
            lastName: "Wonderland",
            age: 13,
            pictureUrl: "https://www.vox.com/culture/22846934/the-matrix-trilogy-what-happened-refresher"
        }
      }
    },
    include: {
      profile: true
    }   
  });

  const createSecondUser = await prisma.user.create({
    data: {
      userName: "Peter",
      email: "peter@gmail.com",
      password: "peter123",
        profile: {
          create : {
            firstName: "peter",
            lastName: "power",
            age: 33,
            pictureUrl: "https://www.vox.com/culture/22846934/the-matrix-trilogy-what-happened-refresher"
        }
      }
    },
    include: {
      profile: true
    }   
  });

  const createFirstPostUser1 = await prisma.post.create({
    data: {
        title: "My first post",
        content: "This is my first Post",
        imageUrl: "post image sample",
        publishedAt: new Date(),
        authorId: 1,
    },
    // include: {
    //   categories: true
    // }
})

}

  

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })