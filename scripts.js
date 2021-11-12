// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('DOMContentLoaded', (event) => {
    const rocket = document.getElementById('rocket')
    const button = document.getElementById('takeoff');
    const abortMission = document.getElementById('missionAbort');
    const landing = document.getElementById('landing')
    const status = document.getElementById('flightStatus')
    const shuttleBackground = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')
    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const left = document.getElementById('left')
    const right = document.getElementById('right')

    let heights = 0;
    let lefts = 0;

    button.addEventListener('click', (event) => {
       let w = window.confirm('Confirm that shuttle is ready for takeoff.')
       if (w === true) {
           status.innerHTML = 'Shuttle in flight.'
           shuttleBackground.style.background = 'blue';
           height.innerHTML = 10000
       };
    });

    landing.addEventListener('click', (event) => {
        let w = window.alert('The shuttle is landing. Landing gear engaged.')
        status.innerHTML = 'The shuttle has landed.'
        shuttleBackground.style.background = 'green'
        height.innerHTML = 0
    });

    abortMission.addEventListener('click', (event) => {
        let w = window.confirm('Confirm that you want to abort the mission.')
        if (w === true) {
            status.innerHTML = 'Mission aborted.'
            shuttleBackground.style.background = 'green'
            height.innerHTML = 0
        };
    });

    up.addEventListener('click', (event) => {
        rocket.style.bottom = `${height / 1000}px`
    });


});