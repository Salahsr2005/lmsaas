import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>
        <div className='cta-badge'>Start Learning Your Way</div>
        <h2 className='ext-3xl font-bold'>Build and personalize learning journey</h2>
        <p>Pick a name, subject, voice,& Personality --and start  learning through voice conversationsthat feel natural and fun</p>
        <Image
            src='/images/cta.svg'
            alt='cta'
            width={362}
            height={232}
        />
        <button className='btn-primary'>
            <Image src='icons/plus.svg' alt='plus' height={12} width={12}/>
            <Link href='companions/new'>
                <p>Build a new companion</p>
            </Link>
        </button>
    </section>
  )
}

export default CTA
