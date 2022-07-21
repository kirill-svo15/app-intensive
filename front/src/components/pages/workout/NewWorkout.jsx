import {useState} from "react";
import {Link} from "react-router-dom";

import styles from "./newWorkout.module.scss"

import workoutBg from "../../../images/bg-auth.jpg"

import Layout from "../../common/Layout";
import LayoutOther from "../../common/LayoutOther";

import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import ReactSelect from "../../ui/select/reactSelect";

const NewWorkout = () => {

    const [name, setName] = useState()

    const exercises = [
        {value:'push-up', label:'Push up'},
        {value:'pull-up', label:'Pull up'},
    ]

    const handleSubmit = ()=>{
        console.log('submit')
    }

    return (
        <LayoutOther>
            <Layout bgImage={workoutBg} heading={'Create new workout'} otherPage='other'/>
            <div className={styles.wrapper}>
                <form className={styles.formWrapper} onSubmit={handleSubmit}>
                    <Field placeholder={'Name'} />
                    <Link className={styles.linkLabel} to={'/new-exercise'}>Add new exercise</Link>
                    <ReactSelect menuIsOpen className={styles.select}/>
                    <Button type={'submit'} cl={'other'} className={styles.btn}>
                        Create
                    </Button>
                </form>
            </div>
        </LayoutOther>


    );
};

export default NewWorkout;