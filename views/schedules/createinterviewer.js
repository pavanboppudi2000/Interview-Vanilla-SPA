let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/interviewers`, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}
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
            let name       = document.getElementById("name").value;
            let email        = document.getElementById("email").value;

           let data = { "name": name,"email": email};

           let res= postsInterviewer(data);
           return /*html*/`
           <h1>hey</h1>`
        })
    }
 
 }
 
 export default Home;