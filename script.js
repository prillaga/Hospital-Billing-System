<script>
    // JavaScript code for handling form submission
    function submitPatientInfo() {
        // Get the values from the form inputs
        var patientName = document.getElementById("April Rose Ellaga").value;
        var patientID = document.getElementById("012345").value;

        // You can perform any necessary validation here

        // If the form is valid, switch to the new page
        if (patientName && patientID) {
            // Redirect to the new summary page (summary.html)
            window.location.href = "summary.html?patientName=" + patientName + "&patientID=" + patientID;
        }
    }
</script>
