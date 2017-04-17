const graphql = require('graphql');
const {
  GraphQLObjectType,
  GrpahQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GrpahQLString }
  }
});

module.exports = UserType;