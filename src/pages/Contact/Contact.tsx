import { useRef, useState } from "react"
import { EmailCircle, Send } from "../../assets"
import { Navigator } from "../../components"
import { DICTIONARY, EMAIL, ROUTES, emailData } from "../../config"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    const form = useRef<HTMLFormElement>(null);
    const [data, setData] = useState<{
        email: string;
        fullName: string;
        message: string;
        phone: string;
        subject: string;
    }>({ email: "", message: "", fullName: "", subject: "", phone: "" });
    const [submitRequest, setSubmitRequest] = useState(false)
    const sendEmail = (e: any) => {
        e.preventDefault();
        setSubmitRequest(true)
        if (form.current)
            emailjs.sendForm(emailData.SERVICE_ID, emailData.TEMPLATE_ID, form.current, emailData.PUBLIC_KEY)
                .then(() => {
                    setData({ email: "", message: "", fullName: "", subject: "", phone: "" })
                    toast.success("Email sent successfully!")
                }).catch((error) => {
                    toast.error("Something went wrong... try again later!")
                    console.log(error.text);
                }).finally(() => setSubmitRequest(false)
                );
    };
    return (<div className={classes.container}>
        <Navigator links={[{
            label: DICTIONARY.contact,
            path: `/${ROUTES.contact}`,
            icon: <></>
        }]} />
        <div className={classes.content}>
            <span className={classes.title}>{DICTIONARY.contact}</span>
            <div className={classes.section}                >
                <div className={classes.contactCard}>
                    <h1 className={classes.contactTitle}>{DICTIONARY.contactTitle}</h1>
                    <div className={classes.contactText}>
                        {DICTIONARY.contactParagraph}
                    </div>
                    <div className={classes.contactEmailContainer}>
                        <Send className={classes.sendIcon} />
                        {EMAIL}
                    </div>
                    <div className={classes.linkContainer} >
                        <a href={`mailto:${EMAIL}`} >
                            <EmailCircle className={classes.linkIcon} />
                        </a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className={classes.form}>
                    <div className={classes.inputContainer}>
                        <input className={classes.input}
                            placeholder={DICTIONARY.name}
                            required
                            type="text"
                            name="name"
                            value={data.fullName}
                            onChange={(e) => setData({ ...data, fullName: e.target.value })}
                        />
                        <input className={classes.input}
                            required
                            type="email"
                            placeholder={DICTIONARY.email}
                            name="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <input className={classes.input}
                            type="text"
                            placeholder={DICTIONARY.subject}
                            name="subject"
                            required
                            value={data.subject}
                            onChange={(e) => setData({ ...data, subject: e.target.value })}
                        />
                        <input className={classes.input}
                            type="text"
                            required
                            placeholder={DICTIONARY.phone}
                            name="phone"
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                        />
                    </div>
                    <div className={classes.textAreaContainer}>
                        <textarea className={classes.textArea}
                            placeholder={DICTIONARY.message}
                            required
                            rows={5}
                            name='message'
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                        />
                    </div>
                    <div className={classes.submitBtncontainer}>
                        <button type='submit' disabled={submitRequest} className={classes.submitBtn}>{DICTIONARY.send}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Contact