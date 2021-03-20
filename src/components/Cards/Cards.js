import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import style from './Cards.module.css';
import classes from 'classnames'
import CountUp from 'react-countup';


export default function Cards({ data }) {
    if (!data.confirmed) {
        return "Loading..."
    }

    return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={classes(style.card, style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of CoronaVirus</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes(style.card, style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from CoronaVirus</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes(style.card, style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deathes</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deathes due to CoronaVirus</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}