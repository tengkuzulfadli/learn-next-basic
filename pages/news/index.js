import { Fragment } from 'react';
import Link from 'next/link';
// our-domain.com/news

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li><Link href='/news/Page-A'>Page A</Link></li>
                <li>Page B</li>
            </ul>
        </Fragment>
        
    )
}

export default NewsPage;