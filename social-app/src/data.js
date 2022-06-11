import { v4 as uuid} from "uuid"; //importar no terminal: npm install uuid

const user = {
    name: "Sayuri Hioki",
    username: "hiokisayu",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQFcJwPpX-ndhQ/profile-displayphoto-shrink_400_400/0/1642532582158?e=1653523200&v=beta&t=3J0gEIs5qowrkx4YMCk9uf5pjL2alnMqA_WGGr-Cs4U",
    id: uuid()
}

export function getPost(){
    return {
        id: uuid(),
        user: user,
        text: "Welcome to Superstar SMTOWN",
        img: "https://image.winudf.com/v2/image1/a3IuY28uZGFsY29tc29mdC5zdXBlcnN0YXIuYV9zY3JlZW5fMTBfMTYzNDExNDUxN18wNDA/screen-10.jpg?fakeurl=1&type=.jpg",
        likes: 10,
        comments: [{
            user: user,
            text: "Awesome!!"
        }, {
            user: user,
            text: "@smtown thats lit"
        }]
    }
}