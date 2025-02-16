import React from "react";
import { InfoContent } from "widgets/08-info-screens/ui";
import { Title } from "shared/components/Title";
import css from "./Content.module.scss";

export const Content: React.FC = () => {
    return (
        <div className={css.content}>
            <div className="container">
                <div className={css.content_head}>
                    <Title.V2 className={css.content_title}>Disputes and chargebacks</Title.V2>
                </div>
                <InfoContent
                    content={`
                    <p>
                        Punt places the utmost priority on the safety, security and integrity of its systems andcustomer payment data. <s>We also take fraudulent chargebacks very seriously.</s> Despite this we see that a small minority of customers may see a fraudulent chargeback attempt as a potential quick-win. <s>Before you consider making a chargeback request we would like to make you fully aware that if and when your chargeback is proven to be fraudulent the case could be sent to your local law enforcement agency and you may be at risk of criminal proceedings.</s> We fully investigate all chargebacks and the individuals who make them. Due to our confidence in our own systems and security, we will dispute 100% of all chargebacks issued against Punt. 
                    </p>
                    <p>
                        Full evidence will be supplied to both our payment processors plus the customers card issuer and if necessary, law enforcement agencies as it is a criminal offense to submit a fraudulent chargeback. This may result in the issuer of the fraudulent chargeback facing criminal charges and having convictions placed on their record. 
                    </p>
                    <p>
                        <strong>Customers found to be issuing fraudulent chargebacks will be reported to the main US credit  agencies and this could result in:</strong>
                    </p>
                    <ul>
                        <li>
                            <p>Negative credit rating changes</p>
                        </li>
                        <li>
                            <p>Inability to apply for mortgages</p>
                        </li>
                        <li>
                            <p>Inability to apply for loans</p>
                        </li>
                        <li>
                            <p>Inability to apply for credit cards</p>
                        </li>
                        <li>
                            <p>Inability to open bank accounts</p>
                        </li>
                        <li>
                            <p>Potential closing of existing bank account</p>
                        </li>
                    </ul>
                    <p>
                        In all cases we would immediately suspend or permanently close the customer account if a chargeback was raised in order to protect the security of our payment systems. This would result in the chargeback issuer being unable to play under their account and under any account they attempt to create which is found by our fraud detection systems to be the same or similar.
                    </p>
                `}
                />
            </div>
        </div>
    );
};
