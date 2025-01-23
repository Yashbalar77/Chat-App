import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "ujg7yjjx25fx";
const api_secret = "sgcxbjyfvj7zpyhx2xbnvfu83dgt6kuteusspxr4grr3xrbqytrhz2txfq33zfbn";
//const user_id = "user_2rUXeH21VrSOxGcovx46DDa6h1v";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const body = await request.json()

    function capatalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
// Create User Token
const token = serverClient.createToken(user.data.id);
//console.log(token)
console.log("A new user has been created", token)

const client = await clerkClient()
await serverClient.upsertUser({id: user.data.id})

await client.users.updateUserMetadata(user.data.id, {
  publicMetadata: {
    token: token
  },
})

// Give access to this user for all chats
const slugs = ["python-new", "js-new", "react-new", "datascience-new", "webdev-new"];
slugs.forEach(async (item)=>{
    const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: capatalize(item) + " Discussion",
        created_by_id: user.data.id
      });
      await channel.create()
      channel.addMembers([user.data.id])
})

return Response.json({ message: 'Hello World' })
}