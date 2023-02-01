import express from 'express';
import fingerPrint from 'get-browser-fingerprint';
const app = express();


//config using json type
app.use(express.json());

//user router
app.use(express.Router());

app.get('/', (req,res)=>{
    res.send(getBrowserFingerprint());
})

//listen event
app.listen(3001, ()=>{
    console.log('App listening on http://localhost:3001/');
});