const url="https://jsonplaceholder.typicode.com/users";
// function myAxios(method,url,body=null){
//     const xhr=new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.responseType='json';
//     xhr.setRequestHeader('Content-Type','application/json')
//     xhr.onload=()=>{
//         // console.log(JSON.parse(xhr.response));
//         if(xhr.status>=400){
//             console.log("failed");
//         }
//         else{
//             console.log(xhr.response);
//         }
//     }
//     xhr.onerror=()=>{
//         console.log('Error!!'); 
//     }
//     xhr.send(JSON.stringify(body));
// }

// myAxios('GET',url);



// myAxios('POST',url,{
//     name:'Khatushyam',
//     job:'Software Developer'
// });
// put is technique to revamps the whole resource
// PATCH is a technique for transmitting the resources when the client transmits partial data that will be updated without changing the whole data
// As we know fetch API is a promise based Api so it provides more clear syntax and better error handling methods.XHR is based on  callback approach and its syntax is not as good as fetch api
// fetch api can handle CROS request wisely without any additional configuration




function myAxios(method,url,body=null){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload=()=>{
            // console.log(JSON.parse(xhr.response));
            if(xhr.status>=400){
             reject(xhr.response);
            }
            else{
                resolve(xhr.response)
               
            }
        }
        xhr.onerror=()=>{
          console.log("failed");
        }
        xhr.send(JSON.stringify(body));
    })
}
myAxios('POST',url,{
    name:'Rakesh',
    job:'Software developer'
}).then((res)=>{
    console.log("Message from then block",res);
}).catch((err)=>{
    console.log(err);
})
myAxios('GET',url);


// xhr.open
// xhr.responseType='json'
// xhe.setRequestHeader('Content-Type','application/json');
// xhr.onload=()=>{
    // if(xhr.status>=400){
    //     reject(xhr.response);
    //     console.log("failed");
    // }
    // else{
    //     resolve(xhr.response);
    // }
    // }
// xhr.onerror=()=>{
//     console.log("failed");
// }
// xhr.send(Json.stringify(body));