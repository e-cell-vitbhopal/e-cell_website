async function submitForms(data) {
  const event1URL = "https://docs.google.com/forms/d/e/1FAIpQLSfy3w2d-nnYQ9DLsquJsjinkkQAzZqCjZcRY3kp2ddYb0Asmg/formResponse";
  
  // Submitting form data for Event 1
  if (data.confirmedEvents.includes('Event 1')) {
    try {
      const formData = new FormData();
      formData.append('entry.1658118793', data.name);
      formData.append('entry.1502727777', data.email);
      formData.append('entry.846125518', data.regNo);
      formData.append('entry.412436832', data.contact);
      formData.append('entry.1964165348', data.batch);
      // formData.append('entry.1964165348', data.tranID);

      await fetch(event1URL, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

    } catch (error) {
      console.error('Form submission failed:', error);
      alert("Error occurred while submitting the form. Please contact us.");
    }
  }

  try {
      // const url = new URL('http://localhost:5000/sendmail');
      const url = new URL('https://esummit-registration-backend.onrender.com/sendmail');
      url.searchParams.append('name', data.name);
      url.searchParams.append('regno', data.regNo);
      url.searchParams.append('email', data.email);
      url.searchParams.append('confirmedEvents', data.confirmedEvents);
      url.searchParams.append('total Amount', data.totalAmount);
      url.searchParams.append('tranID', data.tranID);
    
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors'
      });
    
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
}

export default submitForms;
