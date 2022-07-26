
import workoutBg from "../../../images/bg-auth.jpg"

import Layout from "../../common/Layout";

import LayoutOther from "../../common/LayoutOther";

import styles from "../Auth/auth.module.scss"


const NotFound = () => {
	
	return (
		<LayoutOther>
			<Layout bgImage={workoutBg} heading={'404 Not Found Page'} otherPage='other'/>
			<div className={styles.wrapper}>
				<span className={styles.notFound}>404 not found</span>
			</div>
		</LayoutOther>
	);
};

export default NotFound;