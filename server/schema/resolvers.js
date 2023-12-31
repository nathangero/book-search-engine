const { User } = require("../models");
const { signToken, ErrorAuthentication } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        console.error(error)
      }
    },
    getMe: async (parent, args, context) => {
      try {
        if (!context.user) {
          throw ErrorAuthentication
        }

        return await User.findOne({ _id: context.user._id })
      } catch (error) {
        console.error(error)
      }
    } 
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      try {
        const user = await User.create(args);
        const token = signToken(user)

        return { token, user }
      } catch (error) {
        console.error(error)
      }
    },
    login: async (parent, { user }, context) => {
      try {
        const foundUser = await User.findOne({
          email: user.email
        })

        if (!foundUser) throw ErrorAuthentication

        const isPasswordCorrect = foundUser.isCorrectPassword(user.password);

        if (!isPasswordCorrect) throw ErrorAuthentication

        const token = signToken(foundUser)

        return { token, user: foundUser }
      } catch (error) {
        console.error(error)
      }
    },
    saveBook: async (parent, { book }, context) => {
      try {
        if (!context.user) {
          throw ErrorAuthentication
        }

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book }},
          { new: true, runValidators: true }
        )
      } catch (error) {
        console.error(error)
      }
    },
    deleteBook: async (parent, { bookId }, context) => {
      try {
        if (!context.user) {
          throw ErrorAuthentication
        }

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        )
      } catch (error) {
        console.error(error)
      }
    }
  }
}

module.exports = resolvers;