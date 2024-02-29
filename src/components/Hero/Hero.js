"use client"
import Image from "next/image";

import {

  Grid,
  Column

} from "@carbon/react"

export default function Hero() {
  return (

    <Grid condensed fullWidth >
      <Column sm={4} md={8} lg={16}>
        <div className="out">
          <img src="./cat.png" className="image" />
        </div>
      </Column>
    </Grid>

  );
}