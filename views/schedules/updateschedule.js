import Utils        from '../../services/Utils.js'

let postsInterviewer = async (data,id) => {
    try {
        const response = await fetch(`http://localhost:3000/schedules/`+id, {
         method: 'PUT',
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
 let getPostsList = async (resource,id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/`+resource+ `/` + id, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}
 
 let Home = {
     render : async () => {
        let request = Utils.parseRequestURL()
        let posts = await getPostsList('schedules',request.id)
         let view =  /*html*/`
             <div id="viewing">
             <br><br>
            Email1: <input class="input" id="email1" type="email" value=${posts.email1} ><br><br>
            Email2: <input class="input" id="email2" type="email" value=${posts.email2}><br>
             <br>
             Start Time : <input type="datetime" id="st" value=${posts.st} ><br><br>
             End Time : <input type="datetime" id="end" value=${posts.end}><br><br>
            <input class="button" id="but" type="submit">
             </div>                        
         `
         return view
     }
     , after_render: async () => {
         document.getElementById("but").addEventListener ("click", async () => {
             let  email1       = document.getElementById("email1").value;
             let email2        = document.getElementById("email2").value;
             let st        = document.getElementById("st").value;
             let end        = document.getElementById("end").value;

            
            let data = { "email1": email1,"email2": email2, "st": st, "end": end};
            let re = Utils.parseRequestURL()
            let posts=await  postsInterviewer(data,re.id);
              
            console.log(posts);
             document.getElementById("viewing").innerHTML +=/*html*/`${ posts["eor"].map(restu => 
             /*html*/`<h3>${restu}</h3>`).join('\n ')} `;
           
            
         })
      
 
     }
  
  }
  
  export default Home;