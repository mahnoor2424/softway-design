import DigitalMarketing from '@/components/containers/home-two/DigitalMarketing'
import VideoAnimation from '@/components/containers/home-two/VideoAnimation'
import HomeTestinomial2 from '@/components/containers/home/HomeTestinomial2'
import CmnBanner from '@/components/layout/banner/CmnBanner'
import Layout from '@/components/layout/Layout'
import React from 'react'

const DigitalMarketingservices = () => {
  return (
   <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Digital Marketing Service " navigation="Digital Marketing" />
       <DigitalMarketing/>
       <HomeTestinomial2/>
   </Layout>
  )
}

export default DigitalMarketingservices
