import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/08-info-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./sweeps-rules.module.scss";

const SweepsRules: NextPage = () => {
    return (
        <MainLayout title="Sweeps Rules">
            <NavLayout>
                <Header />
                <Screens.InfoHead
                    breadcrumbs={[{ name: "Home Page", href: "/" }, { name: "Punt Sweeps Rules" }]}
                    title="Punt Sweeps Rules"
                    lastUpdate="March 2nd, 2024"
                    download=""
                />
                <Screens.InfoContent
                    note={`
                            <p>
                                <s>
                                    NO PURCHASE OR PAYMENT NECESSARY TO PARTICIPATE. A PURCHASE OR PAYMENT OF ANY
                                    KIND WILL NOT INCREASE A PARTICIPANT&apos;S CHANCES OF WINNING.
                                </s>
                            </p>
                            <p>
                                Punt is an online platform which offers Participants the chance to play games for entertainment
                                and enjoyment.Punt also gives away sweepstakes entries referred to as “Sweeps
                                Coins” as set out in these Sweeps Rules.Sweeps Coins can be used to Participate
                                in Promotional Play for a chance to win further Sweeps Coins which are
                                redeemable for real prizes.
                            </p>
                            <p>
                                SWEEPS COINS ARE SUBJECT TO A MINIMUM PRIZE REDEMPTION THRESHOLD OF $US100. 
                                AMOUNTS BELOW THE THRESHOLD ARE NOT ELIGIBLE FOR PRIZE REDEMPTION.
                            </p>
                            <p>
                                These Sweeps Rules are to be read in conjunction with the Punt Terms and Conditions. 
                                Terms which are defined in the T&Cs have the same meaning in these Sweeps Rules.
                            </p>
                            <p>
                                PLEASE NOTE THAT THESE SWEEPS RULES INCORPORATE CLAUSE 24
                                OF THE T&Cs, WHICH INCLUDE A PROVISION WAIVING THE RIGHT TO PURSUE ANY CLASS,
                                GROUP OR REPRESENTATIVE CLAIM AND REQUIRING YOU TO PURSUE PAST, PENDING, AND
                                FUTURE DISPUTES BETWEEN YOU AND US THROUGH INDIVIDUAL ARBITRATION UNLESS YOU OPT
                                OUT WITHIN THE SPECIFIED TIME FRAME. SEE CLAUSE 11 OF THESE SWEEPS RULES FOR
                                MORE INFORMATION.    
                            </p>
                        `}
                    content={`
                        <h3 data-title="1. Eligibility to play Punt">1. Eligibility to play Punt</h3>
                        <ol>
                            <li>
                                <p>
                                    <strong>
                                        The following definitions apply to these Sweeps Rules:
                                    </strong>
                                </p>
                                <p>
                                    a) Eligible Participants means legal residents of the Permitted
                                    Territories;
                                    <br />
                                    b) Permitted Territories means the United States (other than the
                                    states of Idaho, Michigan, Kentucky, Nevada, and Washington);
                                    <br />
                                    c) Participant means a person who participates in Promotional Play;
                                    <br />
                                    d) Postal Request Code has the meaning set out in clause 3.4 of
                                    these Sweeps Rules;
                                    <br />
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        Promotional Play means Punt&apos;s sweepstakes promotions.
                                    </strong>
                                </p>
                                <p>
                                    Promotional Play is only open toEligible Participants, who are at
                                    least eighteen (18) years old or the age of majority in their
                                    jurisdiction (whichever occurs later) at the time of entry.<br/>
                                    <s>PARTICIPATION IS VOID WHERE PROHIBITED BY LAW.</s>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        The Sweepstakes is subject to all applicable federal, state,
                                        provincial, territorial and local laws and regulations.
                                    </strong>
                                </p>
                                <p>
                                    It is the sole responsibility of a Participant to determine whether
                                    the Sweepstakes is legal and compliant with all regulations in the
                                    jurisdiction in which the Participant resides.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        Participation constitutes the Participant&apos;s full and
                                        unconditional agreement to these Sweeps Rules and
                                        Sponsor&apos;s/Promoter&apos;s decisions, which are final and
                                        binding in all matters related to the Sweepstakes.
                                    </strong>
                                </p>
                            </li>
                            <li>
                                <h6>
                                    Winning a prize is contingent upon fulfilling all requirements set
                                    out in these Sweeps Rules.
                                </h6>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        Employees of Punt, any of their respective affiliates,
                                    </strong> subsidiaries, holding companies, advertisingagencies, or any other
                                    company or individual involved with the design, production,
                                    execution or distribution of the Sweepstakes and their immediate
                                    family (spouse, parents, siblings and children, whether the
                                    relationship is by birth, marriage or adoption) and household
                                    members (people who share the same residence at least 3 months of
                                    the year) are not eligible to participate.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="2. Sponsor/Promoter">2. Sponsor/Promoter</h3>
                        <p>
                            The Sponsor/Promoter of the Sweepstakes is Punt of Sheridan, 1309
                            CoffeenAvenue STE 1200, Wyoming 82801, United States of America
                        </p>
                        <h3 data-title="3. How to collect sweeps coins 3. How to collect sweeps coins">3. How to collect sweeps coins 3. How to collect sweeps coins</h3>
                        <ol>
                            <li>
                                <p>
                                    To Participate, you must have an active Customer Account. If you do
                                    not have a Customer Account, you can create one free of charge at 
                                    <a target="_blank" href="https://punt.com">
                                        https://Punt.com
                                    </a>
                                     To enter the Sweepstakes, a Participant must access Punt at 
                                    <a target="_blank" href="https://punt.com">
                                        https://Punt.com
                                    </a>
                                     and sign in to their Customer Account.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        Once they haveaccessed Punt, there are four potential ways for
                                        an Eligible Participant to collect Sweeps Coins:
                                    </strong>
                                </p>
                                <ol>
                                    <li>
                                        <p>
                                            <strong>
                                                Receive Sweeps Coins as a free bonus when purchasing
                                                Gold Coins.
                                            </strong>
                                        </p>
                                        <blockquote>
                                            Each Participant may receive Sweeps Coins as a bonus upon
                                            the purchase of specifically marked packs of Gold Coins.
                                            Gold Coins can be used for social game play in Punt. Gold
                                            Coins cannot be redeemed forprizes. The number of Sweeps
                                            Coins a Participant will receive as a bonus for each
                                            relevant GoldCoin purchase will be stated in the website
                                            purchase window. All purchases of Gold Coins arefinal and no
                                            refunds will be given.
                                        </blockquote>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Receive Sweeps Coins when entering Sweeps Coins no-cost
                                                giveaway contests on the Punt Social Media pages.
                                            </strong>
                                        </p>
                                        <blockquote>
                                            The Sponsor/Promoter regularly holds Sweeps Coins no-cost
                                            giveaway contests which Participants can enter by following
                                            the instructions provided in the contest. These giveaways
                                            may require sharing the Social Media posts or answering
                                            various game related questions to be eligible for entry. The
                                            amount of Sweeps Coins given away will be stated on the
                                            applicable Sweeps Coins no-cost contest post and will be
                                            added to each contest winner&apos;s Customer Account.
                                        </blockquote>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Receive Sweeps Coins by logging into your account.
                                            </strong>
                                        </p>
                                        <p>
                                            Participants can receive free Sweeps Coins on a daily basis
                                            by taking the following steps (hourly Bonus ):
                                        </p>
                                        <blockquote>
                                            1) sign into your Customer Account;
                                            <br />
                                            2) click &quot;wallet&quot;, then &quot;hourly bonus&quot;
                                            <br />
                                            3) click the &quot;claim&quot; button at the bottom of the
                                            pop up.
                                        </blockquote>
                                        <p>
                                            Participants can only claim a Hourly Bonus once per hour
                                            (the hourly clock resets every hour).
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Receive Sweeps Coins by sending a request by post.
                                            </strong>
                                        </p>
                                        <blockquote>
                                            Participants can receive free Sweeps Coins by obtaining a
                                            Postal Request Code and sending a standard post card or
                                            piece of white paper (Request Card) which must be 4&quot; x
                                            6&quot;, unfolded, blank and unlined and placed inside as
                                            tamped #10 envelope addressed in handwriting, to the
                                            following address and satisfying the requirements set out
                                            below:
                                        </blockquote>
                                        <p>
                                            <strong>
                                                United States residents:
                                                <br />
                                                Punt
                                                <br />
                                                2438 Industrial Blvd #681
                                                <br />
                                                Abilene, TX 79605
                                            </strong>
                                        </p>
                                        <p>
                                            <strong>Participants must:</strong>
                                        </p>
                                        <p>
                                            <strong>
                                                1) handwrite their return address on the front of the
                                                envelope and the words: &quot;Sweepstakes Entries&quot;;
                                            </strong>
                                        </p>
                                        <p>
                                            <strong>
                                                2) handwrite all of the following on only one side of
                                                the Request Card inserted inside the envelope :
                                            </strong>
                                        </p>
                                        <blockquote>
                                            a) in the top-left corner, one (and only one) unique
                                            one-time Postal Request Code (see clauses 3.4 and 3.5 of
                                            these Sweeps Rules for further information);<br /><br /> 
                                            b) under the
                                            Postal Request Code, in the following order: • their full
                                            name as shown on their government issued identification;
                                            <br /><br />
                                            &emsp;• the email address registered to their Punt account;
                                            <br />
                                            &emsp;• the return/residential address registered to their Punt
                                            account; and
                                            <br />
                                            &emsp;• the following statement:
                                            <br /><br />
                                            &quot;I wish to receive Sweeps Coins to participate in the
                                            sweepstakes promotions offered by Punt. By submitting this
                                            request, I hereby declare that I have read, understood and
                                            agree to be bound by Punt&apos;s Terms and Conditions and
                                            Sweeps Rules.&quot;
                                        </blockquote>
                                        <s>
                                            3) FOR THE AVOIDANCE OF DOUBT, COMBINED REQUESTS SENT VIA
                                            PACKAGE OR PARCEL DO NOT MEET THE REQUIREMENTS SET OUT ABOVE
                                            AND ARE INVALID.
                                        </s>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        There is a limit of one Request Card per outer envelope.
                                    </strong>
                                </p>
                                <p>
                                    For each Request Card a Participant submits in accordance with the
                                    above requirements, the Participant will receive 5 Sweeps Coins. The
                                    Sweeps Coins will be added to the Participant&apos;s Customer
                                    Account. NOTE: A Participant must ensure that their handwriting is
                                    legible.If the Participant&apos;s handwriting is not legible, the
                                    entry will be void and the Sweeps Coins will not be added to the
                                    Participant&apos;s Customer Account. The legibility of a
                                    Participant&apos;s handwriting will be determined by
                                    Sponsor/Promoter in its sole discretion. 
                                    <s>
                                        THE REQUEST MUST ONLY BE MADE BY THE PARTICIPANT AND MUST BE
                                        POSTED FROM THE SAME STATE OR PROVINCE AS THE PARTICIPANT&apos;S
                                        VERIFIED RESIDENTIAL ADDRESS.
                                    </s>
                                </p>
                                <p>
                                    Requests made by any other individual or any entity (including but
                                    not limited to commercial sweepstakes subscription notification
                                    and/or entering services) or posted from a state or province
                                    different to the Participant&apos;s verified residential address
                                    will be declared invalid and Sweeps Coins will not be added to the
                                    Participant&apos;s Customer Account. Tampering with the entry
                                    process or the operation of the Sweepstakes, including but not
                                    limited to the use of any device or software to automate the Sweeps
                                    Coins request/entry process or to unfairly assist the Participant
                                    with meeting the handwriting requirement, is prohibited and any
                                    requests/entries deemed by Sponsor/Promoter, in its sole discretion,
                                    to have been submitted in this manner will be void. Where there is
                                    an issue or fault with an envelope used by a Participant to request
                                    free Sweeps Coins, such that it does, or is reasonably likely to,
                                    cause damage to, or otherwise adversely affect, equipment used or
                                    procedures implemented to process mailed in requests (for example,
                                    handmade envelopes that are not suitable for machine processing due
                                    to poor quality or non-standard adhesive or paper), such entry will
                                    be void. In the event a dispute regarding the identity of the
                                    individual who actually submitted a request or whether a request
                                    satisfies the requirements set out above cannot be resolved to
                                    Sponsor/Promoter&apos;s satisfaction, the affected request/entry
                                    will be deemed ineligible.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        A Postal Request Code is a unique combination of 12 digits that
                                        Participants can obtain by following the steps outlined in
                                        clause 3.5 of these Sweeps Rules.
                                    </strong>
                                </p>
                                <p>
                                    A Postal Request Code is unique, can only be used once and expires
                                    90 days after it is displayed. The purpose of a Postal Request Code
                                    is to assist with the efficient and effective processing of a
                                    Participant&apos;s Request Card. Request Cards containing an expired
                                    Postal Request Code at the time of processing will be void.{" "}
                                    <s>
                                        A POSTAL REQUEST CODE CAN ONLY BE USED BY THE PARTICIPANT WHOSE
                                        CUSTOMER ACCOUNT WAS USED TO GENERATE THAT POSTAL REQUEST CODE.
                                    </s>
                                     Any Participant suspected by Sponsor/Promoter to have directly or
                                    indirectly provided a Postal Request Code to another person may, in
                                    the sole discretion of Sponsor/Promoter, be disqualified and lose
                                    their eligibility to Participate in the Sweepstakes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        A Postal Request Code can be obtained by following each of these
                                        steps:
                                    </strong>
                                </p>
                                <p>a) sign into your Customer Account;</p>
                                <p>b) click on the &quot;Sweeps Rules&quot; link at the footer;</p>
                                <p>
                                    c) Clicking the hyperlinked &quot;(Generated here)&quot; text in
                                    clause 3.5 of these Sweeps Rules (Generated here).
                                </p>
                            </li>
                            <li>
                                <h6>
                                    The Postal Request Code is then displayed for a period of time to
                                    enable a Participant to record it on their Request Card.
                                </h6>
                            </li>
                            <li>
                                <p>
                                    The amount of Sweeps Coins a Participant has will be displayed in
                                    their Customer Account on the website. The amount of Sweeps Coins to
                                    be allocated to Participants can be changed at any time by the
                                    Sponsor/Promoter in its sole discretion.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter is not responsible for lost, late, incomplete,
                                    invalid, unintelligible or misdirected Sweeps Coins requests or
                                    allocations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In the event of a dispute as to any registration of a Customer
                                    Account, the authorized account holder of the email address used to
                                    register the Customer Account will be deemed to be the Participant.
                                    The &quot;authorized account holder&quot; is the natural person
                                    assigned the email address by an internet access provider, online
                                    service provider or other organization responsible for assigning
                                    email addresses for the domain associated with the submitted
                                    address.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Use of any automated or other system(s) to Participate, to acquire
                                    Sweeps Coins or play the games is prohibited and will result in
                                    disqualification and loss of eligibility to Participate in the
                                    games.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sweeps Coins are only valid for sixty (60) days from the date a
                                    Participant last logged on to their Customer Account and will then
                                    automatically expire.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sweeps Coins may also be forfeited if a Participant&apos;s Customer
                                    Account is closed for any reason, or at the Sponsor/Promoter&apos;s
                                    discretion.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="4. Using sweeps coins to play games">4. Using sweeps coins to play games</h3>
                        <ol>
                            <li>
                                <p>
                                    Participants with Sweeps Coins can use those Sweeps Coins to play
                                    games within Punt for a chance to win additional Sweeps Coins.
                                    Sweeps Coins won through game play can be redeemed for real prizes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Within Punt there are different games. The amount of Sweeps Coins
                                    required to play each game willbe detailed next to the game. A
                                    Participant may be able to increase the amount of Sweeps Coins they
                                    play the game with so they can increase their potential winning
                                    eligibility.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Only games played with Sweeps Coins provide the opportunity to
                                    redeem winnings for real prizes. The prize that can be won while
                                    playing a game will be shown in Punt by clicking the “Win Table” or
                                    &quot;PayTable&quot; button, denominated as &quot;Sweeps
                                    Coins&quot;.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Each Sweeps Coin that has been won through game play (rather than
                                    collected using one of themethods described in clause 3 of these
                                    Sweeps Rules) can be redeemed for a prize with value being
                                    equivalent to US$1.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor&apos;s/Promoter&apos;s decisions as to the administration
                                    and operation of the Sweepstakes, the game and the amount of
                                    winnings are final and binding.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Unless Sponsor/Promoter requires otherwise, any Sweeps Coins
                                    allocated to a Participant are required to be played three times
                                    before they are eligible to be redeemed for prizes. Sponsor/Promoter
                                    may, in itssole discretion, require that any Sweeps Coins allocated
                                    to a Participant must be played a greater number of times (not
                                    exceeding 20) in any combination of Sweeps Coins games before they
                                    are eligible to be redeemed for prizes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter reserves the right to change the prize win rates
                                    and odds of any of the Sweepstakes at any time. A Participant can
                                    see the actual and any amended details by clicking on the &quot;Win
                                    Table&quot; or &quot;Pay Table&quot; button. It is a
                                    Participant&apos;s responsibility to check the prize win rate on
                                    each occasion beforethey participate.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="5. Verification and confirnation of potential winners">5. Verification and confirnation of potential winners</h3>
                        <ol>
                            <li>
                                <p>
                                    POTENTIAL SWEEPSTAKES WINNERS ARE SUBJECT TO VERIFICATION BY
                                    SPONSOR/PROMOTER (IN ANY MANNER IT MAY CHOOSE) AND THE DECISIONS OF
                                    SPONSOR/PROMOTER ARE FINAL AND BINDING IN ALL MATTERS RELATED TO THE
                                    SWEEPSTAKES. A PARTICIPANT IS NOT A WINNER OF ANY PRIZE, EVEN IF THE
                                    ONLINE SCREEN INDICATES THEY ARE, UNLESS AND UNTIL THE
                                    PARTICIPANT&apos;S ELIGIBILITY AND THE POTENTIAL WINNING PLAY HAS
                                    BEEN VERIFIED AND THE PARTICIPANT HAS FULLY COMPLIED WITH THESE
                                    SWEEPS RULES AND BEEN NOTIFIED THAT VERIFICATION IS COMPLETE.
                                    SPONSOR/PROMOTER WILL NOT ACCEPT SCREEN SHOTS OR OTHER PURPORTED
                                    EVIDENCE OF WINNING IN LIEU OF ITS VALIDATION PROCESS.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Potential prize winners must comply with these Sweeps Rules and
                                    winning is contingent upon fulfilling all requirements.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A potential prize winner may be required to sign and return to
                                    Sponsor/Promoter, an affidavit/declaration of eligibility, and
                                    liability/publicity release (except where prohibited) in order to
                                    claim his/her prize (if applicable)
                                </p>
                                <p>pre-arranged mutually convenient time.</p>
                            </li>
                            <li>
                                <p>
                                    If a potential winner cannot be contacted, fails to properly execute
                                    and return the affidavit/declaration of eligibility and
                                    liability/publicity release within the required time period (if
                                    applicable), fails to comply with these Sweeps Rules, or if the
                                    prize or prize notification is returned as undeliverable, that
                                    potential winner forfeits the prize.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In the event that a potential winner of a Sweepstakes prize is
                                    disqualified for any reason, Sponsor/Promoter may, in its sole
                                    discretion, reseed the prize back into the Sweepstakes.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="6. Prisez">6. Prisez</h3>
                        <ol>
                            <li>
                                <p>
                                    A Participant&apos;s Sweeps Coins balance is shown in the
                                    Participant&apos;s Customer Account.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Prizes are not awarded until redeemed. A Participant has no rights
                                    to Sweeps Coins that have not been redeemed.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Where a Participant has chosen to redeem prizes for cash, the
                                    payment will be made in USD to thefinancial account or online wallet
                                    from which you purchased Gold Coins, or if this is not
                                    technicallypossible, then to an alternative bank account you
                                    nominate. Sponsor/Promoter reserves the right torequire the use of
                                    the same payment method for redemption of prizes as was used to
                                    purchase GoldCoins, or a specific payment method at
                                    Sponsor/Promoter&apos;s discretion.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Where a Participant has chosen to redeem prizes for gift cards, the
                                    gift cards will be allocated to the emailaddress that the
                                    Participant has registered against their Customer Account.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter will only process a prize redemption if the
                                    redeemed value of the prize is US$100 ormore (i.e. a minimum of 100
                                    eligible Sweeps Coins). Consequently, a Participant&apos;s Customer
                                    Accountmust have a balance of at least 100 Sweeps Coins before
                                    requesting a prize redemption.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <s>
                                        TO BE ELIGIBLE FOR A SWEEPS COINS PRIZE OR A SWEEPS COINS PRIZE
                                        REDEMPTION:
                                    </s>
                                </p>
                                <p>a) A PARTICIPANT MUST BE AN ELIGIBLE PARTICIPANT; AND</p>
                                <p>
                                    b) THE PARTICIPANT&apos;S DETAILS MUST MATCH THOSE OF THE
                                    PARTICIPANT&apos;SCUSTOMER ACCOUNT.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In New York and Florida, the maximum redemption value of a Sweeps
                                    Coins prize won on any one spin or play, via a Participant&apos;s
                                    participation in the Sweepstakes is US$5,000. Any prize valued in
                                    excess of US$5,000 will be reduced to a maximum value of US$5,000.
                                    In all other states, the maximum redemption value for a prize won on
                                    any one spin or play is USD $60,000 and any Prize with a value in
                                    excess of USD $60,000 will be reduced to a maximum value of USD
                                    $60,000
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter is not responsible for any taxes or fees associated
                                    with a prize redemption. Participants are responsible for all
                                    applicable taxes and fees associated with prize receipt and/or
                                    redemption.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter is not responsible for any foreign exchange
                                    transaction fees, charges or related costs that may be incurred as a
                                    result of, or in relation to, a prize redemption, including but not
                                    limited to any losses or additional costs arising from foreign
                                    exchange fluctuations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sweeps Coins are not transferable and no substitution will be made
                                    except as provided herein at the Sponsor&apos;s/Promoter&apos;s sole
                                    discretion. Sponsor/Promoter reserves the right to substitute the
                                    listed prize of equal or greater value for any reason owing to
                                    circumstances outside Sponsor&apos;s/Promoter&apos;s reasonable
                                    control.
                                </p>
                            </li>
                            <li>
                                <p>Prize winners will be notified by private message or email.</p>
                            </li>
                        </ol>
                        <h3 data-title="7. Entry conditions and release">7. Entry conditions and release</h3>
                        <p>
                            <strong>By Participating, each Participant agrees to:</strong>
                        </p>
                        <p>a) comply with and be bound by:</p>
                        <blockquote>
                            1) the T&Cs; <br />
                            2) these Sweeps Rules; and <br />
                            3) the decisions of the Sponsor/Promoter which are binding and final; <br />
                        </blockquote>
                        <p>b) release and hold harmless the Sponsor/Promoter </p>
                        <blockquote>
                            and its parent, subsidiary, and affiliated companies, the prize suppliers
                            and any other organizations responsible for sponsoring,
                            fulfilling,administering, advertising or promoting the Sweepstakes, and all
                            of their respective past and present officers, directors, employees, agents
                            and representatives (collectively, the Released Parties) from and against
                            any and all claims, expenses, and liability, including but not limited to
                            negligence and damages of any kind to persons and property, including but
                            not limited to invasion of privacy (underappropriation, intrusion, public
                            disclosure of private facts, false light in the public eye or other
                            legaltheory), defamation, slander, libel, violation of right of publicity,
                            infringement of trademark, copyright or other intellectual property rights,
                            property damage, or death or personal injury arising out of or relating to a
                            Participant&apos;s entry, creation of an entry or submission of an entry,
                            participation in the Sweepstakes, acceptance or use or misuse of prizes
                            (including any travel or activity related thereto)and/or the broadcast,
                            exploitation or use of entry; and
                        </blockquote>
                        <p>c) indemnify, defend and hold harmless the Sponsor/Promoter</p>
                        <blockquote>
                            from and against any and all claims,expenses, and liabilities (including
                            reasonable attorneys/legal fees) arising out of or relating to
                            aParticipant&apos;s participation in the Sweepstakes and/or
                            Participant&apos;s acceptance, use or misuse ofprizes.
                        </blockquote>
                        <h3 data-title="8. Publicity">8. Publicity</h3>
                        <p>
                            <strong>
                                Except where prohibited, participation in the Sweepstakes constitutes
                                each Participant&apos;s consent toSponsor&apos;s/Promoter&apos;s and its
                                agents&apos; use of Participant&apos;s name, likeness, photograph,
                                voice, opinionsand/or hometown and state/province/territory for
                                promotional purposes in any media, worldwide, withoutfurther payment,
                                notice or consideration.
                            </strong>
                        </p>
                        <h3 data-title="9. General conditions">9. General conditions</h3>
                        <ol>
                            <li>
                                <p>
                                    Sponsor/Promoter reserves the right to cancel, suspend and/or modify
                                    the Sweepstakes or theseSweeps Rules, or any part of the Sweepstakes
                                    or these Sweeps Rules, with immediate effect owing tocircumstances
                                    outside its reasonable control and only where circumstances make it
                                    unavoidable if anyfraud, technical failures or any other factor
                                    beyond Sponsor&apos;s/Promoter&apos;s reasonable control impairs
                                    theintegrity or proper functioning of the Sweepstakes, as determined
                                    by Sponsor/Promoter in its solediscretion.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sponsor/Promoter reserves the right in its sole discretion to
                                    disqualify any individual it finds to be tampering with the entry
                                    process or the operation of the Sweepstakes or to be acting in
                                    violation of these Sweeps Rules or any other promotion or in an
                                    unsportsmanlike or disruptive manner.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Any attempt by any person to deliberately undermine the legitimate
                                    operation of the Sweepstakes may be a violation of criminal and
                                    civil law and, should such an attempt be made, Sponsor/Promoter
                                    reserves the right to seek damages from any such person to the
                                    fullest extent permitted by law. Sponsor&apos;s/Promoter&apos;s
                                    failure to enforce any term of these Sweeps Rules shall not
                                    constitute a waiver of that provision.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In all other cases, the Sponsor/Promoter reserves the right to
                                    cancel, suspend and/or modify the Sweepstakes. Any notice regarding
                                    cancellation, suspension and/or modification will be posted on Punt
                                    at 
                                    <a target="_blank" href="https://www.punt.com/">
                                        https://www.Punt.com/
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Whenever we amend these Sweeps Rules in a way that would limit your
                                    current rights or which may be to your detriment, we will notify you
                                    upon your next visit to the Platform and you will be required to
                                    re-confirm your acceptance prior to participating in any Promotional
                                    Play. If you do not agree to the amended Sweeps Rules, you may not
                                    participate in any Promotional Play.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="10. Limitations of liability">10. Limitations of liability</h3>
                        <ol>
                            <li>
                                <p>
                                    <strong>
                                        Insofar as permitted by law in the respective territories, the
                                        Released Parties (as defined above) are not responsible for:
                                    </strong>
                                </p>
                                <ol>
                                    <li>
                                        any incorrect or inaccurate information, whether caused by a
                                        Participant, printing error or by any ofthe equipment or
                                        programming associated with or utilized in the Sweepstakes;
                                    </li>
                                    <li>
                                        technical failures of any kind, including, but not limited to
                                        malfunctions, interruptions, ordisconnections in phone lines or
                                        network hardware or software;
                                    </li>
                                    <li>
                                        unauthorized human intervention in any part of the entry process
                                        or the Sweepstakes;
                                    </li>
                                    <li>
                                        technical or human error which may occur in the administration
                                        or operation of the Sweepstakes; or
                                    </li>
                                    <li>
                                        any injury or damage to persons or property which may be caused,
                                        directly or indirectly, in whole orin part, from
                                        Participant&apos;s participation in the Sweepstakes or receipt
                                        or use or misuse of any prize.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>
                                    If for any reason a Participant&apos;s Sweeps Coins or winning play
                                    is confirmed to have been erroneously deleted, lost, or otherwise
                                    destroyed or corrupted, Participant&apos;s sole remedy is
                                    replacement by Sponsor/Promotor of an equivalent amount of Sweeps
                                    Coins.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="11. Disputes">11. Disputes</h3>
                        <p>
                            Clause 24 of the T&Cs (Dispute Resolution and Agreement to Arbitrate on an
                            Individual Basis) isincorporated herein by reference with the same force and
                            effect as though fully set forth herein.By agreeing to these Sweeps Rules,
                            you agree to be bound by the dispute resolution andarbitration provisions
                            contained in clause 24 of the T&Cs.
                        </p>
                        <h3 data-title="12. Other">
                            12. Other
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    Under no circumstances will any Participant be permitted to obtain
                                    awards for, and Participant hereby waives all rights to claim,
                                    punitive, incidental or consequential damages, or any other damages,
                                    including attorneys&apos; fees, other than Participant&apos;s actual
                                    out-of-pocket expenses (i.e., costs associated with participating in
                                    this Sweepstakes), and Participant further waives all rights to have
                                    damages multiplied or increased.{" "}
                                    <s>
                                        SOME JURISDICTIONS DO NOT ALLOW THE LIMITATIONS OR EXCLUSION OF
                                        LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
                                        MAY NOT APPLY TO YOU.
                                    </s>
                                </p>
                            </li>
                            <li>
                                <p>
                                    All issues and questions concerning the construction, validity,
                                    interpretation and enforceability of these Sweeps Rules, or the
                                    rights and obligations of the Participant and Sponsor/Promoter in
                                    connection with the Sweepstakes, are governed by, and construed in
                                    accordance with, the laws of the State of Wyoming,without giving
                                    effect to any choice of law or conflict of law rules (whether of the
                                    State of Wyoming or any other jurisdiction), which would cause the
                                    application of the laws of any jurisdiction other than the State of
                                    Wyoming.
                                </p>
                            </li>
                            <li>
                                <p>
                                    To ensure fairness and the integrity of the promotion to all
                                    Participants, the Sponsor/Promoter will respond to questions to
                                    Customer Support via live chat and may post updates/communications
                                    on its Social media pages including but not limited to Facebook,
                                    Telegram, Instagram or Twitter.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Any Participant posting or seen to be posting comments on
                                    Sponsor&apos;s/Promoter&apos;s Social media pages orelsewhere during
                                    the promotion that are considered bullying, spiteful or upsetting to
                                    other Participants, players and fans of Punt or directly aimed at
                                    the Sponsor/Promoter, will have their commentsremoved and will be
                                    disqualified from the Sweepstakes. The Sponsor/Promoter reserves the
                                    right to alert Facebook to any such behaviour and Participant may
                                    have his/her Facebook account frozen pending investigation.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="13. Participant&apos;s personal information">
                            13. Participant&apos;s personal information
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    Information collected from Participants is subject to the
                                    Sponsor&apos;s/Promoter&apos;s Privacy Policy which is available at 
                                    <a target="_blank" href="https://www.punt.com/">
                                        https://www.Punt.com/
                                    </a>
                                </p>
                            </li>
                        </ol>
                        `}
                />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default SweepsRules;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
