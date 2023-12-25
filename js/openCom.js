document.getElementById('answer-link-1').addEventListener("click", AddCommentOne);
document.getElementById('answer-link-1-1').addEventListener("click", AddCommentOne);

function AddCommentOne() {
     let comm1 = document.getElementById('comment-1');
     let comm2 = document.getElementById('comment-2');
     comm1.style.cssText = `height: 200px;
     opacity: 1;`;
     comm2.style.cssText = `height: 0;
     opacity: 0;`;
}


document.getElementById('answer-link-2').addEventListener("click", AddCommentTwo)

function AddCommentTwo() {
     let comm1 = document.getElementById('comment-1');
     let comm2 = document.getElementById('comment-2');
     comm2.style.cssText = `height: 200px;
     opacity: 1;`;
     comm1.style.cssText = `height: 0;
     opacity: 0;`;
     
}


