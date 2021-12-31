import React from 'react';
import style from "./weight.module.css";
import img from "../Images/Rectangle 1284.png";
import log1 from "../gender/active-female.svg";
import log2 from "../gender/active-male.svg";
import {Cell, Pie, PieChart} from "recharts";

const Weight = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 }
    ];
    const COLORS = ["#C10016", "#C4C4C4"];
    return (
        <div className={style.weightBg}>
            <div className={style.weightBgTwo}>
                <div className={style.contain}>
                    <div className={style.one}>
                        <div className={style.boxOne}>
                            <div className={style.colOne}>
                                <span className={style.colOneSpan}>сегодня</span>
                            </div>
                            <div className={style.colTwo}>
                                <div className={style.spanDiv}>
                                   <span className={style.span22} >общий </span><span className={style.span22a}>сумма</span>
                                </div>
                                <PieChart width={250} height={170} className={style.pie}>
                                    <Pie
                                        data={data}
                                        cx={120}
                                        cy={95}
                                        innerRadius={50}
                                        outerRadius={70}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                                <span className={style.numb}>150.000</span>
                            </div>
                            <div className={style.colThree}>
                                <button className={style.button2}>подробнее </button>
                            </div>
                        </div>
                        <div className={style.boxTwo}>
                            <div className={style.colOne}>
                                <span className={style.colOneSpan}>сегодня</span>
                            </div>
                            <div className={style.colTwo}>
                                <div className={style.spanDiv}>
                                   <span className={style.span22} >каличатво
                                </span>
                                </div>
                                <PieChart width={250} height={170} className={style.pie}>
                                    <Pie
                                        data={data}
                                        cx={120}
                                        cy={95}
                                        innerRadius={50}
                                        outerRadius={70}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                                <span className={style.numb2}>30</span>
                            </div>
                            <div className={style.colThree}>
                                <button className={style.button2}>подробнее </button>
                            </div>
                        </div>
                        <div className={style.boxThree}>
                            <div className={style.colOne}>
                                <span className={style.span2}>текущий </span>
                            </div>
                            <div className={style.colTwo}>
                                {/*<p>март</p>*/}
                                <div className={style.boxes2}>
                                    <div className={style.bx}>
                                        <p>общий сумма</p>
                                        <span className={style.s}>150.000</span>
                                    </div>
                                </div>
                                <div className={style.boxes2}>
                                    <div className={style.bx}>
                                        <p>каличатво</p>
                                        <span className={style.s}>30</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colThree}>
                                <button className={style.button}>подробнее </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weight;