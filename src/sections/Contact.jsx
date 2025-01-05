import {useRef, useState} from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();

    const {alert, showAlert, hideAlert} = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({name: '', email: '', message: ''});

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            showAlert({
                show: true,
                text: 'Please implement the email sending function with EmailJS.',
                type: 'danger',
            });

            setTimeout(() => {
                hideAlert({ show: false, text: '', type: 'alert' });
            }, 4000);

            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, 3000);

        // You need to implement the email sending function with EmailJS
        // emailjs
        //     .send(
        //         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        //         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        //         {
        //             from_name: form.name,
        //             to_name: 'JavaScript Mastery',
        //             from_email: form.email,
        //             to_email: 'sujata@jsmastery.pro',
        //             message: form.message,
        //         },
        //         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        //     )
        //     .then(
        //         () => {
        //             setLoading(false);
        //             showAlert({
        //                 show: true,
        //                 text: 'Thank you for your message 😃',
        //                 type: 'success',
        //             });

        //             setTimeout(() => {
        //                 hideAlert(false);
        //                 setForm({
        //                     name: '',
        //                     email: '',
        //                     message: '',
        //                 });
        //             }, 3000);
        //         },
        //         (error) => {
        //             setLoading(false);
        //             console.error(error);

        //             showAlert({
        //                 show: true,
        //                 text: "I didn't receive your message 😢",
        //                 type: 'danger',
        //             });
        //         },
        //     );
    };


    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg"
                     className="absolute lg:max-w-screen-2xl md:w-11/12 md:object-fill h-full m-auto object-cover  lg:block hidden"/>

                <div className="contact-container lg:p-10 max-w-4xl w-full p-5 md:max-w-2xl sm:max-w-md sm:p-3">
                    <h3 className="head-text">Let&#39;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique
                        project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input resize-none"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
