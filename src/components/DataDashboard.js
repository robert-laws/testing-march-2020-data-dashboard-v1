import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Container, Paper, Grid, Box, Card, CardContent } from '@material-ui/core';
import { Title } from './ui/Title';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperPadding: {
    padding: theme.spacing(2)
  },
  fixedHeight: {
    height: 240,
  },
  cards: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    textAlign: 'center'
  }
}));

export const DataDashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <section className={classes.root}>
      <CssBaseline />
      <section className={classes.content}>
        <Typography variant='h3' component='h3' color='textSecondary' className={classes.title}>
          Data Dashboard
        </Typography>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper elevation={0} className={classes.paperPadding} >
                <Title>
                  Teaching & Learning
                </Title>
                <div className={classes.cards}>
                  <Card className={`${classes.root} ${classes.card}`}>
                    <CardContent>
                      <Typography component="p" variant="h4">
                        69
                      </Typography>
                      <Typography color="textSecondary">
                        Research Skills Classes
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={`${classes.root} ${classes.card}`}>
                    <CardContent>
                      <Typography component="p" variant="h4">
                        124
                      </Typography>
                      <Typography color="textSecondary">
                        Research Consultations
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={`${classes.root} ${classes.card}`}>
                    <CardContent>
                      <Typography component="p" variant="h4">
                        2602
                      </Typography>
                      <Typography color="textSecondary">
                        Reference Queries
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper elevation={4} className={fixedHeightPaper}>
              <Typography variant='h6' component='h6' color='textPrimary'>
                  Collections
                </Typography>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper elevation={4} className={`${classes.paper} ${fixedHeightPaper}`}>
                <Typography variant='h6' component='h6' color='textPrimary'>
                  Physical Loans
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            Copyright
          </Box>
        </Container>
      </section>
    </section>
  )
}