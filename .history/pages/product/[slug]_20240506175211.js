import React, { useRouter } from 'react'

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return <p>The slug is: {slug}</p>
}

export default Slug