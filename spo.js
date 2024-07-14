// alert(document.querySelector('.imog').offsetHeight)

function minut(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = (seconds % 60).toFixed(0);
    var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var formattedSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;
    var formattedTime = formattedMinutes + ":" + formattedSeconds;
    return formattedTime;
}

let song = document.querySelector('.song') 

// pause / play shit
function playpause(){
    if(song.paused){
        song.play().catch(error=>{
            // song.pause();
            // song.play()
        })
        document.querySelector('.playpause').innerHTML = `
        
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="white" stroke-width="1.5"/>
<path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="white" stroke-width="1.5"/>
</svg>

`;
} else {
    song.pause()
    document.querySelector('.playpause').innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20V4L19 12L5 20Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>  
    `
}
}

function scro(){
    setTimeout(()=>{
        document.querySelector('.playsong input').setAttribute("min", 0);
        document.querySelector('.playsong input').setAttribute("max", song.duration);
        },2000)
}

// volume
// songplay
let interv = setInterval(() => {
song.volume = (document.querySelector('.volinp').value / 100);
document.querySelector('.timeboy').innerHTML = minut(song.currentTime) +"/"+minut(song.duration);
document.querySelector('.playsong input').setAttribute("value",song.currentTime)
if (document.querySelector('.song').ended){
    document.querySelector('.playpause').innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20V4L19 12L5 20Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>  
        `
}
}, 100);

// name, audio, playsong positon 0 and paused 



function newsong(name, audio, type){
    // clearInterval(interv)
    document.querySelector('.titl').innerHTML = name;
    document.querySelector('.songcontainer').innerHTML = `
    <video class="song" hidden>
    <source src="Songs/${audio}" type="audio/${type}">
    Your browser does not support the audio element.
</video>
    `;
    
}




let array = []
let a = 0;

function nc(name, audio, type, photo, title, subtitle) {
    array.push(a);
    
    // It is compulsory to revalue song variable because it has taken value of tourner song previosly and won't change even if element chamges if you don't put new information
    // If you revalue, it will take new song as value and hence everything works orelse previous song plays

    document.querySelector('.songcards').innerHTML += `
        <div class="songc n${a}" onclick="newsong('${name}', '${audio}','${type}');song = document.querySelector('.song');playpause();scro();clickboy(${a});">
            <img class="imog" src="${photo}" alt="blackgirl" srcset="">
            <div class="title">${title}</div>
            <div class="subtitle">${subtitle}</div>
        </div> 
    `;
    document.querySelector('.cardboxc').innerHTML += `
    <div class="cardbox flex moregap" onclick="newsong('${name}', '${audio}','${type}');song = document.querySelector('.song');playpause();scro();clickboy(${a});">
                <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="18.5" r="3.5" stroke="white" stroke-width="1.5"/>
                        <circle cx="18" cy="16" r="3" stroke="white" stroke-width="1.5"/>
                        <path d="M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 10C15.8667 10 19.7778 7.66667 21 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="songname">
                    ${title}   
                </div>
                <!-- <div>Play now</div> -->
                <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20V4L19 12L5 20Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                </div>
            </div>
    `;

    // There will be many classes with n(number) , so we can use qselector to get our desired box and then play the 
    // required song for < and > buttons, and also use a belongs to the array to check wheher the song even exists

    a++;
}

// used y2mate for audio files

nc("Tourner dans le vide", "bottomgt.mp3","mpeg","https://www.famousbirthdays.com/faces/hinds-brian-image.jpg", "Tourner dans", "Bottom G")
nc("Never gonna give you up", "ricroll.mp3", "mpeg", "https://lastfm.freetls.fastly.net/i/u/770x0/92c372883f05137bb7c6e9ec49afe403.jpg#92c372883f05137bb7c6e9ec49afe403","Rick roll", "Ricky Astley")
nc("Come and get your love", "comeandgetyourlove.mp3","mpeg","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8596ce2e-3187-4612-b59d-249c1766697d/d82x75v-5aea74b8-d71c-4b78-8cbd-a9fc1367e896.jpg/v1/fit/w_828,h_1210,q_70,strp/starlord_by_fdasuarez_d82x75v-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxNiIsInBhdGgiOiJcL2ZcLzg1OTZjZTJlLTMxODctNDYxMi1iNTlkLTI0OWMxNzY2Njk3ZFwvZDgyeDc1di01YWVhNzRiOC1kNzFjLTRiNzgtOGNiZC1hOWZjMTM2N2U4OTYuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.54A39TNjRm2KN1Xd40zH1Qnz0ICqjEJPDA2yma1uLeE","Starlord","Redbone")
nc("Starboy", "starboy.mp3","mpeg", "https://m.media-amazon.com/images/I/71PTGbAOYfL._SY355_.jpg", "Starboy", "The Weeknd")
nc("Money rain phonk remix", "moneyrain.mp3", "mpeg", "https://i1.sndcdn.com/artworks-tt2uafhZDdP7zwGY-vyQvQA-t500x500.jpg", "Money rain", "VTORNIK")
nc("Close eyes - DVRST","closeeyes.mp3","mpeg","https://i1.sndcdn.com/artworks-PGOhLJywxoxv3dDz-GcLxlg-t500x500.jpg","Close eyes","DVRST")
nc("Mr. Blue Sky - ELO"), "Mrbluesky.mp3", "mpeg","https://images-na.ssl-images-amazon.com/images/I/71-4vcunM+L._AC_UL165_SR165,165_.jpg", "Mr. Blue Sky" ,"ELO") 
document.querySelectorAll('.cardbox')[0].click();
playpause();


// For normal browser working

    setTimeout(()=>{

        document.querySelector('.playpause').innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20V4L19 12L5 20Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>  
        `
    }, 1000)

// If you don't remove event listeners, they stay forever
function clickboy(e){
    // for (x in array){
    //     document.querySelector('.left').removeEventListener("click", () => {
    //         if (array.includes(x-1)){document.querySelector(`.n${x-1}`).click()}
    //     })
    //     document.querySelector('.right').removeEventListener("click", () => {
    //         if (array.includes(x+1)){document.querySelector(`.n${x+1}`).click()}
    //     })
    // }

    //Above shit doesn't work in remeventlister coz though function argument looks identical, it is not identical,
    // and remeventlistener requires same identical function used during adding that event listener 

        document.querySelector(`.left`).addEventListener("click", () => {
            if (array.includes(e-1)){document.querySelector(`.n${e-1}`).click()}
        }
        )
        document.querySelector(`.right`).addEventListener("click", () => {
            if (array.includes(e+1)){document.querySelector(`.n${e+1}`).click()}
        }
        )
}
function toggle(){
    document.querySelector('.l').classList.toggle("sidebar");   
}
