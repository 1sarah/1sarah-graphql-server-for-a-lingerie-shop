// import{TransactionType} from "./schema/Summary";
// import { Float, ID } from "type-graphql"

// const graphql = require('graphql')

// const {GraphQLString,GraphQLInt,GraphQLBoolean,GraphQLObjectType,GraphQLList} = graphql

// export const Edge = (itemType: any) => {
//     return new GraphQLObjectType({
//         name: 'EdgeType',
//         fields: () => ({
//             node: { type: itemType },
//             cursor: { type: GraphQLString }
//         })
//     })
// }

// export const PageInfo = new GraphQLObjectType({
//     name: 'PageInfoType',
//     fields: () => ({
//         startCursor: { type: GraphQLString },
//         endCursor: { type: GraphQLString },
//         hasNextPage: { type: GraphQLBoolean }
//     })
// })




// export const Page = (itemType = TransactionType) => {
//     return new GraphQLObjectType({
//         name: 'PageType',
//         fields: () => ({
//             totalCount: { type: GraphQLInt },
//             edges: { type: new GraphQLList(Edge(itemType)) },
//             pageInfo: { type: PageInfo }
//         })
//     })
// }

/* Helper functions for base64 encoding and decoding */
export const convertNodeToCursor = (node: { id: string }) => {
    return new Buffer(node.id, 'binary').toString('base64')
}

export const convertCursorToNodeId = (cursor: string) => {
    return new Buffer(cursor, 'base64').toString('binary')
}

// module.exports = {
//     Page,
//     convertNodeToCursor,
//     convertCursorToNodeId, 

// }
