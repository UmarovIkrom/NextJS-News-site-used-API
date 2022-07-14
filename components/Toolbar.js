import toolbarStyles from '../styles/toolbar.module.css'
import Link from 'next/link';

export const Toolbar = () => {
    // const router = useRouter();

    return(
        <div className={toolbarStyles.main}>
            <ul className={toolbarStyles.ul}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/eom">Employee Of The Month</Link></li>
            </ul>

        </div>
    )
}