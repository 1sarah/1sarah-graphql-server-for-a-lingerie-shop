
import { pubsub } from "../utils/PubSub";
import { Subscription } from "type-graphql";
import { withFilter } from "graphql-subscriptions";
import { mutations } from "../Mutations/Mutations";
import { queries } from "../Queries/Queries";



// @ts-ignore
export const resolvers = {
    Query: queries(),
    Mutation: mutations(),
    // Subscription: {
    //   checkoutEvent: {
    //       subscribe:  withFilter(
    //         () => pubsub.asyncIterator('CHECKOUT_EVENT'),
    //         (payload, variables) => {
    //           // Only push an update if the comment is on
    //           // the correct repository for this operation
    //           console.log("order_Id VALUE")
    //           console.log(variables.input.orderId.replaceAll("-",""))
    //           return (variables.input.orderId.replaceAll("-","") === payload.checkoutEvent.orderId);
    //         },
    //       ),
    //     }
    // },
};







