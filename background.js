let user_signed=false;

chrome.browserAction.onClicked.addListener(async (info, tab) => {
    console.log(is_user_signed_in().then(res=>{
        if(res.userStatus){
            chrome.windows.create(
                {
                    url:'./popup.html',
                    width:300,
                    height:300,
                   
                    focused:true,   
                }
            )
        }else{
            chrome.windows.create(
                {
                    url:'./login.html',
                    width:300,
                    height:300,
                    focused:true,   
                }
            )
        }
    }));
    
    return true;
}); 

function is_user_signed_in() {
    
    return new Promise(resolve => {
        chrome.storage.local.get(['userStatus', 'user_info'], function (response) {
            if (chrome.runtime.lastError) resolve({ userStatus: false, user_info: {} })
            console.log(response.user_info);
            resolve(response.userStatus === undefined ?
                { userStatus: false, user_info: {} } :
                { userStatus: response.userStatus, user_info: response.user_info }
            )
        });
    });
}

function onUserStatus(signIn,user_info){
    console.log(signIn);
    let headers = new Headers();
    const data = {
        "code":`${user_info.code}`
    }
    let tokens="";
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwNzA2MTE0LCJqdGkiOiI3N2U3ODAwNTM2NzU0N2VmOGVlYjFiNzZhNGI1NWRhMyIsInVzZXJfaWQiOjJ9.T5Cnjaf_X65aNOhA4VgLxNVMEqdeUbkfDr5iDveKDKI');
    headers.append('Origin','http://127.0.0.1:8000/api/m/verifyCode/');
    if(signIn){
        return fetch("http://127.0.0.1:8000/api/m/verifyCode/",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(data),
        }).then(res=>{
            return new Promise(resolve=>{
                
                if(res.status!==200) return 'fail';
                res.json().then((data) => {
                    console.log(data["token"]);
                    tokens=tokens+String(data["token"]);
                    console.log(tokens);
                    chrome.storage.local.set({
                        userStatus:signIn,token:{
                            tok:tokens
                        }
                        
                    },function (response){
                        alert("Successfully Logged in");
                        if(chrome.runtime.lastError) resolve('fail');
                        user_signed=true;
                        resolve('success');
                    });
                });
            
                
            });
            
        }) .catch(err => console.log(err));
    }else{

    }
}
chrome.runtime.onMessage.addListener((request,sender,sendResponse) =>{
    console.log(request.message);
    if(request.message==="login"){
        console.log("Hello");
        onUserStatus(true,request.payload).then(res=>sendResponse(res));
        return true;
    }
    else if (request.message === 'userStatus') {
        is_user_signed_in()
            .then(res => {
                sendResponse(res);
            })
            .catch(err => console.log(err));
                return true;
    }
});

