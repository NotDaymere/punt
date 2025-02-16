import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/08-info-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./terms.module.scss";

const Terms: NextPage = () => {
    return (
        <MainLayout title="Punt terms and conditions">
            <HomeProvider>
                <NavLayout>
                    <Header />
                    <Screens.InfoHead
                        breadcrumbs={[
                            { name: "Home Page", href: "/" },
                            { name: "Punt terms and conditions" },
                        ]}
                        title="Punt terms and conditions"
                        lastUpdate="Oct 27, 2023"
                        version="1.0"
                    />
                    <Screens.InfoContent
                        note={`
                            <p>These Terms and Conditions form a binding legal agreement between you and us and apply to your use of any of our Games or our Platform in any way, through any electronic device (web, mobile, tablet or any other device).</p>
                            <p>PLEASE NOTE THAT THESE TERMS AND CONDITIONS INCLUDE A PROVISION WAIVING THE RIGHT TO PURSUE ANY CLASS, GROUP OR REPRESENTATIVE CLAIM AND REQUIRING YOU TO PURSUE PAST, PENDING, AND FUTURE DISPUTES BETWEEN YOU AND US THROUGH INDIVIDUAL ARBITRATION UNLESS YOU OPT OUT WITHIN THE SPECIFIED TIME FRAME. SEE CLAUSE 23 FOR MORE INFORMATION.</p>
                            <p>You must read these Terms and Conditions carefully in their entirety before checking the box for acceptance. By checking the box for acceptance during the registration process, or by accessing the Games or creating a Customer Account, you confirm that you have read and agree to be bound by these Terms and Conditions, which include and are inseparably linked to our Privacy Policy, Sweeps Rules and other game- specific or promotion-specific terms relevant to your Participation.</p>
                            <p>If you do not agree with any provision of these Terms and Conditions or any other linked policy, rules or terms you may not install or use the Platform or play any Game.</p>
                            <p>THE GAMES AND PLATFORM DO NOT OFFER REAL MONEY GAMBLING, AND NO ACTUAL MONEY IS REQUIRED TO PLAY.</p>
                            <p><s>ONLY PLAYERS IN THE UNITED STATES (EXCLUDING THE STATES OF IDAHO, KENTUCKY, MICHIGAN AND WASHINGTON) AND CANADA (EXCLUDING QUEBEC) ARE ELIGIBLE TO ENTER THE SWEEPSTAKES. PLEASE REFER TO CLAUSE 1.1 OF THE SWEEPS RULES TO CHECK YOUR ELIGIBILITY. </s></p>
                            <p>YOU CAN REQUEST REDEMPTION OF ANY PRIZES BY SELECTING THE “GET COINS” AND THEN THE “REDEEM” BUTTON ON THE PLATFORM. WHERE PLAYERS REDEEM PRIZES FOR GIFT CARDS, SUCH PRIZES WILL BE ALLOCATED TO THE EMAIL ADDRESS REGISTERED AGAINST THE PLAYER’S CUSTOMER ACCOUNT, AND IF THIS IS NOT TECHNICALLY POSSIBLE, THEN TO AN ALTERNATIVE EMAIL ADDRESS YOU HAVE DESIGNATED. WHERE PLAYERS REDEEM PRIZES FOR CASH, SUCH PRIZES WILL BE PAID TO THE PAYMENT MEDIUM FROM WHICH YOU PURCHASED GOLD COINS, AND IF THIS IS NOT TECHNICALLY POSSIBLE, THEN THROUGH AN ELECTRONIC PAYMENT TO THE BANK ACCOUNT YOU HAVE DESIGNATED.</p>
                        `}
                        content={`
                            <h2 data-title="DEFINITIONS">DEFINITIONS</h2>
                            <p>
                                <s>Collective Arbitration</s> means any claim as part of a class, group,
                                collective, coordinated, consolidated, mass, or representative proceeding.{" "}
                            </p>
                            <p>
                                <s>Content means</s> text, graphics, user interfaces, visual interfaces,
                                photographs, trade marks, logos, sounds, music, artwork, computer code and
                                other material used, displayed or available as part of the Games and
                                Platform. Content includes Gold Coins and Sweep Coin.{" "}
                            </p>
                            <p>
                                <s>Customer Account</s> means an account held by a Registered Customer.{" "}
                            </p>
                            <p>
                                <s>Excluded Territory</s> means the state of Washington, Kentucky, Michigan
                                and Idaho in the United States, as well as any outlying U.S. territories or
                                possessions, the province of Quebec in Canada, and any other jurisdiction
                                outside of the United States and Canada.{" "}
                            </p>
                            <p>
                                <s>Fraudulent Conduct</s> means any of the conduct described in clause 11.1.{" "}
                            </p>
                            <p>
                                <s>Game means</s> any one or more Game(s) available on the Platform in
                                either Standard Play or Promotional Play. We reserve the right to add and
                                remove Games from the Platform at our sole discretion.{" "}
                            </p>
                            <p>
                                <s>Gold Coin</s> means the virtual social gameplay currency which enables
                                you to play the Standard Play Games. Gold Coins have no monetary value and
                                cannot under any circumstance be redeemed for prizes.
                            </p>
                            <p>
                                <s>Inactive Account</s> means a Customer Account which has not recorded any
                                log in or log out for a period exceeding 12 consecutive months.
                            </p>
                            <p>
                                <s>Merchandise</s> means any physical goods provided to you by Punt as a
                                reward or as a competition or tournament prize.
                            </p>
                            <p>
                                <s>Participate means</s> playing any Games or using our Platform in any
                                manner whatsoever, including any of the conduct described in clause 3.
                            </p>
                            <p>
                                <s>Payment Medium</s> means any card, online wallet, financial/bank account
                                or other payment medium used to purchase Gold Coins
                            </p>
                            <p>
                                <s>Platform means</s> the services provided through any URL or mobile
                                application belonging to, or licensed to, Punt, and branded as part of the
                                “Punt” family of games, including the website located at https://Punt.com,
                                and all subdomains, subpages and successor sites thereof, as well as all
                                Games, features, tools and services available thereon.
                            </p>
                            <p>
                                <s>Player or you</s> means any person who Participates, whether or not a
                                Registered Customer.
                            </p>
                            <p>
                                <s>Player Support Team</s> performs the Player Support Function and has the
                                meaning given in section 39(1) of the Player Protection Directive.
                            </p>
                            <p>
                                <s>Prizes means</s> prizes won when playing Promotional Play Games which are
                                redeemable for valuable prizes in accordance with the Sweeps Rules.
                            </p>
                            <p>
                                <s>Promotional Play</s> means participation in our sweepstakes promotions by
                                playing any games on the Platform with Sweep Coin.
                            </p>
                            <p>
                                <s>Registered Customer</s> means a Player who has successfully registered a
                                Customer Account, whether that account is considered active or not.
                            </p>
                            <p>
                                <s>Standard Play</s> means participating in any game on the Platform played
                                with Gold Coins. We may give you Gold Coins free of charge when you sign up
                                to a Platform and thereafter at regular intervals when you log into a
                                Platform. You may win more Gold Coins when you play in Standard Play and you
                                may purchase more Gold Coins on the Platform. You cannot win prizes when you
                                Participate in Standard Play.
                            </p>
                            <p>
                                <s>Sweep Coin</s> means sweepstakes entries subject to the Sweeps Rules. We
                                may give you Sweep Coin free of charge when you sign up to a Platform, as a
                                bonus when you purchase Gold Coins or via each of our free alternative
                                methods of entry as set out in the Sweeps Rules. You may win more Sweep Coin
                                when you play Promotional Play Games. YOU CANNOT PURCHASE Sweep Coin.
                            </p>
                            <p>
                                <s>Sweeps Rules</s> means the Sweeps Rules available on the Platform.
                            </p>
                            <p>
                                <s>Terms and Conditions</s> means these terms and conditions, as amended
                                from time to time.
                            </p>
                            <p>
                                <s>Third Party Website</s> means a third party website not controlled by us.
                            </p>
                            <p>
                                <s>Punt, we, us or our</s> means our company, Punt.
                            </p>
                            <br>
                            <br>
                            <nav>
                                <a href="#01-protection">1. Licensing and the protection of funds</a>
                                <a href="#02-participation">2. Your participation</a>
                                <a href="#03-licence">3. Licence</a>
                                <a href="#04-account">4. Your customer account</a>
                                <a href="#05-games">5. Games</a>
                                <a href="#06-promotions">6. Promotions</a>
                                <a href="#07-prizes">7. Redemption of prizes</a>
                                <a href="#08-verification">8. Verification</a>
                                <a href="#09-social-gameplay">9.Responsible social gameplay</a>
                                <a href="#10-conduct">10. Fraudulent conduct</a>
                                <a href="#11-intellectual-property">11. Intellectual property</a>
                                <a href="#12-third-party-websites">12. Third party websites and links</a>
                                <a href="#13-disruptions-and-change">13.Disruptions and change</a>
                                <a href="#14-viruses">14. Viruses</a>
                                <a href="#15-privacy-policy">15. Privacy Policy</a>
                                <a href="#16-marketing-communications">16. Marketing communications</a>
                                <a href="#17-use-of-live-chat-services">17. Use of live chat services</a>
                                <a href="#18-complaints">18. Complaints and customer support</a>
                                <a href="#19-suspension-of-account">19. Closure/suspension of account</a>
                                <a href="#20-indemnity">20. Indemnity and limitation of liability</a>
                                <a href="#21-not-a-financial-institution">21. Punt not a financial institution</a>
                                <a href="#22-agreement">22. Dispute resolution and agreement to arbitrate on an individual basis</a>
                                <a href="#23-other">23. Other</a>
                            </nav>
                            <h3 data-title="1. Licensing and the protection of funds" id="01-protection">
                                1. Licensing and the protection of funds
                            </h3>
                            <ol>
                                <li>
                                    <p>The online social game known as “Punt” is owned and operated by Punt. All payments are processed by Punt or any Payment Administration Agent it appoints. The sweepstakes promotions and Prizes offered by Punt are operated by Punt.</p>
                                </li>
                                <li>
                                    <p>Funds equal to the aggregate value of Prizes which Registered Customers have chosen to leave unredeemed are held by Punt in accounts separate from its business account. This means that steps have been taken to protect such funds, but that in the event of insolvency there is no absolute guarantee that any Prizes which you have not yet redeemed will be allocated or paid to you.</p>
                                </li>
                            </ol>
                            <h3 data-title="2. Your participation" id="02-participation">
                                2. Your participation
                            </h3>
                            <p>
                                Restrictions
                            </p>
                            <ol>
                                <li>
                                    <p>You declare and warrant that:</p>
                                    <ol>
                                        <li>
                                            <p><strong>you are over 18 years of age or such higher minimum legal age of majority as stipulated in the jurisdiction of your residence and are, under the laws applicable to you, legally allowed to participate in the Games offered on the Platform;</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>WHEN PARTICIPATING IN:</strong></p>
                                            <blockquote>
                                                1. STANDARD PLAY, YOU DO NOT RESIDE IN OR ACCESS THE PLATFORM FROM THE EXCLUDED TERRITORIES;<br/>
                                                2. PROMOTIONAL PLAY, YOU DO NOT RESIDE IN OR ACCESS THE PLATFORM FROM THE EXCLUDED TERRITORIES;<br/>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <p><strong>you participate in the Games strictly in your personal capacity for recreational and entertainment purposes only;</strong></p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you participate in the Games on your own behalf and not on the behalf of any other person;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>all information that you provide to us during the term of validity of these Terms and Conditions is true, complete and correct, and you will immediately notify us of any change to such information;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>money that you use to purchase Gold Coins is not tainted with any illegality and, in particular, does not originate from any illegal activity or source, or from ill-gotten means;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you will not purchase Gold Coins from a business or corporate account, but only an account held in your name;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you will not be involved in any fraudulent, collusive, fixing or other unlawful activity in relation to your or third parties’ participation in any of the Games and you will not use any software-assisted methods or techniques (including but not limited to bots designed to play automatically) or hardware devices for your participation in any of the Games. We reserve the right to invalidate any participation in the event of such behavior;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>in relation to the purchase of Gold Coins, you must only use a valid Payment Medium which lawfully belongs to you;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you will not sell or trade for value, or seek to sell or trade for value, or accept as a sale or trade for value, any Merchandise provided to you by Punt;</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you will not intentionally lose your chips on purpose to benefit another player’s chip stack, often referred to as ‘chip dumping’, a</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>you will not intentionally receive chips in a ‘chip dumping’ scheme.</strong>
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>GOLD COIN PURCHASES MADE FROM WITHIN THE STATE OF WASHINGTON IN THE UNITED STATES OF AMERICA WILL BE VOIDED AND REFUNDED, MINUS AN ADMINISTRATIVE FEE OF UP TO 10% OF THE TOTAL PURCHASES MADE BY THE PLAYER, IN ADDITION TO ANY CHARGES THAT MAY BE LEVIED BY THE BANK OR FINANCIAL INSTITUTION MANAGING THE AFOREMENTIONED REVERSAL.</p>
                                </li>
                                <li>
                                    <p>It is a Player’s responsibility to ensure that their Participation is lawful in their jurisdiction. Any person who is knowingly in breach of clause 3, including any attempt to circumvent this restriction, for example, by using a VPN, proxy or similar service that masks or manipulates the identification of your real location, or by otherwise providing false or misleading information regarding your location or place of residence, or by Participating from an Excluded Territory or through a third party or on behalf of a third party located in an Excluded Territory, is in breach of these Terms and Conditions. You may be committing fraud and may be subject to criminal prosecution.</p>
                                    <p class="content-list-start">
                                        <strong>Eligible Players</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>Employees of Punt, any of their respective affiliates, subsidiaries, holding companies, advertising agencies, or any other company or individual involved with the design, production, execution or distribution of the Games and their immediate family (spouse, parents, siblings and children, whether the relationship is by birth, marriage or adoption) and household members (people who share the same residence at least 3 months of the year) are not eligible to Participate.</p>
                                </li>
                            </ol>
                            <h3 data-title="3. Licence" id="03-licence">
                                3. Licence
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        Subject to your agreement and continuing compliance with these Terms
                                        and Conditions, Punt grants you a personal, non-exclusive,
                                        non-transferable, non-sublicensable, revocable, limited license to
                                        access and use the Platform and the Content, through a supported Web
                                        browser or mobile device, solely for your personal, private
                                        entertainment and no other reason.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt grants you a personal, non-exclusive, non transferable,
                                        non-sublicensable, revocable, limited license to use the avatars
                                        available on the Platform. PLEASE NOTE THAT Punt MAY ADD OR REMOVE
                                        AVATARS AT ITS SOLE DISCRETION AND WITH NO FURTHER NOTICE TO YOU.
                                        THE PURCHASE OF AN AVATAR IS THE PURCHASE OF A LICENSE TO USE THAT
                                        AVATAR FOR AS LONG AS IT IS AVAILABLE ON THE PLATFORM.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        These Terms and Conditions do not grant you any right, title or
                                        interest in the Platform or Content.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You acknowledge and agree that your license to use the Platform is
                                        limited by these Terms and Conditions and if you do not agree to, or
                                        act in contravention of, these Terms and Conditions, your license to
                                        use the Platform (including the Games and Content) may be
                                        immediately terminated.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Where the Platform or any Game is deemed to be illegal under the
                                        laws of the jurisdiction in which you reside or are situated, you
                                        will not be granted any license to, and must refrain from accessing,
                                        the Platform or relevant Game.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="4. Your customer account" id="04-account">
                                4. Your customer account
                            </h3>
                            <p>
                                <strong>Single Account</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        You are allowed to have only one Customer Account, including any
                                        Inactive Account on the Platform. If you attempt to open more than
                                        one Customer Account, all accounts you have opened or try to open
                                        may be suspended or closed and the consequences described in clause
                                        20.2 may be enforced.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You must notify us immediately if you notice that you have more than
                                        one registered Customer Account, whether active or not on any one
                                        Platform. DO NOT CREATE A NEW CUSTOMER ACCOUNT IF YOU WISH TO CHANGE
                                        YOUR EMAIL, ADDRESS OR SURNAME.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Accuracy</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You are required to keep your registration details up to date at all
                                        times. If you change your address, email, phone number or any other
                                        contact details or personal information contact Customer Support via
                                        this form and choose ‘Request Support’ from the drop down menu in
                                        order to update your details. The name that you provide to us at
                                        registration must be identical to that listed on your government
                                        issued identification.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>
                                            Security and Responsibility of Your Customer Account
                                        </strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        As part of the registration process, you will have to choose a
                                        password to login into the Platform.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        It is your sole and exclusive responsibility to ensure that your
                                        Customer Account login details and any Payment Mediums are kept
                                        secure and are only accessible by you. You accept full
                                        responsibility for any unauthorized use of your Customer Account and
                                        any activity linked to your Customer Account, including by a minor
                                        (which in all events is prohibited).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You must not share your Customer Account or password with another
                                        person, let anyone else access or use your Customer Account or do
                                        any other thing that may jeopardize the security of your Customer
                                        Account.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        f you become aware of, or reasonably suspect that security in your
                                        Customer Account has been compromised, including loss, theft or
                                        unauthorized disclosure of your password and Customer Account
                                        details, you must notify us immediately.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You are solely responsible for maintaining the confidentiality of
                                        your password and you will be held responsible for all uses of your
                                        Customer Account, including any purchases made under the Customer
                                        Account, whether those purchases were authorized by you or not.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You are solely responsible for anything that happens through your
                                        Customer Account, whether or not you undertook those actions. You
                                        acknowledge that your Customer Account may be terminated if someone
                                        else uses it and engages in any activity that breaches these Terms
                                        and Conditions or is otherwise illegal.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We are not responsible for any abuse or misuse of your Customer
                                        Account by third parties due to your disclosure of your login
                                        details to any third party, whether such disclosure is intentional
                                        or accidental, active or passive.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Inactive Customer Accounts</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to close your Customer Account if it is deemed
                                        to be an Inactive Account.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If no transaction has been recorded on your Customer Account for 30
                                        consecutive months, we will remit the balance of the redeemed value
                                        of the Prizes in your Customer Account to you or as otherwise may be
                                        required under applicable law.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Closing of Customer Accounts</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If you wish to close your Customer Account you may do so at any time
                                        by selecting the “Contact Us” link on the Platform and submitting a
                                        request to close your Customer Account. Closing your Customer
                                        Account will forfeit all continued access to and right to use, enjoy
                                        or benefit from any Gold Coins, Sweep Coin and unredeemed Prizes
                                        associated with your Customer Account.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If the reason behind the closure of your Customer Account is related
                                        to concerns about possible responsible social gameplay issues you
                                        must indicate this in your request to close your Customer Account.
                                        Our time-out and exclusion procedures are summarized at clause 10.4
                                        of these Terms and Conditions and are set out in detail in our
                                        Responsible Social Gameplay Policy.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will be able to open your Customer Account again by sending a
                                        request to the Customer Support team. All requests for re-opening of
                                        an account will be evaluated by our Customer Support and Compliance
                                        teams, who abide by strict customer protection guidelines.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Discretion to Refuse or Close Accounts</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to place limits on, suspend, close, or refuse
                                        to open a Customer Account in our sole discretion. If we close your
                                        Customer Account pursuant to clause 20.1 of these Terms and
                                        Conditions, the consequences set out in clause 20 shall apply. If we
                                        close your Customer Account for other reasons, we will make
                                        reasonable efforts to enable you to redeem any Prizes in your
                                        Customer Account, but any license to continued use, enjoyment or
                                        benefit of or from the Gold Coins and Sweep Coin will be terminated.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="5. Games" id="05-games">
                                5. Games
                            </h3>
                            <p>
                                <strong>Rules</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        Games offered on the Platform may have their own rules which are
                                        available on the Platform. It is your responsibility to read the
                                        rules of a Game before playing. You must familiarize yourself with
                                        the applicable terms of play and read the relevant rules before
                                        playing any Game.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Gold Coin Purchases</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The Payment Medium you use to purchase Gold Coins must be legally
                                        and beneficially owned by you and in your name. If it comes to our
                                        attention that the name you registered on your Customer Account and
                                        the name linked to your Payment Medium differ, your Customer Account
                                        will be immediately suspended. Should your Customer Account be
                                        suspended, we recommend that you contact Customer Support via this
                                        form for details regarding our verification process.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to request documents and information to verify
                                        the legal and beneficial ownership of the Payment Medium you use to
                                        make Gold Coin purchases.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You agree that we and our Payment Administration Agents and payments
                                        facilitators may store your payment information (e.g. card number or
                                        token) to process your future purchases. By accepting these Terms
                                        and Conditions, you authorize Punt and our Payment Administration
                                        Agents and payments facilitators to store your payment credentials
                                        in compliance with applicable payment processing regulations.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt begins processing a payment for the purchase of Gold Coins when
                                        you click on the “SELECT” button.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>No Refunds.</strong> Purchases of Gold Coins are final and
                                        are not refundable, transferable or exchangeable. You agree to
                                        notify us about any billing problems or discrepancies within 30 days
                                        from the date of your purchase. If you do not bring them to our
                                        attention within 30 days, you agree that you waive your right to
                                        dispute such problems or discrepancies. You are responsible for and
                                        agree to reimburse us for all reversals, charge-backs, claims, fees,
                                        fines, penalties and any other liability incurred by us (including
                                        costs and related expenses) that were caused by or arising out of
                                        payments that you authorized or accepted or that were authorized or
                                        accepted using your Customer Account (even if not authorized by
                                        you).
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Gold Coin and Sweep Coin Balance</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You may participate in any Game only if you have sufficient Gold
                                        Coins or Sweep Coin (as applicable) in your Customer Account for
                                        such Participation. We will not extend you any credit whatsoever for
                                        the purchase of Gold Coins or otherwise.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        From time to time, we may assign minimum or maximum Gold Coin
                                        purchases as specified and offered on the Platform.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Once a Gold Coin purchase has been made, the funds will be drawn
                                        from your Payment Medium as soon as practicable.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The purchase of Gold Coins is the purchase of a license that allows
                                        you to Participate in Standard Play Games and is not the deposit of
                                        funds which can be withdrawn. Funds used to purchase Gold Coins will
                                        not, and cannot, be refunded to you, except as provided in clause
                                        6.6. Gold Coins do not have any real money value
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Gold Coins or Sweep Coin that have been submitted for play and
                                        accepted cannot be changed, withdrawn or canceled and the Gold Coins
                                        or Sweep Coin(whichever applicable) will be drawn from your Gold
                                        Coin or Sweep Coin balance instantly.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If you are found to have one or more of your purchases returned or
                                        reversed or charged back, your Customer Account will be suspended.
                                        If this occurs, the amount of such purchases will constitute a debt
                                        owed by you to us and you must immediately remit payment for such
                                        purchases through an alternative payment method. Until payment is
                                        received by us or our Payment Administration Agent, any purchases
                                        and winnings will be deemed void and requests to redeem Sweep Coin
                                        for Prizes will not be allowed.
                                    </p>
                                </li>
                                <li>
                                    <p>In accordance with the Sweeps Rules:</p>
                                    <ol>
                                        <li>
                                            <p>
                                                <strong>
                                                    unless we require otherwise in accordance with clause
                                                    6.13(b), any Sweep Coin allocated to you is only
                                                    required to be played once before it is eligible to be
                                                    redeemed as a Prize;
                                                </strong>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>
                                                    We may, in our sole discretion, require that any Sweep
                                                    Coin allocated to you be played a greater number of
                                                    times (not exceeding 20) in any combination of
                                                    Promotional Play Games before it is able to be redeemed
                                                    as a Prize.
                                                </strong>
                                            </p>
                                        </li>
                                    </ol>
                                    <p class="content-list-start">
                                        <strong>Void Games</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to declare Participation in a Game void,
                                        partially or in full, if, in our sole discretion, we deem it obvious
                                        that there was an error, mistake, misprint or technical error on the
                                        pay-table, win-table, minimum or maximum stakes, odds or software.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Final Decision</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In the event of a discrepancy between the result showing on a user’s
                                        device and the Punt server software, the result showing on the Punt
                                        server software will be the official and governing result.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="6. Promotions" id="06-promotions">
                                6. Promotions
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        All promotions, including Games played in Promotional Play,
                                        contests, special offers and bonuses are subject to these Terms and
                                        Conditions, the Sweeps Rules and to additional terms that may be
                                        published at the time of the promotion
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In the event and to the extent of any conflict between these Terms
                                        and Conditions and any promotion-specific terms and conditions, the
                                        promotion-specific terms and conditions will prevail.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt reserves the right to withdraw or modify such promotions
                                        without prior notice to you.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If, in the reasonable opinion of Punt, we form the view that a
                                        Registered Customer is abusing any promotion, to derive any
                                        advantage or gain for themselves or other Registered Customers,
                                        including by way of Fraudulent Conduct we may, at our sole
                                        discretion, withhold, deny or cancel any advantage, bonus or Prize
                                        as we see fit.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Without limiting clause 12.4, you confirm that you grant Punt an
                                        irrevocable, perpetual, worldwide, non-exclusive, royalty-free
                                        license to use in whatever way we see fit, and without further
                                        acknowledgement of you as the author, any Content you post or
                                        publish as part of a promotion, contest or competition.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="7. Redemption of prizes" id="07-prizes">
                                7. Redemption of prizes
                            </h3>
                            <p>
                                <strong>Prize Redemption Methods</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>Subject to these Terms and Conditions:</p>
                                    <ol>
                                        <li>
                                            <p>
                                                <strong>
                                                    When you choose to redeem Prizes for gift cards
                                                </strong>
                                                , the gift cards will be allocated to the email address that
                                                you have registered against your Customer Account, or if
                                                this is not technically possible, then to an alternative
                                                email address you nominate, provided that email address is
                                                also your address and not that of a third party;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>When you choose to redeem Prizes for cash</strong>,
                                                the cash payment will be made to the Payment Medium from
                                                which you purchased Gold Coins, or if this is not
                                                technically possible, then to an alternative financial
                                                account you nominate, provided that account is legally and
                                                beneficially owned by you. We reserve the right to require
                                                the use of the same payment method for redemption of Prizes
                                                as was used to purchase Gold Coins, or a specific payment
                                                method at our own discretion.
                                            </p>
                                        </li>
                                    </ol>
                                    <p class="content-list-start">
                                        <strong>Limits and Fees</strong>
                                    </p>
                                    <li>
                                        <p>
                                            We reserve the right to charge fees for processing the
                                            redemption of Prizes to you and to set a minimum redemption
                                            threshold of SC50 for Prize redemptions.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            In New York and Florida, the maximum redemption value for a
                                            Prize won on any one spin or play is USD $5,000 and any Prize
                                            with a value in excess of USD $5,000 will be reduced to a
                                            maximum value of USD $5,000. In all other states and provinces,
                                            the maximum redemption value for a Prize won on any one spin or
                                            play is USD $60,000 and any Prize with a value in excess of USD
                                            $60,000 will be reduced to a maximum value of USD $60,000.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            We reserve the right, in our sole discretion, to limit the value
                                            of Prize redemptions for each Participant to USD$5,000 per day.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>
                                                Your Responsibility for Prize Redemptions and Accuracy of
                                                Details
                                            </strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            When you choose to redeem Prizes for gift cards pursuant to
                                            clause 8.1(a), it is your sole responsibility to ensure that the
                                            email address and all relevant details you provide are accurate.
                                            If the details you have provided are not accurate, and we have
                                            processed the redemption using the details you have provided,
                                            the redemption of that Prize is complete and we are not required
                                            to reissue the gift cards.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            If no valid email address is provided to us within 60 days of a
                                            request from us to do so, Punt is not obliged to allocate the
                                            gift cards to you and may in its discretion deem the Prizes to
                                            be void.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            When you choose to redeem Prizes for cash, it is your sole
                                            responsibility to ensure that your financial institution will
                                            accept payment from us into your bank account. Punt has no
                                            obligation to check whether your financial institution will
                                            accept payments from us to your nominated bank account.
                                        </p>
                                    </li>
                                    <li>
                                        <p>Prizes redeemed for cash:</p>
                                        <ol>
                                            <li>
                                                <p>
                                                    will be paid into a joint account or joint wallet
                                                    provided that one of the names on the joint account or
                                                    joint wallet matches the name you provided when
                                                    registering your Customer Account or your verified name
                                                    and all verification checks we require in relation to
                                                    you and the other account holder are completed to our
                                                    satisfaction. For the avoidance of doubt, if either
                                                    joint account holder does not satisfy our verification
                                                    requirements, as determined solely at our discretion, we
                                                    will not make payments into the nominated joint account;
                                                </p>
                                            </li>
                                            <li>
                                                <p>will not be paid into:</p>
                                                <blockquote>
                                                    1) a joint account or joint wallet where one of the
                                                    joint owners is a minor; or custodial accounts;
                                                    <br />
                                                    2) any account held on trust for, or for the benefit of,
                                                    a third party (including a minor).
                                                </blockquote>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p>
                                            Where you are required to provide the details of your financial
                                            institution, bank account or online wallet, you agree that you
                                            are solely responsible for the accuracy of those details. You
                                            further agree that, where you have chosen to redeem a Prize for
                                            cash and the details you have provided are not accurate, and we
                                            have processed the payment using the details you have provided,
                                            the redemption of that Prize is complete and we cannot and are
                                            not required to reverse or reissue the payment.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            You acknowledge and agree that, if your financial institution
                                            will not accept payments from Punt or where your bank account or
                                            online wallet does not meet the requirements in these Terms and
                                            Conditions:
                                        </p>
                                        <ol>
                                            <li>
                                                <p>
                                                    you will be required to nominate an alternative bank
                                                    account for the payment;
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    there will be delays in the processing of the payment to
                                                    you;{" "}
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    f you are unable to nominate an alternative bank account
                                                    which meets the requirements set out in these Terms and
                                                    Conditions within 60 days of a request from us to do so,
                                                    Punt is not obliged to make the relevant payments to you
                                                    and may in its discretion deem the Prizes to be void.
                                                </p>
                                            </li>
                                        </ol>
                                        <p class="content-list-start">
                                            <strong>Currency</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            All Gold Coin purchases and direct bank transfer payments are
                                            executed in USD. It is a Player’s responsibility to ensure that
                                            their nominated bank account can accept transactions in USD.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            All foreign exchange transaction fees, charges or related costs
                                            that you may incur as a result of, or in relation to, payments
                                            made by the Punt to you are to be borne solely by you, including
                                            but not limited to any losses or additional costs arising from
                                            foreign exchange fluctuations.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Timing and Frequency for Prize Redemptions</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            We process requests to redeem Prizes in the order in which they
                                            are received. Our goal is to process your request as soon as
                                            practicable.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            We will only process one Prize redemption request per Customer
                                            Account in any 24 hour period.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Where you choose to redeem Prizes for cash you acknowledge and
                                            agree that it may take up to 10 business days to process the
                                            relevant payment into your nominated bank account.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            There may be delays in payments due to our identity verification
                                            process and certain Payment Mediums will require additional
                                            verification at the time of redemption.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Payments of over US$10,000 may require a longer processing time
                                            than usual due to bank clearance and security and fraud checks
                                            and may also be paid in more than one lump sum. This may add up
                                            to 7 days to the normal processing time but is dependent on the
                                            circumstances of each individual case.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Without limiting clause 8.2, Players can request to redeem
                                            Prizes of any value, however we reserve the right to allocate or
                                            pay Prizes in smaller increments over a number of days until all
                                            of the Prize has been allocated or paid.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Payment Administration Agent</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            You acknowledge and agree that we may in our sole discretion,
                                            from time to time, appoint one or more Payment Administration
                                            Agents to accept or make payments (including merchant
                                            facilities) from or to Players on our behalf.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            A Payment Administration Agent will have the same rights, powers
                                            and privileges that we have under these Terms and Conditions and
                                            will be entitled to exercise or enforce their rights, powers and
                                            privileges as our agent or in their own name. In no event will
                                            we be liable to any Player for any loss, damage or liability
                                            resulting from the Payment Administration Agent's negligence or
                                            acts beyond the authority given by Punt.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Expiry and Forfeiture</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Sweep Coin are only valid for 90 days from the date you last
                                            logged on to your Customer Account and will thereafter
                                            automatically expire.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Sweep Coin may be forfeited if a Customer Account is closed for
                                            any reason, or at our discretion.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Updating Payment Details</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Updating or adding additional payment details for the sole
                                            purpose of redeeming Prizes may only be done by contacting{" "}
                                            <s>support@Punt.com.</s>
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Refused Prizes</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            If you choose to redeem Prizes for cash but refuse to accept
                                            payments made to your nominated bank account by Punt, you must
                                            refuse the amount in its entirety. Where you refuse to accept
                                            payment to your nominated bank account more than twice in any 3
                                            month period, Punt reserves the right to suspend your Customer
                                            Account to undertake investigations to ensure that the Platform
                                            is not being used as a vehicle for fraudulent activity.
                                        </p>
                                        <p class="content-list-start">
                                            <strong>Mistaken Credits</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            If we mistakenly credit your Customer Account from time to time
                                            with Prizes that do not belong to you, whether due to a
                                            technical error, human error or otherwise, the amount credited
                                            will remain Punt property and will be deducted from your
                                            Customer Account. If you have been transferred cash or gift
                                            cards that do not belong to you prior to us becoming aware of
                                            the error, the mistakenly paid amount will (without prejudice to
                                            other remedies and actions that may be available at law)
                                            constitute a debt owed by you to us. In the event you discover
                                            an incorrect crediting, you are obliged to notify Customer
                                            Support by using the “Contact” link on the Platform without
                                            delay.
                                        </p>
                                    </li>
                                </li>
                            </ol>
                            <h3 data-title="8. Verification" id="08-verification">
                                8. Verification
                            </h3>
                            <p>
                                <strong>Verification Checks</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        You agree that we are entitled to conduct any identification, credit
                                        and other verification checks that we may reasonably require or that
                                        are required of us under applicable laws and regulations or by
                                        relevant regulatory authorities or to otherwise prevent financial
                                        crime.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Until all required verification checks are completed to our
                                            satisfaction:
                                        </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>
                                                any request you have made for redemption of Prizes will
                                                remain pending;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                we are entitled to restrict your Customer Account in any
                                                manner that we may reasonably deem appropriate, including by
                                                suspending or closing your Customer Account.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        We will carry out additional verification procedures in accordance
                                        with our internal anti-financial crime policies, including without
                                        limitation for any cumulative or single redemption of Prizes
                                        exceeding a value of USD$2,000 (or any USD amount that is equivalent
                                        to or greater than €2,000 from time to time). Verification
                                        procedures may, for example, include requests for, and our
                                        examination of, copies of your:
                                    </p>
                                    <ol>
                                        <li>
                                            <p>
                                                identification documentation (including photo
                                                identification) such as a passport;
                                            </p>
                                        </li>
                                        <li>
                                            <p>proof of your address such as a utility bill;</p>
                                        </li>
                                        <li>
                                            <p>
                                                source of wealth or source of funds documentation such as a
                                                pay slip or bank statement.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        Where any identification, credit or other verification check we
                                        require cannot be completed to our satisfaction because you have not
                                        provided any document we request from you in the form that we
                                        require within 30 days’ of the date the document was first
                                        requested, then we are under no obligation to continue with the
                                        verification check and we may in our sole discretion close or
                                        otherwise restrict your Customer Account in any manner that we may
                                        reasonably deem appropriate
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Players who request the redemption of Prizes held in a suspended or
                                        closed Customer Account should contact Customer Support via this
                                        form. Nothing in this provision should be construed as conveying a
                                        right to any such redemption. Your rights in that regard are as set
                                        out elsewhere in these Terms and Conditions.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>External Verification Checks</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You agree that Punt may use third party service providers to run
                                        external identification and other verification checks on all
                                        Customers on the basis of the information provided by you from time
                                        to time.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="9.Responsible social gameplay" id="09-social-gameplay">
                                9.Responsible social gameplay
                            </h3>
                            <p>
                                <strong>Policy</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        Punt actively supports responsible social gameplay and encourages
                                        its Players to make use of a variety of responsible social gameplay
                                        features so as to better manage their Customer Account.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We refer to you our Responsible Social Gameplay Policy for full
                                        details.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt is committed to providing excellent customer service. As part
                                        of that pledge, Punt is committed to supporting responsible social
                                        gameplay. Although Punt will use all reasonable endeavors to enforce
                                        its responsible social gameplay policies, Punt does not accept any
                                        responsibility or liability if you nevertheless 9.4. 9.5. continue
                                        gameplay and/or seek to use the Platform with the intention of
                                        deliberately avoiding the relevant measures in place and/or Punt is
                                        unable to enforce its measures/policies for reasons outside of
                                        Punt's reasonable control.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Take a Break (Time-Out) and Self-Exclusion</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You may, at any time, request a time-out or self-exclusion from our
                                        Games. You may also set a limit on your purchases of Gold Coins or
                                        the amount of Sweep Coin you play. To view the various options
                                        available, refer to our Responsible Social Gameplay Policy.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Player Protection Policy</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We want to ensure that you enjoy your experience playing our Games
                                        in a safe and responsible manner. On the Responsible Social Gameplay
                                        page of our Platform’s principal website, we have a detailed Player
                                        Protection Policy, which includes a list of mechanisms which you can
                                        enlist in order to ensure a safer gameplay experience.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="10. Fraudulent conduct" id="10-conduct">
                                10. Fraudulent conduct
                            </h3>
                            <ol>
                                <li>
                                    <p>You will not, directly or indirectly:</p>
                                    <ol>
                                        <li>
                                            <p>
                                                hack into any part of the Games or Platform through password
                                                mining, phishing, or any other means;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                attempt to modify, reverse engineer, or reverse-assemble any
                                                part of the Games or Platform;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                nowingly introduce viruses, Trojans, worms, logic bombs,
                                                spyware, malware, or other similar material;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                circumvent the structure, presentation or navigational
                                                function of any Game so as to obtain information that Punt
                                                has chosen not to make publicly available on the Platform;
                                            </p>
                                        </li>
                                        <li>
                                            <p>engage in any form of cheating or collusion;</p>
                                        </li>
                                        <li>
                                            <p>
                                                use the Platform and the systems of Punt to facilitate any
                                                type of illegal money transfer (including money laundering
                                                proceeds of crime);
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                participate in or take advantage of, or encourage others to
                                                participate in or take advantage of schemes, organizations,
                                                agreements, or groups designed to share:
                                            </p>
                                            <blockquote>
                                                1) tspecial offers or packages emailed to a specific set of
                                                players and redeemable by URL;
                                                <br />
                                                2) identification documents (including, but not limited to,
                                                photographs, bills and lease documents) for the purpose of
                                                misleading Punt as to a Player’s identity.
                                            </blockquote>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        You must not use the Platform for any unlawful or fraudulent
                                        activity or prohibited transaction (including Fraudulent Conduct)
                                        under the laws of any jurisdiction that applies to you. We monitor
                                        all transactions in order to prevent money laundering.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If Punt suspects that you may be engaging in, or have engaged in
                                        fraudulent, unlawful or improper activity, including money
                                        laundering activities or any conduct which violates these Terms and
                                        Conditions, your access to the Platform will be suspended
                                        immediately and your Customer Account may be closed. If your
                                        Customer Account is suspended or closed under such circumstances,
                                        Punt is under no obligation to reverse any Gold Coin purchases you
                                        have made or to redeem any Sweep Coin or Prizes that may be in your
                                        Customer Account. In addition, Punt may pass any necessary
                                        information on to the relevant authorities, other online service
                                        providers, banks, credit card companies, electronic payment
                                        providers or other financial institutions. You will cooperate fully
                                        with any Punt investigation into such activity.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If you suspect any unlawful or fraudulent activity or prohibited
                                        transaction by another Player, please notify us immediately via the
                                        means of communication listed in the Customer Complaints procedure
                                        (described in clause 19).
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="11. Intellectual property" id="11-intellectual-property">
                                11. Intellectual property
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        The computer software, the computer graphics, the Platform and the
                                        user interface that we make available to you is owned by, or
                                        licensed to, Punt or its associates and protected by relevant
                                        intellectual property laws. You may only use the software for your
                                        own personal, recreational uses in accordance with all rules, terms
                                        and conditions we have established (including these Terms and
                                        Conditions and the Sweeps Rules) and in accordance with all
                                        applicable laws, rules and regulations.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You acknowledge that Punt is the proprietor or authorized licensee
                                        of all intellectual property in relation to any Content.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Your use of the Games and Platform does not provide you with any
                                        intellectual property rights in the Content, Games or Platform.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You grant us, and represent and warrant that you have the right to
                                        grant us, an irrevocable, perpetual, worldwide, non- exclusive,
                                        royalty-free license to use in whatever way we see fit, any
                                        information, images, videos, comments, messages, music or profiles
                                        you publish or upload to any website or social media page controlled
                                        and operated by Punt.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You must not reproduce or modify the Content in any way, including
                                        by removing any copyright or trade mark notice.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        All trademarks and logos displayed in the Games and Platform are the
                                        property of their respective owners and are protected by applicable
                                        trademark and copyright laws.
                                    </p>
                                </li>
                            </ol>
                            <h3
                                data-title="12. Third party websites and links"
                                id="12-third-party-websites"
                            >
                                12. Third party websites and links
                            </h3>
                            <p>
                                <strong>Third Party Websites</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        <strong>Third Party Websites</strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>is not responsible for Third Party Websites;</p>
                                        </li>
                                        <li>
                                            <p>
                                                makes no guarantee as to the content, functionality, or
                                                accuracy of any Third Party Website.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        You further acknowledge that some Third Party Websites may be
                                        fraudulent in nature, offering Gold Coins or Sweep Coin which the
                                        operators of those websites are not authorized to provide, in an
                                        effort to induce you to reveal personal information (including
                                        passwords, account information and credit card details). You agree
                                        that Punt is not responsible for any actions you take at the request
                                        or direction of these, or any other Third Party Websites.{" "}
                                        <s>
                                            WE DO NOT AUTHORIZE ANY THIRD PARTY TO OFFER GOLD COINS OR Sweep
                                            Coin
                                        </s>
                                        . Any such offer should be deemed fraudulent and disregarded.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Third Party Websites are subject to the terms and conditions
                                        outlined by that third party.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Links</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Links</strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>indicate a relationship between Punt and the third party;</p>
                                        </li>
                                        <li>
                                            <p>
                                                indicate any endorsement or sponsorship by Punt of the Third
                                                Party Website, or the goods or services it provides, unless
                                                specifically indicated by Punt.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Where a website controlled and operated by Punt contains links
                                            to various social networking sites, such as Facebook® and
                                            Twitter®, you acknowledge and agree that:
                                        </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>
                                                any comments or content that you post on such social
                                                networking sites are subject to the terms and conditions of
                                                that particular social networking site;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you will not post any comments that are false, misleading or
                                                deceptive or defamatory to us, our employees, agents,
                                                officers or other players; a
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                we are not responsible or liable for any comments or content
                                                that you or others post on social networking sites.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <h3 data-title="13.Disruptions and change" id="13-disruptions-and-change">
                                13.Disruptions and change
                            </h3>
                            <p>
                                <strong>No warranties</strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        The Platform is provided on an “as is” basis and to the fullest
                                        extent permitted by law, we make no warranty or representation,
                                        whether express or implied, in relation to the satisfactory quality,
                                        fitness for purpose, completeness or accuracy of the Platform
                                        (including the Games and Content).
                                    </p>
                                    <p class="content-list-start">
                                        <strong>
                                            The Platform is provided on an “as is” basis and to the fullest
                                            extent permitted by law, we make no warranty or representation,
                                            whether express or implied, in relation to the satisfactory
                                            quality, fitness for purpose, completeness or accuracy of the
                                            Platform (including the Games and Content).
                                        </strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt is not liable for any downtime, server disruptions, lagging, or
                                        any technical or political disturbance to Game play, nor attempts by
                                        you to Participate by methods, means or ways not intended by us.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt accepts no liability for any damages or losses which are deemed
                                        or alleged to have arisen out of or in connection with any Platform
                                        or its Content including, without limitation, delays or
                                        interruptions in operation or transmission, loss or corruption of
                                        data, communication or lines failure, any person’s misuse of a
                                        Platform or its Content or any errors or omissions in Content.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In the event of a Platform system malfunction all Game play on that
                                        Platform is void.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In the event a Game is started but fails to conclude because of a
                                        failure of the system, Punt will use commercially reasonable efforts
                                        to reinstate the amount of Gold Coins or Sweep Coin played
                                        (whichever applicable) in the Game to you by crediting it to your
                                        Customer Account. Punt reserves the right to alter Player balances
                                        and account details to correct such mistakes.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt reserves the right to remove any part of the Games from the
                                        Platform at any time. Any part of the Games that indicate incorrect
                                        behavior affecting Prize redemption, game data, Gold Coin balances,
                                        Sweep Coin balances or other balances, that may be due to
                                        misconfiguration or a bug, will be canceled and removed from the
                                        Platform. Player balances and account details may be altered by Punt
                                        in such cases in order to correct any mistake.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Changes to the Platform</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Punt reserves the right to suspend, modify, remove or add Content to
                                        the Platform at its sole discretion with immediate effect and
                                        without notice to you. We will not be liable to you for any loss
                                        suffered as a result of any changes made or for any modification or
                                        suspension of or discontinuance of the Platform (including any Game
                                        thereon) and you will have no claims against Punt in such regard.
                                    </p>
                                    <p class="content-list-start">
                                        <strong>Service Suspension</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We may temporarily suspend the whole or any part of the Platform for
                                        any reason at our sole discretion. We may, but will not be obliged
                                        to, give you as much notice as is reasonably practicable of such
                                        suspension. We will restore the Platform, as soon as is reasonably
                                        practicable, after such temporary suspension.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="14. Viruses" id="14-viruses">
                                14. Viruses
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        Although we take all reasonable measures to ensure that the Platform
                                        is free from viruses we cannot and do not guarantee that the
                                        Platform is free of such problems. It is your responsibility to
                                        protect your systems and have in place the ability to reinstall any
                                        data or programs lost due to a virus.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="15. Privacy Policy" id="15-privacy-policy">
                                15. Privacy Policy
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        Punt is committed to protecting and respecting your privacy and
                                        complying with all applicable data protection and privacy laws.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Our Privacy Policy is inseparably linked to these Terms and
                                        Conditions and its acceptance is a prerequisite to account
                                        registration.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="16. Marketing communications" id="16-marketing-communications">
                                16. Marketing communications
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        You consent to receive marketing communications from Punt in respect
                                        of its offerings by way of email, post, SMS and telephone
                                        notifications, any of which you may unsubscribe from at any time by
                                        contacting Customer Support via this form.
                                    </p>
                                </li>
                            </ol>
                            <h3
                                data-title="17. Use of live chat services"
                                id="17-use-of-live-chat-services"
                            >
                                17. Use of live chat services
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        We may provide you with a Live Chat service to talk to our Customer
                                        Support representatives, or to talk to other Players. It is your
                                        responsibility to use these services only for their intended
                                        purposes. You are not permitted to use our Live Chat services for
                                        illegal purposes.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Be careful what you post on any Live Chat service. We review and
                                        moderate chats and keep a log and record of statements. Your use of
                                        the Live Chat service should be for recreational and social purposes
                                        only.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Spamming on Live Chat is prohibited. You are prohibited from
                                        intimidating, harassing or abusing other Players or Punt employees
                                        and representatives.{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not use any Live Chat service to engage in any form of
                                        harassment or offensive behaviour, including but not limited to,
                                        threatening, derogatory, abusive or defamatory statements, or
                                        racist, sexually explicit, pornographic, obscene, or offensive
                                        language.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not use any Live Chat service to infringe the privacy
                                        rights, property rights, or any other rights of any person.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not submit any kind of material or information on any Live
                                        Chat service that is fraudulent or otherwise unlawful or violates
                                        any law.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not use any Live Chat service to distribute, promote or
                                        otherwise publish any material containing any solicitation for
                                        funds, advertising or solicitation for goods or services of other
                                        forums.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not use any Live Chat service to distribute, promote or
                                        otherwise publish any kind of malicious code or do anything else
                                        that might cause harm to the Platform or to other Player’s systems
                                        in any way
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to monitor anything and everything submitted by
                                        you to any Live Chat service to ensure that it conforms to content
                                        guidelines that are monitored by us and subject to change from time
                                        to time.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If you breach any of the provisions relating to a Live Chat service,
                                        we may ban you from using that Live Chat service or all Live Chat
                                        services and/or suspend or close your Customer Account. If we close
                                        your Customer Account, we reserve the right to cancel or refuse to
                                        redeem any Prizes
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to remove any Live Chat service from the
                                        Platform if abused.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We will not be liable if damage arises out of the Live Chat service.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You agree to indemnify us against any damage arising out of your
                                        illegal, unlawful or inappropriate conduct or arising out of
                                        violation of the provisions in clause 18 or any other rules on the
                                        Platform applying to the Live Chat service.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You will not collude in any way through the Live Chat service.
                                        Players are encouraged to report any suspicious behavior to Customer
                                        Support via this form.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to report any suspicious behavior or chats on
                                        the Live Chat service to the MGA.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="18. Complaints and customer support" id="18-complaints">
                                18. Complaints and customer support
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        If you would like to contact our Customer Support department or have
                                        a complaint regarding our Platform (including any Game) you may
                                        contact us via this form.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ALL EMAIL COMMUNICATIONS BETWEEN YOU AND Punt SHOULD BE CARRIED OUT
                                        USING THE EMAIL ADDRESS THAT YOU HAVE REGISTERED AGAINST YOUR
                                        CUSTOMER ACCOUNT HELD WITH Punt. FAILURE TO DO SO MAY RESULT IN OUR
                                        RESPONSE BEING DELAYED.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            The following information must be included in any written
                                            communication with Punt (including a complaint):
                                        </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>your username;</p>
                                        </li>
                                        <li>
                                            <p>
                                                your first and last name, as registered on your Customer
                                                Account;
                                            </p>
                                        </li>
                                        <li>
                                            <p>a detailed explanation of the complaint/claim;</p>
                                        </li>
                                        <li>
                                            <p>
                                                any specific dates and times associated with the
                                                complaint/claim (if applicable).
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        Failure to submit a written communication with the information
                                        outlined above may result in a delay in our ability to identify and
                                        respond to your complaint/claim in a timely manner. The Punt Player
                                        Support Team (“PST”) will inquire into official complaints
                                        immediately. The PST will endeavor to respond to official complaints
                                        within 10 calendar days of lodgement.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In some circumstances, the PST will require up to 20 days to respond
                                        to a complaint. In this case, the player will be informed of the
                                        delay within 10 days of lodging the complaint.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        After completing our internal complaints process, if the player
                                        feels the complaint was not resolved to their satisfaction, the
                                        player may choose to request an external examination of the handling
                                        of their complaint by engaging our service provider, which shall be
                                        provided upon player’s request. You agree that the decision of our
                                        service provider can be considered in any processes initiated under
                                        clause 23 of these Terms and Conditions. Your decision whether or
                                        not to engage with our service provider is entirely voluntary. You
                                        may choose to invoke the processes under clause 23 regardless of
                                        whether or not you choose to engage in the service provider
                                        examination procedure.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To start the external examination process, please email
                                        support@punt.com.
                                    </p>
                                </li>
                            </ol>
                            <h3
                                data-title="19. Closure/suspension of account"
                                id="19-suspension-of-account"
                            >
                                19. Closure/suspension of account
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        <strong>
                                            Without limiting clause 5.17, we reserve the right, at our sole
                                            discretion, to suspend or close your Customer Account
                                            (notwithstanding any other provision contained in these Terms
                                            and Conditions) where we have reason to believe that you have
                                            engaged or are likely to engage in any of the following
                                            activities:
                                        </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p>
                                                you breached, or assisted another party to breach, any
                                                provision of these Terms and Conditions or the Sweeps Rules,
                                                or we have a reasonable ground to suspect such breach;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you have more than one Customer Account, including any
                                                Inactive Account on any Platform;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                the name registered on your Customer Account does not match
                                                the name on (i) your Payment Medium used to make purchases
                                                of Gold Coins or (ii) the account into which you elect to
                                                redeem Prizes or you do not legally and beneficially own
                                                such Payment Medium or redemption account;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                your communication with us consists of harassment or
                                                offensive behaviour, including (but not limited to)
                                                threatening, derogatory, abusive or defamatory statements,
                                                or racist, sexually explicit, pornographic, obscene or
                                                offensive language;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                your Customer Account is deemed to be an Inactive Account;
                                            </p>
                                        </li>
                                        <li>
                                            <p>you become bankrupt;</p>
                                        </li>
                                        <li>
                                            <p>you provide incorrect or misleading information;</p>
                                        </li>
                                        <li>
                                            <p>
                                                your identity or source of wealth or source of funds (if
                                                requested) cannot be verified;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you attempt to use your Customer Account through a VPN,
                                                proxy or similar service that masks or manipulates the
                                                identification of your real location, or by otherwise
                                                providing false or misleading information regarding your
                                                citizenship, location or place of residence, or by playing
                                                Games using the Platform through a third party or on behalf
                                                of a third party;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you are not over 18 years of age or such higher minimum
                                                legal age of majority as stipulated in the jurisdiction of
                                                your residence;
                                            </p>
                                        </li>
                                        <li>
                                            <p>you are located in a jurisdiction:</p>
                                            <blockquote>
                                                1) where Participation is illegal;
                                                <br />
                                                2) where you are ineligible to Participate in Promotional
                                                Play in accordance with the Sweeps Rules
                                            </blockquote>
                                        </li>
                                        <li>
                                            <p>
                                                you have allowed or permitted (whether intentionally or
                                                unintentionally) someone else to Participate using your
                                                Customer Account;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you have played in tandem with other Player(s) as part of a
                                                club, group, etc., or played the Games in a coordinated
                                                manner with other Player(s) involving the same (or
                                                materially the same) selections;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                without limiting clause 6.12, where Punt has received a
                                                “charge back”, claim or dispute and/or a &quot;return&quot;
                                                notification via your Payment Medium;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                you have failed our due diligence procedures, or are found
                                                to be colluding, cheating, money laundering or undertaking
                                                any kind of fraudulent activity;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                it is determined by Punt that you have employed or made use
                                                of a system (including machines, computers, software or
                                                other automated systems such as bots) designed specifically
                                                to gain an unfair advantage;
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                it is determined by Punt that you have employed or made use
                                                of a system (including machines, computers, software or
                                                other automated systems such as bots) designed specifically
                                                to gain an unfair advantage;
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        If Punt suspends or closes your Customer Account for any of the
                                        reasons referred to in clause 20.1 above, you will be liable for any
                                        and all claims, losses, liabilities, damages, costs and expenses
                                        incurred or suffered by Punt (together “Claims”) arising therefrom
                                        and you will indemnify and hold Punt harmless on demand for such
                                        Claims.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If we have reasonable grounds to believe that you have participated
                                        in any of the activities set out in clause 20.1 above then we
                                        reserve the right to withhold all or part of the balance or recover
                                        from your Customer Account any Prizes, Gold Coins or Sweep Coin that
                                        are attributable to any of the activities contemplated in clause
                                        20.1. In such circumstances, your details may be passed on to any
                                        applicable regulatory authority, regulatory body or any other
                                        relevant external third parties.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If your Customer Account is suspended or closed and this leads to
                                        the withholding of Prizes, Sweep Coin or Gold Coins. It will not be
                                        possible for you to unlock your Customer Account during any
                                        suspension period.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The rights set out in clause 20 are without prejudice to any other
                                        rights that we may have against you under these Terms and Conditions
                                        or otherwise.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="20. Indemnity and limitation of liability" id="20-indemnity">
                        20. Indemnity and limitation of liability
                    </h3>
                    <p>
                        <strong>Indemnity </strong>
                    </p>
                    <ol>
                        <li>
                            <p>
                                <strong>
                                    YOU AGREE TO INDEMNIFY AND HOLD HARMLESS US AND OUR AFFILIATES,
                                    AND OUR RESPECTIVE PARTNERS, DIRECTORS, OFFICERS, EMPLOYEES,
                                    SHAREHOLDERS, SUBCONTRACTORS, LICENSORS, SUPPLIERS AND AGENTS
                                    AGAINST ANY AND ALL COSTS, EXPENSES, LIABILITIES AND DAMAGES
                                    (WHETHER DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR
                                    PUNITIVE OR OTHER) ARISING FROM ANY PARTICIPATION BY YOU,
                                    INCLUDING WITHOUT LIMITATION:
                                </strong>
                            </p>
                            <ol>
                                <li>
                                    <p>ACCESSING OR USING THE PLATFORM;</p>
                                </li>
                                <li>
                                    <p>
                                        RE-USE OF ANY CONTENT AT, OR OBTAINED FROM, THE PLATFORM OR
                                        ANY OTHER SOURCE WHATSOEVER;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        FACILITATING OR MAKING A PAYMENT INTO YOUR CUSTOMER ACCOUNT;
                                    </p>
                                </li>
                                <li>
                                    <p>PLAYING THE GAMES THROUGH ANY DELIVERY MECHANISM OFFERED;</p>
                                </li>
                                <li>
                                    <p>ACCEPTANCE AND USE OF ANY PRIZE.</p>
                                </li>
                            </ol>
                            <p class="content-list-start">
                                <strong>ACCEPTANCE AND USE OF ANY PRIZE.</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO
                                CIRCUMSTANCES WHATEVER WILL WE OR OUR AFFILIATES, OR OUR RESPECTIVE
                                PARTNERS, OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AGENTS,
                                LICENSORS, SUBCONTRACTORS AND SUPPLIERS, BE RESPONSIBLE OR LIABLE TO
                                YOU OR TO ANY OTHER ENTITY, EVEN IF ADVISED OF THE POSSIBILITY OF
                                SUCH DAMAGES, UNDER ANY LEGAL THEORY, WHETHER CONTRACT, TORT OR
                                OTHERWISE, FOR ANY INDIRECT, INCIDENTAL , CONSEQUENTIAL, SPECIAL,
                                EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING ANY LOST PROFITS AND LOST
                                BUSINESS OPPORTUNITIES, BUSINESS INTERRUPTION, LOST REVENUE, INCOME,
                                GOODWILL, USE OF DATA OR OTHER INTANGIBLE LOSSES, IN EACH CASE THAT
                                RESULTS FROM OR RELATES IN ANY MANNER TO YOUR PARTICIPATION OR ANY
                                OTHER ACT OR OMISSION BY US.
                            </p>
                        </li>
                        <li>
                            <p>
                                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO
                                CIRCUMSTANCES WILL WE, OUR AFFILIATES AND OUR RESPECTIVE PARTNERS,
                                OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AGENTS, LICENSORS,
                                SUBCONTRACTORS OR SUPPLIERS, BE LIABLE TO YOU FOR MORE THAN THE
                                AMOUNT YOU HAVE PAID US IN THE THIRTY (30) DAYS IMMEDIATELY
                                PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM. YOU
                                ACKNOWLEDGE AND AGREE THAT IF YOU HAVE NOT PAID US ANY AMOUNTS IN
                                THE THIRTY (30) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU
                                FIRST ASSERT ANY SUCH CLAIM, YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY
                                DISPUTE WITH US IS TO STOP USING THE PLATFORM AND TO CLOSE YOUR
                                CUSTOMER ACCOUNT.
                            </p>
                            <p class="content-list-start">
                                <strong>Negligence and Wilful Misconduct</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                NOTHING IN THESE TERMS AND CONDITIONS WILL OPERATE SO AS TO EXCLUDE
                                ANY LIABILITY OF Punt FOR DEATH OR PERSONAL PHYSICAL INJURY THAT IS
                                DIRECTLY AND PROXIMATELY CAUSED BY Chanced’S NEGLIGENCE OR WILFUL
                                MISCONDUCT.
                            </p>
                            <p class="content-list-start">
                                <strong>Survival of Obligations</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                CLAUSE 21 SURVIVES THE TERMINATION OF THESE TERMS AND CONDITIONS FOR
                                ANY REASON.
                            </p>
                        </li>
                    </ol>
                    <h3
                        data-title="21. Punt not a financial institution"
                        id="21-not-a-financial-institution"
                    >
                        21. Punt not a financial institution
                    </h3>
                    <p>
                        <strong>21-not-a-financial-institution</strong>
                    </p>
                    <ol>
                        <li>
                            <p>21-not-a-financial-institution</p>
                            <p class="content-list-start">
                                <strong>No legal or tax advice</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                Punt does not provide advice regarding tax and/or legal matters.
                                Players who wish to obtain advice regarding tax and legal matters
                                are advised to contact appropriate advisors.
                            </p>
                        </li>
                    </ol>
                    <h3
                        data-title="22. Dispute resolution and agreement to arbitrate on an individual basis"
                        id="22-agreement"
                    >
                        22. Dispute resolution and agreement to arbitrate on an individual basis
                    </h3>
                    <p>
                        PLEASE READ THIS CLAUSE 23 CAREFULLY BECAUSE IT MAY REQUIRE YOU AND Punt TO
                        ARBITRATE CERTAIN DISPUTES AND CLAIMS ON AN INDIVIDUAL BASIS AND LIMITS THE
                        MANNER IN WHICH YOU AND Punt CAN SEEK RELIEF FROM EACH OTHER. This clause 23
                        will be construed under and be subject to the Federal Arbitration Act,
                        notwithstanding any other choice of law set out in these Terms and
                        Conditions.
                    </p>
                    <ol>
                        <li>
                            <p>
                                By agreeing to these Terms, and to the extent permitted by
                                applicable law, you and Punt agree that any and all past, present
                                and future disputes, claims or causes of action arising out of or
                                relating to these Terms, the Platform, the formation of these Terms
                                or any other dispute between you and Punt or any of Punt&apos;s
                                affiliates, licensors, distributors, suppliers or agents (including
                                any application store or platform from which the Platform is
                                accessed or downloaded), and whether arising prior to or after your
                                agreement to this clause, (collectively,{" "}
                                <s>&quot;Dispute(s)&quot;</s>) will be governed by the procedure
                                outlined below. You and Punt further agree that any arbitration
                                pursuant to this clause shall not proceed as a class, group or
                                representative action.
                            </p>
                            <p class="content-list-start">
                                <strong>Complaint Resolution</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                We want to address any concerns you may have without the need for a
                                formal legal dispute.
                            </p>
                        </li>
                        <li>
                            <p>
                                Before filing a claim against Punt, you agree to try to resolve any
                                complaint in accordance with clause 19. If your complaint is not
                                resolved after exhausting the internal complaints process outlined
                                in clause 19, you may initiate Dispute resolution as set out in this
                                clause 23.
                            </p>
                        </li>
                        <li>
                            <p>
                                Punt agrees that it will take all reasonable efforts to contact you
                                and resolve any claim it may possess informally prior to taking any
                                formal action. <s>Arbitration</s>
                            </p>
                        </li>
                        <li>
                            <p>
                                <s>We Both Agree to Arbitrate.</s> By agreeing to these Terms and
                                Conditions, and to the extent permitted by applicable law, both you
                                and Punt agree to resolve any Disputes – including any Dispute
                                concerning the enforceability, validity, scope or severability of
                                this agreement to arbitrate – through final and binding arbitration.
                            </p>
                        </li>
                        <li>
                            <p>
                                Opt-out of Agreement to Arbitrate. You may decline this agreement to
                                arbitrate by contacting support@Punt.com within 30 days of first
                                accepting these Terms and Conditions. Your email must include your
                                first and last name and a statement that you decline this
                                arbitration clause. By opting out of this clause, you will not be
                                precluded from using the Platform, but neither you nor Punt will be
                                able to invoke the mutual agreement to arbitrate to resolve
                                Disputes. Whether to agree to arbitration is an important decision.
                                It is your decision to make and you ARE NOT REQUIRED TO rely solely
                                on the information provided in these Terms and Conditions. You
                                should take reasonable steps to conduct further research and, if you
                                wish, to consult with counsel of your choice.
                            </p>
                            <p>
                                <s>Arbitration Procedures and Fees</s>
                            </p>
                            <p>You and Punt agree that:</p>
                            <ol>
                                <li>
                                    <p>
                                        the American Arbitration Association (“AAA”) will administer
                                        the arbitration under its Commercial Arbitration Rules and
                                        the Supplementary Procedures for Consumer Related Disputes,
                                        or successor rules, which are in effect at the time
                                        arbitration is sought (“AAA Rules”). Those rules are
                                        available at www.adr.org;
                                    </p>
                                </li>
                                <li>
                                    <p>arbitration will proceed on an individual basis;</p>
                                </li>
                                <li>
                                    <p>
                                        arbitration will be handled by a sole arbitrator in
                                        accordance with the AAA Rules;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        the AAA rules will govern payment of all arbitration fees;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        except as otherwise may be required by the AAA Rules, the
                                        arbitration will be held in New York, New York, or, at your
                                        election, conducted via telephone or other remote electronic
                                        means;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        the arbitrator shall be authorized to award any remedies,
                                        including injunctive relief, that would be available to you
                                        in an individual lawsuit and that are not waivable under
                                        applicable law. Notwithstanding any language to the contrary
                                        in this clause 23.7(f), if a party seeks injunctive relief
                                        that would significantly impact other Punt users as
                                        reasonably determined by either party, the parties agree
                                        that such arbitration will proceed on an individual basis
                                        but will be handled by a panel of three (3) arbitrators.
                                        Each party shall select one arbitrator, and the two
                                        party-selected arbitrators shall select the third, who shall
                                        serve as chair of the arbitral panel. That chairperson shall
                                        be a retired judge or an attorney licensed to practice law
                                        and with experience arbitrating or mediating disputes. In
                                        the event of disagreement as to whether the threshold for a
                                        three-arbitrator panel has been met, the sole arbitrator
                                        appointed in accordance with this clause shall make that
                                        determination. If the arbitrator determines a three-person
                                        panel is appropriate, the arbitrator may – if selected by
                                        either party or as the chair by the two party-selected
                                        arbitrators – participate in the arbitral panel;{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        except as and to the extent otherwise may be required by
                                        law, the arbitration proceeding and any award shall be
                                        confidential.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>
                                If you are a resident of Canada, this clause 23 fully applies to you
                                in all respects, except that AAA Rules will be construed to mean the
                                Canadian Dispute Resolution Procedures and Canadian Expedited
                                Procedures of the International Centre for Dispute Resolution
                                Canada, or successor rules, which are in effect at the time
                                arbitration is sought. Those rules are available at{" "}
                                <a href="#">(www.adr.org.)</a>
                            </p>
                            <p>
                                <s>Arbitration to Proceed Individually:</s>
                            </p>
                        </li>
                        <li>
                            <p>
                                You and Punt agree that the arbitration of any Dispute shall proceed
                                on an individual basis and neither you nor Punt may bring a claim as
                                a part of a Collective Arbitration.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    Without limiting the generality of clause 23.9, and as an
                                    example only, a claim to resolve a Dispute against Punt will be
                                    deemed a Collective Arbitration if:
                                </strong>
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        two (2) or more similar claims for arbitration are filed
                                        concurrently by or on behalf of one or more claimants;{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        counsel for the claimants are the same, share fees or
                                        coordinate in any way across the arbitrations.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>
                                For the purposes of clause 23.10, the term “concurrently” means that
                                both arbitrations are pending (filed but not resolved) at the same
                                time.
                            </p>
                            <p>
                                <s>Waiver of Class Action and Collective Arbitration</s>
                            </p>
                        </li>
                        <li>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER YOU NOR
                                Punt SHALL BE ENTITLED TO CONSOLIDATE, JOIN OR COORDINATE DISPUTES
                                BY OR AGAINST OTHER INDIVIDUALS OR ENTITIES, OR PARTICIPATE IN ANY
                                COLLECTIVE ARBITRATION (AS DEFINED ABOVE) OR ARBITRATE OR LITIGATE
                                ANY DISPUTE IN A REPRESENTATIVE CAPACITY, INCLUDING AS A
                                REPRESENTATIVE MEMBER OF A CLASS OR IN A PRIVATE ATTORNEY GENERAL
                                CAPACITY OR OTHERWISE SEEK TO RECOVER FOR LOSSES INCURRED BY A THIRD
                                PARTY. IN CONNECTION WITH ANY DISPUTE (AS DEFINED ABOVE), ANY AND
                                ALL SUCH RIGHTS ARE HEREBY EXPRESSLY AND UNCONDITIONALLY WAIVED.
                                NOTWITHSTANDING ANYTHING TO THE CONTRARY SET FORTH IN THIS
                                AGREEMENT, IN THE EVENT ALL OR ANY PORTION OF THIS CLAUSE 23.12 IS
                                FOUND TO BE INVALID OR LESS THAN FULLY ENFORCEABLE, THEN THE
                                ENTIRETY OF CLAUSE 23 (DISPUTE RESOLUTION AND AGREEMENT TO ARBITRATE
                                ON AN INDIVIDUAL BASIS) MAY BE DEEMED VOID AND AS HAVING NO EFFECT
                                UPON EITHER PARTY&apos;S ELECTION.
                            </p>
                        </li>
                    </ol>
                    <h3 data-title="23. Other" id="23-other">
                        23. Other
                    </h3>
                    <p>
                        <strong>Entire Agreement</strong>
                    </p>
                    <ol>
                        <li>
                            <p>
                                These Terms and Conditions constitute the entire agreement between
                                you and us with respect to your Participation and, save in the case
                                of fraud, supersede all prior or contemporaneous communications and
                                proposals, whether electronic, oral or written, between you and us
                                with respect to your Participation.
                            </p>
                            <p class="content-list-start">
                                <strong>Amendments</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                Punt reserves the right to amend these Terms and Conditions, or to
                                implement or amend any procedures, at any time. Any amendments will
                                be published on the Platform and such changes will be binding and
                                effective immediately.
                            </p>
                        </li>
                        <li>
                            <p>
                                Whenever we amend these Terms and Conditions in a way that would
                                limit your current rights or which may be to your detriment, we will
                                notify you upon your next visit to the Platform and you will be
                                required to re-confirm your acceptance prior to playing any Games.
                                If you do not agree to the amended Terms and Conditions, you must
                                stop using the Platform.
                            </p>
                            <p class="content-list-start">
                                <strong>Tax</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                You are solely responsible for any taxes which apply to any Prizes
                                that you collect from your Participation.
                            </p>
                            <p class="content-list-start">
                                <strong>Force Majeure</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                Punt will not be liable or responsible for any failure to perform,
                                or delay in performance of, any of our obligations under these Terms
                                and Conditions that is caused by events outside of our reasonable
                                control.
                            </p>
                            <p class="content-list-start">
                                <strong>No agency</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                Nothing in these Terms and Conditions will be construed as creating
                                any agency, partnership, trust arrangement, fiduciary relationship
                                or any other form of joint enterprise between you and us.
                            </p>
                            <p class="content-list-start">
                                <strong>Severability</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                If any of the Terms and Conditions are determined by any competent
                                authority to be invalid, unlawful or unenforceable to any extent,
                                such term, condition or provision will, to that extent, be severed
                                from these Terms and Conditions. All remaining terms, conditions and
                                provisions will continue to be valid to the fullest extent permitted
                                by law. In such cases, the part deemed invalid or unenforceable will
                                be amended in a manner consistent with the applicable law to
                                reflect, as closely as possible, the original import of the invalid
                                or unenforceable provision.
                            </p>
                            <p class="content-list-start">
                                <strong>Explanation of Terms and Conditions</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                We consider these Terms and Conditions to be open and fair. If you
                                need any explanation regarding these Terms and Conditions or any
                                other part of our Platform contact Customer Support via
                                support@Punt.com
                            </p>
                        </li>
                        <li>
                            <p>
                                The Terms and Conditions prevail over any communication via email or
                                chat.
                            </p>
                        </li>
                        <li>
                            <p>All correspondence between you and us may be recorded.</p>
                            <p class="content-list-start">
                                <strong>Assignment</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                These Terms and Conditions are personal to you, and are not
                                assignable, transferable or sub-licensable by you except with our
                                prior written consent. We reserve the right to assign, transfer or
                                delegate any of our rights and obligations hereunder to any third
                                party without notice to you.
                            </p>
                            <p class="content-list-start">
                                <strong>Business Transfers</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                In the event of a change of control, merger, acquisition, or sale of
                                assets of the Punt, your Customer Account and associated data may be
                                part of the assets transferred to the purchaser or acquiring party.
                                In such an event, we will provide you with notice via email or via
                                our Platform explaining your options with regard to the transfer of
                                your Customer Account.
                            </p>
                            <p class="content-list-start">
                                <strong>Language</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                These Terms and Conditions may be published in several languages for
                                information purposes and ease of access by players but will all
                                reflect the same principles. It is only the English version that is
                                the legal basis of the relationship between you and us and in case
                                of any discrepancy between a non-English version and the English
                                version of these Terms and Conditions, the English version will
                                prevail.
                            </p>
                            <p class="content-list-start">
                                <strong>Applicable Law and Jurisdiction</strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                These Terms and Conditions, your use of the Platform and our entire
                                relationship will be governed, and interpreted in accordance with,
                                the laws of the State of Delaware in the United States, without
                                regard for its choice of conflict of law principles. The application
                                of the United Nations Convention on Contracts for the International
                                Sale of Goods is specifically excluded.
                            </p>
                        </li>
                        <li>
                            <p>
                                Subject to Clause 7.2 and absent an express statement to the
                                contrary, in the event of any conflict or inconsistency between any
                                provision of these Terms and Conditions and a provision of the
                                Responsible <u>Social Gameplay Policy, Sweeps Rules, or Customer
                                Acceptance Policy</u>, these Terms and Conditions shall control solely
                                to the extent necessary to resolve the conflict or inconsistency.
                            </p>
                        </li>
                    </ol>
                        `}
                    />
                </NavLayout>
                <Footer />
            </HomeProvider>
        </MainLayout>
    );
};

export default Terms;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
