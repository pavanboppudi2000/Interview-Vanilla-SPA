// --------------------------------
//  Define Data Sources
// --------------------------------

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
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ posts.map(post => 
                        /*html*/`<h3><p>Interviewer :${post.email1}</h3>
                        <h3><p>Interviewer :${post.email2}</h3>
                        <p>${post.st}</p>
                        <p>${post.end}</p>
                        <a href="#/schedule/${post.id}"> View </a>
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