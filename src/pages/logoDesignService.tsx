import LogoDesign from '@/components/containers/home-two/LogoDesign'
import VideoAnimation from '@/components/containers/home-two/VideoAnimation'
import HomeTestinomial2 from '@/components/containers/home/HomeTestinomial2'
import HomeTestinomial4 from '@/components/containers/home/HomeTestinomial4'
import CmnBanner from '@/components/layout/banner/CmnBanner'
import Layout from '@/components/layout/Layout'
import React from 'react'

const logoDesignService = () => {
  return (
   <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Logo Design Service " navigation="Logo Design" />
       <LogoDesign/>
       <HomeTestinomial4/>
   </Layout>
  )
}

export default logoDesignService
