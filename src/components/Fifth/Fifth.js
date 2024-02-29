"use client";

import {
    Grid,
    Column,
    Button

} from '@carbon/react'


export default function Fifth() {

    return (
        <>
            <div>
                <Grid>
                    <Column sm={4} md={4} lg={8}>
                        <div class="fifth-main">
                            <div class="content">

                                <h3 class="">Catálogo Amigos</h3>

                                <p class=""><strong><em>En Punta Carretas pensamos en vos</em></strong></p><p class="row">Te presentamos el programa AMIGOS.</p><p class="row">Conocé el nuevo Catálogo 2023 - 2024, descubrí todos los beneficios y, ¡empezá a disfrutarlos!</p>

                                <div class="">
                                    <a class="">

                                        <Button kind="tertiary">
                                            Más información
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Column>
                    <Column sm={4} md={4} lg={8}>
                        <img src="./fifth-img.png" />
                    </Column>
                </Grid>
            </div>
        </>

    );

}