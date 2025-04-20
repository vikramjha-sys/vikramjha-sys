/* Created by Tivotal */

const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  const wallpaper = document.querySelector('.wallpaper');
        const proposalWrapper = document.getElementById('proposalWrapper');
        const proposalLetter = document.getElementById('proposalLetter');
        const proposalText = document.getElementById('proposalText');
        const nextPageURL = "C:\\Users\\91874\\OneDrive\\Desktop\\RAM01\\index.html"; // Replace with your actual next page URL

        function openLetter() {
            wallpaper.style.display = 'none'; // Hide the wallpaper
            proposalWrapper.style.opacity = '1'; // Fade in the proposal elements
            setTimeout(() => {
                proposalLetter.classList.add('open'); // Open the letter with animation
                // Wait for the letter animation/display duration (adjust the timeout value)
                const messageDuration = calculateMessageDisplayTime(proposalText.textContent);
                setTimeout(() => {
                    window.location.href = nextPageURL; // Redirect to the next page
                }, messageDuration + 1000); // Add a small buffer after the message
            }, 500); // Small delay before showing the letter wrapper
        }

        function calculateMessageDisplayTime(message) {
            // Basic calculation: assume 150 milliseconds per word
            const wordCount = message.split(/\s+/).filter(Boolean).length;
            return wordCount * 150;
        }
});

