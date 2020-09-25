
let postsInterviewer = async (data) => {
    try {
        const response = await fetch(`http://localhost:3000/interviewees`, {
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

let CreateInterviewee = {
    render : async () => {
        let view =  /*html*/`
        <form id="new_user_form">
            <br><br>
           Email: <input class="input" id="email" type="email" ><br><br>
           Name: <input class="input" id="name" type="string"><br>
            <br>
            College: <input class="input" id="clg" type="string" ><br><br>
            Cgpa: <input class="input" id="cgpa" ><br><br>

            <input type="file" class="form-control-file" id="resume" name="resume">            <br><br>




           <button class="button" id="but" >Create</button>
            </form>                        
        `
        return view
    }
    , after_render: async () => {
        const new_form = document.getElementById("new_user_form");
        new_form.onsubmit =   async (e) => {
            e.preventDefault();
            const formData = new FormData(new_form);
            let r = await fetch('http://localhost:3000/interviewees', {
                method: 'POST',
                body: formData 
              });
            console.log(r);
        // document.getElementById("but").addEventListener ("click", async () => {
        //     let name       = document.getElementById("name").value;
        //     let email        = document.getElementById("email").value;
        //     let cgpa =document.getElementById("cgpa").value;
        //     const selectedFile = document.getElementById('resume').files[0];

        //    let data = { "name": name,"email": email , "cgpa": cgpa, "resume": selectedFile};

        //    let posts=await  postsInterviewer(data);
             
        //    console.log(posts);
            // document.getElementById("viewing").innerHTML +=/*html*/`${ posts["eor"].map(restu => 
            // /*html*/`<h3>${restu}</h3>`).join('\n ')} `;
          
           
        } //)
    }
 
 }
 
 export default CreateInterviewee;