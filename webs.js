document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission for adding comments
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const commentText = this.querySelector('textarea').value;
            if (commentText.trim() !== "") {
                addComment(this.parentElement, commentText);
                this.querySelector('textarea').value = "";
            }
        });
    });

    // Function to add a comment to the list
    function addComment(commentSection, text) {
        const ul = commentSection.querySelector('.comment-list');
        const li = document.createElement('li');
        li.classList.add('comment-item');
        li.innerHTML = `
            <p>${text}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        ul.appendChild(li);

        // Event listeners for edit and delete
        li.querySelector('.edit').addEventListener('click', function() {
            editComment(li, text);
        });
        li.querySelector('.delete').addEventListener('click', function() {
            deleteComment(li);
        });
    }

    // Function to edit a comment
    function editComment(li, oldText) {
        const newText = prompt('Edit Komentar:', oldText);
        if (newText !== null) {
            li.querySelector('p').textContent = newText;
        }
    }

    // Function to delete a comment
    function deleteComment(li) {
        li.remove();
    }
});
