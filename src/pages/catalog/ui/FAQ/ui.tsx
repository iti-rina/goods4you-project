import React, { useState } from 'react';
import { faqItems } from '../../../../../data';
import styles from './FAQ.module.css';

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {isOpen && <p className={styles.content}>{content}</p>}
      <button onClick={toggleAccordion} className={styles.button}>
          {isOpen ? '-' : '+'}
      </button>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>FAQ</h2>
      {faqItems.map((element, i) => <Accordion key={i} title={element.title} content={element.content} />)}
    </section>
  );
}

export default FAQ;