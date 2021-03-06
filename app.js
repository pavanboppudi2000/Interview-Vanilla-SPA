"use strict";

import ScheduleList         from './views/schedules/index.js'
import ShowSchedule     from './views/schedules/show.js'

import Navbar       from './views/components/Navbar.js'
import Bottombar    from './views/components/Bottombar.js' 
import IntervieweeList from './views/schedules/intervieweelist.js'
import InterviewerList from './views/schedules/interviewerlist.js'
import CreateInterviewee from './views/schedules/createinterviewee.js'
import CreateInterviewer from './views/schedules/createinterviewer.js'
import CreateSchedule  from './views/schedules/createschedule.js'
import UpdateSchedule  from './views/schedules/updateschedule.js'

import Utils        from './services/Utils.js'

const routes = {
    '/'             : ScheduleList
    , '/schedule/:id'      : ShowSchedule
    , '/interviewees'   : IntervieweeList
    ,'/interviewer'  : InterviewerList
    ,'/createinterviewee' : CreateInterviewee
    ,'/createinterviewer' : CreateInterviewer
    , '/createschedule'  : CreateSchedule
    , '/updateschedule/:id' : UpdateSchedule

};


const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    //footer.innerHTML = await Bottombar.render();
    //await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
