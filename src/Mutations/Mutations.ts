import axios from "axios";
import { uniqueId } from "lodash";
import { signToken } from "../auth/authProvider";
import { User } from "../Entities/User";
import { pubsub } from "../utils/PubSub";
const bcrypt = require("bcryptjs");

export function mutations() {
    return {
            createUser: async (parent: any, args: {input:any}) => {
                // 
               
                // const usa = await SecUser.insert(user);
                // return usa;

        
              const user = args.input;
              const hashedPassword = await bcrypt.hash(user.password, 10);
              console.log(user.name)
            await User.insert({name:user.name, username:user.username, password: hashedPassword, login: user.login });
              return user                         
            },

    
            login: async (parent: any, args: { input: any; }) => {
                const userinput = args.input;
                const user = await User.findOne({ login: userinput.username });
    
                if (!user) {
                    throw new Error("Invalid username/password");
                }
                const validPassword = await bcrypt.compare(userinput.password, user.password);
                if (!validPassword) {
                    return new Error("Invalid username/password");
                }
                let bearer_token = await signToken({ username: userinput.username, id: user.id })

    
                return ({ bearer_token, login: user?.login, name: user?.name });
            },
            updatePassword: async (parent: any, args:{ input: any; },{ user }: any)=> {
                if (!user)
                throw new Error('You are not authenticated!')
                 const input=args.input
                const findUser = await User.findOne({ login:input.username });
                //const userpassword = await Users.findOne(username)
            
                if (findUser == null) {
                  throw new Error("USERNAME DOESNT EXIST");
                }
            
            
                const userPassword = findUser.password;
                const hashedPassword = await bcrypt.hash(input.newPassword, 10);
                if (input.oldPassword == userPassword) {
                  await User.update({ login: input.username }, { password: hashedPassword });
            
                  return { successful: true, message: "PASSWORD UPDATED" };
                } else {
                  throw new Error("PASSWORDS DO NOT MATCH!");
                }
              },

              // createZreport:async(parent:any,args:any, {user}:any)=>{ 
        
              //   try {
              //   const { data } = await axios.post(process.env.REST_URs as string,{
              //       accountId:user.merchant
              //     });
              //     return ({message:data.message})
              //   } catch (err) {
              //     console.error(err)
              //   }
        
        // }
    };
}