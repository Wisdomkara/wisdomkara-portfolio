import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function Contact() {
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState('');
    const [failed, setFailed] = useState(false);
    async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (sending)
        return; const form = event.currentTarget; const data = new FormData(form); setSending(true); setStatus(''); setFailed(false); try {
        await emailjs.send('service_6p735dq', 'template_set8zlm', { from_name: data.get('name'), from_email: data.get('email'), subject: data.get('subject'), message: data.get('message') }, 'vDkxokCw5SWcVQfxL');
        setStatus('Thanks for reaching out. Your message has been sent!');
        form.reset();
    }
    catch {
        setFailed(true);
        setStatus('Your message could not be sent. Please try again or email me directly.');
    }
    finally {
        setSending(false);
    } }
    return <section id="contact" className="contact-section"><div className="wrap contact-grid"><div className="contact-copy"><div className="eyebrow">05 / LET’S MAKE IT HAPPEN</div><h2>Good things start<br />with <em>a conversation.</em></h2><p>Have an idea, a project, or a challenge? Tell me what you’re thinking. Let’s build something that makes a difference.</p><a className="contact-email" href="mailto:wiskara1@gmail.com">wiskara1@gmail.com <ArrowUpRight size={22}/></a><div className="contact-details"><a href="tel:+2347084153584">+234 708 415 3584</a><br /><a href="tel:+2348152282340">+234 815 228 2340</a><br />Available worldwide · Remote collaboration</div></div><form className="contact-form" onSubmit={submit} aria-busy={sending}><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254}/></label><label className="full-width">What are you working on?<input name="subject" placeholder="A new website, an app, something interesting…" required maxLength={200}/></label><label className="full-width">Tell me a little about it<textarea name="message" rows={5} placeholder="Your idea, goals, and anything else I should know." required maxLength={5000}/></label>{status && <p role={failed ? 'alert' : 'status'} className={`form-status ${failed ? 'form-error' : ''}`}>{status}</p>}<Button type="submit" disabled={sending} className="send-button full-width">{sending ? 'Sending your message…' : 'Let’s start a conversation'}{sending ? <Loader2 className="animate-spin"/> : <ArrowUpRight />}</Button></form></div></section>;
}
