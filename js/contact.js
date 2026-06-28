const scriptURL = "https://script.google.com/macros/s/AKfycbzWHqwCnwqQT00EN6msQ_ThoijTnOzh7vWPwypP3pdwzzD9Wm__olivbPrIf66Ezm3_/exec";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("leadForm");
    const msg = document.getElementById("msg");

    if (!form) {
        console.error("leadForm not found");
        return;
    }

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(form);

        try {

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formData,
                redirect: "follow"
            });

            const text = await response.text();

            console.log(text);

            if (msg) {
                msg.innerHTML =
                    "<span style='color:green'>Submitted Successfully.</span>";
            }

            form.reset();

        }
        catch (err) {

            console.error(err);

            if (msg) {
                msg.innerHTML =
                    "<span style='color:red'>Submission Failed.</span>";
            }

        }

    });

});