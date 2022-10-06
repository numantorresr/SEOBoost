import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';


const FooterComponent = () => {
    return (
        <>
            <div className={styles.containerfooter}>
                <div className={styles.auditcontainerfooter}>
                    <div className={styles.footercontainer}>
                        <img className={styles.logofooter} src='https://res.cloudinary.com/dj8ytkjbs/image/upload/v1665045772/SEOBOOST_Mesa_de_trabajo_1_glm7cd.png'></img>
                        <div className={styles.developedby}>
                            <span>© 2022 | Desarrollado por </span>
                            <div className={styles.developednames}>
                                <span>Numan Torres </span>
                                <Link target="_blank" component="a" href="https://github.com/numantorresr"><GitHubIcon className={styles.iconrrss} /></Link>
                                <Link target="_blank" component="a" href="https://www.linkedin.com/in/numantorres/"><LinkedInIcon className={styles.iconrrss} /></Link>
                                <span>Carlos Vallejo </span>
                                <Link target="_blank" component="a" href="https://github.com/Carlos-Vallejo-Bustamante"><GitHubIcon className={styles.iconrrss} /></Link>
                                <Link target="_blank" component="a" href="https://www.linkedin.com/in/carlos-vallejo-bustamante/"><LinkedInIcon className={styles.iconrrss} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterComponent;