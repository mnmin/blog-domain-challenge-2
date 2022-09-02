const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
  
  const createFirstUser = await prisma.user.create({
    data: {
      username: "AliceWonderland",
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
      username: "Peter",
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

//   const createPost = await prisma.post.create({
//     data: {
//         title: "My first post",
//         content: "This is my first Post",
//         imageUrl: "https://kentattractions.co.uk/wp-content/uploads/2016/03/banner-41.jpg",
//         publishedAt: new Date(),
//         userId: 1,
//     }
// })

// const createCategory = await prisma.category.create({
  
// })

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