// if(window.location.hostname=="www.youtube.com"){
//     alert("You are in youtube")
// }
const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };


const generateHTML = (pageName) =>{
    return `
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
      <div class='_404'>404</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>STUDYING > ${pageName}</div>
  </div>
   `;
}

checkdata(window.location.href).then(response=>{
    if (response=="Bad Url"){
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML(window.location.hostname);
    }else{

    }
});

switch(window.location.hostname){
    case "graciouskittenskingdom.co.za":
        // document.head.innerHTML = generateSTYLES();
        // document.body.innerHTML = generateHTML("YOUTUBE");
        
        // alert(window.location.href);
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
}

function checkdata(host){
    let headers = new Headers();
    const url = "http://127.0.0.1:8000/api/m/checktext/";
    const data = {
        "message":host
    }
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxMjk1MzM1LCJqdGkiOiI1ZWFkNTkyNjIyZGU0YzhmOWU5NTY3OTUyMWYwYjU3ZSIsInVzZXJfaWQiOjJ9.YNa8yxqvoKbFH3nLhZwQQjDG5jALHkn8cc6PLSfqcYk');
    headers.append('Origin','http://127.0.0.1:8000/api/m/checktext/');
    
    return fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:headers
        // {
        //     "Content-type": "application/json; charset=UTF-8",
        //     "Access-Control-Allow-Origin":"http://40.75.0.156/api/m/checktext/",
        //     "Access-Control-Allow-Credentials":true,

        //     "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxMjk1MzM1LCJqdGkiOiI1ZWFkNTkyNjIyZGU0YzhmOWU5NTY3OTUyMWYwYjU3ZSIsInVzZXJfaWQiOjJ9.YNa8yxqvoKbFH3nLhZwQQjDG5jALHkn8cc6PLSfqcYk"
        // }
    }).then(res => res.json())
    .then(res => {
        console.log(res.status);
        return res.status;
    })
    console.log(response.status);
}

function checkAPI(host){
    const url = "http://127.0.0.1:8000/api/m/checktext/";
    token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxMjk1MzM1LCJqdGkiOiI1ZWFkNTkyNjIyZGU0YzhmOWU5NTY3OTUyMWYwYjU3ZSIsInVzZXJfaWQiOjJ9.YNa8yxqvoKbFH3nLhZwQQjDG5jALHkn8cc6PLSfqcYk";
    let data = new FormData();
    data.append('message', host);
    data.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8000/api/m/checktext/');
    data.append('Access-Control-Allow-Credentials', 'true');
    let x = new XMLHttpRequest();
	x.open('POST', url);
    x.setRequestHeader('Authorization', 'Bearer '+token);
    x.onload = function() {			
        //alert("url : "+details.url+", token : "+token+", response : "+ x.responseText);
        let resp = JSON.parse(x.responseText); 
        // if(resp.status === "Bad Url"){
        //     retValue = true;
        //     alert("url : "+details.url);
        // }
        console.log(resp.status);
    };
    x.send(data);
}
