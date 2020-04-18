var form = document.getElementById('form');
        form.onsubmit = function(e){
            e.preventDefault();
            var patient_name = form.PatientName.value;
            var provider = form.HealthcareProvider.value;
            var insurance = form.InsuranceID.value;
            var xray_img = form.filename.value;
            var testing = document.getElementById('result');
            testing.innerHTML = "hello" + patient_name + provider 
            form.reset();
          };