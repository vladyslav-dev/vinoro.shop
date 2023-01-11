/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import useLanguage from '@/hooks/useLanguage';

let delay = -0.8;

const styles: any = {
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        borderRadius: "12px",
        backdropFilter: "blur(6px)",
    },
    loadingText: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        textAlign: "center",
        width: "100%",
        height: "100px",
        lineHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    loadingTextWords: {
        display: "inline-block",
        margin: "0 5px",
        color: "black",
        fontSize: "18px",
        fontWeight: 300,
        fontFamily: "'Quattrocento Sans', sans-serif",
    }
}

const Loader: React.FC = () => {

    const { language } = useLanguage();

    const words = useMemo(() => {
        return {
            uk: ['З', 'А', 'В', 'А', 'Н', 'Т', 'А', 'Ж', 'Е', 'Н', 'Н', 'Я'],
            en: ['L', 'O', 'A', 'D', 'I', 'N', 'G'],
        }
    }, [language])

    return (
        <>
       <style jsx>{`
            @keyframes blurText {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `}</style>
        <div style={styles.loading}>
            <div style={styles.loadingText}>
                {words[language].map((w, i) => {
                    delay += 0.2
                    return (
                        <span
                            key={i}
                            style={{
                                ...styles.loadingTextWords,
                                opacity: 0,
                                animation: `blurText 1.5s ${delay}s infinite linear alternate`
                            }}
                        >{w}</span>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Loader;