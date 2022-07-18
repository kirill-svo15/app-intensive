import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss"
import Layout from "../../common/Layout";
import homeBg from "../../../images/homeBg.jpg"
import Button from "../../ui/button/Button";
import Counters from "../../ui/counters/Countres";

function Home() {
    const navigate = useNavigate()
    return (
        <Layout bgImage={homeBg} type={'home'}>
            <div className={styles.body}>
                <Button cb={()=>navigate('/new-workout')}>New</Button>
                <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
                <Counters/>
            </div>
        </Layout>
    );
}

export default Home;
