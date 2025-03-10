document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");

    // Load saved feedback from LocalStorage
    function loadFeedback() {
        feedbackList.innerHTML = "";
        const feedbacks = JSON.parse(localStorage.getItem("feedback")) || [];

        feedbacks.forEach(feedback => {
            const div = document.createElement("div");
            div.classList.add("feedback-item");
            div.innerHTML = `<strong>${feedback.name}:</strong> ${feedback.message}`;
            feedbackList.appendChild(div);
        });
    }

    // Handle form submission
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name && message) {
            const feedbacks = JSON.parse(localStorage.getItem("feedback")) || [];
            feedbacks.push({ name, message });
            localStorage.setItem("feedback", JSON.stringify(feedbacks));

            feedbackForm.reset();
            loadFeedback(); // Refresh feedback list
        }
    });

    loadFeedback(); // Load feedback when page loads
});