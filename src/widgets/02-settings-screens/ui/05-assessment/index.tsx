import React from "react";
import Image from "shared/ui/Image";
import mainCSS from "../01-general/general.module.scss";
import css from "./assessment.module.scss";

const Assessment: React.FC = () => {
    return (
        <div className={css.assessment}>
            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <h2 className={`${css.assessment_title} ${mainCSS.title}`}>Self-Assessment</h2>
                    <div className={mainCSS.text}>
                        <p>
                            Social gaming can be an enjoyable pastime for many people, providing
                            entertainment.{" "}
                            <span className={mainCSS._gray}>However, for some individuals</span>,
                            social gaming can become more than{" "}
                            <span className={mainCSS._gray}>just a harmless activity</span>. It can
                            develop into a serious problem{" "}
                            <span className={mainCSS._gray}>
                                that affects various aspects of their lives.
                            </span>
                        </p>
                        <p>
                            Recognizing the signs is the first step towards addressing this issue.
                            <span className={mainCSS._gray}>
                                {" "}
                                This self-assessment tool is designed
                            </span>{" "}
                            to help you reflect on your social gaming behaviour{" "}
                            <span className={mainCSS._gray}>and determine whether it may</span> be
                            causing problems in your life.{" "}
                            <span className={mainCSS._gray}>
                                It is essential to approach this assessment with honesty and
                                openness to gain a clear understanding of your
                            </span>{" "}
                            social gaming habits.
                        </p>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={`${mainCSS.item_inner} ${css.full}`}>
                    <div className={mainCSS.text}>
                        <h4>Ask yourself the following questions:</h4>
                        <ol>
                            <li>
                                Does your social gaming interfere with responsibilities in your life
                                like tasks, work, chores or projects?
                            </li>
                            <li>
                                Has your studies or employment suffered because of the amount of
                                time you spend social gaming?
                            </li>
                            <li>
                                Are there problems in your life for which social gaming provides a
                                welcome sense of escape?
                            </li>
                            <li>
                                Have you failed to submit work or projects on time because of the
                                amount of time you spend social gaming?
                            </li>
                            <li>Have you ever borrowed funds for social gaming?</li>
                            <li>
                                Do you become agitated or ill-tempered when trying to cut down your
                                social gaming?
                            </li>
                            <li>
                                Have you ever found yourself in financial difficulty as a result of
                                your social gaming?
                            </li>
                            <li>
                                Do you find yourself spending more time on social gaming than you're
                                comfortable with?
                            </li>
                            <li>Do you find yourself lying about your social gaming activity?</li>
                            <li>
                                Has your social gaming activities ever caused serious or repeated
                                problems in your relationships with any of your family members or
                                friends?
                            </li>
                        </ol>
                        <p></p>
                        <p></p>
                        <p>
                            In the event you feel that your social gaming activities has been
                            affecting your personal wellbeing, and / or your activities has reached
                            the point where you have lost control, find our self-exclusion options
                            here.
                        </p>
                        <p>
                            Alternatively, if you feel the need to take a break, find our timeout
                            options here.
                        </p>
                    </div>
                </div>
            </div>

            <div className={mainCSS.item}>
                <div className={`${mainCSS.item_inner} ${css.full}`}>
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

export default Assessment;
