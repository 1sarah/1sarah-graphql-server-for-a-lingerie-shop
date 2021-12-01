
import { pubsub } from "../utils/PubSub";
import { Subscription } from "type-graphql";
import { withFilter } from "graphql-subscriptions";
import { mutations } from "../Mutations/Mutations";
import { queries } from "../Queries/Queries";
const {GraphQLUpload} = require('graphql-upload');



// @ts-ignore
export const resolvers = {
    Upload: GraphQLUpload,
    Query: queries(),
    Mutation: mutations(),
};







