import React from 'react';
import styles from './ConferenceTile.module.css';
import { Grid } from "@material-ui/core";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const ConferenceTile = (props) => {
    const {
        posterImage,
        date,
        conferenceName,
        serviceCost,
        place,
        websiteLink,
        key
    } = props;

    const gotoWebsite = () => {

    };

    return (
        <>
            {/* <Router> */}
                {/* <a href={websiteLink} target="_blank"> */}
                {/* <Link to={websiteLink}> */}
                    <div className={styles.item}>
                        <div>
                            <img className={styles.img} src={posterImage} alt={conferenceName} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>Conference: {conferenceName}</div>
                            <div className={styles.mTop}><span className={styles.fw}>Place: </span>{place}</div>
                            <div className={styles.mTop}><span className={styles.fw}>Service Cost: </span>{serviceCost}</div>
                            <div className={styles.mTop}><span className={styles.fw}>Start Date: </span>{date}</div>
                        </div>
                    </div>
                    {/* </a> */}
                {/* </Link> */}
            {/* </Router> */}
        </>
    );
}
export default ConferenceTile;