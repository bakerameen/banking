import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Adrian' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header>
          <HeaderBox type="greeting" title="welcom" user={loggedIn.firstName || 'Guest'} subtext='Access and manage your account and transaction' />

          <TotalBalanceBox></TotalBalanceBox>
        </header>
      </div>
    </section>
  )
}

export default Home
