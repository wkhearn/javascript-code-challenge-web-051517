$(document).ready(function(){
  commentListener()
  filterListener()
})

function commentListener(){
  $('#note-form').on("submit", function(event){
    event.preventDefault()
    let comment = $('#note').val()
    $('#comments-list').append(`<li id="comment">${comment}</li>`)
    $('#note').val('')
  })
}

function filterListener(){
  $('#search-form').on("submit", function(event){
    event.preventDefault()
    let filterTerm = $('#filter').val().toLowerCase()
    const allNotes = $('li')
    for (let i = 0; i < allNotes.length; i++){
      if (!allNotes[i].innerText.toLowerCase().includes(filterTerm)){
        allNotes[i].style.display = "none"
      }
    }
    $('#filter').val('')
  })
}
