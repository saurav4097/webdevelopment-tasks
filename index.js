let _1feat = document.querySelector('#sec11 .but');
let _1head = document.querySelector('#sec11 #tex1');
let _1date =  document.querySelector('#sec11 .date');
let _1div =  document.querySelector('#sec11');
let _2feat = document.querySelector('#sec12 .but');
let _2head = document.querySelector('#sec12 #tex2');
let _2date =  document.querySelector('#sec12 .date');
let _2div =  document.querySelector('#sec12');
let _31feat = document.querySelector('#sec131 .but');
let _31head = document.querySelector('#sec131 #tex31');
let _31date =  document.querySelector('#sec131 .date');
let _31div =  document.querySelector('#sec131');
let _32feat = document.querySelector('#sec132 .but');
let _32head = document.querySelector('#sec132 #tex32');
let _32date =  document.querySelector('#sec132 .date');
let _32div =  document.querySelector('#sec132');
let roll = document.querySelector('#roll')
let _1aut = document.querySelector('#sec11 .author');
let _2aut = document.querySelector('#sec12 .author');
let _31aut = document.querySelector('#sec131 .author');
let _32aut = document.querySelector('#sec132 .author');


fetch('https://coding-week-2024-api.onrender.com/api/data')
.then(res => {
    return res.json();
})
.then(data => {

 

   _1div.style.backgroundImage=`url(${data[0].image})`;
for(i=0 ;i<data.length;i++){
        if(i==0){
            _1feat.textContent=`${data[i].type}`;
            _1head.textContent=`${data[i].headline}`;
            _1date.textContent=`${data[i].date}`;
            _1div.style.backgroundImage=`url(${data[i].image})`;
            _1aut.textContent=`${data[i].author}`;
        }
        else if(i==1){
            _2feat.textContent=`${data[i].type}`;
            _2head.textContent=`${data[i].headline}`;
            _2date.textContent=`${data[i].date}`;
            _2div.style.backgroundImage=`url(${data[i].image})`;
            _2aut.textContent=`${data[i].author}`;
        }
        else if(i==2){
            _31feat.textContent=`${data[i].type}`;
            _31head.textContent=`${data[i].headline}`;
            _31date.textContent=`${data[i].date}`;
            _31div.style.backgroundImage=`url(${data[i].image})`;
            _31aut.textContent=`${data[i].author}`;
        }
        else if(i==3){
            _32feat.textContent=`${data[i].type}`;
            _32head.textContent=`${data[i].headline}`;
            _32date.textContent=`${data[i].date}`;
            _32div.style.backgroundImage=`url(${data[i].image})`;
            _31aut.textContent=`${data[i].author}`;
        }
        else{
            roll.innerHTML+=` <div  class="sec2card cd">
            <img src=\"${data[i].image}\" alt="">
            <div>
            <div  class="text2" > ${data[i].headline}</div>
                <div style="display: flex; margin-top: 10px;">
                    
                    <svg style="width: 13px" xmlns="http://www.w3.org/2000/svg" fill=" white" viewBox="0 0 24 24" stroke-width="1.5" stroke=" rgb(146, 149, 149)" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div style="font-size: 13px;color: rgb(146, 149, 149);"> ${data[i].date}</div></div>
            </div>
            </div>`
        }
    }
}).catch(error => console.log(error));
