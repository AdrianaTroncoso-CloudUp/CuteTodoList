import React ,{useState, useEffect, useRef} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Home() {
    const [allPokes, setAllPokes] = useState([])
    const [prevUrl, setPrevUrl] =useState('');
    const [nextUrl, setNextUrl] =useState('');
    const [loading, setLoading] = useState(true)
    const [responsePoke, setResponsePoke] = useState([]);
    const classes = useStyles();
    const clicked = useRef(null);
    const rowPokes = 5;
    const colPokes = 4;
    const limitPokes = rowPokes * colPokes;
    

    // console.log('All Pokes: ',allPokes)
    // console.log('prev url: ', prevUrl);
    // console.log('next url: ', nextUrl);
    // console.log('responsePoke: ',responsePoke);
    
    
    useEffect(() => {
        console.log('Obteniendo Pokes (inside useEffect)')

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limitPokes}&offset=0`)
            .then(function (response) {
                setResponsePoke(response.data);
                setAllPokes(response.data.results);
                setPrevUrl(response.data.previous)
                setNextUrl(response.data.next);
            
                // console.log('response: ', response.data)
                // console.log('Pokes obtenido: ',response.data.results)
                // console.log('Prev:', response.data.previous)
                // console.log('All Pokes: ',allPokes)
                // console.log('prev url: ', prevUrl);
                // console.log('next url: ', nextUrl);
            }).catch(function (error) {
                // handle error
                console.log('Error: ',error);
            })
        ;

            
        setLoading(false)
        console.log('Updating clicked');
        console.log('responsePoke: ',responsePoke);
            
        // clicked.current = getAllPokes;
    }, [])

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
            {
            // loading ? 
            // <button onClick={() => clicked.current()}>Ver Pokes</button>
            // :
            //     <Grid container spacing={4}>
            //         <Grid item xs>
            //             <Paper className={classes.paper}>xs</Paper>
            //         </Grid>
            //         <Grid item xs>
            //             <Paper className={classes.paper}>xs</Paper>
            //         </Grid>
            //         <Grid item xs>
            //             <Paper className={classes.paper}>xs</Paper>
            //         </Grid>
            //     </Grid>
                // <div className="grid-container">
                //     {allPokes.map((pokemon, i) => {
                //         return <Card key={i} pokemon={pokemon} />
                //     })}
                // </div>
            }

        </div>
    )
}

export default Home