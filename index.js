// Code your solutions in this file

function writeCards(names, event){
    let msgList = []
    for(let i = 0; i<names.length; i++){
        msgList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        
    }
    return msgList
}

function countDown(num){
    while(num>=0){
        console.log(num)
        num -= 1
    }
}