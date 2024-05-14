import React, { useRouter } from 'react'

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return <p>Post: {slug}</p>
}

export default Slug