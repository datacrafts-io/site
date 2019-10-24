import emailjs from 'emailjs-com'


export default class EmailService {
    send = ({name, email, message}) => {
        emailjs.send(
            'gmail',
            'template_Np00O7AK',
            {
                to_name: 'Darya',
                from_name: name,
                message_html: message,
                from_email: email,
                to_email:'darya@datacrafts.io'
            },
            'user_atnMLVif8Hhs7o00NT4yD')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
}