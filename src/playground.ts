import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: "test@gmail.com",
        firstName: "anurag",
        lastName: "kumar",
    }
})

console.log('done');