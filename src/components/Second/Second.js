"use client"

import {
    Grid,
    Column,
    Button

} from '@carbon/react'

export default function Second() {
    return (
        <div className="second-main">
            <Grid>
                <Column sm={4} md={8} lg={16} className="main-container">

                    <h3 className="tag">Novedades</h3>


                    <Grid condensed className='s1'>
                        <Column sm={4} md={4} lg={8}>

                            <img src="./punto.png" />

                        </Column>
                        <Column sm={4} md={4} lg={8}>
                            <div className="cont">
                                <p className="tl">Eventos</p>
                                <h4>¡Empieza el Carnaval en Punta Carretas!</h4>
                                <h2>next</h2>
                            </div>
                        </Column>
                    </Grid>

                    <Grid condensed className='s2'>
                        {/* <Column sm={4} md={4} lg={8}> */}
                        <Column sm={2} md={2} lg={4}>

                            <img src="./san.jpg" />

                        </Column>
                        <Column md={2} lg={4}>
                            <div className="cont">
                                <p className="tl">Novedades</p>
                                <h4>Este 14/2 ¡sorteamos 14 cenas, para 2!</h4>
                                <h2>next</h2>
                            </div>
                        </Column>
                        {/* </Column> */}

                        {/* <Column sm={4} md={4} lg={8}> */}
                        <Column sm={2} md={2} lg={4}>

                            <img src="./sale.png" />

                        </Column>
                        <Column sm={2} md={2} lg={4}>
                            <div className="cont">
                                <p className="tl">Promociones</p>
                                <h4>Summer Sale</h4>
                                <h2>next</h2>
                            </div>
                        </Column>
                        {/* </Column> */}
                    </Grid>

                    <Grid>

                        <Column sm={{ span: 4, start: 2 }} md={{ span: 8, start: 4 }} lg={{ span: 16, start: 8 }}>
                            <div className="sec-but">
                                <Button kind="tertiary">
                                    Ver todas las novedades
                                </Button>
                            </div>
                        </Column>

                    </Grid>
                </Column>
            </Grid>


        </div>

    );
}