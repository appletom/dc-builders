console.log("Hello World")

$().ready(()=> {
    fetch('./server')
    .then(res => {
        $('#currentInfo').html(res)
    })
    .then(data => {
        $('#currentInfo').html(data)
    })

    // let incButton = document.getElementById('increment')
    // incButton.addEventListener('click', ()=>{
    //     fetch('./api/increment', { method: 'POST'})
    //     .then(res => res.json())
    //     .then(data => {
    //         $('#counter-value').html(data)
    //     })
    // })

    // let decButton = document.getElementById('decrement')
    // decButton.addEventListener('click', ()=>{
    //     fetch('./api/decrement', { method: 'POST'})
    //     .then(res => res.json())
    //     .then(data => {
    //         $('#counter-value').html(data)
    //     })
    // })

})