import React from 'react'
import BgPic from "@/app/Components/BgPic";
import Header from "../Components/Header"
import BlogCard from "../Components/BlogDetailsComp/BlogDetailsCard"

const BlogDetails = () => {
  return (
    <>
      <Header />

      <BgPic PageHeading='Blog Details' PageName='Blog details' />

      <BlogCard />

    </>
  )
}

export default BlogDetails;