// $(function() {
//     const commentList = new CommentList()
//     // const filter = new Filter()
//     addCommentToList(commentList)
//     // filterItems(commentList, filter)
// });
//
// function addCommentToList(commentList){
//   $('#note-form').on("submit", function(event){
//     event.preventDefault()
//     let comment = $('#note').val()
//     commentList.addComment(comment)
//     debugger
//     $('.comments-list').html(commentList.render())
//     $('#note').val('')
//   })
// }

// function filterComments(commentList, filter){
//   $('#search-form').on("submit", function(event){
//     event.preventDefault()
//     let filterTerm = $('#filter').val().toLowerCase()
//     const allNotes = $('li')
//     for (let i = 0; i < allNotes.length; i++){
//       if (!allNotes[i].innerText.toLowerCase().includes(filterTerm)){
//         allNotes[i].style.display = "none"
//       }
//     }
//     $('#filter').val('')
//   })
// }
