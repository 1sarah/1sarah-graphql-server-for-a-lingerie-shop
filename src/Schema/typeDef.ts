
const { gql } = require("apollo-server");
const {Page} = require('../pagination')
export const typeDefs = gql`

  scalar Date
  scalar Time
  scalar BigInt
  scalar Upload

  type User {
    name: String
    login:String
 
  }


  type SuccessMessage{
    successfull:Boolean!
    message:String
  }
  
  type LoginResponse {
    bearer_token:String!,
    login:String
    name:String
  }
  input pageInput{
    first: Int
    afterCursor: String 
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input pageInputs{
    limit: Int
    offset: Int 
  }

 
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
 

  type Query {
    getAllUsers: [User!]
    getOneUserwithId(id: ID!): User!
    getUserInfo:User!
  
  }

  input CreateUserInput {
    name: String!
    username: String!
    password: String!
    login: String!
  }
  input UpdatePassword{
    username:String!
    oldPassword: String!
    newPassword:String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    login(input: LoginInput):LoginResponse
    updatePassword(input:UpdatePassword):SuccessMessage
    singleUpload(file: Upload!): File!
    # updateUsername(input: UpdateUsernameInput!): User
    # deleteUser(id: ID!): User
  }
`;

