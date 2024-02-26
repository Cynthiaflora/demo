import CalendarDates from "/try1/calendardates.js";

Calendar = function (date) {
    year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()

    function renderDay() {
        document.querySelector('.day').textContent = day
    }

    function renderMonth() {
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        document.querySelector('.month').textContent = MONTHS[month]
    }

    async function renderDates() {
        const calendarDates = new CalendarDates();
        const domList = document.querySelector('.dates')
        domList.innerHTML = ''
        var i = 0;
        for (const meta of await calendarDates.getDates(new Date(year, month))) {
            span = document.createElement('span')
            span.textContent = meta.date
            span.value = i; i = i + 1;
            span.className = (meta.type == 'current')
                ? (meta.date == day)
                    ? 'current-day'
                    : ''
                : meta.type + '-month'
            domList.append(span)
        }
    }

    this.render = function () {
        renderDay()
        renderMonth()
        renderDates()
    }
}

function init() {
    calendar = new Calendar(new Date())
    calendar.render()
}

window.onload = init