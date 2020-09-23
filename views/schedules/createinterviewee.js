let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/interviewees`, options)
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
            <section class="section">
            <br><br>
           Email: <input class="input" id="email" type="email" ><br><br>
           Name: <input class="input" id="name" type="string"><br>
            <br>
           <input class="button" id="but" type="submit">
            </section>                        
        `
        return view
    }
    , after_render: async () => {
        document.getElementById("but").addEventListener ("click",  () => {
            //let posts = await getPostsList()
            for(var i=0;i<3;i++)
            {
                console.log("hey");
            }
        })
    }
 
 }
 
 export default Home;