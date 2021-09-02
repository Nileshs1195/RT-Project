import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConferenceTile from './conferencetile/ConferenceTile';
import styles from './ConferenceComponent.module.css';
import { Grid, Paper } from "@material-ui/core";
import SearchBar from './searchbar/SearchBar';

const ConferenceComponent = () => {
    const [freeConferenceList, setFreeConferenceList] = useState([]);
    const [paidConferenceList, setPaidConferenceList] = useState([]);
    const [defaultFreeConferenceList, setDefaultFreeConferenceList] = useState([]);
    const [defaultPaidConferenceList, setDefaultPaidConferenceList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [newConferenceList, setNewConferenceList] = useState([]);

    useEffect(() => {
        getConferenceList();
    }, []);

    const getConferenceList = () => {
        return axios.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
            .then((response) => {
                if (response.status === 200) {
                    let freeConferenceList = response.data.free.reverse();
                    let paidConferenceList = response.data.paid.reverse();
                    setPaidConferenceList(paidConferenceList);
                    setFreeConferenceList(freeConferenceList);
                    setDefaultFreeConferenceList(freeConferenceList);
                    setDefaultPaidConferenceList(paidConferenceList);
                }
            }).catch(error => {
                console.log(error);
            });
    };

    const renderFreeConferenceData = () => {
        if (freeConferenceList.length > 0) {
            let result = [];
            freeConferenceList.forEach((element, index) => {
                result.push(
                    <ConferenceTile
                        key={index}
                        posterImage={element.imageURL}
                        date={element.confStartDate}
                        conferenceName={element.confName}
                        serviceCost={"FREE"}
                        place={element.venue}
                        websiteLink={element.confUrl}
                    />
                );
            });
            return result;
        }
    };

    const renderPaidConferenceData = () => {
        if (paidConferenceList.length > 0) {
            let result = [];
            paidConferenceList.forEach((element, index) => {
                result.push(
                    <ConferenceTile
                        key={index}
                        posterImage={element.imageURL}
                        date={element.confStartDate}
                        conferenceName={element.confName}
                        serviceCost={"PAID"}
                        place={element.venue}
                        websiteLink={element.confUrl}
                    />
                );
            });
            return result;
        }
    };

    const updateList = (input) => {
        setInputText(input);
        if(input.length > 0) {            
        const filterdList1 = defaultFreeConferenceList.filter(item => {
            return item.city === input || item.confName === input;
        });

        const filterdList2 = defaultPaidConferenceList.filter(item => {
            return item.city === input || item.confName === input;
        });
        setFreeConferenceList(filterdList1);
        setPaidConferenceList(filterdList2);
    } else {
        setFreeConferenceList(defaultFreeConferenceList);
        setPaidConferenceList(defaultPaidConferenceList);
    }
    }

    return (
        <div className={styles.pageContent}>
            <div className={styles.header}>
                <div className={styles.heading}>
                Conference List
                </div>
                <SearchBar 
                  input={inputText}
                  onChange={updateList}
                />
            </div>
            <div className={styles.container}>
                {renderPaidConferenceData()}
                {renderFreeConferenceData()}
            </div>
        </div>
    );
}
export default ConferenceComponent;