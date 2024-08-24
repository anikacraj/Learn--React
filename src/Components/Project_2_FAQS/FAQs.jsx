import React from 'react'
import { FaqsData } from './data';
import FAQ from './FAQ';

export default function FAQs() {
    console.log(FaqsData)
  return (
    <div>
<div>
    <h2>FAQS </h2>
    <h4>
        {FaqsData.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
    </h4>
</div>

    </div>
  )
}
