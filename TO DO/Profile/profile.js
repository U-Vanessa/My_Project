 
        function validateForm() {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }

            if (!document.getElementById("terms").checked) {
                alert("You must agree to the terms and conditions!");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }

        function cancelForm() {
            if (confirm("Are you sure you want to cancel?")) {
                document.getElementById("registrationForm").reset();
            }
        }