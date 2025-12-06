import { IAccordionData } from "@/interfaces/accordion";

export const ACCORDION_DATA: IAccordionData[] = [
    {
        uk: {
            title: "Як оформити замовлення?",
            description:
            `<div>
                <p>&emsp;Для оформлення замовлення необхідно додати потрібний вам товар у кошик, після чого в кошику натиснути кнопку <b>Далі</b>. Після переходу на сторінку оформлення потрібно буде зробити наступне:</p>
                <br />
                <ul>
                    <li>Переконатися у правильності обраного товару та його кількості;</li>
                    <li>Заповнити форму з особистими даними;</li>
                    <li>Вибрати доставку та спосіб оплати;</li>
                </ul>
                <br />
                <p>&emsp;Після пройдених етапів та натискання кнопки <b>Оформити</b> з'явиться інформація про успішно оформлене замовлення. Також дані замовлення надішлються на вказану вами пошту під час оформлення.</p>
            </div>`
        },
        en: {
            title: "How to place an order?",
            description:
            `<div>
                <p>To place an order, you need to add the product you need to the basket, and then click the <b>Next</b> button in the basket. After going to the checkout page, you will need to do the following:</p>
                <ul>
                <br />
                    <li>Make sure the selected product and its quantity are correct;</li>
                    <li>Fill out the form with personal data;</li>
                    <li>Select shipping and payment method;</li>
                </ul>
                <br />
                <p>After completing the steps and clicking the <b>Place an order</b> button, information about the successfully placed order will appear. Also, the order data will be sent to the email you specified during checkout.</p>
            </div>`
        }
    },
    {
        uk: {
            title: "Скільки коштує доставка?",
            description:
            `<div>
                <p>Вартість доставки товару по Україні визначається логістичною компанією “Нова Пошта“.</p>
            </div>`
        },
        en: {
            title: "How much does shipping cost?",
            description:
            `<div>
                <p>The cost of delivering goods across Ukraine is determined by the logistics company “Nova Post”.</p>
            </div>`
        }
    },
    {
        uk: {
            title: "Чи можна купити товар оптом за меншою ціною?",
            description:
            `<div>
                <p>Так можна. За наявності оптових цін на сторінці потрібного вам товару, його вартість автоматично змінюватиметься при зміні його кількості в кошику</p>
            </div>`
        },
        en: {
            title: "Can I buy a product in bulk at a lower price?",
            description:
            `<div>
                <p>Yes, you can. If there are wholesale prices on the page of the product you need, its cost will automatically change when you change its quantity in the basket</p>
            </div>`
        }
    },
]