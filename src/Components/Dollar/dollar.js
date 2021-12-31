import React from 'react';
import style from "./dollar.module.css";
import log1 from "../gender/active-female.svg";
import log2 from "../gender/active-male.svg";
import img from "../Images/Rectangle 1284.png"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {Chart} from "react-google-charts";
import Input from "../Global/Input/input";

const Dollar = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 }
    ];
    const COLORS = ["#C10016", "#C4C4C4"];
    return (

        <div className={style.dollarBg}>
            <div className={style.dollarBgTwo}>
                <div className={style.contain}>
                    <div className={style.one}>
                        <div className={style.boxOne}>
                            <div className={style.colOne}>
                                <div className={style.gend}>
                                    <div>
                                        <img src={log1}/>
                                        <p>Женский</p>
                                    </div>
                                    <div>
                                        <img src={log2}/>
                                        <p>мужской</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colTwo}>
                                <div className={style.colTwoBord}>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                </div>
                                <div className={style.colTwoBordTwo}>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                    <div className={style.divs}>
                                        <img src={img}/>
                                        <span>1200</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colThree}>
                                <button className={style.button}>ЗАКРЫТЬ</button>
                            </div>
                        </div>
                        <div className={style.boxTwo}>
                            <div className={style.colOne}>
                                <p className={style.colOneSpan}>сегодня</p>
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
                                <span className={style.numb}>30</span>
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
                    <div className={style.two}>
                        <div className={style.rowOne}>
                            <input  type={"text"} placeholder={"история продаж"} className={style.input}/>
                        </div>
                        <div className={style.rowTwo}>
                            <div className={style.partTwo}>
                                <Chart
                                    margin-top={'80px'}
                                    width={'940px'}
                                    height={'290px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Year', 'серьги ', 'кольцo', 'Цепь'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                            <div className={style.partThree}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dollar;