import Utils        from '../../services/Utils.js'
let deleteInterviewer = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/schedules/`+id, {
         method: 'DELETE',
       });
        const json = await response.json();
        console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
 }
let getScheduleToShow = async (resource,id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/`+resource + `/` +id, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Show = {
   render : async () => {
       let request = Utils.parseRequestURL()
       let posts = await getScheduleToShow('schedules',request.id)
       let interviewee=await getScheduleToShow('fine',posts.email2)
       let view =  /*html*/`
           <section class="section">
               <h1> Schedule</h1>
            <h3><p>Interviewer :${posts.email1}</h3>
            <h3><p>Interviewer :${posts.email2}</h3>
            <p>${posts.st}</p>
            <p>${posts.end}</p>
            <h1> Interviewee Details</h1>
            <h3> Name : ${interviewee["content"].name}</h3>
            <h3> College : ${interviewee["content"].clg}</h3>
            <h3> CGPA : ${interviewee["content"].cgpa}</h3>
            <h3> <a href="http://localhost:3000/${interviewee["resumes"][interviewee["content"].id]}">Resume</a></h3>
            <button id="btns" type="button" name="delete">Delete</button>

                       
                       
           </section>
       `
       return view
   }
   , after_render: async () => {
    document.getElementById("btns").addEventListener ("click", async () => {
       const re=Utils.parseRequestURL();
       if (confirm("Press a button!")) {
        let posts=await  deleteInterviewer(re.id);
        window.location.replace("#/");
      } else {
        window.location.replace("#/");
      }
       
         
       //console.log(posts);
      
      
       
    })
 
   }

}

export default Show;