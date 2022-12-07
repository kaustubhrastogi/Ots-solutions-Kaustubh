import React, { useState } from "react";
import { Grid, Icon, Image } from "semantic-ui-react";

export default function Like(props) {
    const [state, setState] = useState(props.state)
    return (
        <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            <Icon name="heart" onClick={() => setState(!state)} color={state && 'red'} />
        </Grid.Column>
    )
}
