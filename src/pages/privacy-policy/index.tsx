import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/08-info-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./privacy-policy.module.scss";

const PrivacyPolicy: NextPage = () => {
    return (
        <MainLayout title="Privacy Policy">
            <NavLayout>
                <Header />
                <Screens.InfoHead
                    breadcrumbs={[{ name: "Home Page", href: "/" }, { name: "Privacy Policy" }]}
                    title="Privacy Policy"
                    lastUpdate="Nov 16, 2022"
                    download=""
                />
                <Screens.InfoContent
                    content={`
                        <p>
                            At Punt, we are committed to protecting and respecting your privacy and
                            maintaining the confidence and trust of our customers. This privacy policy
                            (“Privacy Policy”) explains how your personal information is collected, why it
                            is collected and how it is kept secure.
                        </p>
                        <p>
                            This Privacy Policy governs the manner in which Punt collect, use, maintain, and
                            disclose information collected from users (each, a “User”) of Punt through
                            <a target="_blank" href="https://punt.com">
                                https://punt.com
                            </a>{" "}
                            and any subdomains, subpages, successor sites or any application accessible via
                            our website (the “Website”). This Privacy Policy applies to the Website and all
                            products and services offered through the Website.
                        </p>
                        <h3 data-title="1. Date Controller">1. Date Controller</h3>
                        <ol>
                            <li>
                                <p>
                                    This Privacy Policy is issued on behalf of Punt so when we mention
                                    “Punt”, &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this
                                    Privacy Policy, we are referring to the relevant company in the Punt
                                    responsible for processing your data.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The data controller responsible for processing data collected through
                                    your use of the Website (including any data you may provide through the
                                    Website when you purchase a product or service or take part in a
                                    promotion or competition) is Punt.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="2. Type of information we collect">
                            2. Type of information we collect
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    <strong>
                                        We collect two basic types of information - personal information (as
                                        defined below) and anonymous information (as defined below) - and we
                                        may use personal and anonymous information to create a third type of
                                        information, aggregate information (also defined below). For
                                        example, we collect:
                                    </strong>
                                </p>
                                <blockquote>
                                    a) contact details, such as your first name and surname, email address,
                                    residential address and mobile or other phone numbers;
                                    <br /><br />
                                    b) personal information such as gender, age, age range or image;
                                    <br /><br />
                                    c) account login details, including your username, password and pictures
                                    associated with your profile;
                                    <br /><br />
                                    d) transaction information you provide when you make a purchase, request
                                    a redemption or otherwise use our Website or contact customer service,
                                    such as your postal address, phone number and payment or redemption
                                    information including banking and financial details, credit card details
                                    and bank account statements;
                                    <br /><br />
                                    e) information sent bilaterally or within a small group using text
                                    message, live chat, post or other similar methods of communication;
                                    <br /><br />
                                    f) information we obtain from a third party, such as a site or platform
                                    provider (including Facebook), about your use of or interest in our
                                    services;
                                    <br /><br />
                                    g) location information, including location information provided by a
                                    mobile or other device interacting with one of our Websites, or
                                    associated with your IP address, where we are permitted by law to
                                    process this information;
                                    <br /><br />
                                    h) activity, technical and device information about your use of our
                                    Website, such as the content you view, the time and duration of your
                                    visit on our Website, how often you use our services, how you first
                                    heard about our Website, your preferences and information about your
                                    interaction with the content offered through our Website, your hardware
                                    model, device type, other unique device identifiers, operating system
                                    version, browser type and IP address;
                                    <br /><br />
                                    i) social security numbers where we are required to do so for tax or
                                    other legal reasons.
                                </blockquote>
                            </li>
                        </ol>
                        <h3 data-title="3. How we collect your information">
                            3. How we collect your information
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    We collect information that Users provide to us in a variety of ways,
                                    including, when Users visit our Website, register on the Website,
                                    purchase products on our Website, respond to a survey, fill out a form,
                                    and in connection with other activities, services, features or resources
                                    we make available on our Website.
                                </p>
                                <p>
                                    You warrant any contact information you provide, included (but not
                                    limited to), your e-mail address and mobile phone number is true and
                                    accurate. You further warrant that you are the telephone subscriber
                                    and/or that you own any telephone numbers that you provide to Punt. You
                                    acknowledge that by voluntarily providing your telephone numbers to
                                    Punt, you expressly agree to be contacted at the telephone numbers you
                                    provide.{" "}
                                </p>
                                <p>
                                    You consent to receive pre-recorded voice messages and/or autodialled
                                    calls (including text messages) by or on behalf of Punt relating to:
                                </p>
                                <blockquote>
                                    a) this Privacy Policy and any associated terms and conditions; <br /><br />
                                    b) any transaction with Punt related to your account; <br /><br />
                                    c) promotions from Punt. The above communications may be made by or on
                                    behalf of Punt, even if your phone number is registered on any state or
                                    federal Do Not Call list. You acknowledge that you may incur a charge
                                    for these texts or calls by your telephone carrier and that Punt will
                                    not be responsible for these charges.
                                </blockquote>
                            </li>
                            <li>
                                <p>
                                    In addition to collecting information via our Website, we collect
                                    information from Users by telephone, video or in correspondence
                                    (including email, live chat, mail, text message or social media). All
                                    telephone or video calls between Users and Punt representatives may be
                                    recorded for training, quality control and compliance purposes and by
                                    continuing with any such call you consent to it being recorded.
                                </p>
                            </li>
                            <li>
                                <p>
                                    We also collect information about your use of our products and services
                                    through a variety of technologies that are present when you visit our
                                    Websites or use our applications on third party sites or platforms
                                    (whether or not you are logged in or registered) including cookies,
                                    flash cookies, pixels, tags and application program interfaces (“API”).
                                    Please see the section entitled “Personal Data Collected via Technology”
                                    below for further information.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Analytics tools are also used by us to collect information, including
                                    when you visit our Website or use our applications or services on third
                                    party sites or platforms.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Finally, we also use trusted sources to update or supplement the
                                    information you provided, or we collected, including in order to verify
                                    or validate information (for example, postal address, documentation, and
                                    names).
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="4. How we use your information">4. How we use your information</h3>
                        <ol>
                            <li>
                                <p>
                                    The Data Controller is responsible for and may use your information for
                                    the purposes described in this Privacy Policy. Other members of Punt may
                                    access your information where they act on behalf of the Data Controller
                                    as a data processor for the purposes described in this Privacy Policy.
                                    In summary, we use the information collected to operate our Website and
                                    to provide our products and services, to facilitate your financial
                                    transactions, to respond to your questions and to fulfill all applicable
                                    regulatory requirements such as anti-fraud checks and other checks
                                    required by applicable anti-money laundering and other legislation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In accordance with applicable law and any elections made available to
                                    you, Punt may collect and use the information of Users for the following
                                    specific purposes:
                                </p>
                                <blockquote>
                                    a) To provide and manage the services you request - This includes, for
                                    example, processing your registration and setting up and looking after
                                    your account, including checks made to guard against fraud.
                                    <br /><br />
                                    b) To improve customer service and our services - Information you
                                    provide helps us respond to your customer service requests more
                                    efficiently; we may use feedback you provide to improve our products and
                                    services.
                                    <br /><br />
                                    c) To process payments - We may use the information Users provide about
                                    themselves when placing an order to service that order (including to
                                    satisfy our customer due diligence requirements and to establish the
                                    source of funds where necessary). We do not share this information with
                                    third parties except to the extent necessary to provide the service.
                                    <br /><br />
                                    d) To personalize user experience - We may use information which has
                                    been aggregated to understand how our Users as a group use the services
                                    and resources provided on our Website.
                                    <br /><br />
                                    e) To contact you about our services - For example by email, live chat,
                                    telephone, text message, mail, or social media; to manage promotions and
                                    competitions you choose to enter. We may periodically contact you with
                                    offers and information about our products and services, including in
                                    connection with your accounts, promotions, contests, online surveys, new
                                    features that you are entitled to access, and other important
                                    information. As set out in clause 3.1, provision of your telephone
                                    information will be deemed as your consent to receive text messages sent
                                    by automatic telephone dialing systems. Consent to receive direct
                                    advertising is not a condition of purchase.
                                    <br /><br />
                                    f) To send important notices to you - From time to time we may send
                                    important notices to you, such as communications about purchases you
                                    have made, or legal notices regarding the changes to our terms and
                                    conditions or other policies. This information is important to your
                                    interactions with us and you acknowledge that you may not opt-out of
                                    receiving these communications.
                                    <br /><br />
                                    g) To comply with our legal and regulatory obligations - We may use
                                    information we collect about you to assess your social gameplay activity
                                    for responsible social gameplay purposes, for taxation purposes, to
                                    comply with fraud and anti-money laundering laws (including to establish
                                    the source of funds where a transaction is involved) or to comply with
                                    any other legal or regulatory obligations (including detection,
                                    investigation and prevention of activity that violates our terms and
                                    conditions or that may be illegal).
                                    <br /><br />
                                    h) To offer alternative dispute resolution services - We may provide
                                    information we collect about you to our third party partner for the
                                    specific purpose of resolving any disputes that have not been
                                    satisfactorily resolved through our internal processes.
                                </blockquote>
                            </li>
                            <li>
                                <p>
                                    We do not use automated decision making within the meaning of European
                                    data protection laws
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="5. Personal date collected via technology">
                            5. Personal date collected via technology
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    When you interact with our Website, we try to make that experience
                                    simple and useful. We and our partners use industry standard
                                    identifiers, such as cookies or other similar technologies.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Our Website may use technologies to enhance User experience. These
                                    technologies are small files that are placed on your computer, tablet,
                                    mobile phone or other devices when you visit a website. They allow us to
                                    record certain pieces of information whenever you visit or interact with
                                    the website.
                                </p>
                            </li>
                            <li>
                                <p>The following are examples of these types of technologies:</p>
                                <blockquote>
                                    a) Cookies. These are small text files placed in your device browsers to
                                    store your preferences. Most browsers allow you to block and delete
                                    cookies. However, if you do that, the service may not work properly.
                                    <br /><br />
                                    b) Pixel tags/web beacons. A pixel tag (also known as a web beacon) is a
                                    piece of code embedded on the Website that collects information about
                                    Users’ engagement on that web page. The use of a pixel allows us to
                                    record, for example, that a user has visited a particular web page or
                                    clicked on a particular advertisement. We may also include web beacons
                                    in e-mails to understand whether messages have been opened, acted on or
                                    forwarded.
                                    <br /><br />
                                    c) Mobile device identifiers. We may share the advertising identifier
                                    associated with your mobile device or tablet (such as the Apple IDFA and
                                    Google Advertising ID) with advertisers. It is used to identify your
                                    device for internet-based advertising. For instructions for using the
                                    advertising choice mechanisms provided by the most popular mobile
                                    operating systems, visit the NAI’s Mobile Choices page here.
                                    <br /><br />
                                    d) Event tagging. Event tagging (including Facebook App Events and
                                    Playfab Events) allows us to track actions that occur in the Website
                                    such as application installs and purchase events. By tracking these
                                    events we can view analytics, measure ad performance, and build
                                    audiences for ad targeting.
                                </blockquote>
                                <p>Behavioral Advertising</p>
                            </li>
                            <li>
                                <p>
                                    We may partner with a third party to either display advertising on our
                                    Website or any application accessible via our Website or to manage our
                                    advertising on other websites (for example, using custom audiences on
                                    Facebook). Our third party partner may use technologies such as cookies
                                    to gather information about your activities on our Website and other
                                    websites in order to provide you advertising based on your browsing
                                    activities and interests.
                                </p>
                            </li>
                            <li>
                                <p>
                                    If you wish to opt-out of interest-based advertising click here (or if
                                    located in the European Union click here). Please note you will continue
                                    to receive generic advertisements.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="6. Your rights over your information">
                            6. Your rights over your information
                        </h3>
                        <p>General Rights</p>
                        <ol>
                            <li>
                                <p>
                                    We appreciate that by law and subject to certain conditions, you have a
                                    number of rights concerning the personal information we hold about you.
                                    These rights include the right to access the personal information we
                                    hold about you, the right to object to the processing of your data and
                                    the right to withdraw any consent provided. In some circumstances, you
                                    can ask us to delete the personal information we hold about you.
                                </p>
                            </li>
                            <li>
                                <p>
                                    To exercise the right described at clause 6.1, please email
                                    support@Punt.com Right to complain to a supervisory authority
                                </p>
                            </li>
                            <li>
                                <p>
                                    You also have the right to complain to the relevant data protection
                                    supervisory authority about our processing of your personally
                                    identifiable information.
                                </p>
                                <p>Rights in direct advertising</p>
                            </li>
                            <li>
                                <p>
                                    If we process your personally identifiable information for the purpose
                                    of direct advertising, you have the right to object at any time to the
                                    processing of personally identifiable information relating to you for
                                    the purpose of such advertising; this also applies to profiling, where
                                    appropriate, insofar as it is associated with such direct advertising.
                                </p>
                            </li>
                            <li>
                                <p>
                                    You may opt-out of receiving commercial messages from us by following
                                    the instructions contained in those messages or by contacting Customer
                                    Support at support@Punt.com. In the event of your objection to
                                    processing for the purpose of direct advertising, we will no longer
                                    process your personally identifiable information for these purposes.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="7. How we protect your information">
                            7. How we protect your information
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    We have in place physical, electronic and operational procedures to
                                    protect the information that we collect. We adopt appropriate data
                                    collection, storage and processing practices and security measures to
                                    protect against unauthorized access, alteration, disclosure or
                                    destruction of your personal information, username, password,
                                    transaction information and data stored on our Website. Our security
                                    measures are reviewed regularly and updated in keeping with
                                    technological advances.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="8. How long will we retain your information">
                            8. How long will we retain your information
                        </h3>
                        <p>
                            We will retain your information for the period of time required to fulfill the
                            purposes outlined in this Privacy Policy unless a longer retention period is
                            required or permitted by law.
                        </p>
                        <h3 data-title="9. Sharing your information">9. Sharing your information</h3>
                        <ol>
                            <li>
                                <p>
                                    We do not sell, trade, or rent the personal identification information
                                    of Users to others.However, there are circumstances when we share your
                                    personal data with other companies in the Punt, with third parties that
                                    provide services to you on our behalf, and with other third parties in
                                    the course of complying with our legal obligations.
                                </p>
                                <p>With other companies within Punt.</p>
                                <p>
                                    We may share the information we collect with other companies in the Punt
                                    for the purposes set out in this Privacy Policy:
                                </p>
                            </li>
                            <li>
                                <p>
                                    Please see Transfers below for further information on how we share
                                    information within the Punt. With third parties
                                </p>
                            </li>
                            <li>
                                <p>
                                    We only share information with third parties in limited circumstances
                                    including the following:
                                </p>
                                <blockquote>
                                    a) when you allow us to share your information with third parties;
                                    <br /><br />
                                    b) when providing you with products and services and notifying you about
                                    either important changes or developments to the features and operation
                                    of those products and services;
                                    <br /><br />
                                    c) with our service providers to enable us to provide our services, such
                                    as companies that help us with technology services, storing and
                                    combining data, and processing payments and redemptions or providing
                                    relevant marketing and advertising for our products and services. The
                                    partner companies will have access to your personal information only to
                                    perform services on our behalf and are prohibited from using your
                                    personal information for purposes other than those requested by us or
                                    required by law. Where service providers use personal information for
                                    their own purposes, where permitted by law, such service provider will
                                    act as data controller;
                                    <br /><br />
                                    d) in response to lawful requests by public authorities, including to
                                    meet national security or law enforcement requirements, when ordered to
                                    do so by any regulatory body and/or under any legal provision contained
                                    in the governing law of a particular jurisdiction;
                                    <br /><br />
                                    e) when instructing and authorizing the financial institution with which
                                    a User’s account is held to disclose any information as may be requested
                                    by a regulator in respect of the User’s account;
                                    <br /><br />
                                    f) when we share your personal information with third parties to enforce
                                    our terms and conditions set out on our Website, to protect our rights
                                    and property and the rights and property of our customers and third
                                    parties, to detect fraud or other illegal activities, and to comply with
                                    law or legal processes;
                                    <br /><br />
                                    g) to perform customer due diligence including ID verification.
                                </blockquote>
                            </li>
                            <li>
                                <p>
                                    We make available an API provided by Google Maps in order to allow
                                    Users’ to have access to an address auto- complete function on our
                                    Website. The use of Google Maps for this purpose by the User is subject
                                    to the then- current Google Maps/Google Earth Additional Terms of
                                    Service at{" "}
                                    <a href="https://maps.google.com/help/terms_maps.html" target="_blank">
                                        https://maps.google.com/help/terms_maps.html
                                    </a>{" "}
                                    and Google Privacy Policy at{" "}
                                    <a href="https://www.google.com/policies/privacy/" target="_blank">
                                        https://www.google.com/policies/privacy/
                                    </a>
                                    .
                                </p>
                            </li>
                            <li>
                                <p>
                                    We may ask you to provide your image to assist us in verifying your
                                    identity. We do this by using facial recognition technology provided by
                                    third parties (including, but not limited to, Veriff) that determines
                                    whether the photo you take matches the photo in your identification
                                    document. The facial recognition technology provided by these third
                                    parties collects information from your image capture, including
                                    biometric data, and may share this information with us. Biometric data
                                    is stored by the third party service provider in accordance with its
                                    privacy policy and is stored by us, until such time as the initial
                                    purpose for collecting or obtaining such information has been satisfied
                                    or within 3 years of your last interaction with us, whichever occurs
                                    first, provided we have no other legal obligation to retain such
                                    information for any longer period.
                                </p>
                            </li>
                            <li>
                                <p>
                                    We may also share generic aggregated demographic information not linked
                                    to any personal identification information regarding visitors and Users
                                    with our business partners, trusted affiliates and advertisers for the
                                    purposes outlined above. Transfers
                                </p>
                            </li>
                            <li>
                                <p>
                                    Punt operates in several international jurisdictions and personal
                                    information we collect may be transferred to, and stored and processed
                                    by, individual companies in the Punt or third parties in, the European
                                    Union, the United States, Canada, Australia, India or any other country
                                    in which we or our third party processors maintain facilities. We will
                                    ensure that transfers of personal information to any country or an
                                    international organization are subject to appropriate safeguards.
                                    Additionally, without limitation where applicable, when transferring
                                    personal information from the European Union, we may use standard
                                    contractual clauses approved by the European Commission or otherwise
                                    adopt other means in accordance with European data protection laws for
                                    ensuring adequate safeguards.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="10. Other importent information">
                            10. Other importent information
                        </h3>
                        <p>Compliance with Children’s Online Privacy Protection Act</p>
                        <ol>
                            <li>
                                <p>
                                    Protecting the privacy of the very young is especially important. For
                                    that reason, we never collect or maintain information on our Website
                                    from individuals we actually know are under the age of 18, and no part
                                    of our Website is structured to attract anyone under the age of 18.
                                </p>
                                <p>Your California Privacy Rights.</p>
                                <p>
                                    California residents may have specific rights regarding their personal
                                    information, including accessing the personal information we’ve
                                    collected about you during the past 12 months and information about our
                                    data practice. You may also have the right to request, subject to
                                    certain exceptions, that we delete the personal information we have
                                    collected from you.
                                </p>
                                <p>Exercising Access and Deletion Rights.</p>
                                <p>
                                    To request access to or deletion of your personal information, please
                                    submit a verifiable consumer request to us at{" "}
                                    <a href="mailto:support@punt.com">support@Punt.com</a>.
                                </p>
                                <p>
                                    Only you or a person registered with the California Secretary of State
                                    that you authorize to act on your behalf may make a verifiable consumer
                                    request related to your personal information. If you decide to use an
                                    authorized agent, please also include written permission that you have
                                    designated that agent to make this request, or proof of the agent’s
                                    power of attorney. We may follow up with you to verify your identity
                                    before processing your authorized agent’s request. You may also make a
                                    verifiable consumer request on behalf of your minor child.
                                </p>
                                <p>For your consumer request to be verifiable, you must:</p>
                                <p>
                                    Provide sufficient information that allows us to reasonably verify you
                                    are the person about whom we collected personal information or an
                                    authorized representative. You will need to provide:
                                </p>
                                <ul>
                                    <li>Full name</li>
                                    <li>Date of birth</li>
                                    <li>Address</li>
                                    <li>E-mail address</li>
                                    <li>Whether you are a California consumer pursuant to CCPA</li>
                                    <li>
                                        IF you would like to know the specific pieces of personal
                                        information that we have collected about you, or to delete your
                                        personal information, identification that clearly shows your name,
                                        date of birth and address (For example, passport or other photo
                                        identification)
                                    </li>
                                </ul>
                                <p>Do-Not-Track Signals and Similar Mechanisms.</p>
                            </li>
                            <li>
                                <p>
                                    Some web browsers may transmit “do-not-track” signals to the websites
                                    with which the user communicates. Due to the different ways that web
                                    browsers incorporate and activate this feature, it is not always clear
                                    whether users intend for these signals to be transmitted, or whether
                                    they even are aware of them. As there currently is no industry standard
                                    concerning what, if anything, websites should do when they receive such
                                    signals, our Website currently does not take action in response to these
                                    signals.
                                </p>
                                <p>
                                    If and when a final standard is established and accepted, we will
                                    reassess how to respond to these signals.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="11. Change to this privacy policy">
                            11. Change to this privacy policy
                        </h3>
                        <ol>
                            <li>
                                <p>
                                    This Privacy Policy may be updated from time to time to reflect changes
                                    in the way we work or the way our work is regulated. We will notify you
                                    of material changes and, where required by law, will obtain your
                                    consent. Notice may be by the posting of such changes on our Website or
                                    by other means in accordance with applicable law.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Any changes to the Privacy Policy will become effective when the updated
                                    policy is posted on our Website.
                                </p>
                            </li>
                            <li>
                                <p>
                                    We encourage Users to frequently check this page for any changes to stay
                                    informed about how we are helping to protect the personal information we
                                    collect.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="12. Definitions">12. Definitions</h3>
                        <ol>
                            <li>
                                <p>
                                    Personal information means information that identifies (whether directly
                                    or indirectly) a particular individual, such as the individual’s name,
                                    postal address, email address, and telephone number. When anonymous
                                    information is directly or indirectly associated with personal
                                    information, the resulting information is also treated as personal
                                    information.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Anonymous information means information that does not directly or
                                    indirectly identify, and cannot reasonably be used to identify, an
                                    individual.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Aggregate information means information about groups or categories of
                                    customers, which does not identify and cannot reasonably be used to
                                    identify an individual customer.
                                </p>
                            </li>
                        </ol>
                        <h3 data-title="13. Contacting us">13. Contacting us</h3>
                        <ol>
                            <li>
                                <p>
                                    If you have specific questions regarding your personal information or
                                    how we use it, please contact our Data Protection Officer directly by
                                    email at the following email address support@Punt.com and specify your
                                    place of residence and the nature of your question.
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

export default PrivacyPolicy;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
