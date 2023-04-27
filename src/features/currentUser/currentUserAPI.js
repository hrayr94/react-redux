export function loadCurrentUser() {
    return new Promise((res,rej)=> {
        setTimeout(() =>{
            res({
                name: "Bob Smith"
            })
        },2000)
    })
}