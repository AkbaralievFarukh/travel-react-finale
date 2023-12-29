import React from 'react';
import './SectionFuture.scss'
import Map from "../../../Assets/Images/map.png";
import Binocular from "../../../Assets/Images/binocular.png";
import Ukulele from "../../../Assets/Images/ukulele.png";
import Backpack from "../../../Assets/Images/backpack.png";
    const SectionFutures = () => {
    return (
        <section className={"section-futures"}>
            <div className={"section-futures__container"}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Map} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Choose Destination
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Binocular} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Explore The Place
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Backpack} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Start Your Journey
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Ukulele} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Let’s Enjoy
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    };

export default SectionFutures;