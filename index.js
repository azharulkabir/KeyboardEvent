
const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown",function(){
//     console.log("Keydown");
// });

textarea.addEventListener("keydown",function(e){
    if(e.repeat){
        alert("do not repeat");
    }
});


// textarea.addEventListener("keypress",function(){
//     console.log("Keypress");
// });

// textarea.addEventListener("keyup",function(){
//     console.log("Keyup");
// });

// textarea.addEventListener("keyup",function(e){
//     console.log(e.key);
// });

// textarea.addEventListener("keyup",function(e){
//     console.log(e.keyCode);
// });

// textarea.addEventListener("keyup",function(e){
//     console.log(e.code);
// });

// textarea.addEventListener("keyup",function(e){
//     console.log(e.shiftKey);
// });

// textarea.addEventListener("keyup",function(e){
//     if(e.shiftKey){
//            console.log("shift + " + e.key);
//     }
// });
