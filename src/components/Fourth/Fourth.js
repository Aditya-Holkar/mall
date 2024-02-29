"use client";

import {
    Grid,
    Column

} from '@carbon/react'


export default function Fourth() {

    return (
        <>
            <Grid>
                <Column sm={4} md={8} lg={16}>
                    <div class="fourth-main">

                        <figure class="ima one">
                            <img src="./one.jpg" />
                        </figure>

                        <figure class="ima two">
                            <img src="./two.jpg" />
                        </figure>

                        <figure class="ima three">
                            <img src="./three.jpg" />
                        </figure>

                        <figure class="ima four">
                            <img src="./four.jpg" />
                        </figure>

                        <figure class="ima five">
                            <img src="./five.jpg" />
                        </figure>

                        <figure class="ima six">
                            <img src="./six.jpg" />
                        </figure>
                       


                        <h3 class="fourth-text">
                            Nuevas colecciones
                        </h3>
                    </div>
                </Column>
            </Grid>
        </>
    );

}