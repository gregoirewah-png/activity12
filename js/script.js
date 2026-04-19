const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            chuck: [ 
                { 
                    "icon_url": "img/chuck.jpeg", 
                    "value": "Chuck Norris can skydive into outer space." 
                }, 
                { 
                    "icon_url": "img/chuck.jpeg", 
                    "value": "The chief export of Chuck Norris is pain." 
                }, 
                { 
                    "icon_url": "img/chuck.jpeg", 
                    "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." 
                }, 
                { 
                    "icon_url": "img/chuck.jpeg", 
                    "value": "Time waits for no man. Unless that man is Chuck Norris." 
                }, 
                { 
                    "icon_url": "img/chuck.jpeg", 
                    "value": "If you spell Chuck Norris in Scrabble, you win. Forever." 
                } 
            ]
        }
    }
});

app.component('chuck-card', {
    props: ['icon_url', 'value'],
    template: `
        <div class="card h-100 shadow-sm border-0">
            <div class="text-center pt-4">
                <img :src="icon_url" class="card-img-top" alt="Chuck Norris Avatar" style="width: 100px;">
            </div>
            <div class="card-body d-flex align-items-center">
                <p class="card-text text-center w-100 fs-5 text-secondary">"{{ value }}"</p>
            </div>
        </div>
    `
});

app.mount('#app');