

export const sendContactForm =  async (data) => 
fetch('/contact/api', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
    }
}).then((res) => {
    if (res.status !== 200) {
        console.log('throwing error')
        throw new Error(`Something went wrong`)
    };
 
    return res.json()
})