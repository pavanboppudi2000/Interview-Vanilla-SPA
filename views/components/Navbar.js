let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                            <a class="navbar-item" href="/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/#/interviewees">
                                Interviewee
                            </a>
                            <a class="navbar-item" href="/#/interviewer">
                                Interviewer
                            </a>
                            <a class="navbar-item" href="/#/createinterviewee">
                                Interviewee
                            </a>
                            <a class="navbar-item" href="/#/createinterviewer">
                                Interviewer
                            </a>

            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;