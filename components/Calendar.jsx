import React from 'react'

const Calendar = () => {
  return (
      // <iframe src='https://outlook.office365.com/owa/calendar/7e396f32a8ba40ee8927aaada71549da@allianceptp.com/4f6c6e3ee57646ee8b62440a4022685213065606818718831078/calendar.html' width="100%" height="600"></iframe>

<iframe id="open-web-calendar" 
    style={{background:"url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat"}}
    src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2F7e396f32a8ba40ee8927aaada71549da%40allianceptp.com%2F4f6c6e3ee57646ee8b62440a4022685213065606818718831078%2Fcalendar.ics&amp;title=Alliance%20PTP%20Calendar&amp;skin=dhtmlxscheduler_flat.css&amp;start_of_week=su&amp;controls=next&amp;controls=previous&amp;tabs=month"
  sandbox="allow-scripts allow-same-origin allow-top-navigation"
  scrolling="no"
  frameBorder={0}
  height="515px"
  width="100%" />

  )
}

export default Calendar
