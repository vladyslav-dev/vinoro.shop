import { IAccordionData } from "@/interfaces/accordion";

export const ACCORDION_DATA: IAccordionData[] = [
    {
        ru: {
            title: "Как оформить заказ?",
            description:
            `<div>
                <p>Для оформления заказа необходимо добавить нужный вам товар в корзину, после чего в корзине нажать кнопку <b>Далее</b>. После перехода на страницу оформления потребуется сделать следующее:</p>
                <br />
                <ul>
                    <li>Убедиться в правильности выбранного товара и его количестве;</li>
                    <li>Заполнить форму с личными данными;</li>
                    <li>Выбрать доставку и метод оплаты;</li>
                </ul>
                <br />
                <p>После пройденных этапов и нажатия кнопки <b>Оформить</b> появится информация об успешно оформленном заказе. Также данные заказа прейдут на указанную вами почту при оформлении.</p>
            </div>`
        },
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
        ru: {
            title: "Сколько стоит доставка?",
            description:
            `<div>
                <p>Стоимость доставки товара по Украине устанавливается компаниями по предоставлению логистических услуг такими как “НоваПошта” или “DELIVERY”</p>
                <br />
                <p>Для жителей Запорожья доставка по Коммунарскому и Александровскому районам на сумму от 500 ₴ — бесплатная. Остальные районы по договорённости.</p>
            </div>`
        },
        uk: {
            title: "Скільки коштує доставка?",
            description:
            `<div>
                <p>Вартість доставки товару по Україні встановлюється компаніями з надання логістичних послуг такими як “НоваПошта“ або “DELIVERY“</p>
                <br />
                <p>Для мешканців Запоріжжя доставка по Комунарському та Олександрівському районам на суму від 500 ₴ – безкоштовна. Інші райони за домовленістю.</p>
            </div>`
        },
        en: {
            title: "How much does shipping cost?",
            description:
            `<div>
                <p>The cost of delivery of goods in Ukraine is set by companies providing logistics services such as “НоваПошта“ or "DELIVERY"</p>
                <br />
                <p>For residents of Zaporozhye, delivery in Kommunarsky and Aleksandrovsky districts in the amount of 500 ₴ or more is free. Other areas by agreement.</p>
            </div>`
        }
    },
    {
        ru: {
            title: "Можно ли купить товар оптом по меньшей цене?",
            description:
            `<div>
                <p>Да можно. При наличии оптовых цен на странице нужного вам товара, его стоимость будет автоматически изменяться при изменении его количества в корзине</p>
            </div>`
        },
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