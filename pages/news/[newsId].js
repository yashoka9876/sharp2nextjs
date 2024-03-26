import { useRouter } from 'next/router'
import React from 'react'

const detailPage = () => {
    const router=useRouter();
    console.log(router.query.newsId);
  return (
    <div>detailPage</div>
  )
}

export default detailPage