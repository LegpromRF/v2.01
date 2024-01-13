import { useState } from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";

const OrdersCardItem = ({
  img,
  title,
  type,
  budget,
  circulation,
  createDate,
  status,
  id,
}) => {
  return (
    <div className={styles["card__item-order"]}>
      <div className={styles.card__body}>
        <Link to={`/profile/order/edit/${id}`} className={styles.card__edit}>
          <svg
            viewBox="0 0 24 24"
            // fill="#000000"
            width={18}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.65661 17L6.99975 17L6.99975 14M6.10235 14.8974L17.4107 3.58902C18.1918 2.80797 19.4581 2.80797 20.2392 3.58902C21.0202 4.37007 21.0202 5.6364 20.2392 6.41745L8.764 17.8926C8.22794 18.4287 7.95992 18.6967 7.6632 18.9271C7.39965 19.1318 7.11947 19.3142 6.8256 19.4723C6.49475 19.6503 6.14115 19.7868 5.43395 20.0599L3 20.9998L3.78312 18.6501C4.05039 17.8483 4.18403 17.4473 4.3699 17.0729C4.53497 16.7404 4.73054 16.424 4.95409 16.1276C5.20582 15.7939 5.50466 15.4951 6.10235 14.8974Z"
                stroke="#0036FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Редактировать
        </Link>
        <div className={styles.card__image}>
          <img src={img} alt="Фото изделия" width={228} height={228} />
        </div>

        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__number}>{type}</p>
        <div className={styles.card__info}>
          <div className={styles.card__infoItem}>
            <div className={styles.card__label}>Количество</div>
            <div className={styles.card__description}>{circulation}</div>
          </div>
          <div className={styles.card__infoItem}>
            <div className={styles.card__label}>Бюджет</div>
            <div className={styles.card__description}>
              {budget} {budget || budget === 0 ? "₽" : ""}
            </div>
          </div>
          <div className={styles.card__infoItem}>
            <div className={styles.card__label}>Дата создания</div>
            <div className={styles.card__description}>{createDate}</div>
          </div>
          <div className={styles.card__infoItem}>
            <div className={styles.card__label}>Статус</div>
            <div className={styles.card__description}>{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrdersCardItem;
