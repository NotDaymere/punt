import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/08-info-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./responsible-gameplay-policy.module.scss";

const ResponsibleGameplayPolicy: NextPage = () => {
    return (
        <MainLayout title="Responsible Gameplay Policy">
            <NavLayout>
                <Header />
                <Screens.InfoHead
                    breadcrumbs={[
                        { name: "Home Page", href: "/" },
                        { name: "Responsible Gameplay Policy" },
                    ]}
                    title="Responsible Gameplay Policy"
                    lastUpdate="16 November, 2022"
                    download=""
                />
                <Screens.InfoContent
                    content={`
                            <p>
                                Punt is committed to endorsing responsible gameplay as a policy of customer
                                care and social responsibility.
                            </p>
                            <p>
                                We believe it is our responsibility to you, our customers, to ensure that
                                you enjoy your experience on our platforms, while remaining fully aware of
                                the potential risks that can be associated with computer gameplay if you
                                don’t remain in control.{" "}
                            </p>
                            <p>
                                To ensure that you continue to enjoy safe and manageable play, we fully
                                support responsible gameplay and have put measures in place to assist
                                players who wish to control their play and we reserve the right to activate
                                these measures unilaterally if, in our sole discretion, we consider them
                                necessary.
                            </p>
                            <h3 data-title="1. Keeping track of your play">
                                1. Keeping track of your play
                            </h3>
                            <ol>
                                <li>
                                    <p>
                                        Playing computer games should be treated as a fun pastime. Here are
                                        some tips to help you maintain control of your gameplay:
                                    </p>
                                    <p>Keep it fun</p>
                                </li>
                                <li>
                                    <p>
                                        Playing computer games is a form of entertainment, but they should
                                        be played in moderation and not to escape reality or to generate
                                        income through winning prizes.
                                    </p>
                                    <p>Don’t spend too much</p>
                                </li>
                                <li>
                                    <p>
                                        Set a budget for your entertainment and stick to it. Only purchase
                                        Gold Coins if you can afford to. You can always make use of free
                                        play via Chanced’s alternative methods of entry (see Sweeps Rules).
                                    </p>
                                    <p>Keep track of the time</p>
                                </li>
                                <li>
                                    <p>
                                        We’re thrilled you’re here and we hope that you can continue
                                        playing, but don’t let gameplay take up too much of your time. Just
                                        like going to the movies, we’re here when you need some
                                        entertainment.
                                    </p>
                                    <p>Make use of our gameplay management tools</p>
                                </li>
                                <li>
                                    <p>
                                        If you need some time out, you can take a break from playing at any
                                        time by following the steps in section 2.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="2. Staying in control">2. Staying in control</h3>
                            <ol>
                                <li>
                                    <p>
                                        We encourage our customers to game responsibly, so we offer a
                                        variety of responsible gameplay features.
                                    </p>
                                    <p>Session Reminders</p>
                                </li>
                                <li>
                                    <p>
                                        Punt can assist you to game responsibly by operating a Session
                                        Reminder each hour.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>The Session Reminder:</strong>
                                    </p>
                                    <blockquote>
                                        a) suspends play and indicates how long you have been playing;
                                        <br />
                                        b) displays your play history since logging in; and
                                        <br />
                                        c) allows you to end the session or continue playing.
                                        <br />
                                    </blockquote>
                                    <p>Set Daily Limits</p>
                                </li>
                                <li>
                                    <p>
                                        The daily limits function provides you with options to pre-set how
                                        many Gold Coins you can purchase each day;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To pre-set a limit, once you have signed in select the “Contact Us”
                                        link on the platform, select “Responsible Gameplay Options” enter
                                        your email address, and select “Request Limiting Purchases” in the
                                        dropdown menu, complete the remainder of the form and submit it (Set
                                        Your Limits Feature). Each day refers to a 24- hour period.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We will endeavor to apply your limits as soon as practically
                                        possible, however, please note that this process takes a reasonable
                                        working period to implement. The limits will not come into effect
                                        until they have been fully implemented and this has been
                                        communicated to you. If after this you find that the limits have not
                                        taken effect, it is your responsibility to inform us immediately.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        You can change or revoke the limits you have set by sending us a
                                        request by selecting the “Contact Us” link on the platform,
                                        selecting “Request Support” from the drop-down menu, and completing
                                        the form provided (Request Support Feature).
                                    </p>
                                    <p>Self-Exclusion and Account Closure Options</p>
                                </li>
                                <li>
                                    <p>
                                        If you want to pre-emptively exclude yourself from the platform so
                                        that you are unable to create a Customer Account, you can email your
                                        request to support@Punt.com
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If you feel like you want to take a break, or that your gameplay has
                                        become problematic, you may voluntarily exclude yourself from the
                                        Punt platform via the Set Your Limits Feature. You may request to
                                        exclude yourself from the Punt platform:
                                    </p>
                                    <blockquote>
                                        a) for a definite period (Definite Self-Exclusion) by selecting the
                                        &quot;Contact Us&quot; link on the platform and choosing
                                        “Responsible Gameplay Options” from the drop down menu, add the
                                        email address that is attached to your Customer Account then
                                        choosing “Taking a break”. You can then select one of the suggested
                                        timeframes for your desired duration of the self-exclusion.
                                        <br />
                                        b) you can also use the in-game menu to select a Definite
                                        Self-Exclusion from: i. Poker style games.
                                        <br />
                                        c) for an indefinite period (Indefinite Self-Exclusion) by selecting
                                        the “Contact Us” link on the platform and then choosing the
                                        “Responsible Gameplay options” from the drop down menu, add the
                                        email address that is attached to your Customer Account, choose
                                        “Indefinite Self-Exclusion” and then choose the reason for the
                                        indefinite account closure from the options available in the drop
                                        down menu, as set out in the example below, and select “Submit”:
                                    </blockquote>
                                </li>
                                <li>
                                    <p>
                                        We will endeavor to apply your self-exclusion as soon as practically
                                        possible, however, please note that this process takes a reasonable
                                        working period to implement. We will not consider the self-exclusion
                                        period as having commenced until it has been implemented by us and
                                        communicated to you. If after this you find that you can still
                                        access the Punt platform, it is your responsibility to inform us
                                        immediately
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        During a self-exclusion period, you will not be able to play the
                                        Games or make any purchases.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        At the conclusion of a Definite Self-Exclusion, your access to the
                                        Punt platform will be reinstated.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        When an Indefinite Self-Exclusion is applied, it will only be
                                        possible to re-open your account by making a written email request
                                        to support@Punt.com. The Indefinite Self-Exclusion will only be
                                        lifted 3 months after the email request is received by us.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Once the self-exclusion is applied, you will no longer receive any
                                        further marketing materials from us. We strongly recommend that you
                                        also seek exclusion from all other computer gameplay platforms you
                                        have an active account with. If you use social media channels, you
                                        should take steps to ensure that you don’t receive our news or
                                        updates.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We may exclude you from the Punt platform for a definite or
                                        indefinite period at our sole discretion if there are reasons to
                                        indicate that you may have a computer gameplay problem.
                                    </p>
                                    <p>Amending or Revoking Limits and Self-Exclusions</p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Where you contact us to change any daily limits you have set:
                                        </strong>
                                    </p>
                                    <blockquote>
                                        a) a request for an increase to a limitation will come into effect
                                        immediately;
                                        <br />
                                        b) a request to decrease or remove a financial limitation will be
                                        effective only after the lapse of 5 days from the date we receive
                                        the request; and
                                        <br />
                                        c) a request to decrease or remove a time limitation will come into
                                        effect only after the lapse of 5 days of our receipt of the request.
                                        <br />
                                    </blockquote>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Where you contact us to make changes to a self-exclusion which
                                            is in effect:
                                        </strong>
                                    </p>
                                    <blockquote>
                                        a) a request for an increase of a self-exclusion will be effective
                                        immediately upon our receipt of the request;
                                        <br />
                                        b) a request for a decrease of a definite period of self-exclusion
                                        will be effective only after the lapse of 5 days from the date we
                                        receive the request; and
                                        <br />
                                        c) a request to revoke a period of self-exclusion will be effective
                                        only after the lapse of 7 days from the date we receive the request
                                        to self-exclude for a definite period and after a lapse of three
                                        months from the date we receive the request to self-exclude for an
                                        indefinite period.
                                        <br />
                                    </blockquote>
                                    <p>Stop playing/Close your account</p>
                                </li>
                                <li>
                                    <p>
                                        You may choose to close your account. If you wish to do so, make a
                                        written email request to Customer Support via this form.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We reserve the right to refuse or close a Customer Account in our
                                        sole discretion, but any contractual obligations already made by us
                                        will be honored accordingly.
                                    </p>
                                    <p>Exclusion by unregistered players</p>
                                </li>
                                <li>
                                    <p>
                                        You may also voluntarily exclude yourself from the Punt platform if
                                        you do not have a customer account. If you wish to do so, you must
                                        send an email to Customer Support via this form including your full
                                        name, full residential address, email address and age to allow us to
                                        block you from registering and playing on the Punt platform in the
                                        future. The self-exclusion will only be lifted 3 months after we
                                        receive your written email requesting to ignore your previous
                                        request of self-exclusion.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="3. Self-Assessmen">3. Self-Assessmen</h3>
                            <ol>
                                <li>
                                    <p>
                                        <strong>
                                            If you think your or someone else’s computer gameplay is
                                            becoming problematic, then it may be handy to consider the
                                            self-assessment questions below.
                                        </strong>
                                    </p>
                                    <blockquote>
                                        a) Do you often re-live gameplay experiences or think about future
                                        ones?
                                        <br />
                                        b) Do you hide or lie about your gameplay?
                                        <br />
                                        c) Do you get very angry when someone or something interrupts a
                                        game?
                                        <br />
                                        d) Have you ever taken a break from gameplay and binged
                                        uncontrollably upon your return?(e) When upset, do you soothe
                                        yourself with games or plans to game? (f) Do you find yourself
                                        playing poker games in the early morning?
                                        <br />
                                        g) Do you find ways to game when away from home?
                                        <br />
                                        h) Do you set limits to your gameplay and then break them, playing
                                        hours longer than intended?
                                        <br />
                                        i) Do you lose hours of sleep to gameplay?
                                        <br />
                                        j) Have you called in sick or late to work or skipped classes to
                                        game? (k) Have you sworn offa game, uninstalled it, and later
                                        returned to it? l) Do you feel guilt and shame around your gameplay?
                                        <br />
                                        m) Does your gameplay contribute to arguments in your relationships?
                                        <br />
                                        n) Has your gameplay taken the place of any hobbies or sports you
                                        used to enjoy?
                                        <br />
                                        o) Do you forget appointments, responsibilities or deadlines in work
                                        or school when playing online?
                                        <br />
                                        p) Do you become irritated and defensive when people suggest you
                                        might be playing online too much?
                                        <br />
                                        q) Have your hours spent playing online increased over time?
                                        <br />
                                        r) Do you blow off social events in games?
                                        <br />
                                        s) Have you lost contact with friends and family since playing
                                        online?
                                        <br />
                                        t) Do you have intense feelings (highs, lows, anger, fear) while
                                        playing online?
                                    </blockquote>
                                </li>
                                <li>
                                    <p>
                                        The more questions that you answer “yes” to, the more likely it is
                                        that you are having difficulties with your gameplay.. To speak with
                                        someone who can give you advice and support, please contact the
                                        Support Organisation referred to in 4.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="4. Support Organisation">4. Support Organisation</h3>
                            <ol>
                                <li>
                                    <p>
                                        Should you wish to access help and support services for people who
                                        have been adversely affected by gameplay, we advise you to get in
                                        touch with the Computer Gaming Addicts Anonymous (CGAA) using the
                                        following email address: helpline@cgaa.info.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Important: Please note that the CGAA is an independent problem
                                        gameplay support service and is NOT in any way affiliated with Punt.
                                        The CGAA does NOT provide customer support or dispute resolution
                                        services. Should you wish to discuss any matter or complaint related
                                        to your account, you can do so by contacting us using this form.
                                    </p>
                                </li>
                            </ol>
                            <h2 data-title="Player Protection Policy">Player Protection Policy</h2>
                            <h3 data-title="1. Protection of minors">1. Protection of minors</h3>
                            <ol>
                                <li>
                                    <p>
                                        With the internet accessible via mobile devices and in homes around
                                        the world, responsible online gameplay relies heavily on parental
                                        control and supervision. In order to ensure child safety on the
                                        internet, we encourage our customers to make use of filtering
                                        software to prevent minors from accessing inappropriate online
                                        material.
                                    </p>
                                </li>
                            </ol>
                            <h3 data-title="2. Tips for parents">2. Tips for parents</h3>
                            <ol>
                                <li>
                                    <p>
                                        <strong>We offer the following tips for parents:</strong>
                                    </p>
                                    <blockquote>
                                        a) Keep your username and password safe.<br>
                                        b) Do not leave your computer or device unattended when logged in to
                                        your account.<br>
                                        c) Do not use the “Remember Me” feature on a shared computer or
                                        device, especially if you share your computer or device with
                                        children.<br>
                                        d) Take particular care regarding the use by minors of all
                                        electronic and mobile devices.<br>
                                        e) Keep your bank cards and bank account details out of reach of
                                        children<br>
                                        f) Do not allow minors (under 18 years) to participate in any
                                        gameplay activity meant for adults (+18 years).<br>
                                        g) Make use of filtering software to prevent your children from
                                        accessing inappropriate material online.
                                    </blockquote>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            If you share your device or computer with friends or family who
                                            are under the legal age to participate in online social
                                            gameplay, we recommend that you restrict their access to
                                            gameplay platforms. There are third-party services available
                                            that may be able to assist with this, such as:
                                        </strong>
                                    </p>
                                    <blockquote>
                                    a) Netnanny.com<br>
                                    b) Cybersitter.com(c) Cyberpatrol.com
                                    </blockquote>
                                </li>
                            </ol>
                        `}
                />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default ResponsibleGameplayPolicy;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
