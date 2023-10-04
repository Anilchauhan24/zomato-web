
function Rajorpay(props) {

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }


            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })

    }


    const makePayment = async (amount) => {
        const response = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!response) {
            alert('You are offline....Failed to load Razorpay SDK')
            return
        }

        const options = {
            key: "rzp_test_Ou8mnKRQHhouZb",
            currency: "INR",
            amount: sessionStorage.getItem("totalPrice") * 100,
            name: "Zomato Order",
            description: "Thanks for purchasing",

            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert("Payment Successful")
            }


        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }




    return (
        <>
            <div>
                <button type="button" className="button btn-primary"
                    onClick={makePayment}>
                    Buy Now</button>


            </div>

        </>
    )
}

export default Rajorpay;