const arr = [
    ["hi", "hello"],
    ["po", "kino"]
]


 
// Method (return element > 0).
// const x = arr.filter((each) => each.includes("po"))
// const checkTitle = title => title[0] === 'po';
// console.log(arr.some(checkTitle))



// const checkTitle = title => title[0] === 'po';
console.log(arr.some(title => title[0] === "po"))