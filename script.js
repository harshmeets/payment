// script.js

$(document).ready(function () {
    const razorpayApiKey = 'rzp_live_G3WfHTDt1Z9QXL'; // Replace with your actual Razorpay API key

    $('#payment-button').click(function () {
        const amount = $('#amount').val();
        if (amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const options = {
            key: razorpayApiKey,
            amount: amount * 100, // Amount in paise (Razorpay uses smallest currency unit)
            currency: 'INR',
            name: 'RISE IN TECHNOLOGY',
            description: 'Payment for Services',
            image: 'your-logo.png', // Replace with your logo URL
            handler: function (response) {
                // Handle the Razorpay payment success response here
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            },
            prefill: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                contact: '9876543210'
            },
            notes: {
                address: 'Your Address'
            },
            theme: {
                color: '#007bff'
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });
});
