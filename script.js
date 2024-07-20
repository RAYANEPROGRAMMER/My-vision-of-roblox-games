document.getElementById('apply-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const discord = event.target.discord.value;
    const email = event.target.email.value;
    alert(`Application submitted! Discord: ${discord}, Email: ${email}`);
});
