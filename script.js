const ContactForm = document.getElementById("contact-form");

ContactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Open a new window and write the success message
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write(`
        <h1>Your Message sent successfully, We will contact you at email</h1>
      
        <style>
            h1 {
                padding-top: 200px;
                text-align: center;
            }
        </style>
       
    `);
    
    myWindow.document.close();

    // Reset the form
    e.target.reset();
});

// now acees the free trial button-->
const BookTrial = document.querySelector(".bookTrial").addEventListener("click", function(e){
    const newTab = window.open('','_blank');
    // write text for this window
    newTab.document.write(`
         <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile Form</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }
                .form-container {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 300px;
                }
                .form-container h1 {
                    margin-bottom: 20px;
                    text-align: center;
                }
                .form-container input,
                .form-container button {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }
                .form-container button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .form-container button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
          <div class = "form-container">
            <h1> Book A Free Trial & Buy a Mentorship</h1>
            <form>
            <input type = "text" placeholder = "Enter your name" required>
            <input type = "email" placeholder = "Enter your email" required>
            <input type = "phone" placeholder = "Enter your phone no" required>
              Select Your City
        <select name="" id="city">
            <option value="city">Kolkata</option>
            <option value="city">Jhargram</option>
            <option value="city">Medinipur</option>
            <option value="city">Howrah</option>
        </select>
        <br><br>
        Select Your State
        <select name="" id="State">
            <option value="State">West Bengal</option>
            <option value="State">Odisha</option>
            <option value="State">Jharkhand</option>
        </select>
        <button class = "Submit"> Submit </button>
          </form>
          </div>
           <script>
             // Handle form submission
             document.getElementById("profile-form").addEventListener("submit", function(e) {
                 e.preventDefault();
                 alert("Your trial has been booked successfully!");
                 // You can also redirect to another page or perform additional actions here
             });
           </script>

        `);
});
// To handle our services section
const ServiceProvide = document.querySelector('.ourServices').addEventListener("click",function(e){
    //console.log("hello ji");
    
});