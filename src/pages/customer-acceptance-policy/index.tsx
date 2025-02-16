import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/08-info-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./customer-acceptance-policy.module.scss";

const CustomerAcceptancePolicy: NextPage = () => {
    return (
        <MainLayout title="Customer Acceptance Policy">
            <HomeProvider>
                <NavLayout>
                    <Header />
                    <Screens.InfoHead
                        breadcrumbs={[
                            { name: "Home Page", href: "/" },
                            { name: "Customer Acceptance Policy" },
                        ]}
                        title="Customer Acceptance Policy"
                        lastUpdate="July 30, 2024"
                        download=""
                    />
                    <Screens.InfoContent
                        content={`
                            <h3 data-title="1. Who Will Punt Accept as a Customer">
                                1. Who Will Punt Accept as a Customer
                            </h3>
                            <p>
                                Punt will do business with you, only if you:
                            </p>
                            <ul>
                                <li>are a natural person (Punt does not accept companies or any other legal entities as customers)</li>
                                <li>have read and agreed to the most recent applicable Terms and Conditions (including any applicable Privacy Policy, Sweeps Rules, Responsible Social Gameplay Policy and this customer acceptance policy) (Terms and Conditions)</li>
                                <li>follow such Terms and Conditions at all times</li>
                                <li>register with and transact on any Punt platform on your own behalf</li>
                                <li>use payment mediums for which you are the legal and beneficial owner</li>
                                <li>are over the age of 18 years</li>
                                <li>reside in the United States (excluding the State of Washington, Washington D.C, Nevada, Michigan, Kentucky, and Idaho)</li>
                                <li>are satisfactorily identified and verified under Punt anti-financial crime program</li>
                                <li>satisfy Punt due diligence measures (as applicable) including source of wealth and funds checks</li>
                                <li>provide information and documents as requested by Punt, in accordance with Punt anti-financial crime program</li>
                                <li>
                                    <p>are not:</p>
                                    <ul>
                                        <li>a politically exposed person (past or present) (PEP)</li>
                                        <li>a family member or close associate of a PEP</li>
                                        <li>named on any sanctions list issued by the United Nations, the European Union, the United Kingdom, the United States, Canada, Australia or any other sanctions list applicable to Error! Reference source not found. from time to time</li>
                                        <li>directly or indirectly linked to countries or territories subject to comprehensive sanctions</li>
                                        <li>an individual with a risk profile falling outside of Punt risk tolerance as determined in Punt sole discretion.</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>If you are accepted as a customer, Punt may ask you to give extra information if Punt either:</p>
                            <ul>
                                <li>classifies you as high risk</li>
                                <li>or deems the extra information necessary from time to time.</li>
                            </ul>
                            <h3 data-title="2. What makes Punt Clasxify a customer as high risk?">
                                2. What makes Punt Clasxify a customer as high risk?
                            </h3>
                            <p>
                                Punt continually screens accepted customer’s information, purchases, redemptions, game activity 
                                and behaviors for relevant financial crime risk indicators. Depending on the specific facts and context, 
                                customers will be classified as having a low, medium or high risk level. Punt will classify a 
                                customer as high risk where they present or are likely to present money laundering, funding of 
                                terrorism or other financial crime risk which has financial or reputational consequences to Punt.
                            </p>
                            <p>
                                While Punt seeks to investigate any financial crime risk alerts within a reasonable timeframe, 
                                compliance with applicable laws may result in delays while additional due diligence is 
                                conducted and relevant information obtained.
                            </p>
                            <h3 data-title="3. What kind of extra information will Punt request?">
                                3. What kind of extra information will Punt request?
                            </h3>
                            <p>
                                If Punt classifies you as high risk or determines that extra information is required, 
                                you may be asked to provide information on, or evidence of, your:
                            </p>
                            <ul>
                                <li>income-generating activities</li>
                                <li>estimated net worth or sources of wealth</li>
                                <li>anticipated pattern and level of Gold Coin purchases</li>
                                <li>sources of funds used on a particular Gold Coin purchase transaction or series of Gold Coin purchase transactions</li>
                                <li>identity attributes in question including name, date of birth and address.</li>
                            </ul>
                            <p>
                                If you fail or refuse to submit, within the timeframe communicated by Punt, the required 
                                information, Punt reserves the right to terminate the business relationship with you and 
                                close your account.
                            </p>
                            <h3 data-title="4. Why does Punt do this?">
                                4. Why does Punt do this?
                            </h3>
                            <p>
                                Punt is required to maintain an anti-financial crime compliance programme which includes assessing the level of financial crime risk presented by its customers and accepting only those customers whom it assesses as having an acceptable level of risk. This requirement is set by:
                            </p>
                            <ul>
                                <li>the laws applicable to Punt</li>
                                <li>its third party service providers</li>
                            </ul>
                            <h3 data-title="5. What are the key aspects of Punt anti-financial crime programme?">
                                5. What are the key aspects of Punt anti-financial crime programme?
                            </h3>
                            <p>
                                The key aspects of Punt anti-financial crime programme include but are not limited to:
                            </p>
                            <ul>
                                <li>the appointment of a money laundering reporting officer or alternative position as required by local regulation</li>
                                <li>a customer due diligence programme incorporating customer identification and verification based on information issued or obtained from independent and reliable sources and know your customer principles</li>
                                <li>conducting enhanced due diligence on customers assessed as higher risk</li>
                                <li>implementing processes and systems to monitor customer transactions to identify suspicious activity</li>
                                <li>investigating and, where appropriate, reporting suspicious activity to applicable regulatory bodies</li>
                                <li>compulsory training of Punt employees and contractors in relation to financial crime risks</li>
                                <li>prohibiting business with customers with an unacceptable level of risk</li>
                                <li>continually monitoring levels of purchases and redemptions and evaluating these against anticipated account activity, the estimated net worth of the customer and the data and information retained on the customer’s economic profile</li>
                                <li>investigating any significant deviations in what Punt understands of a customer’s economic profile and their level of purchases</li>
                                <li>additional local requirements applicable to Punt from time to time.</li>
                            </ul>
                        `}
                    />
                </NavLayout>
                <Footer />
            </HomeProvider>
        </MainLayout>
    );
}

export default CustomerAcceptancePolicy;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
