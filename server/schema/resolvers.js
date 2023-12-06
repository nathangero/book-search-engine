const { User } = require("../models")

const resolvers = {
  Query: {
    getSingleUser: async (parent, { user, params }, context) => {
      try {
        return await User.findOne({
          $or: [
            {
              _id: user ? user._id : params.id
            },
            {
              username: params.username
            }
          ]
        })
      } catch (error) {
        console.error(error)
      }
    }
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      try {

      } catch (error) {
        console.error(error)
      }
    },
    login: async (parent, args, context) => {
      try {

      } catch (error) {
        console.error(error)
      }
    },
    saveBook: async (parent, args, context) => {
      try {

      } catch (error) {
        console.error(error)
      }
    },
    deleteBook: async (parent, args, context) => {
      try {

      } catch (error) {
        console.error(error)
      }
    }
  }
}

module.exports = resolvers;