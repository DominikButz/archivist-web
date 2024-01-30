import { transporter, email } from "@/util/nodemailer";

export const POST = async (req) => {
    console.log('received request')

   
    if (req.method === 'POST') {
        const body = await req.json()
        console.log(body);
       
        if (!body.senderName || !body.subject || !body.email || !body.message) {
    
            return Response.json({error:"Bad request - data incomplete"}, {status: 400})

        }

        const senderName = body.senderName
        const subject = body.subject
        const senderEmail = body.email
        const message = body.message

        try {
            await transporter.sendMail({
                from: `"${senderName}" <${senderEmail}>`, // sender address
                to: email, // list of receivers
                subject: subject, // Subject line
                text: message, // plain text body
                html: `<p>${message}</p>` // html body

            })

           return Response.json({message: "Successfully sent request!"}, {status: 200})

        } catch(error) {
            return new Response.json({error: error}, {status: 400})
 
        }



    }

    return Response.json({error:"Bad request!"}, {status: 400})
}

