const { faker } = require("@faker-js/faker");

async function createAndPopulateDB(client, DB_NAME) {
  const db = client.db(DB_NAME);
  console.log("db ", db);
  const usersCollection = db.collection("users");

  const usersCount = await usersCollection.countDocuments();
  if (usersCount === 0) {
    const fakeUsers = Array.from({ length: 10 }).map(() => ({
      name: faker.internet.userName(),
      age: faker.number.int({ min: 18, max: 80 }),
      address: faker.location.streetAddress(),
      religion: "islam",
      nationality: faker.location.country,
    }));
    await usersCollection.insertMany(fakeUsers);
    console.log("Inserted 10 fake users into MongoDB");
  }
}

module.exports = createAndPopulateDB;
