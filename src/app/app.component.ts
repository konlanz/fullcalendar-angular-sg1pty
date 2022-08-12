import { Component } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  calendarOptions = {
    plugins: [dayGridPlugin,interactionPlugin],
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,dayGrid3W,dayGrid2W,dayGridWeek'
    },
    buttonText: {
      today:    'today',
      month:    'M',
      week:     'T',
      day:      'D',
      list:     'lista'
    },
    views: {
      dayGrid2W: {
        type: 'dayGrid',
        duration: { weeks: 2 },
        dateIncrement: { weeks: 1 },
        buttonText: '2T'
      },
      dayGrid3W: {
        type: 'dayGrid',
        duration: { weeks: 3 },
        dateIncrement: { weeks: 1 },
        buttonText: '3T',
        visibleRange: function(currentDate) {
          console.log(currentDate)
          return {
            start: currentDate.clone().subtract(1, 'weeks'),
            end: currentDate.clone().add(3, 'weeks') // exclusive end, so 3
          };
        }
      }
    },
    defaultView: 'dayGridMonth'
  }
}
