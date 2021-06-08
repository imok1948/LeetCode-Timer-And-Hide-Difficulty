setTimeout(function() {
    try {
        table = document.getElementsByClassName('reactable-data')[0];
        rows = table.getElementsByTagName('tr');

        for (i = 0; i < rows.length; i++) {
            tds = rows[i].getElementsByTagName('td');
            for (j = 0; j < tds.length; j++) {
                label = tds[j].getAttribute('label');
                if (label == 'Acceptance' || label == 'Difficulty') {
                    tds[j].innerHTML = 'Hidden';
                }
            }
        }

    } catch (err) {
        console.log("Error while hiding difficulties");
    }

    try {
        seconds = 0
        mins = 0
        hours = 0
        div = document.querySelector("#navbar-right-container > div:nth-child(1)")
        function addSeconds() {
            if (++seconds >= 60) {
                seconds = 0;
                if (++mins >= 60) {
                    mins = 0;
                    hours += 1;
                }
            }

            time = (hours == 0) ? '' : (hours < 10 ? '0' + hours : hours);
            time += (hours ? " : " : "00 : ");

            time += (mins == 0) ? '' : (mins < 10 ? '0' + mins : mins);
            time += (mins ? " : " : "00 : ");

            time += (seconds == 0) ? '' : (seconds < 10 ? '0' + seconds : seconds);

            div.innerText = time;
        }

        leetCodeTimer = setInterval(addSeconds, 1000);

    } catch (err) {
        console.log("Error while starting timer");
    }
}, 4000)

