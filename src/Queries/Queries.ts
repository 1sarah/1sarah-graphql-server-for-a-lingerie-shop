import { getManager } from "typeorm";
import { User } from "../Entities/User";

export function queries() {
    return {
        getAllUsers: () => {
            const users = User.find();
            return users;
        },
        getOneUserwithId: (parent: any, args: { id: any; }) => {
            const id = args.id;
            const user = User.findOne({id});
            return user;
        },

        getUserInfo: async (parent: any, args: any, { user }: any) => {
            if (!user)
                throw new Error('You are not authenticated');
            return await User.findOne({ login: user.username });
        },
    };
}