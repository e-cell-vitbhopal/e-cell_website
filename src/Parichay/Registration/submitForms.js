async function submitForms(data) {
  const ishaanSharma = "https://docs.google.com/forms/d/e/1FAIpQLSfBoAHYi6wQuqEKZ2oWFYeiJX3C61k7kjMZKEjLFQsjNt-Ybg/formResponse";
  
  // Submitting form data for Event 1
  if (data.confirmedEvents.includes('Speaker Session: Ishaan Sharma')) {
    try {
      const formData = new FormData();
      formData.append('entry.726004286', data.name);
      formData.append('entry.959984559', data.email);
      formData.append('entry.1906449228', data.regNo);
      formData.append('entry.362957536', data.contact);
      formData.append('entry.387034500', data.batch);

      await fetch(ishaanSharma, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

    } catch (error) {
      console.error('Form submission failed:', error);
      alert("Error occurred while submitting the form. Please contact us.");
    }
  }

  // try {
  //     // const url = new URL('http://localhost:5000/sendmail');
  //     const url = new URL('https://esummit-registration-backend.onrender.com/sendmail');
  //     url.searchParams.append('name', data.name);
  //     url.searchParams.append('regno', data.regNo);
  //     url.searchParams.append('email', data.email);
  //     url.searchParams.append('confirmedEvents', data.confirmedEvents);
  //     url.searchParams.append('total Amount', data.totalAmount);
  //     url.searchParams.append('tranID', data.tranID);
    
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       mode: 'no-cors'
  //     });
    
  //     if (response.ok) {
  //       console.log('Email sent successfully');
  //     } else {
  //       console.error('Failed to send email');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
    
}

export default submitForms;
