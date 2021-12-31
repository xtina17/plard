import React from "react";
import CardMedia from '@material-ui/core/CardMedia';

const Block = ({photo, styles}) => {
    return <CardMedia
        image={photo}
        style={styles}
    />
}

export default Block