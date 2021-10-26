form.addEventListener("submit", function(e) {
    e.preventDefault();
    const code = document.querySelector('#code').value;
    console.log(document.querySelector('#code').value);
    console.log(code);
    chrome.runtime.sendMessage({message:"login",payload:{code}},function(response){
        if(response === 'success'){
            console.log("Success");
        }
    });
  })