import VideoAnimation from '@/components/containers/home-two/VideoAnimation'
import HomeTestinomial2 from '@/components/containers/home/HomeTestinomial2'
import HomeTestinomial5 from '@/components/containers/home/HomeTestinomial5'
import CmnBanner from '@/components/layout/banner/CmnBanner'
import Layout from '@/components/layout/Layout'
import React from 'react'

const videoAnnimationService = () => {
  return (
   <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Video Annimation Service " navigation="Video Annimation" />
       <VideoAnimation/>
       <HomeTestinomial5/>
   </Layout>
  )
}

export default videoAnnimationService
