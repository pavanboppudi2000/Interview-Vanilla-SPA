
let postsInterviewer = async (data) => {
   try {
       const response = await fetch(`http://localhost:3000/interviewers`, {
        method: 'POST',
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Home = {
    render : async () => {
        let view =  /*html*/`
            <div id="interviewercreate">
            <br><br>
           Email: <input class="input" id="email" type="email" ><br><br>
           Name: <input class="input" id="name" type="string"><br>
            <br>
           <input class="button" id="but" type="submit">
            </div>                        
        `
        return view
    }
    , after_render: async () => {
        document.getElementById("but").addEventListener ("click", async () => {
            let name       = document.getElementById("name").value;
            let email        = document.getElementById("email").value;

           let data = { "name": name,"email": email};

           let posts=await  postsInterviewer(data);
             
           console.log(posts);
            document.getElementById("interviewercreate").innerHTML +=/*html*/`${ posts["eor"].map(restu => 
            /*html*/`<h3>${restu}</h3>`).join('\n ')} `;
          
           
        })
     

    }
 
 }
 
 export default Home;