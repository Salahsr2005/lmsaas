import CompanionCard from '@/components/CompanionCard'
import {Button} from '../components/ui/button'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
          <CompanionCard
            id='123'
            name = 'Algerian Public Revolution 1954-1962'
            topic = 'Algerian Great War'
            subject = 'History'
            duration = {45}
            color = '#e5df00'
          />
          <CompanionCard
            id='123'
            name = 'The Economic System in Europe'
            topic = 'Economics'
            subject = 'Geography'
            duration = {45}
            color = '#bde7ffff'
          />
          <CompanionCard
            id='123'
            name = 'The Exponential Function'
            topic = 'Functions'
            subject = 'Maths'
            duration = {45}
            color = '#ffdae6'
          />          
      </section>
      <section className='home-section'>
        <CompanionList
          title = "Recently completed sessions"
          companions = {recentSessions}
          classNames = 'w-2/3 max-lg:w-full'
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page