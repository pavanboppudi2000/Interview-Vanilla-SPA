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
       let posts = await getPostsList()
       let view =  /*html*/`
           <section class="section">
           <a class="navbar-item" href="/#/createinterviewee">
           Interviewee
       </a>
               <ul>
                   ${ posts.map(post => 
                       /*html*/`<h3><p>Email :${post.email}</h3>
                       <h3><p>Name :${post.name}</h3>
                       <p> College :${post.clg}</p>
                       <p> CGPA  :${post.cgpa}</p>
                       
                       `
                       ).join('\n ')
                   }
               </ul>
           </section>
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Home;