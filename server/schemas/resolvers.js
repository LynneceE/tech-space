const { AuthenticationError  } = require('apollo-server-express');
const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
     Query: {
         categories: async () => {
             return await Category;
         },
         products: async (parent, { category, name }) => {
             const params = {};
  
             if (category) {
                 params.category = category;
             }
  
             if (name) {
                 params.name = name;
             }

             return await Product;
         },
          // product: async (parent, args, context) => { 
          //     return await Product;
          //  }, 
           user: async (parent, args, context) => {
             if (context.user) {
               const user = await User;
      
               return user;
             }

            throw new AuthenticationError('Not logged in');
           },

    },


    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },

      
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },



      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      
    }
};  

module.exports = resolvers;
