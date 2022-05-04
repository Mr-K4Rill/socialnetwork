import renderthree from "../render.jsx"

let Data = {
       DataPost:[{message:"Привет", id:"1", likes: 3},
                {message:"Я тут", id:"2", likes: 10},
                {message:"Я новый пользователь", id:"3", likes: 8}],


       names:[{name:"Кирилл", id:"2",text:"Как дела?"},
                {name:"Стив", id:"3", text:"Пошли погуляем"},
                {name:"Илон", id:"1", text:"Привет"}], 

       guys:[{name:"Steve", img:"./find-contact_640.jpg"},
              {name:"Kirill", img:"./football_767.jpg"},
              {name:"John", img:"./work-it_640.jpg"}]    
}

export let addPost =(i)=> {
              let newPost = {
                     message: i ,
                     id: 1 ,
                     likes: 2
              }
              Data.DataPost.unshift(newPost)
              console.log(Data.DataPost)
              renderthree()
       }

export let addDialog =(i)=> {
       let newDialog = {
              name:"Elon",
              id: 1 ,
              text: i ,
       }
       Data.names.unshift(newDialog)
       console.log(Data.names)
       renderthree()

}



export default Data;


    
                                   