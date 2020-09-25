
let postsInterviewer = async (data) => {
    try {
        const response = await fetch(`http://localhost:3000/schedules`, {
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
             <div id="viewing">
             <br><br>
            Email1: <input class="input" id="email1" type="email" ><br><br>
            Email2: <input class="input" id="email2" type="email"><br>
             <br>
             Start Time : <input type="datetime-local" id="st" ><br><br>
             End Time : <input type="datetime-local" id="end" ><br><br>
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
 
            let posts=await  postsInterviewer(data);
              
            console.log(posts);
             document.getElementById("viewing").innerHTML +=/*html*/`${ posts["eor"].map(restu => 
             /*html*/`<h3>${restu}</h3>`).join('\n ')} `;
           
            
         })
      
 
     }
  
  }
  
  export default Home;