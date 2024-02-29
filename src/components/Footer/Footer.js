"use client";

import {
    Grid,
    Column

} from '@carbon/react'


export default function Foot() {

    return (
        <>
            <div className="footer-container">
                <Grid>
                    <Column sm={4} md={1} lg={2}>

                        <span class="logo">Punta Carretas</span>

                    </Column>
                    <Column sm={4} md={3} lg={4}>

                        <ul class="content-map">
                            <li>
                                <a href="https://www.puntacarretas.com.uy/">Inicio</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/tiendas/">Tiendas</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/cine/">Cine</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/novedades/">Novedades</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/servicios/">Servicios</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/programas/">Programas</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/nosotros/">Nosotros</a>
                            </li>
                            <li>
                                <a href="https://www.puntacarretas.com.uy/contacto/">Contacto</a>
                            </li>
                        </ul>

                    </Column>

                    <Column sm={4} md={2} lg={4}>

                        <ul>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                            <li>Lorem IPsum</li>
                        </ul>

                    </Column>

                    <Column sm={4} md={2} lg={6}>

                        <h2>News Letter Content</h2>

                    </Column>


                </Grid>

                <Grid>
                <Column sm={{ span: 4, start: 2 }} md={{ span: 8, start: 4 }} lg={{ span: 16, start: 8 }}>
                        <div class="byboron">
                            by <a href="https://boronstudio.com" target="_blank">Boron Studio</a>
                        </div>
                    </Column>
                </Grid>
            </div>
        </>
    );

}