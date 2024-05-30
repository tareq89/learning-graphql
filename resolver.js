// const users = [
//   { id: "1", name: "Alice", age: 30, address: "123 Main St", religion: "Atheist", nationality: "USA" },
//   { id: "2", name: "Bob", age: 25, address: "456 Elm St", religion: "Christian", nationality: "Canada" },
//   // more users...
// ];

const resolvers = {
  Query: {
    users: async (root, args, db, info) => {
      // console.log("root ", root);
      console.log("args ", args);
      // console.log("context ", context);
      // console.log("info ", info);
      // console.log("db ", db);
      const usersCollection = db.collection("users");
      console.log(usersCollection);
      const users = await usersCollection.find().toArray();
      console.log(users);
      return users;
      // .map((user) => ({
      //   id: user._id.toString(),
      //   name: user.name,
      //   age: user.age,
      //   address: user.address,
      //   religion: user.religion,
      //   nationality: user.nationality,
      // }));
      // return users;
    },
  },
};

module.exports = resolvers;
