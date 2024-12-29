import React from "react";
import Image from "shared/ui/Image";
import mainCSS from "../01-general/general.module.scss";
import css from "./signs.module.scss";

const Signs: React.FC = () => {
    return (
        <div className={css.signs}>
            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <h3 className={`${mainCSS.title} ${css.signs_title}`}>Recognize The Signs</h3>
                    <div className={mainCSS.icon}>
                        <Image.Default src="/img/settings/coin-user.svg" alt="" />
                    </div>
                    <div className={mainCSS.text}>
                        <h4>How can my social gaming activities affect me?</h4>
                        <p>
                            Often we find it is easier identifying social gaming becoming a problem
                            in others, but harder to recognise when this affects us as individuals.
                            Although it can often result in financial problems – the impact usually
                            stretches much further than this. Recognizing the effects of dependency
                            is crucial in identifying and addressing the problem before it escalates
                            further.
                        </p>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <div className={mainCSS.icon}>
                        <Image.Default src="/img/settings/coin-heart.svg" alt="" />
                    </div>
                    <div className={mainCSS.text}>
                        <h4>Is my social gaming activities affecting my mental health?</h4>
                        <p>Does any of these statements sound familiar to you?</p>
                        <ul>
                            <li>I have extreme emotions or mood swings</li>
                            <li>
                                I feel that social social gaming is the only thing I really enjoy
                            </li>
                            <li>I have difficulty sleeping</li>
                            <li>I often feel depressed or anxious</li>
                            <li>I have suicidal thoughts</li>
                            <li>I use my social social gaming activities to avoid difficulties</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <div className={mainCSS.icon}>
                        <Image.Default src="/img/settings/relationship.svg" alt="" />
                    </div>
                    <div className={mainCSS.text}>
                        <h4>Is my social social gaming activities affecting my relationships?</h4>
                        <p className={mainCSS._gray}>
                            Social social gaming addictions can have a serious impact on
                            relationships which can make it even harder to deal with. Consider the
                            following:
                        </p>
                        <ul>
                            <li>
                                I’m arguing more with my partner or family – especially about money,
                                budgeting and debt.
                            </li>
                            <li>
                                I’m preoccupied with my social gaming activities and finding it
                                difficult to focus on other things.
                            </li>
                            <li>
                                I’m spending less time with my friends and more time social gaming.
                            </li>
                            <li>
                                I’m not able to tell people the truth about how much I have spent or
                                lost on my social gaming activities.
                            </li>
                            <li>
                                I’m stealing money from friends and family to fund my social gaming
                                activities.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <div className={mainCSS.icon}>
                        <Image.Default src="/img/settings/finances.svg" alt="" />
                    </div>
                    <div className={mainCSS.text}>
                        <h4>Is my social gaming activities affecting my finances?</h4>
                        <p className={mainCSS._gray}>
                            One of the most obvious ways in which social gaming activities can
                            become problematic is when debt begins to mount or when savings or money
                            meant for other things is being spent on social gaming.
                        </p>
                        <p>Do any of these statements describe your situation?</p>
                        <ul>
                            <li>I am struggling to pay my bills on time.</li>
                            <li>I am juggling my credit card debt.</li>
                            <li>I have taken out a payday loan.</li>
                            <li>I am using business money to fund my social gaming activities.</li>
                            <li>I have depleted all my savings on social gaming activities.</li>
                            <li>I am hiding my financial situation from those close to me.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <div className={mainCSS.icon}>
                        <Image.Default src="/img/settings/organizations.svg" alt="" />
                    </div>
                    <div className={mainCSS.text}>
                        <h4>Help Organizations</h4>
                        <p>
                            If your social gaming activities may have had, or is at risk of having,
                            a negative impact on your mental health, finances or relationships with
                            friends or family, we encourage you to get in touch with the following
                            help and support organizations:
                        </p>
                        <ul>
                            <li>
                                <a href="#">Gaming Addicts Anonymous (GAA)</a>  is a fellowship of
                                people who support each other in recovering from the problems
                                resulting from excessive game playing.
                            </li>
                            <li>
                                <a href="#">Financial Counseling Association of America (FCAA)</a>
                                  is a professional association of financial counseling agencies
                                that assist consumers with financial counseling services of all
                                kinds, as well as debt management plans for the repayment of
                                unsecured debts.
                            </li>
                            <li>
                                <a href="#">National Foundation for Credit Counseling (NFCC)</a>  is
                                a non-profit financial counseling agency. The NFCC helps people to
                                defeat their debt and look forward with confidence.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <p className={mainCSS.reminder}>
                        The self-assessment will help you figure out if there is, or you are
                        developing a problem. If you answered yes to one or more of the above
                        questions, you should seek help.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signs;
