
// Event Bubbling
// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click", ()=>{
//     console.log("div")
// })

// button.addEventListener("click", ()=>{
//     console.log("button")
// })


// Event Propagation => it will prevent to go on the parent 

// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click", ()=>{
//     console.log("div")
// })

// button.addEventListener("click", (event)=>{
//     event.stopPropagation()
//     console.log("button")
// })






var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", ()=>{
    console.log("div")
})

button.addEventListener("click", (event)=>{1
    console.log("button")
})
button.addEventListener("click", (event)=>{
    event.stopImmediatePropagation();
    console.log("button1")
})









// event bubbling and capturing 
// stop propagation , immediate propagation and prevent default 

// event bubbling => child to parent 
// event capturing => parent to child => to enable it use true as a dependency in event bubbling 

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// An event doesn't stop at the direct element that receives it. The event bubbles up to its ancestors, until it gets to the root element.


// As noted below, calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true has no effect.


