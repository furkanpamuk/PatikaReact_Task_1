import axios from "axios";

async function GetData(number){
    const {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts/${number}`)

    let userPost = [user, post]
    console.log(userPost);
    
}

export default GetData;

