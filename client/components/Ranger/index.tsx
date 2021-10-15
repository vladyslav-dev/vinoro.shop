import React from 'react';
import styles from './Ranger.module.scss'
import { useRanger } from "react-ranger";

const Ranger = ({ rangeHandler }) => {

    const [values, setValues] = React.useState([4]);

    const { getTrackProps, handles } = useRanger({
        min: 3,
        max: 6,
        stepSize: 0.1,
        values,
        onChange: setValues
    });



    return (
        <div className={styles.rangerWrapper}>
            {/* <div
                {...getTrackProps({
                    style: {
                        height: "4px",
                        background: "#BBBBBB",
                        borderRadius: "4px"
                    }
                })}
            >
                {handles.map(({ getHandleProps }) => (
                    <button
                        {...getHandleProps({
                            style: {
                                cursor: "pointer",
                                width: "20px",
                                height: "20px",
                                outline: "none",
                                borderRadius: "100%",
                                background: "#E8E8E8",
                                border: "none",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            }
                        })}
                    />
                ))}
            </div> */}
            <button name="sm" onClick={rangeHandler}>sm</button>
            <button name="md" onClick={rangeHandler}>md</button>
            <button name="lg" onClick={rangeHandler}>lg</button>
        </div>
    )
}


export default Ranger;