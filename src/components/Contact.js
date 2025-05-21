import React from 'react';
import './Section.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>문의나 협업 제안이 있다면 언제든지 연락 주세요!</p>
      <div className="contact-info">
        <p><strong>Email</strong>: dhehdud456@naver.com</p>
        <p><strong>GitHub</strong>: <a href="https://github.com/ohdoyoung" target="_blank" rel="noreferrer">github.com/ohdoyoung</a></p>
        <p><strong>Blog</strong>: <a href="https://velog.io/@ohdoyoung" target="_blank" rel="noreferrer">velog.io/@ohdoyoung</a></p>
      </div>
    </section>
  );
}

export default Contact;