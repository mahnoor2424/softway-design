import WebDevelopment from '@/components/containers/home-two/WebDevelopment'
import HomeTestinomial2 from '@/components/containers/home/HomeTestinomial2'
import HomeTestinomial3 from '@/components/containers/home/HomeTestinomial3'
import CmnBanner from '@/components/layout/banner/CmnBanner'
import Layout from '@/components/layout/Layout'
import React from 'react'

const WebsiteServices = () => {
  return (
   <Layout header={2} footer={2} video={0}>
      <CmnBanner title="WebDevelopment Service " navigation="WebDevelopment" />
      <WebDevelopment/>
      <HomeTestinomial3/>
   </Layout>
  )
}

export default WebsiteServices
