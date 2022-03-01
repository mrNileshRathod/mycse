let fifthSem = document.getElementById('fifthSem');
let sixthSem = document.getElementById('sixthSem');
let sevenSem = document.getElementById('sevenSem');
let eightsem = document.getElementById('eightSem');
let webtask = localStorage.getItem("localTask");

window.onload = (event) => {
    console.log('page is fully loaded');
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }

    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'fifth'){
            window.location.href = '5th sem/index.html';
        }
        else if(index==0 && item == 'sixth'){
            window.location.href = '6th sem/index.html';
        }
        else if(index==0 && item == 'seven'){
            window.location.href = '7th sem/index.html';
        }
    });

  };


fifthSem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('fifth');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'fifth'){
            window.location.href = '5th sem/index.html';
        }
    });
})

sixthSem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('sixth');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'sixth'){
            window.location.href = '6th sem/index.html';
        }
    });
})

sevenSem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('seven');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'seven'){
            window.location.href = '7th sem/index.html';
        }
    });
})

eightsem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('eight');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'eight'){
            window.location.href = '8th sem/index.html';
        }
    });
})