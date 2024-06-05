import { useState } from "react";
import styles from "./AccordionCards.module.css";
import AccordionItems from "./AccordionItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { DATA } from "../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FaqImage from "../images/FAQ.jpg";

function AccordionCards() {
  const [accordionNumber, setAccordionNumber] = useState(null);

  const sameIf = (itemNumber) => {
    if (accordionNumber === itemNumber) {
      setAccordionNumber(null);
    } else {
      setAccordionNumber(itemNumber);
    }
  };

  return (
    <div className={styles.Container}>
      <div className="row w-100 h-100">
        <div className="col-6 w-50">
          <div className={styles.Faq_Img}>
            <img src={FaqImage}></img>
          </div>
        </div>

        <div className="col-6 w-50 ">
          <div className="HeadFaq">
            <h1>
              <b>FAQ</b>
            </h1>
          </div>

          {DATA.map((items) => (
            <div className={styles.Main}>
              <div className={styles.bottom}>
                <AccordionItems
                  accordionNumber={accordionNumber}
                  sameIf={sameIf}
                  itemNumber={items.itemNumber}
                  title={items.title}
                  content={items.content}
                />
              </div>

              <div className={styles.icon}>
                {accordionNumber === items.itemNumber ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionCards;
