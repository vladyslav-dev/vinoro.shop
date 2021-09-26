import React, { FC,useState } from 'react';
import styles from './Footer.module.scss';
import {FaceBookSvg, InstSvg, ViberSvg} from '../Icons/Footer'


export interface FooterProps { };

const Footer: FC<FooterProps> = () => {

    const state = [{
        id: 1,
        name: "Навигация",
        context: [
            {
                id: 1,
                value: "Главная",
                path: '.'
            },
            {
                id: 2,
                value: "Продукты питания", 
                path: '.'
            },
            {
                id: 3,
                value: "Алкогольные напитки",
                path: '.'
            },
            {
                id: 4,
                value: "Бытовя химия",
                path: '.'
            }
        ]
    },
    {
        id: 2,
        name: "Информация",
        context: [
            {
                id: 1,
                value: "Скачать прайс",
                path: '.'
            },
            {
                id: 2,
                value: "Доставка и оплата", 
                path: '.'
            },
            {
                id: 3,
                value: "Как сделать заказ",
                path: '.'
            },
            {
                id: 4,
                value: "Контакты",
                path: '.'
            }
        ]
    },
    {
        id: 3,
        name: "Помощь",
        context: [
            {
                id: 1,
                value: "Помощь по сайту",
                path: '.'
            },
            {
                id: 2,
                value: "Проблемы с отображением", 
                path: '.'
            }
        ]
    }
    ]


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content__left}>
                    <h1>VINORO</h1>
                    <div className={styles.content__left__text}>
                        <h2>
                            Vinoro Товары из Европы - предостовляет возможность купить более качественный товар привезённый с Европы по хорошей цене.
                        </h2>
                    </div>
                    <div className={styles.content__left__icon}>
                        <FaceBookSvg></FaceBookSvg>
                        <InstSvg></InstSvg>
                        <ViberSvg></ViberSvg>
                    </div>
                    <div className={styles.content__left__tet}>
                        <h2>© Все права защищены. Vinoro - 2020</h2>
                    </div>
                </div>

                <div className={styles.content__right}>
                    {
                        state.map( el => (
                            <div key={el.id}>
                                <h1>{el.name}</h1>
                                    <ul>
                                    {
                                        el.context.map( el => (
                                            <li key={el.id }><a>{el.value}</a></li>
                                        ))
                                    }
                                    </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;
