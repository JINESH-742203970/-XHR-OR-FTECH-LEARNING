const url='https://jsonplaceholder.typicode.com/users';
function myAxios(method,url,body=null){
    const headers={
        'Content-Type':'application/json',
    }
    return fetch(url,{
        method:method,
        headers:headers,
        body:JSON.stringify(body)
    }).then((res)=>
        // return res.text();
    res.json());
}
// myAxios('GET',url).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })
// myAxios('POST',url,{name:"Bholenath",Job:"DEV"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err));
// fetch ka by default method get
// fetch bydefault return promise