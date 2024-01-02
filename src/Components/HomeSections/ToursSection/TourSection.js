import React from 'react';
import './TourSection.scss'
import LightHouse from "../../../Assets/Images/lighthouse.png";
import UserIcon from "../../../Assets/Icons/user.svg"
import HeadphonesIcon from "../../../Assets/Icons/headphones.svg"
import WorldIcon from "../../../Assets/Icons/world.svg"

const TourSection = () => {
    return (
        <section className={"tour-section"}>
            <div className="tour-section__container">
                <div className="row">
                    <div className="col-4">
                        <div className="tour-section__item">
                            <div className="tour-section__item-image">
                                <img src={LightHouse} alt={"icon-tour-1"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tour-section__item">
                            <h2 className="tour-section__item-title">We Offering In Total 793 Tours Out The World</h2>
                            <div className="tour-section__item-option">
                                <div className="tour-section__item-option-item">
                                    <div className="tour-section__item-option-item-icon">
                                        <img src={UserIcon} alt={"icon-tour-1"}/>
                                    </div>
                                    <div className="tour-section__item-option-item-text">
                                        <h4 className="tour-section__item-option-item-text-title">
                                            Best Travel Guide Always For Your Services
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourSection;