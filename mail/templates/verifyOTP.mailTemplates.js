const otpMailTemplate = async (firstName, otp) => {
  return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>OTP Email</title>
     <style>
         body {
             font-family: 'Arial', sans-serif;
             line-height: 1.6;
             margin: 0;
             padding: 0;
             background-color: #f4f4f4;
         }
         .container {
             max-width: 600px;
             margin: 20px auto;
             padding: 20px;
             background-color: #fff;
             border-radius: 5px;
             box-shadow: 0 0 10px rgba(0,0,0,0.1);
         }
         h2 {
             color: #333;
         }
         p {
             color: #666;
         }
         .otp-code {
             font-size: 24px;
             font-weight: bold;
             color: #4285f4;
         }
         .note {
             color: #999;
         }
     </style>
 </head>
 <body>
     <div class="container">
         <h2>One-Time Password (OTP) for Verification</h2>
         <p>Hello ${firstName},</p>
         <p>Your OTP for verification is: <span class="otp-code">${otp}</span></p>
         <p class="note">Note: This OTP is valid for Only 5 Minutes. Do not share it with anyone.</p>
         <p>If you did not request this OTP, please ignore this email.</p>
         <p>Best regards,<br>
         Jhunjhunwala Group of Institutions</p>
     </div>
 </body>
 </html>
 `;
};

export default otpMailTemplate;
