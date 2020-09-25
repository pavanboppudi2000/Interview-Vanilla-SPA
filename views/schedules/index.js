
let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/schedules`, options)
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
       <br><br>
      <h2> <a class="navbar-item" href="/#/createschedule">
       New Schedule
       </a></h1>
           <section class="section">
               <ul>
                   ${ posts.map(post => 
                       /*html*/`<h3><p>Interviewer Email:${post.email1}</h3>
                       <h3><p>Interviewee Email :${post.email2}</h3>
                       <p>${post.st}</p>
                       <p>${post.end}</p>
                       <h2><a href="#/schedule/${post.id}"> View </a>
                       <a href="#/updateschedule/${post.id}">Update</a></h2>
                       

                       
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