import styles from '../styles/eom.module.css';
import Head from 'next/head';


function eom({employee}) {
    console.log("employe", employee);
    return (
        <>
            <Head>
                <title>Employee Of The Month</title>
                <meta name="description" content={`This month's employee of the month is ${employee.name}`}/>

                <meta property="og:image" content={employee.image} />
                <meta property="og:title" content="Employee Of The Month" />
                <meta property="og:description" content={`This month's employee of the month is ${employee.name}`}/>
            </Head>
            <div className="page-container">
                <div className={styles.main}>
                    <h1>Employee Of The Month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>{employee.name}</h3>
                        <h6>{employee.position}</h6>
                        <img src="https://picsum.photos/1012?random=1"/>
                        <p>{employee.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export const getStaticProps = async () => {
    const apiResponse = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth");

    const employee = await apiResponse.json()
    
    return {
        props: {
            employee
        }
    }
}

export default eom;

// https://reqres.in/api/users?page=2'