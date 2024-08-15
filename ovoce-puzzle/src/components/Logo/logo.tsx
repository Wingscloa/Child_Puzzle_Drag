import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <div className={styles.logoIMG}>
                    <Image className='img'
                    src={"https://i.pinimg.com/564x/dc/c1/07/dcc1076b844b5fd5e931bfe4be8196df.jpg"}
                    width={100}
                    height={100}
                    alt="cdn-icons-png"/>
                </div>
                <h1 className={styles.logoTXT}><span>G</span><span>R</span><span>A</span><span>B</span> <span>M</span><span>E</span></h1>
                <div className={styles.divider}>
                    {/* <p>This is another section below the divider.</p> */}
                </div>
            </div>
        </>
    )
}