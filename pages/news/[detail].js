import { useRouter } from 'next/router';
// our-domain.com/news/detail

function DetailPage() {

    const router = useRouter();

    const detail = router.query.detail;

    //we can send a request here to the backend API
    //to fetch news item with 'detail'

    return (
        <h1>Detail Page</h1>
    )
}

export default DetailPage;