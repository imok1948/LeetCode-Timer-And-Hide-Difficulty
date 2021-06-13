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
        console.log('Error while hiding acceptance rate')
    }

    try {
        document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div.css-101rr4k > div.css-10o4wqw > div").innerHTML = '';
        document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div.css-101rr4k > div.css-10o4wqw > button:nth-child(2) > span").innerHTML = 'Hidden';
        document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div.css-101rr4k > div.css-10o4wqw > button:nth-child(3) > span").innerHTML = 'Hidden';
        document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div:nth-child(3) > div.css-q9155n > div:nth-child(1) > div.css-jkjiwi").innerHTML = 'Hidden';
        document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div:nth-child(3) > div.css-q9155n > div:nth-child(2) > div.css-jkjiwi").innerHTML = 'Hidden'
    } catch (err) {
        console.log('Error while hiding likes dislikes');
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
        console.log('Error while starting timer');
    }

}, 4000)

