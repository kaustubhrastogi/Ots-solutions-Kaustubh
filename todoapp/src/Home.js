import React, { useState } from "react";
import { Grid, Icon, Image, Loader } from "semantic-ui-react";
import Like from "./GridCom";

export default function Home (){
    
    return(
        <>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
       <Like/>
      </Grid.Column>
      <Grid.Column>
       <Like/>
      </Grid.Column>
      <Grid.Column>
       <Like/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
        </>
    )
}