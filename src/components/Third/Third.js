"use client";

import {
    Grid,
    Column

} from '@carbon/react'


export default function Third() {

    return (
        <>
            <Grid>
                <Column sm={4} md={8} lg={16}>
                    <div classname="third-main">
                        <div classname="top-line">
                            <span>Gastronomía & Eventos & Cine </span>
                        </div>
                        <div classname="bottom-line">
                            <span>Tiendas & Gastronomía & Eventos</span>
                        </div>
                    </div>                              
                </Column>
            </Grid>
        </>
    );

}